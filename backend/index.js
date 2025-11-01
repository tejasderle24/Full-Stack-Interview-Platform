import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv'
import connectDB from './src/config/database.js';
dotenv.config({})

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

// Routes
// app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});