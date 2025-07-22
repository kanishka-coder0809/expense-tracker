// server/models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    title: String,
    amount: Number,
    type: String, // 'income' or 'expense'
    category: String, // ✅ New field for category
  },
  { timestamps: true } // Needed for date filtering
);

module.exports = mongoose.model('Transaction', transactionSchema);