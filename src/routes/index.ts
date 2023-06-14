import express from "express";
import books from "./books.routes";
import journal from "./journal.routes";

const router = express.Router();

router.use("/books", books);
router.use("/journal", journal);

export default router;
