const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Create user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API endpoints
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  newUser.save()
    .then(() => res.status(200).json({ message: 'User registered successfully' }))
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email, password })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .then((user) => {
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.put('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  User.findByIdAndUpdate(userId, { name, email, password })
    .then(() => res.status(200).json({ message: 'User updated successfully' }))
    .catch((error) => res.status(500).json({ error: error.message }));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
