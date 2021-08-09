const express = require('express');
const db = require('../models');
const router = express.Router();

//get all vessels
router.get('/', async (req,res) => {
    try {
        let products = await db.Vessel.find();
        res.json(products);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//get voyages with vessel_id
router.get('/:id/voyages', async (req,res) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;

    try {
        let results = await db.Voyage.find({vessel_id: req.params.id})
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex);
        res.json(results);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//get vessel and it's comments by id
router.get('/:id/comments', async (req,res) => {
    try {
        await db.Vessel.findOne({ _id: req.params.id})
        .populate("comments")
        .then((populatedVessel) => {
            res.json(populatedVessel);
        })
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//Create a vessel
router.post('/', async (req,res) => {
    try {
        await db.Vessel.create(req.body)
        .then( (newVessel) => {
            res.json(newVessel);
        })
    } catch (error) {
        console.log(e);
        res.sendStatus(500)
    }
});

//Create a voyage
router.post('/:id/voyages', async (req,res) => {
    try {
        var voyage = new db.Voyage({
            name: req.body.name,
            vessel_id: req.params.id,
            description: req.body.description,
            image: req.body.image
            
        })
        await db.Voyage.create(voyage)
        .then( (newVessel) => {
            res.json(newVessel);
        })
    } catch (error) {
        console.log(e);
        res.sendStatus(500)
    }
});

//Create comment to vessel
router.post('/:id/comment', async (req,res) => {
    try {
        // Create a comment
        await db.Comment.create(req.body)
        .then( (newComment) => {

            //If a comment was created, find a product which id is euqal to the parameter id. Then update the product so it has the comment id
            // {new: true } tells the query that we want it to return the updated product
            return db.Vessel.findOneAndUpdate({ _id: req.params.id}, {$push: {comments: newComment._id}}, {new: true});
        })
        .then( (comment) => {
            res.json(comment);
        })
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//delete vessel and everything related to it.
router.delete('/:id', async (req,res) => {
    try {
        let vessel = await db.Vessel.findOne({ _id: req.params.id});
        await db.Comment.deleteMany({ _id: {$in: vessel.comments}});
        await db.Voyage.deleteMany({vessel_id: req.params.id});
        let deleted = await db.Vessel.findOneAndDelete({_id: req.params.id});
        res.json(deleted);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;