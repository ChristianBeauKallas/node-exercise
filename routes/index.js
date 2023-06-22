import express from "express";
import userRouter from "./users.route.js";
import employeeRouter from "./employees.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRouter);
router.use("/employees", employeeRouter);

export default router;
