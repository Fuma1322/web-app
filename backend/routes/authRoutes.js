import express from "express";
import {
  signup,
  login,
  getAdminCount,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/admin-count", getAdminCount);

export default router;
