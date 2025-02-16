// Crate web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body parser to parse JSON data
app.use(bodyParser.json());

// Crate comments array
const comments = [
  {
    username: 'Alice',
    comment: 'I love it!'
  },
  {
    username: 'Bob',
    comment: 'Good stuff'
  }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const newComment = {
    username: req.body.username,
    comment: req.body.comment
  };
  comments.push(newComment);
  res.json(newComment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run this file with Node.js and test it with Postman
// 1. Start