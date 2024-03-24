
const commentService = require("../Services/commentService")
const postComments = async(req,res)=>{

    try {
        const { id } = req.params; // postId
        const { comment} = req.body;
        const userId = req.user.id; // Assuming authentication middleware sets user id

    const comments = await commentService.postComments(id, userId, comment);
        res.status(201).json(comments);
    } catch (error) {
        res.status(500).json({"error":error});
    }
 
}

const updateComment = async(req , res) =>{
    try{

        const {postId , commentId } = req.params;
        console.log(req.params)
        const updateData= req.body;
        const userId = req.user.id
        const review = await commentService.updateComment(postId ,commentId, userId, updateData);
        res.status(201).json(review);
    }
    catch(err){
        res.status(500).json({"err":err})
    }
}
const deleteComment = async(req ,res)=>{
try{

 const id = req.params.id
 const commentId = req.params.commentId
 const userId = req.user.id
 const deleteComment  = await commentService.deleteComment(commentId , userId)
 if(!deleteComment){
    res.status(404).json("Comments not found")
}
res.status(200).send()
}
catch(err){
    res.status(500).json({"err" : err})
}
}
const getComments = async(req , res)=>{
    try{
        const id = req.params.id
        const userId = req.user.id
    const getcomments = await commentService.getComments(id) 
    if(!getcomments){
        res.status(404).json("Reviews not found")
    }
    res.status(200).json(getcomments)
    }

    catch(err){
        res.status(500).json({"err" : err})
    }

}


module.exports = {postComments , updateComment , deleteComment ,getComments}