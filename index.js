const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Authentication endpoint stub
app.post('/api/auth', (req, res) => {
  const { username, password } = req.body;

  // Basic validation (stub)
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Mock authentication logic
  if (username === 'admin' && password === 'password123') {
    // In a real application, you would generate a JWT or session token here
    const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; 
    return res.status(200).json({ 
      message: 'Authentication successful', 
      token: mockToken,
      user: { id: 1, username }
    });
  }

  // Authentication failed
  res.status(401).json({ error: 'Invalid credentials' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
