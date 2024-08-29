const express = require('express');
const { check, validationResult } = require('express-validator');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>
{
  res.sendFile(path.join(__dirname,'index.html'));
})
app.post('/submit', [
  // Example validation for email field
  check('email').isEmail().normalizeEmail(),
  // Example validation for password field
  check('password', 'Password must be at least 8 characters').isLength({ min: 8 }),
  // Example validation for name field
  check('name', 'Name is required').notEmpty(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If validation passes, process the form
  //...
  res.send('Form submitted successfully!');
});

// Specify a port number for the server to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
