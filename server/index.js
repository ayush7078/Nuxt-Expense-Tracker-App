const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const Expense = require('./models/Expense');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes

// Fetch all expenses
app.get('/api/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
});

// Add a new expense
app.post('/api/expenses', async (req, res) => {
  try {
    const { name, amount, date } = req.body;
    const newExpense = new Expense({ name, amount, date });
    await newExpense.save();
    res.json(newExpense);
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
