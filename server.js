const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
const connectDB = require("./config/dbConfig");
app.use(
  cors({
    origin: [
      'https://quiz-frontend-snowy.vercel.app',
    ],
  })
);
connectDB();
const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");

app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);
const port = process.env.PORT || 5000;


// const path = require("path");
// __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client", "build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
