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

module.exports = { getNotes, getNoteById, insertNote };
