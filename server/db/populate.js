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
    const activitiesCollection = db.collection("activities");

    const charity1 = new Charity("Rosendael", "Scottish veterans residence");
    const charity2 = new Charity("British Heart Foundation", "Heart Charity");
    const charity3 = new Charity("Scottish Book Trust", "Transforming lives through reading");
    const charity4 = new Charity("Volunteer Edinburgh",
      "We have been helping all sorts of people in Edinburgh find volunteering opportunities for over 45 years");

    const charityPromise = charityCollection.insertMany([
      charity1,
      charity2,
      charity3,
      charity4,
    ]);

    const reward1 = new Reward(
      "Steam",
      "Get 20% off next steam sale",
      "20 % Off next steam sale this voucher to get 20 % off your next game on Steam, the game must be under £30, must be over 18 years of age to redeem, terms and conditions apply",
      500,
      new Date(2022, 3, 14, 17, 30),
      "Digital"
    );
    const reward2 = new Reward(
      "codeclan",
      "Get 100% off ",
      "100% Off next course codeclan sale", "use this voucher to get 100% off your next course at codeclan you must 18 years of age to redeem terms and conditions apply",
      5000,
      new Date(2022, 3, 14, 17, 30),
      "Digital"
    );
    const reward3 = new Reward(
      "Steam",
      "buy one get one free next steam sale",
      "buy one get one free next steam sale use this voucher to get you a game for free within an list of picked games on Steam,the game must be under £30 must be over 18 years of age to redeem",
      580,
      new Date(2022, 4, 1, 17, 30),
      "Digital"
    );
    const reward4 = new Reward(
      "codecademy",
      "Get 20% off next course",
      "Get 20% off , this voucher gets you 20% off your next course at codecademy you must be 18 years of age to redeem this. Terms and conditions apply",
    500,
      new Date(2022, 6, 10, 17, 30),
      "Digital"
    );
const reward5 = new Reward(
  "game",
  "Get 20% off next sale",
  "20 % Off next steam sale this voucher to get 20 % off your next game in game, the game must be under £30, must be over 18 years of age to redeem, ,Terms and conditions apply",
  430,
  new Date(2022, 1, 14, 14, 30),
  "Digital"
);
const reward6 = new Reward(
  "Pizza hut",
  "£10 off your next order",
  "this voucher gets you £10 off your next order as long as the order is over £30, must be over 16 of age to redeem,Terms and conditions",
  500,
  new Date(2251, 0, 5, 10, 15),
  "Food"
);
const reward7 = new Reward(
  "China Munchy Box",
  "£10 off your next order over £30",
  "this voucher get you £10 off your next order,must be over 16 years of age to redeem ,Terms and conditions apply",
  580,
  new Date(2251, 0, 5, 10, 15),
  "Food"
);
const reward8 = new Reward(
  "Pure Pizza",
  "buy one get one free next order",
  "this voucher gets you a free pizza, you must be over 16 years of age to redeem  ,Terms and conditions apply",
  500,
  new Date(2251, 0, 5, 10, 15),
  "Food"
);
const reward9 = new Reward(
  " Empire Brunch & Lunch",
  "Free French Toast",
  "this voucher gets you a free French Toast, you must be over 16 years of age to redeem  ,Terms and conditions apply",
  730,
  new Date(2251, 0, 5, 10, 15),
  "Food"
);
const reward10 = new Reward(
  "Costa",
  "Free latte",
  "this voucher gets you a free latte, you must be over 16 years of age to redeem ,Terms and conditions",
  200,
  new Date(2251, 0, 5, 10, 15),
  "Food"
);
const reward11 = new Reward(
  "Bonnie Burrito",
  "Free side Nachos",
  "this voucher gets you a free small Nachos, you must be over 16 years of age to redeem ,Terms and conditions",
  700,
  new Date(2023, 0, 13, 14, 40),
  "food"
);
const reward12 = new Reward(
  "ADIDAS",
  "50% off shoes",
  "this voucher gets you 50% off shoes when you order them with ADIDAS, you must be over 18 years of age to redeem ,Terms and conditions apply",
  680,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward13 = new Reward(
  "LEVI'S",
  "30% off next order",
  "this voucher gets you 30% off your next order with LEVI'S, you must be over 18 years of age to redeem ,Terms and conditions apply",
  720,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward14 = new Reward(
  "NORTH FACE",
  "20% all outerwear",
  "this deal gets you 20% off all outerwear with NORTH FACE, you must be 16 years of age to redeem,Terms and conditions apply",
  800,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward15 = new Reward(
  "CLARKS",
  "50% off summer selection",
  "this deal gets you 50% off everything in the summer selection, you must be 16 years of age to redeem,Terms and conditions apply",
  830,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward16 = new Reward(
  "NEXT",
  "20% off next order over £50",
  "this deal gets you 20% off your next order is over £50 ,you must be 18 years of age to redeem ,Terms and conditions apply",
  680,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward17 = new Reward(
  "DR. MARTENS",
  "10% off next order",
  "the voucher gets you the ,you must be 18 years of age to redeem ,Terms and conditions apply",
  800,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward18 = new Reward(
  "RIVER ISLAND",
  "25% off next order",
  "this deal get you a grand 25% off your next order,you must be 16 years of age to redeem,Terms and conditions apply",
  670,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward19 = new Reward(
  "New Look",
  "10% off next order",
  "this voucher gives you 10% off your next order over £30,you must be 16 years of age to redeem,Terms and conditions apply",
  570,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward20 = new Reward(
  "Urban Outfitters",
  "25% off next order ",
  " this deal gives you a whopping 25% of your next order,you must be 18 years of age to redeem,Terms and conditions apply",
  780,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);
const reward21 = new Reward(
  "Rokit",
  "10% off next order",
  "this voucher gives you 10% off your next order,you must be 18 years of age,Terms and conditions apply",
  800,
  new Date(2023, 0, 13, 12, 32),
  "clothes"
);

const rewardsUsersPromise = rewardsCollection
  .insertMany([reward1, reward2, reward3])
  .then((data) => {
    const [reward1, reward2, reward3] = data.ops;

    const user1 = new User(
      "Scott Kivlin ",
      new Date(1991, 1, 4),
      "I'm trying to help. ",
      230,
      [],
      "email@example.com",
      "07777777777"
    );
    const user2 = new User(
      "Sarah Graham ",
      new Date(1988, 3, 7),
      "The points are so handy for nights in and out! ",
      480,
      [reward1._id],
      "email@example.com",
      "07777777777"
    );
    const user3 = new User(
      "Sam  Hill",
      new Date(1999, 10, 11),
      "You know, I helped make this app. ",
      460,
      [reward2._id],
      "email@example.com",
      "07777777777"
    );
    const user4 = new User(
      "Garry Hall ",
      new Date(1993, 17, 3),
      "You know, I also helped make this app. ",
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
    "Hill walking and helping the community come together in this action-packed Saturday morning sesh. You'll get your very own light weight grab and grip litter picker upper, a garbage bag, and a high vis vest. We'll let you loose in the craggy environs of Holyrood Park to spend the morning as you please. Wander through the dramatic landscape of this ancient volcanic wonderland of lochs and cliffs, peaks and valleys. A Little slice of the highlands right here in Edinburgh. Scour the earth for cigarette butts and broken bottles, used tissue and doggy poo bags. Think of yourself as something of an archaeologist that deals with the modern world, if that helps. We'll have a weigh off at 15:00 to win prizes for the top three pickers who collected the most litter.",
    "3 hours",
    {
      description: "Holyrood Park",
      coordinates: [55.946538, -3.159791],
      postcode: "EH88HG"
    },
    30,
    new Date(2021, 10, 13, 14),
  );
  activity1.receiveApplication(user1._id)
  activity1.receiveApplication(user2._id)

  const activity2 = new Activity(
    "Help our boys",
    rosendael._id,
    "We support youths in the community through mentorship and tutoring. We are looking for volunteer peers to spend time with our boys to help them develop constructive habits and healthy hobbies. Shoot some hoops, play guitar, or go for a hillwalk; the possibilities are open and we can offer a daily budget for any activities that are approved. Just no going to the pub, obviously. We could all use a strong role model in our lives. Take the time today to make a significant impact on a young man's life. Come down to the VA this Sunday at noon for a meet and greet where you will be paried with your mentee. We'll have tea and biscuits in the courtyard.",
    "an afternoon",
    {
      description: "53 Canongate, Edinburgh",
      coordinates: [55.952499, -3.175948],
      postcode: "EH88BS"
    },
    170,
    new Date(2021, 9, 3, 14),
  );
  const activity3 = new Activity(
    "Help clean out our store rooms and have a cup of tea",
    bhf._id,
    "Our storage rooms are a dismal sight. With the pandemic we have been inundated with donations, but we have not been able to open the shop to sell anything. We're up to our necks in piles of clothing. A mound of unmarked bags are blocking the entrance to the garage. One of our employees may be trapped in there. Kitchenware is perched about the place in precarious cairns that reach to the ceiling. Now that we can finally open back up we need to sort things out fast. Come on down this Thursday to take a crack at it. We'll be sifting and sorting and shipping things off to our shops around the city. You might even get some good finds out of it. See a cool vintage jumper? Take it, it's yours.",
    "2.5 hours",
    {
      description: "136 Lothian Rd, Edinburgh",
      coordinates: [55.945229, -3.205543],
      postcode: "EH39BG"
    },
    20,
    new Date(2021, 9, 7, 14),
  );
  activity3.receiveApplication(user4._id)
  const activity4 = new Activity(
    "Book collection",
    scottishBookTrust._id,
    "Books. Who doesn't love books? As restrictions lift, we are ready to get back out there and collect all the book donations that have been offered in the past few months, but we can't do it alone. Mostly because we don't have a car. So if you have one, that would be great. You can be our chauffeur for the day, cruising around town, driving the speed limit, etc. We'll do the navigating. We'll also provide the tunes. So if you have an aux cord or bluetooth that would be great, actually only apply if you have a decent enough stereo because it's going to be alot of driving, and I get carsick when I don't have anything to listen to and Sheila will start whistling if it's quiet and I can't stand her whistling.",
    "8 hours",
    {
      description: "55 High St, Edinburgh",
      coordinates: [55.950903, -3.185356],
      postcode: "EH11SR"
    },
    230,
    new Date(2021, 10, 3, 16),
  );
  return activitiesCollection.insertMany([activity1, activity2, activity3, activity4])
}).then(() => client.close())
  })
  .catch (console.err);