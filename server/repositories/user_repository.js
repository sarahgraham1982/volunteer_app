const repository = require("../repositories/repository.js");
const User = require("../classes/user.js");
const Reward = require("../classes/reward.js");
const ObjectID = require('mongodb').ObjectID;



function getAll(userCollection, rewardCollection) {
  return repository.getAll(userCollection).then((users) => {
    const newUsers = users.map((user) => {
      return fullyGetAUser(user, rewardCollection);
    });
    return Promise.all(newUsers);
  });
}

function getOne(userCollection, rewardCollection, id) {
  return repository.getOne(userCollection, id).then((user) => {
    return fullyGetAUser(user, rewardCollection);
  });
}

function save(userCollection, user){
    newUser = new User(user.fullName, user.dob, user.aboutMe, user.noOfPoints,[], user.email, user.phoneNumber)
    return repository.save(userCollection, newUser)
}

function update(userCollection, rewardCollection, id, updateData){
    return userCollection
    .updateOne(
      { _id: ObjectID(id)},
      { $set: updateData }
    )
    .then(() => {
        return getOne(userCollection, rewardCollection, id)
    })
}

function destroy(userCollection, rewardCollection, id){
    return userCollection.deleteOne({ _id: ObjectID(id) })
    .then(() => {
      return getAll(userCollection, rewardCollection)
    })
}

// Helpers

const fullyGetAUser = (user, rewardCollection) => {
  const promises = getAllRewardsOfAUser(user, rewardCollection);
  return Promise.all(promises).then((rewards) => {
    const newUser = new User(
        user.fullName,
        user.dob,
        user.aboutMe,
        user.noOfPoints,
        rewards,
        user.email,
        user.phoneNumber
    )
    newUser._id = user._id;
    return newUser
  });
};

const getAllRewardsOfAUser = (user, rewardCollection) => {
  return user.redeemedRewards.map((rewardId) => {
    return createNewReward(rewardCollection, rewardId);
  });
};

function createNewReward(rewardCollection, rewardId) {
  return repository.getOne(rewardCollection, rewardId).then((reward) => {
    newReward = new Reward(
      reward.company,
      reward.title,
      reward.description,
      reward.points,
      reward.expiryDate,
      reward.category
    );
    newReward._id = reward._id;
    return newReward;
  });
}

module.exports = { getAll, getOne, save, update, destroy };
