import express from "express";
import authRoute from "./routes/user.routes.js";
import dotenv from "dotenv";

const app = express();

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

// Middleware to parse JSON body data
app.use(express.json());

// Mount the auth route at /api/auth
app.use("/api/auth", authRoute);

export default app;
