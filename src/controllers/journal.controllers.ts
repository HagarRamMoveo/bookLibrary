import { JournalsService } from "../service/journal.service";
import { AbstractItemControllers } from "./abstract_item_controllers";
import router from "./books.controllers";
import { JournalsModal } from "../model/journal.model";

class JournalControllers extends AbstractItemControllers {
  constructor() {
    super();
  }
  getService() {
    return new JournalsService();
  }
}

const journalController = new JournalControllers();

router.get("/get", async (req, res) => {
  try {
    const Journals = await journalController.getService().getData();
    res.json(Journals);
  } catch (err) {
    res.status(500).json({ error: "err.message" });
  }
});

router.post("/post", async (req, res) => {
  try {
    const {
      name,
      author,
      publisher,
      genre,
      price,
      quantity,
      publication_frequency,
    } = req.body;
    if (
      !name &&
      author &&
      publisher &&
      genre &&
      price &&
      quantity &&
      publication_frequency
    ) {
      return res.status(400).send("All input is required");
    }
    const alreadyHasThisJournal = await JournalsModal.findOne({ name });
    if (alreadyHasThisJournal) {
      return res
        .status(409)
        .send("This Journal Already Exist. Please write again");
    }
    const createNewJournal = await journalController
      .getService()
      .createNewData(req.body);

    res.status(201).json(createNewJournal);
  } catch (err) {
    throw err;
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const deleteJournal = await journalController
      .getService()
      .deleteData(req.body._id);
    return res.status(200).json({
      status: 200,
      data: deleteJournal,
      message: "Successfully removed Journal",
    });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

router.put("/update", async (req, res) => {
  try {
    const updateJournalData = await journalController
      .getService()
      .updateData(req.body._id, req.body);

    return res.status(200).json({
      status: 200,
      data: updateJournalData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

export default router;

// const journalServiceInstance = new JournalsService();

// export const getJournalsData = async (req: Request, res: Response) => {
//   try {
//     const journalsData = await journalServiceInstance.getData();
//     return res.status(200).json(journalsData);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };
