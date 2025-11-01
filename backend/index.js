import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './src/config/database.js';
import config from './src/config/config.js';


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

const startServer = async () => {
    try {
        connectDB();
        app.listen(config.PORT, () => {
            console.log(`🚀 Server running on port ${config.PORT}`);
        });
    } catch (error) {
        console.error(`💥Error Starting From Server:${error}`)
    }
}

startServer();