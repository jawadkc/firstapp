const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

try {
  mongoose.connect("mongodb://db:27017/myapp")
  console.log("DB connected")
} catch (error) {
  console.log("DB connection failed")
}

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/newtwo', (req, res) => {
  res.json({ message: 'New Two' });
});

app.get('/api/newapi', (req, res) => {
  res.json({ message: 'New Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

