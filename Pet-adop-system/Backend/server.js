const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const petRoutes = require('./routes/petRoutes');
app.use('/api/pets', petRoutes);

// Connect to DB and Start Server
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB Connected');
  
  
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
  );
}).catch(err => console.error(err));