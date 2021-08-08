const ObjectID = require('mongodb').ObjectID;

function getAll(collection) {
  return collection.find().toArray();
}

function getOne(collection, id){
    return collection.findOne({_id: ObjectID(id)})
}

function save(collection, newData){
    return collection.insertOne(newData)
    .then((result) => {
        return result.ops[0]
      })
}

function update(collection, id, updateData){
    return collection
    .updateOne(
      { _id: ObjectID(id)},
      { $set: updateData }
    )
    .then(() => {
        return getOne(collection, id)
    })
}

function destroy(collection, id){
    return collection.deleteOne({ _id: ObjectID(id) })
    .then(() => {
      return getAll(collection)
    })
}

module.exports = { getAll, getOne, save, update, destroy };
