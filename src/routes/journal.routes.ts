import express, { Request, Response } from "express";
import { getJournalsData } from "../controllers/journal.controllers";
const router = express.Router();

router.get("/", getJournalsData);
export default router;
