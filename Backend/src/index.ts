require('dotenv').config();
import express from 'express';
import cors from 'cors';
import templateRoutes from './routes/template';
import chatRoutes from './routes/chat';
import { config } from './config/environment';

const app = express();

// Configure CORS to allow your frontend
app.use(cors({
    origin: [
        'http://localhost:5173',  // Your Vite dev server
        'http://localhost:3000',  // Common React dev server
        'https://wildermain.vercel.app',  // Add your production frontend URL here
        'https://wilder-5.onrender.com',
        'https://wilder-3.onrender.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

// Setup routes
app.use('/template', templateRoutes);
app.use('/chat', chatRoutes);

app.listen(config.port, () => {
    console.log(`Gemini server running on http://localhost:${config.port}`);
});