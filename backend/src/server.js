import express from 'express';
import cookiesParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../utils/db.js';
import routes from './routes/route.js'; // Adjust the path as necessary

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



app.use("/api/gardens",routes)

app.listen(port,()=>{
    connectDB(); // Connect to MongoDB
    console.log(`App is listening to the port ${port}`)
})