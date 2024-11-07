// Create web server
// Create a route for comments
// 1. Create a route for comments
// 2. Add a POST request to the comments route
// 3. Parse the post request body
// 4. Add the comment to the comments array
// 5. Redirect to the home page
// 6. Add a GET request to the comments route
// 7. Send the comments array to the client
// 8. Add a delete request to the comments route
// 9. Parse the delete request body
// 10. Remove the comment from the comments array
// 11. Redirect to the home page
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let comments = [];

app.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  res.redirect('/');
});

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.delete('/comments', (req, res) => {
  comments = comments.filter(comment => comment !== req.body.comment);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});