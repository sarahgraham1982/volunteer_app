const Activity = require("../classes/activity.js");
const Reward = require("../classes/reward.js");
const User = require("../classes/user.js");
const Charity = require("../classes/charity.js");

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("helpr");
    db.dropDatabase();

    const rewardsCollection = db.collection("rewards");
    const charityCollection = db.collection("charities");
    const usersCollection = db.collection("users");
    const activitiesCollection = db.collection("activites");

    const charity1 = new Charity("Rosendael", "Scottish veterans residence");
    const charity2 = new Charity("British Heart Foundation", "Heart Charity");
    const charity3 = new Charity(
      "Scottish Book Trust",
      "Transforming lives through reading"
    );
    const charity4 = new Charity(
      "Volunteer Edinburgh",
      "We have been helping all sorts of people in Edinburgh find volunteering for over 45 years"
    );

    const charityPromise = charityCollection.insertMany([
      charity1,
      charity2,
      charity3,
      charity4,
    ]);

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

    const rewardsUsersPromise = rewardsCollection
      .insertMany([reward1, reward2, reward3])
      .then((data) => {
        const [reward1, reward2, reward3] = data.ops;
      
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
          [reward1._id],
          "email@example.com",
          "07777777777"
        );
        const user3 = new User(
          "Sam Hudson Hill",
          new Date(1999, 10, 11),
          "You know I helped make this app ",
          460,
          [reward2._id],
          "email@example.com",
          "07777777777"
        );
        const user4 = new User(
          "Garry Hall ",
          (1993, 17, 3),
          "You know I also helped make this app ",
          450,
          [reward2._id, reward3._id],
          "email@example.com",
          "07777777777"
        );
        return usersCollection.insertMany([user1, user2, user3, user4]);
      });

    Promise.all([rewardsUsersPromise, charityPromise]).then((data) => {
      const [userData, charityData] = data
      const [user1, user2, user3, user4] = Object.values(userData.ops)
      const [rosendael, bhf, scottishBookTrust, volunteerEdinburgh] = Object.values(charityData.ops)
      
      const activity1 = new Activity(
        "Clean up the park",
        volunteerEdinburgh._id,
        "we need people to clean up the park",
        "three hours",
        "Holyrood park",
        30,
      );
      activity1.receiveApplication(user1._id)
      activity1.receiveApplication(user2._id)

      const activity2 = new Activity(
        "help our boys",
        rosendael._id,
        "meet and talk to some of our boys that need hand make some new friends",
        "an afternoon",
        "central Edinburgh",
        170
      );
      const activity3 = new Activity(
        "clean up the shops",
        bhf._id,
        "clean out our store rooms and maybe have a cup of tea",
        "two and a half hours",
        "136 Lothian Rd Edinburgh",
        20
      );
      activity3.receiveApplication(user4._id)
      const activity4 = new Activity(
        "Book collection",
        scottishBookTrust._id,
        "Need a car to drive around town ",
        "8 hours",
        "Edinburgh",
        230
      );
        return activitiesCollection.insertMany([activity1, activity2, activity3, activity4])
    }).then(() => client.close())
  })
  .catch(console.err);