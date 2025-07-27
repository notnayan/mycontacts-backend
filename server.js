const express = require("express");
const { errorHandler } = require("./middlewares/errorHandler");
const { connectDB } = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running in PORT ${PORT}`);
});
