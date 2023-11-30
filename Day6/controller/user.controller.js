const { userService } = require("../services");
const { noteService } = require("../services");

// Get Users Controller
const getUsers = async (req, res) => {
  try {
    const { users, total_users } = await userService.getUsers();
    res.status(200).json({
      data: { users, total_users },
      message: "Users successfully fetched",
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Failed to fetch users. Please try again later." });
  }
};

// Get User By Id Controller
const getUserById = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await userService.getUserById(userID);
    res
      .status(200)
      .json({ data: user, message: `UserID: ${userID} successfully fetched` });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch user. Please try again later." });
  }
};

// Insert User Controller
const insertUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "Username and email are required" });
    }

    const user = await userService.insertUser(username, email);
    res.status(200).json({ data: user, message: "User successfully created" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch user. Please try again later." });
  }
};

// Update User Controller
const updateUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const { username, email } = req.body;

    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "Username and email are required" });
    }

    const updatedUser = await userService.updateUser(username, email, userID);
    res.status(200).json({
      data: updatedUser,
      message: `UserID: ${userID} successfully updated`,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch user. Please try again later." });
  }
};

// Delete User Controller
const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;

    // Check if user exists
    const doesUserExist = await userService.isUserExists(userID);
    if (!doesUserExist) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Delete all notes belong to user
    await noteService.deleteAllNotesByUserId(userID);
    // Delete user
    const removedUser = await userService.deleteUser(userID);
    res.status(200).send({
      data: removedUser,
      message: `UserID: ${userID} successfully deleted`,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch user. Please try again later." });
  }
};

// Get User Notes Controller
const getUserNotes = async (req, res) => {
  try {
    const userID = req.params.id;
    const { user, notes, total_notes } = await userService.getUserNotes(userID);
    res.status(200).json({
      data: { user, notes, total_notes },
      message: `Notes for UserID: ${userID} successfully fetched`,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch notes. Please try again later." });
  }
};

module.exports = {
  getUsers,
  getUserById,
  insertUser,
  updateUser,
  deleteUser,
  getUserNotes,
};
