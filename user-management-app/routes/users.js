const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.post('/', (req, res) => {
    const { username, password, email } = req.body;
  
    const newUser = new User({ username, password, email });
  
    newUser.save()
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  
  router.get('/', (req, res) => {
    User.find()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    User.findById(id)
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.status(200).json(user);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { username, password, email } = req.body;
  
    User.findByIdAndUpdate(id, { username, password, email }, { new: true })
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.status(200).json(user);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    User.findByIdAndDelete(id)
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.status(200).json({ message: 'User deleted successfully' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  
  module.exports = router;
  