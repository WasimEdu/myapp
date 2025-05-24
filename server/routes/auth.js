const express = require('express');
const router = express.Router();

// In-memory user store (username => password)
const users = new Map();

// Register user
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  if (users.has(username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  users.set(username, password);
  return res.json({ message: 'User registered successfully' });
});

// Login user
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  if (!users.has(username) || users.get(username) !== password) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  return res.json({ message: 'Login successful', username, mode: 'regular' });
});

// Ghost login (no password)
router.post('/ghost', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username required' });
  }

  return res.json({ message: 'Ghost login successful', username, mode: 'ghost' });
});

module.exports = router;
