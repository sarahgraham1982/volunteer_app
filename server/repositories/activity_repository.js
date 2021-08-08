const repository = require("./repository.js");
const userRepository = require("./user_repository");
const Activity = require("../classes/activity.js");
const ObjectID = require("mongodb").ObjectID;

function getAll(
  activityCollection,
  userCollection,
  charityCollection,
  rewardCollection
) {
  return repository.getAll(activityCollection).then((activities) => {
    const newActivities = activities.map((activity) => {
      return fillInActivity(
        activity,
        userCollection,
        charityCollection,
        rewardCollection
      );
    });
    return Promise.all(newActivities);
  });
}

function getOne(
  activityCollection,
  userCollection,
  charityCollection,
  rewardCollection,
  id
) {
  return repository.getOne(activityCollection, id).then((activity) => {
    return fillInActivity(
      activity,
      userCollection,
      charityCollection,
      rewardCollection
    );
  });
}

function save(activityCollection, activity) {
  newActivity = new Activity(
    activity.title,
    activity.charity,
    activity.description,
    activity.duration,
    activity.location,
    activity.points
  );
  return repository.save(activityCollection, newActivity);
}

function update(
  activityCollection,
  userCollection,
  charityCollection,
  rewardCollection,
  id,
  updateData
) {
  return activityCollection
    .updateOne({ _id: ObjectID(id) }, { $set: updateData })
    .then((data) => {
      console.log(data);
      return getOne(
        activityCollection,
        userCollection,
        charityCollection,
        rewardCollection,
        id
      );
    });
}

function destroy(
  activityCollection,
  userCollection,
  charityCollection,
  rewardCollection,
  id
) {
  return activityCollection.deleteOne({ _id: ObjectID(id) }).then(() => {
    return getAll(
      activityCollection,
      userCollection,
      charityCollection,
      rewardCollection
    );
  });
}

// Helpers

function fillInActivity(
  activity,
  userCollection,
  charityCollection,
  rewardCollection
) {
  const charityPromise = getCharityfromId(activity.charity, charityCollection);
  const usersPromises = getAllUsersApplied(
    activity,
    userCollection,
    rewardCollection
  );

  const promises = [charityPromise, ...usersPromises];

  return Promise.all(promises).then((data) => {
    const charity = data.shift();
    const applicants = data;
    const newActivity = new Activity(
      activity.title,
      charity,
      activity.description,
      activity.duration,
      activity.location,
      activity.points,
      activity.datetime,
      activity.applications
    );
    newActivity._id = activity._id;
    newActivity.applications.forEach((application, index) => {
      application.user = applicants[index];
    });
    return newActivity;
  });
}

function getCharityfromId(id, charityCollection) {
  return repository.getOne(charityCollection, id);
}

const getAllUsersApplied = (activity, userCollection, rewardCollection) => {
  return activity.applications.map((application) => {
    return createNewUser(userCollection, rewardCollection, application.user);
  });
};

function createNewUser(userCollection, rewardCollection, applicationId) {
  return userRepository.getOne(userCollection, rewardCollection, applicationId);
}

module.exports = { getAll, getOne, save, update, destroy };
