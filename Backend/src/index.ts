require('dotenv').config();
import express from 'express';
import cors from 'cors';
import templateRoutes from './routes/template';
import chatRoutes from './routes/chat';
import { config } from './config/environment';

const app = express();
app.use(cors());
app.use(express.json());

// Setup routes
app.use('/template', templateRoutes);
app.use('/chat', chatRoutes);

app.listen(config.port, () => {
  console.log(`Gemini server running on http://localhost:${config.port}`);
});



// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import cors from 'cors';
// import templateRoutes from './routes/template';
// import chatRoutes from './routes/chat';
// import { config } from './config/environment';

// const app = express();

// // CORS setup based on environment
// const allowedOrigins =
//   config.nodeEnv === 'development'
//     ? ['http://localhost:5173']
//     : ['https://wildermain.vercel.app'];

// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true, // only needed if you use cookies/auth
// }));

// app.use(express.json());

// // Setup routes
// app.use('/template', templateRoutes);
// app.use('/chat', chatRoutes);

// // Optional test route for backend health check
// app.get('/', (_req, res) => {
//   res.send('Wilder backend is live 🚀');
// });

// // Start server
// app.listen(config.port, () => {
//   console.log(`Gemini server running on port ${config.port}`);
// });
