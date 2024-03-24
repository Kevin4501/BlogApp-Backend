const Comment = require("../Models/commentModel");

const postComments = async (postId, userId, comment) => {
  try {
    const newComment = await Comment.create({
      postId : postId,
      userId : userId,
      comment : comment
    });

    await newComment.save();
   
    return newComment;
  } catch (err) {
    throw err;
  }
};
const updateComment = async (postId, commentId,userId, updateData) => {
  // Find review
  try {
    console.log(updateData);
    const updatedComment = await Comment.findByIdAndUpdate(
      { _id: commentId, userId: userId, postId: postId },
      { $set: updateData },
      { new: true }
    );
    return updatedComment;
  } catch (err) {
    throw err;
  }
};
const deleteComment = async (id, userId) => {
  try {
    const deleteComment = await Comment.findByIdAndDelete({
      _id: id,
      userId: userId,
    });
   
    return deleteComment;
  } catch (err) {
    throw err;
  }
};
const getComments = async (id) => {
  try {
    const comments = await Comment.find({ _id : id });
    console.log(comments);
    return comments;
  } catch (err) {
    throw err;
  }
};


module.exports = {
    postComments,
    updateComment,
    deleteComment,
    getComments,
};