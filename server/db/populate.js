const Activity = require("../classes/activity.js");

const activity1 = new Activity("Clean up the park", "Volunteer Edinburgh", "three hours", "Holyrood park", 30)

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('helpr');
    db.dropDatabase(); 

    const usersCollection = db.collection('users');
    const activitiesCollection = db.collection('activites');
    activitiesCollection.insertMany([activity1])
    const rewardsCollection = db.collection('rewards');
    
  })
  .catch(console.err);