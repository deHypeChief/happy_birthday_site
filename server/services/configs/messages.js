const multer = require('multer');
const Post = require('../models/postSchema')

var mongoose = require('mongoose')
// var fs = require('fs');
// var path = require('path');

// get action: Retriving posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json({ success: true, posts });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const uploadPost = async (req, res) => {
    const { name, message, image } = req.body;
    try {
        console.log(req.body);
        
        const post = new Post({
            name: name,
            message: message,
            img: image
        })

        if (post) {
            await post.save()
            res.status(200).json({
                success: true,
                message: 'Post created',
            })
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error uploading post: ' + err.message,
        });
    }
};

module.exports = { getPosts, uploadPost }
