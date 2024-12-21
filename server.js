const express = require("express");
const bodyParser = require("body-parser");
const paypalRoutes = require("./api/paypal");
const payoneerRoutes = require("./api/payoneer");
const skrillRoutes = require("./api/skrill");

const app = express();

app.use(bodyParser.json());

// API Routes
app.use("/api/paypal", paypalRoutes);
app.use("/api/payoneer", payoneerRoutes);
app.use("/api/skrill", skrillRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
