const express = require("express");
const errorCatchBuild = require("../helpers/error_catch.js");
const userRepository = require("../repositories/user_repository.js");

function createUserRouter(userCollection, rewardCollection) {
  const router = express.Router();

  //INDEX (GET)
  router.get("/", (req, res) => {
    userRepository
      .getAll(userCollection, rewardCollection)
      .then((allItems) => res.json(allItems))
      .catch(errorCatchBuild(res));
  });

  //SHOW (GET)
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    userRepository
      .getOne(userCollection, rewardCollection, id)
      .then((result) => res.json(result))
      .catch(errorCatchBuild(res));
  });

  // CREATE (POST)
  router.post("/", (req, res) => {
    const newData = req.body;
    userRepository
      .save(userCollection, newData)
      .then((newUser) => res.json(newUser))
      .catch(errorCatchBuild(res));
  });

  // UPDATE (PUT)
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    userRepository
      .update(userCollection, rewardCollection, id, updateData)
      .then((updatedItem) => res.json(updatedItem))
      .catch(errorCatchBuild(res));
  });

  // DESTROY (DELETE)
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    userRepository.destroy(userCollection, rewardCollection, id)
    .then(allItems =>  res.json(allItems))
    .catch(errorCatchBuild(res));
  });

  return router;
}

module.exports = createUserRouter;
