const express = require('express');
const app = express();
const port = 8000;

// Mock data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

// Route to get all users
app.get('/users', (req, res) => {
    res.json(users);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});