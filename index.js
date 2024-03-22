const express = require('express');
const app = express();
const helper = require('./util');

const port = 8000;

// Middleware to log
app.use((req, res, next) => {
  const oldSend = res.send;

  res.send = function (body) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - ${body}`);
    oldSend.apply(res, arguments);
  };

  next();
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
      name: "awesome backend service"
    });
  });
// Route to get all users
app.get('/users', async (req, res) => {
    response = await helper()
    res.json(response);
    console.log(response);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
