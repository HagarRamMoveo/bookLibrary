import express from "express";
import books from "../controllers/books.controllers";
import journal from "../controllers/journal.controllers";


const router = express.Router();

router.use("/books", books);
router.use("/journal", journal);

export default router;
