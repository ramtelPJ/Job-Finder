import express from 'express';
import cookiesParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routers/user.router.js'; // Import user routes
import companyRoutes from './routers/company.route.js'; // Import company routes
import jobRoutes from './routers/job.route.js';
import applicationRoutes from './routers/application.route.js'; // Import application routes

dotenv.config({}); // Load environment variables from .env file

const app=express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(cookiesParser()); // Middleware to parse cookies
app.use(cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
const port=process.env.PORT || 3000;

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/company',companyRoutes); // Use company routes
app.use('/api/v1/job',jobRoutes);
app.use('/api/v1/application',applicationRoutes)
app.listen(port,()=>{
    connectDB(); // Connect to MongoDB
    console.log(`App is listening to the port ${port}`)
})