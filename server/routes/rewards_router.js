const express = require("express");
const router = express.Router();
const errorCatchBuild = require("../helpers/error_catch.js");
const repository = require("../repositories/repository.js");

function createRewardsRouter(collection) {
  //INDEX (GET)
  router.get("/", (req, res) => {
    repository
      .getAll(collection)
      .then((allItems) => res.json(allItems))
      .catch(errorCatchBuild(res));
  });

  //SHOW (GET)
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    repository
      .getOne(collection, id)
      .then((result) => res.json(result))
      .catch(errorCatchBuild(res));
  });

  // CREATE (POST)
  router.post("/", (req, res) => {
    const newData = req.body;
    repository
      .save(collection, newData)
      .then((newReward) => res.json(newReward))
      .catch(errorCatchBuild(res));
  });

  // UPDATE (PUT)
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    repository.update(collection, id, updateData)
    .then((updatedItem) => res.json(updatedItem))
    .catch(errorCatchBuild(res));
  });

  // DESTROY (DELETE)
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    repository.destroy(collection, id)
    .then(allItems =>  res.json(allItems))
    .catch(errorCatchBuild(res));
  });

  return router;
}

module.exports = createRewardsRouter;
