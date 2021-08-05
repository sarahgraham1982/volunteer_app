use activity;
db.dropDatabase();


db.activities.insertMany([
    {
        title: "Clean up the park",
        charity: "Volunteer Edinburgh",
        description: "picking up trash in one of Edinburgh grand parks",
        duration: "three hours",
        location: "Holyrood park",
        nuOPoints: 30,
    },
    {
        title: "help the our boys",
        charity: "Rosendael - Scottish Veterans Residences",
        description: "meat and talk to some of our boys that need hand make some new friends ",
        duration: "an afternoon",
        location: "3 Victoria Rd, Broughty Ferry",
        nuOPoints: 170

    },
    {
        title: "Clean up the shops",
        charity: "British Heart Foundation",
        description: "clean out our store rooms and maybe have a cup of tea",
        duration: "two and a half hours",
        location: " 136 Lothian Rd, Edinburgh",
        nuOPoints: 20
    },
    {
        title: "Book collection",
        charity: "Scottish Book Trust",
        description: " Need a car to drive around town ",
        duration: "8 hours",
        location: "Edinburgh",
        nuOPoints: 300
    },
    {
        title: "Clean up the park",
        charity: "Volunteer Edinburgh",
        description: "picking up trash in one of Edinburgh grand parks",
        duration: "three hours",
        location: "Holyrood park",
        nuOPoints: 30
    }
]);
db.users.insertMany([
    {
        fullName: "Scott Russel George Kivlin ",
        age: "30",
        dob: new Date(1991, 02, 04),
        aboutMe: "I'm trying to help",
        nuOPoints: 230
    },
    {
        fullName: "Sarah Victoria Graham ",
        age: "39",
        aboutMe: "the points are so handy for nights in and out ",
        nuOPoints: 480
    },
    {
        fullName: "Sam Hudson Hill",
        age: "27",
        aboutMe: "You know I helped make this app ",
        nuOPoints: 460
    },
    {
        fullName: "Garry Hall ",
        age: "29",
        aboutMe: "You know I also helped make this app ",
        nuOPoints: 480
    }
]);
db.reward.insertMany([
    {
        company: "steam",
        title: "get 20% off next steam sale",
        description: "terms and conditions",
        pointsRequired: "number of points",
        expiryDate: "date"
    },

});