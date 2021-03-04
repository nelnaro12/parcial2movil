const express = require('express');
const router = express.Router();
const Post = require('../models/PostUser');


//GET ALL USER
router.get('/', async (req, res) => {
    try {
        const posts = await (await Post.find());
        res.json(posts);

    } catch (error) {
        res.json({message : error});
    }
});

//GET SPECIFIC USER
router.get('/:postCI', async (req, res) => {
    try {
        const posts = await Post.findOne({cIUsuario: req.params.postCI});
        res.json(posts);
        
    } catch (error) {
        res.json({message : error});
    }
});


//CREATE A NEW USER
router.post('/', async (req, res) => {

    
    const post = new Post({
        nombresUsuario: req.body.nombresUsuario,
        apellidosUsuario: req.body.apellidosUsuario,
        cIUsuario: req.body.cIUsuario,
        sexoUsuario: req.body.sexoUsuario,
        cargoUsuario: req.body.cargoUsuario
    });
    
    try {
        const savePost = await post.save();
        res.send(savePost);

    } catch (error) {
        res.status(400).send(error);
    }
});

//UPDATE STATUS USER
router.patch('/:postId', async (req, res) => {
    try {
        const patchposts = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {estadoDocumento : req.body.estadoDocumento}}
        );
        res.json(patchposts);
        
    } catch (error) {
        res.json({message : error});
    }
});


//DELETE  USER
router.delete('/:cIUsuario', async (req, res) => {
    try {
        const removeposts = await Post.remove({cIUsuario: req.params.cIUsuario});
        res.json(removeposts);
        
    } catch (error) {
        res.json({message : error});
    }
});


module.exports = router;