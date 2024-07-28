import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js'; 

dotenv.config();
const server = express();

server.use(express.json());
server.use(cors({
  origin: [process.env.FRONTEND_URI],
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

mongoose.connect(process.env.MONGODB_URI, {
  dbName: "Backend",
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((e) => console.log('MongoDB connection error:', e));

server.use('/api', routes);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
