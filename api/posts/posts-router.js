// STEP 9: Requires
const Posts = require('./posts-model') //import posts model
const express = require('express');
const router = express.Router();

// STEP 10: Endpoints

// [GET] - /api/posts - return array of all post objects
router.get('/', (req, res) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            res.status(500).json({message: "The posts information could not be retrieved"})
        })
})

// [GET] - /api/posts/:id - return post object with ID
router.get('/:id', (req, res) => {
    const {id} = req.params;
    Posts.findById(id)
        .then(post => {
            if (post) {
                res.status(200).json(post)
            } else {
                res.status(404).json({message: "The post with the specified ID does not exist"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "The post information could not be retrieved"})
        })
})

// [POST] - /api/posts - Create new post and return the newly craeted post object

// [PUT] - /api/posts/:id - update post with specific id. return modified document

// [DELETE] - /api/posts/:id - remove post with ID and return deleted post object

// [GET] - /api/posts/:id/comments - return array of all comment ojbects with post with given ID

// STEP 9.5 - EXPORT
module.exports = router;