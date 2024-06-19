//create web server
const express = require('express');
const app = express();
const port = 3000;

//create comments array
const comments = [
    { username: 'Tammy', comment: 'lol that is so funny', upvotes: 9 },
    { username: 'FishBoi', comment: 'Pls like my comment', upvotes: 3 },
    { username: 'PuppyLuv', comment: 'plz like my comment', upvotes: 7 }
];

//use express to serve static files
app.use(express.static('public'));

//create a get route to send comments array
app.get('/comments', (req, res) => {
    res.json(comments);
});

//create a post route to add a comment to the comments array
app.post('/comments', (req, res) => {
    //create a new comment object
    const newComment = { username: req.query.username, comment: req.query.comment, upvotes: 0 };
    //add new comment to comments array
    comments.push(newComment);
    //send back the new comment
    res.json(newComment);
});
    
//create a put route to update a comment in the comments array
app.put('/comments/:id', (req, res) => {
    //find the comment by id
    const id = req.params.id;
    const comment = comments[id];
    //update the comment
    comment.username = req.query.username;
    comment.comment = req.query.comment;
    //send back the updated comment
    res.json(comment);
});

//create a delete route to delete a comment from the comments array
app.delete('/comments/:id', (req, res) => {
    //find the comment by id
    const id = req.params.id;
    //delete the comment
    comments.splice(id, 1);
    //send back the comments array
    res.json(comments);
});

//start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});