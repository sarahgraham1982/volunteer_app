const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {

    const db = client.db('helpr'); 

    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/api/users', usersRouter);

    const activitiesCollection = db.collection('activites');
    const activitiesRouter = createRouter(activitiesCollection);
    app.use('/api/activities', activitiesRouter);

    const rewardsCollection = db.collection('rewards');
    const rewardsRouter = createRouter(rewardsCollection);
    app.use('/api/rewards', rewardsRouter);
    
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});