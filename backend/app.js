const express = require('express')
const app = express()
const port = 3000

require('dotenv').config();
const uri = "mongodb+srv://oompa:8dsHbq21xYsG007k@oompa.bsfwizu.mongodb.net/?retryWrites=true&w=majority&appName=Oompa";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  

const blockChainRoutes = require('./routes/blockChainRoutes');
app.use('/blockChain', blockChainRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);