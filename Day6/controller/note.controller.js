const { noteService } = require("../services");
const { userService } = require("../services");

// Get Notes Controller
const getNotes = async (req, res) => {
  try {
    const { notes, total_notes } = await noteService.getNotes();
    res.status(200).json({
      data: { notes, total_notes },
      message: "notes successfully fetched",
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch notes. Please try again later." });
  }
};

// Get Note By Id Controller
const getNoteById = async (req, res) => {
  try {
    const noteID = req.params.id;
    const note = await noteService.getNoteById(noteID);
    res
      .status(200)
      .json({ data: note, message: `noteID: ${noteID} successfully fetched` });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch note. Please try again later." });
  }
};

// Insert Note Controller
const insertNote = async (req, res) => {
  try {
    const { userid, title, content } = req.body;

    if (!userid || !title || !content) {
      return res
        .status(400)
        .json({ message: "userid, title and content are required" });
    }

    // Check if user exists
    const doesUserExist = await userService.isUserExists(userid);
    if (!doesUserExist) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const note = await noteService.insertNote(userid, title, content);
    res.status(200).json({ data: note, message: "Note successfully created" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to insert note. Please try again later." });
  }
};

module.exports = { getNotes, getNoteById, insertNote };
