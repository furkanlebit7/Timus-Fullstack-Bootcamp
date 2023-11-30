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

// Update Note Controller
const updateNote = async (req, res) => {
  try {
    const noteID = req.params.id;
    const { userid, title, content } = req.body;

    // Check if body items are empty
    if (!userid || !title || !content) {
      return res
        .status(400)
        .json({ message: "User ID, Title and Content are required" });
    }

    // Check if note exists
    const doesNoteExist = await noteService.isNoteExist(noteID);
    if (!doesNoteExist) {
      return res.status(404).json({ message: "Note does not exist" });
    }

    const updateNote = await noteService.updateNote(
      userid,
      title,
      content,
      noteID
    );
    res.status(200).json({
      data: updateNote,
      message: `NoteID: ${noteID} successfully updated`,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch note. Please try again later." });
  }
};

// Delete Note Controller
const deleteNote = async (req, res) => {
  try {
    const noteID = req.params.id;

    // Check if note exists
    const doesNoteExist = await noteService.isNoteExist(noteID);
    if (!doesNoteExist) {
      return res.status(404).json({ message: "Note does not exist" });
    }

    const removedNote = await noteService.deleteNote(noteID);
    res.status(200).send({
      data: removedNote,
      message: `NoteID: ${noteID} successfully deleted`,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch note. Please try again later." });
  }
};

module.exports = { getNotes, getNoteById, insertNote, updateNote, deleteNote };
