const Activity = require("../classes/activity");
const users = require("../classes/user");
const rewards = require("../classes/reward");


use activity;
db.dropDatabase();

const activity1 = new Activity("Clean up the park", "Volunteer Edinburgh", "three hours", "Holyrood park", 30)

const activity2 = new Activity("help our boys", "Rosendael - Scottish Veterans Residences",
    "meet and talk to some of our boys that need hand make some new friends", "an afternoon", "an afternoon", 170)

const activity3 = new Activity("clean up the shops", "British Heart Foundation",
    "clean out our store rooms and maybe have a cup of tea", "two and a half hours", "136 Lothian Rd Edinburgh", 20)

const activity4 = new Activity("Book collection", "Scottish Book Trust", " Need a car to drive around town ",
    "8 hours", "Edinburgh")

const user1 = new user("Scott Russel George Kivlin ", new Date(1991, 1, 4), "I'm trying to help", 230)

const user2 = new user("Sarah Victoria Graham ", new Date(1988, 3, 7), "the points are so handy for nights in and out ", 480)

const user3 = new user("Sam Hudson Hill", new Date(1999, 10, 11), "You know I helped make this app ", 460)

const user4 = new user("Garry Hall ", (1993, 17, 3), "You know I also helped make this app ", 450)

const reward1 = new reward("steam", "get 20% off next steam sale", "terms and conditions", new Date(2022, 3, 14))

const reward2 = new reward("pizza hut", "£10 off your next order", "terms and conditions", new Date(2251, 0, 5))

const reward3 = new reward("costa", "BOGF", "terms and conditions", new Date(2023, 0, 13))

const reward4 = new reward("Lemon Squeezy Driving School", "free lesson when you book 10", "terms and conditions", new Date(2023, 10, 10))

const charity1 = new charity("Rosendael", "help our boys")

const charity2 = new charity("British Heart Foundation", "clean up the shops")

const charity3 = new charity("Scottish Book Trust", "Book collection")

const charity4 = new charity("Volunteer Edinburgh", "Clean up the park")

// db.activities.insertMany([
//     activity1,
//     {
//         title: "help the our boys",
//         charity: "Rosendael - Scottish Veterans Residences",
//         description: "meat and talk to some of our boys that need hand make some new friends ",
//         duration: "an afternoon",
//         location:"an afternoon",
//         points: 170

//     },
//     {
//         title: "Clean up the shops",
//         charity: "British Heart Foundation",
//         description: "clean out our store rooms and maybe have a cup of tea",
//         duration: "two and a half hours",
//         location: " 136 Lothian Rd, Edinburgh",
//         points: 20
//     },
//     {
//         title: "Book collection",
//         charity: "Scottish Book Trust",
//         description: " Need a car to drive around town ",
//         duration: "8 hours",
//         location: "Edinburgh",
//         points: 300
//     },
//     {
//         title: "Clean up the park",
//         charity: "Volunteer Edinburgh",
//         description: "picking up trash in one of Edinburgh grand parks",
//         duration: "three hours",
//         location: "Holyrood park",
//         points: 30
//     }
// ]);
// db.users.insertMany([
//     {
//         fullName: "Scott Russel George Kivlin ",
//         age: "30",
//         dob: new Date(1991, 02, 04),
//         aboutMe: "I'm trying to help",
//         points: 230
//     },
//     {
//         fullName: "Sarah Victoria Graham ",
//         age: "39",
//         aboutMe: "the points are so handy for nights in and out ",
//         points: 480
//     },
//     {
//         fullName: "Sam Hudson Hill",
//         age: "27",
//         aboutMe: "You know I helped make this app ",
//         points: 460
//     },
//     {
//         fullName: "Garry Hall ",
//         age: "29",
//         aboutMe: "You know I also helped make this app ",
//         points: 480
//     }
// ]);
// db.reward.insertMany([
//     {
//         company: "steam",
//         title: "get 20% off next steam sale",
//         description: "terms and conditions",
//         pointsRequired: "number of points",
//         expiryDate: "date"
//     },

// });
