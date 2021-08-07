const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

// Routes
const createRouter = require('./helpers/create_router.js');
const createUserRouter = require('./routes/create_user_router.js')

app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
  .then((client) => {

    const db = client.db('helpr'); 

    const rewardsCollection = db.collection('rewards');
    const rewardsRouter = createRouter(rewardsCollection);
    app.use('/api/rewards', rewardsRouter);

    const charitiesCollection = db.collection('charities');
    const charitiesRouter = createRouter(charitiesCollection);
    app.use('/api/charities', charitiesRouter)

     const usersCollection = db.collection('users');
     const usersRouter = createUserRouter(usersCollection, rewardsCollection);
     app.use('/api/users', usersRouter);

    // const activitiesCollection = db.collection('activites');
    // const activitiesRouter = createRouter(activitiesCollection);
    // app.use('/api/activities', activitiesRouter);
    
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});