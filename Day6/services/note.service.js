const { pool } = require("../dbConnect");

// Get Notes Service
const getNotes = async () => {
  try {
    const [countResult, notesResult] = await Promise.all([
      pool.query("SELECT COUNT(*) as total_notes FROM notes"),
      pool.query("SELECT * FROM notes"),
    ]);
    const total_notes = countResult.rows[0].total_notes;
    const notes = notesResult.rows;
    return { notes, total_notes };
  } catch (err) {
    console.error("Error fetching notes", err);
    throw new Error("Error fetching notes");
  }
};

//Get Notes By noteID Service
const getNoteById = async (noteID) => {
  try {
    const result = await pool.query("SELECT * FROM notes WHERE id = $1;", [
      noteID,
    ]);
    return result.rows[0];
  } catch (err) {
    console.error("Error fetching note", err);
    throw new Error("Error fetching note");
  }
};

// Insert Note Service
const insertNote = async (userId, title, content) => {
  try {
    const result = await pool.query(
      "INSERT INTO notes (userid,title,content) VALUES ($1, $2, $3) RETURNING *", //RETURNING * is used to return the inserted row
      [userId, title, content]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error inserting note", err);
    throw new Error("Error inserting note");
  }
};

// Update Note Service
const updateNote = async (userid, title, content, noteID) => {
  try {
    const result = await pool.query(
      "UPDATE notes SET userid = $1, title = $2, content = $3 WHERE id = $4 RETURNING *",
      [userid, title, content, noteID]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error updating note", err);
    throw new Error("Error updating note");
  }
};

// Delete Note Service
const deleteNote = async (noteID) => {
  try {
    const result = await pool.query(
      "DELETE FROM notes WHERE id = $1 RETURNING *",
      [noteID]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error removing note", err);
    throw new Error("Error removing note");
  }
};

// User Existence Check Service
const isNoteExist = async (noteID) => {
  try {
    const result = await pool.query("SELECT * FROM notes WHERE id = $1", [
      noteID,
    ]);
    return result.rows.length > 0; // Returns true if user exists, false otherwise
  } catch (err) {
    console.error("Error checking note existence", err);
    throw new Error("Error checking note existence");
  }
};

// Get Notes by UserID Service
const getNotesByUserId = async (userID) => {
  try {
    const result = await pool.query("SELECT * FROM notes WHERE userid = $1", [
      userID,
    ]);

    return result.rows;
  } catch (err) {
    console.error("Error fetching user notes", err);
    throw new Error("Error fetching user notes");
  }
};

// Delete All Notes by UserID Service
const deleteAllNotesByUserId = async (userID) => {
  try {
    const result = await pool.query(
      "DELETE FROM notes WHERE userid = $1 RETURNING *",
      [userID]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error removing user notes", err);
    throw new Error("Error removing user notes");
  }
};

module.exports = {
  getNotes,
  getNoteById,
  insertNote,
  updateNote,
  deleteNote,
  isNoteExist,
  getNotesByUserId,
  deleteAllNotesByUserId,
};
