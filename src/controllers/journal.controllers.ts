import { JournalsService } from "../service/journal.service";
import { Request, Response } from "express";

const journalServiceInstance = new JournalsService();

export const getJournalsData = async (req: Request, res: Response) => {
  try {
    const journalsData = await journalServiceInstance.getData();
    return res.status(200).json(journalsData);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
