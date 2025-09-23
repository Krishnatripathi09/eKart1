import dotenv from 'dotenv';
import app from './app.js';
dotenv.config();

const PORT = Number(process.env?.['USER_SERVICE_PORT']) || 3001;
const HOST = process.env?.['USER_SERVICE_HOST'] || 'localhost';

// Start the User Service
app.listen(PORT, HOST, async () => {
  console.log(`🚀🚀 Users service running on http://${HOST}:${PORT}`);
});
