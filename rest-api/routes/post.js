const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//GET ALL POST
router.get('/', async (req, res) => {
    try{
        const allPosts = await Post.find();
        res.json(allPosts);
    }catch(err){
        res.json(err);
    }
});

//GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
    const post = await Post.findById(req.params.postId);
    try{
        res.json(post);
    }catch(err){
        res.json({msg: err});
    }
});

//ADD POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err){
        res.json({msg: err});
    }

});

//DELETE POST
router.delete('/:postId', async (req, res) => {
    try{
        const deletePost = await Post.remove({ _id: req.params.postId });
        res.json(deletePost);
    }catch(err){
        res.json({msg: err});
    }
});

//UPDATE POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: {title: req.body.title }
        });
        res.json(updatePost); 
    }catch(err) {
        res.json({msg: err});
    }
})

module.exports = router;