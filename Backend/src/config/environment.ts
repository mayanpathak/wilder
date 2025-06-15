// export const config = {
//   port: process.env.PORT || 3000,
//   geminiApiKey: process.env.GEMINI_API_KEY,
//   geminiModel: process.env.GEMINI_MODEL || 'gemini-2.0-flash-lite',
//   nodeEnv: process.env.NODE_ENV || 'Production',
// };
// src/config/environment.ts

import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  geminiModel: process.env.GEMINI_MODEL || 'gemini-2.0-flash-lite',
  nodeEnv: process.env.NODE_ENV || 'production',

  // ✅ Allowed frontend origins for CORS
  allowedOrigins:
    process.env.NODE_ENV === 'development'
      ? ['http://localhost:5173']
      : ['https://wildermain.vercel.app'],
};
