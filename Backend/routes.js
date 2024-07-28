import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Import jwt
import User from './User.js';
import authenticateToken from './authenticateToken.js'; // Import the authenticateToken middleware

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      passwordHash,
      role
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error); // Log error
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password, role, secretKey } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    console.log('Password Match:', isMatch); // Debug statement

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (role === 'admin' && secretKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(401).json({ message: 'Invalid admin secret key' });
    }

    // Ensure JWT_SECRET is correctly defined
    console.log('JWT Secret:', process.env.JWT_SECRET);

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error); // Log error
    res.status(500).json({ message: 'Error during login', error: error.message });
  }
});

// Protected Route Example
router.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Protected content' });
});

export default router;
