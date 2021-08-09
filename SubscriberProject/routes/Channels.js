const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')
const Channel = require('../models/Channel')


//Get all
router.get('/', async (req,res) => {
    try {
        const channels = await Channel.find()
        res.json(channels)
    } catch (err) {

        res.status(500).json({message: err.message})

    }
})
//get one
router.get('/:id', getChannel, (req,res) => {
    res.json(res.subscriber)
})
//Create one
router.post('/', async (req,res) => {

    let newChannel = new Channel(req.body);

    /*
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    */

    try {
        let savedChannel = await newChannel.save();
        res.status(201).json(savedChannel)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})


//Update one
/*
router.patch('/:id', getChannel, async (req,res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
*/

//Delete one
/*
router.delete('/:id', getChannel, async (req,res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted subscriber'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
*/

async function getChannel(req, res, next) {
    let channel
    try {
        //subscriber = await Subscriber.findById(req.params.id)
        channel = await Channel.find({name: req.params.username})
        if (channel == null) {
            return res.status(404).json({message: "Cannot find channel"})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.channel = channel
    next()
}
module.exports = router