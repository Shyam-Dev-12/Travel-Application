import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from "cors";
import errorHandler from './middlewares/errorHandler.js';
import userRoutes from './routes/userRoutes.js';
import countryRoutes from './routes/countryRoutes.js'; 
import paymentRoutes from './routes/paymentRoutes.js';
// import airportRoutes from "./routes/airportRoutes.js";
// import flightRoutes from "./routes/flightRoutes.js";
// import hotelRoutes from "./routes/hotelRoutes.js"; 
import cookieParser from 'cookie-parser';

dotenv.config();

const port = process.env.PORT || 5000;

// Connect to DB
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: "*", // allow your frontend
    credentials: true,               // allow cookies if needed
}));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/countries", countryRoutes);   
app.use("/api/payments", paymentRoutes);

// Error handling
app.use(errorHandler);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});