// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Create a User model
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
}));

app.use(bodyParser.json());

// Signup route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password before saving it to the database
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database
  const newUser = new User({ username, password: hashedPassword });
  newUser.save();

  res.json({ message: 'User signed up successfully' });
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = await User.findOne({ username });

  // Check if the user exists and if the password is correct
  if (user && await bcrypt.compare(password, user.password)) {
    // Create a JWT token for authentication
    const token = jwt.sign({ username }, 'secret_key');

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
