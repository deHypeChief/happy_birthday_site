const express = require('express');
const { getPosts, uploadPost, upload } = require('./configs/messages');
const router = express.Router();

router.get('/', getPosts)
router.post('/postUpload', uploadPost)

module.exports = router;
