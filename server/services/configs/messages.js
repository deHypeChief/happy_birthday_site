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


// Set up multer
const uploadLocation = path.join(__dirname, '../../', 'uploads/');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadLocation);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

// Handle postConfig
const uploadPost = async (req, res, next) => {
    const { name, message } = req.body;
    const file = req.file;

    // Check if the "uploads" folder exists and create it if necessary
    const uploadsFolderPath = path.join(__dirname, '../../', 'uploads/');
    if (!fs.existsSync(uploadsFolderPath)) {
        fs.mkdirSync(uploadsFolderPath);
    }

    try {
        // Read file asynchronously
        const imgData = fs.promises.readFile(path.join(uploadLocation, file.filename));

        // Create post object
        const obj = {
            name: name,
            message: message,
            img: {
                data: await imgData,
                contentType: 'image/png',
            },
        };

        // Create post in the database
        await postSchema.create(obj);

        // removing image
        fs.unlink(path.join(uploadLocation, file.filename), (err) => {
            if (err) {
              console.error('Error deleting file:', err);
              return res.status(500).send('Error deleting file');
            }
        })

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