const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}


async function query(filterBy) {
    console.log('filetr', filterBy);
    try {
        const collection = await dbService.getCollection('item')
        var items
        if (filterBy && filterBy.length) {
            items = await collection.find({
                $or: [
                    { title: { $regex: filterBy, $options: 'i' } },
                    { artist: { $regex: filterBy, $options: 'i' } }
                ]
            }).toArray()
        } else {
            items = await collection.find().toArray()
        }
        return items
    } catch (err) {
        logger.error('cannot find items', err)
        throw err
    }
}

async function getById(itemId) {
    try {
        const collection = await dbService.getCollection('item')
        const item = await collection.findOne({ '_id': ObjectId(itemId) })
        return item
    } catch (err) {
        logger.error(`while finding item ${itemId}`, err)
        throw err
    }
}

async function remove(itemId) {
    try {
        const collection = await dbService.getCollection('item')
        await collection.deleteOne({ '_id': ObjectId(itemId) })
    } catch (err) {
        logger.error(`cannot remove item ${itemId}`, err)
        throw err
    }
}

async function update(item) {
    try {
        const itemToSave = { ...item }
        delete itemToSave._id
        const collection = await dbService.getCollection('item')
        await collection.updateOne({ _id: ObjectId(item._id) }, { $set: itemToSave })
        // console.log('updated item', res);
        return { _id: item._id, ...itemToSave };
    } catch (err) {
        logger.error(`cannot update item ${item._id}`, err)
        throw err
    }
}

async function add(item) {
    try {
        const collection = await dbService.getCollection('item')
        const savedItem = await collection.insertOne(item)
        console.log('savedItem', savedItem.ops[0]);
        return savedItem.ops[0];
        // return newItem
    } catch (err) {
        logger.error('cannot insert item', err)
        throw err
    }
}






