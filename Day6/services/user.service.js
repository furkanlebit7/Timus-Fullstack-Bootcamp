const { pool } = require("../dbConnect");

// Get Users Service
const getUsers = async () => {
  try {
    const [countResult, usersResult] = await Promise.all([
      pool.query("SELECT COUNT(*) as total_users FROM users"),
      pool.query("SELECT * FROM users"),
    ]);
    const total_users = countResult.rows[0].total_users;
    const users = usersResult.rows;
    return { users, total_users };
  } catch (err) {
    console.error("Error fetching users", err);
    throw new Error("Error fetching users");
  }
};

// Get User By Id Service
const getUserById = async (userID) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1;", [
      userID,
    ]);
    return result.rows[0];
  } catch (err) {
    console.error("Error fetching user", err);
    throw new Error("Error fetching user");
  }
};

// Insert User Service
const insertUser = async (username, email) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *", //RETURNING * is used to return the inserted row
      [username, email]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error inserting user", err);
    throw new Error("Error inserting user");
  }
};

// Update User Service
const updateUser = async (username, email, userID) => {
  try {
    const result = await pool.query(
      "UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *",
      [username, email, userID]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error updating user", err);
    throw new Error("Error updating user");
  }
};

// Update User Service
const deleteUser = async (userID) => {
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [userID]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error removing user", err);
    throw new Error("Error removing user");
  }
};

// User Existence Check Service
const isUserExists = async (userId) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    return result.rows.length > 0; // Returns true if user exists, false otherwise
  } catch (err) {
    console.error("Error checking user existence", err);
    throw new Error("Error checking user existence");
  }
};

module.exports = {
  getUsers,
  getUserById,
  insertUser,
  updateUser,
  deleteUser,
  isUserExists,
};
