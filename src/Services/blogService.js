const BlogPost = require("../Models/blogModel");

const createBlogPost = async (postData) => {
    try{
        let createdPost = await BlogPost.create(postData);
        return createdPost
    }
    catch(err){
        throw err
    }
 
};

const getAllBlogPosts = async () => {
    try{
        let gotPosts = await BlogPost.find().populate("author").sort({ createdAt: -1 });
        return gotPosts
    }
    catch(err){
        throw err
    }
  
};

const getBlogPostById = async (postId) => {
    try{
        let idPost = await BlogPost.findById(postId).populate("author");
        return idPost
    }
    catch(err){
        throw err
    }

};

const updateBlogPost = async (postId, updatedData) => {
    try{
        let postUpdate = await BlogPost.findByIdAndUpdate({_id : postId}, { $set: updatedData }, { new: true });
        return postUpdate
    }
    catch(err){
        throw err
    }
   
};

const deleteBlogPost = async (postId) => {
    try{
        let deletePost =   await BlogPost.findByIdAndDelete(postId);
        return deletePost
    }

    catch(err){
        throw err
    }
 
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};
