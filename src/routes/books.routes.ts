import express, { Request, Response } from "express";
import { getBooksData } from "../controllers/books.controllers";
const router = express.Router();

router.get("/", getBooksData);
export default router;
