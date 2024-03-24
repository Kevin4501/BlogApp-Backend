const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const commentController  = require('../Controllers/commentsControllers')
const authenticateToken = require('../Middlewares/authenticateToken')
router.post('/', authenticateToken , blogController.createBlogPost);
router.get('/', authenticateToken , blogController.getAllBlogPosts);
router.get('/:id', authenticateToken , blogController.getBlogPostById);
router.put('/:id', authenticateToken ,blogController.updateBlogPost);
router.delete('/:id', authenticateToken ,blogController.deleteBlogPost);
//comments controller
router.post("/:id/comments", authenticateToken , commentController.postComments  )
router.put("/:id/comments/:commentId", authenticateToken ,commentController.updateComment  )
router.delete("/:id/comments/:commentId", authenticateToken , commentController.deleteComment )
router.get("/:id/comments", authenticateToken , commentController.getComments )

module.exports = router;