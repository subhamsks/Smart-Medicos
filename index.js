

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection


// middlewares
app.use(express.json());
app.use(cors());
const connection = require("./db");

// routes
app.get("/",(req,res)=>{
    return res.json({message:"Server Started"});
})

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));