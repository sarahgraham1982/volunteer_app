const Activity = require("../classes/activity.js");
const Reward = require("../classes/reward.js");
const User = require("../classes/user.js");
const Charity = require("../classes/charity.js");

const reward1 = new Reward(
  "steam",
  "get 20% off next steam sale",
  "terms and conditions",
  500,
  new Date(2022, 3, 14),
  "digital"
);
const reward2 = new Reward(
  "pizza hut",
  "£10 off your next order",
  "terms and conditions",
  500,
  new Date(2251, 0, 5),
  "food"
);
const reward3 = new Reward(
  "costa",
  "BOGOF",
  "terms and conditions",
  700,
  new Date(2023, 0, 13),
  "coffee"
);

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("helpr");
    db.dropDatabase();

    const rewardsCollection = db.collection("rewards");
    const charityCollection = db.collection("charity");
    const usersCollection = db.collection("users");
    const activitiesCollection = db.collection("activites");

    const rewardsUsersPromise = rewardsCollection
      .insertMany([reward1, reward2, reward3])
      .then((data) => {
        const rewardIds = Object.values(data.insertedIds);

        const user1 = new User(
          "Scott Russel George Kivlin ",
          new Date(1991, 1, 4),
          "I'm trying to help",
          230,
          [],
          "email@example.com",
          "07777777777"
        );
        const user2 = new User(
          "Sarah Victoria Graham ",
          new Date(1988, 3, 7),
          "the points are so handy for nights in and out ",
          480,
          [rewardIds[0]],
          "email@example.com",
          "07777777777"
        );
        const user3 = new User(
          "Sam Hudson Hill",
          new Date(1999, 10, 11),
          "You know I helped make this app ",
          460,
          [rewardIds[1]],
          "email@example.com",
          "07777777777"
        );
        const user4 = new User(
          "Garry Hall ",
          (1993, 17, 3),
          "You know I also helped make this app ",
          450,
          [rewardIds[1], rewardIds[2]],
          "email@example.com",
          "07777777777"
        );

        return usersCollection.insertMany([user1, user2, user3, user4]);
      });
    const activity1 = new Activity(
      "Clean up the park",
      "Volunteer Edinburgh",
      "we need people to clean up the park",
      "three hours",
      "Holyrood park",
      30
    );
    const activity2 = new Activity(
      "help our boys",
      "Rosendael - Scottish Veterans Residences",
      "meet and talk to some of our boys that need hand make some new friends",
      "an afternoon",
      "central Edinburgh",
      170
    );
    const activity3 = new Activity(
      "clean up the shops",
      "British Heart Foundation",
      "clean out our store rooms and maybe have a cup of tea",
      "two and a half hours",
      "136 Lothian Rd Edinburgh",
      20
    );
    const activity4 = new Activity(
      "Book collection",
      "Scottish Book Trust",
      "Need a car to drive around town ",
      "8 hours",
      "Edinburgh",
      230
    );
    const activityPromise = activitiesCollection.insertMany([
      activity1,
      activity2,
      activity3,
      activity4,
    ]);

    Promise.all([rewardsUsersPromise, activityPromise]).then((data) => {
      userIds = Object.values(data[0].insertedIds);
      activityIds = Object.values(data[1].insertedIds);

      const application1 = {
        user_id: userIds[0],
        activity_id: activityIds[1],
        status: "pending",
      };
      const application2 = {
        user_id: userIds[1],
        activity_id: activityIds[1],
        status: "approved",
      };
      const application3 = {
        user_id: userIds[3],
        activity_id: activityIds[0],
        status: "completed",
      };

      const charity1 = new Charity(
        "Rosendael",
        [activityIds[1]],
        [application1, application2]
      );
      const charity2 = new Charity(
        "British Heart Foundation",
        [activityIds[2]],
        []
      );
      const charity3 = new Charity("Scottish Book Trust", [activityIds[3]], []);
      const charity4 = new Charity(
        "Volunteer Edinburgh",
        [activityIds[0]],
        [application3]
      );
      charityCollection
        .insertMany([charity1, charity2, charity3, charity4])
        .then(() => client.close());
    });
  })
  .catch(console.err);
