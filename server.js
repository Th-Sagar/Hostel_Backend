import express from "express";
import connectDb from "./utils/db.js";
import cors from "cors";
import authRouter from "./router/auth-router.js";
import updateRouter from "./router/update-router.js";
import hostelDetailsRouter from "./router/hostelDetails-router.js";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/user", updateRouter);
app.use("/api/hostel", hostelDetailsRouter);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

