import express from "express";
import { getAdmin, getAdminbyId, createAdmin, deleteAdmin } from "../Controller/Admin.js";
const router = express.Router();
router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminbyId);
router.post("/admin", createAdmin);
router.delete("/admin/:id", deleteAdmin);

export default router;
