const multer = require('multer');
const postSchema = require('../models/postSchema')

var mongoose = require('mongoose')
var fs = require('fs');
var path = require('path');

// get action: Retriving posts
const getPosts = async (req, res) => {
    try {
        const posts = await postSchema.find();
        res.json({ success: true, posts });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const uploadPost = async (req, res, next) => {
    const { name, message, image } = req.body;
    try {
        // Create post object
        const obj = {
            name: name,
            message: message,
            img: image
        };

        // Create post in the database
        await postSchema.create(obj) ;


        // Send success response
        res.status(200).json({
            success: true,
            message: 'Post created',
        });
    } catch (error) {
        // Handle errors and send an appropriate response
        res.status(500).json({
            success: false,
            message: 'Error uploading post: ' + error.message,
        });
    }
};

module.exports = { getPosts, uploadPost, upload }