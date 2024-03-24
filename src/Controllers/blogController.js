const blogService = require('../Services/blogService');

const createBlogPost = async (req, res) => {
  try {
    const postData = { ...req.body, author: req.user._id }; 
    const newPost = await blogService.createBlogPost(postData);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
    const posts = await blogService.getAllBlogPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogPostById = async (req, res) => {
  try {
    const post = await blogService.getBlogPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const updatedPost = await blogService.updateBlogPost(req.params.id, req.body);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    await blogService.deleteBlogPost(req.params.id);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};
