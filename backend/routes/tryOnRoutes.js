import express from "express";
import { tryOnProduct } from "../controllers/tryOnController.js";

const router = express.Router();

router.post("/", tryOnProduct);

export default router;