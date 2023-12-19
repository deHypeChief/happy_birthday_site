const express = require('express');
const { getPosts, uploadPost, upload } = require('./configs/messages');
const router = express.Router();

router.get('/', getPosts)
router.post('/postUpload', upload.single('image') ,uploadPost)

module.exports = router;
