// Connects to database
pool.connect((err, client, done) => {
  if (err) console.error("Db connection error", err);
  else console.log("connected to db ...");
});

// Gets all users from users table
app.get("/users", async (req, res) => {
  try {
    const [countResult, usersResult] = await Promise.all([
      pool.query("SELECT COUNT(*) as total_users FROM users"),
      pool.query("SELECT * FROM users"),
    ]);

    const total_users = countResult.rows[0].total_users;
    const users = usersResult.rows;

    res.json({ users, total_users });
  } catch (err) {
    console.error("Error fetching users", err);
    res.status(500).send(err);
  }
});

//Gets user by id
app.get("/users/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const result = await pool.query("SELECT * FROM users WHERE id = $1;", [
      userID,
    ]);

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching user", err);
    res.status(500).send(err);
  }
});

// Inserts new user into users table
app.post("/users", async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "Username and email are required" });
    }

    await pool.query("INSERT INTO users (username, email) VALUES ($1, $2)", [
      username,
      email,
    ]);
    res.status(201).send("User successfully created");
  } catch (err) {
    console.error("Error creating user", err);
    res.status(500).send(err);
  }
});

// Updates user by id
app.put("/users/:id", (req, res) => {
  const userID = req.params.id;
  const { username, email } = req.body;

  if (!username || !email)
    return res
      .status(400)
      .json({ message: "email ve username gereklidir" })
      .send();

  pool.query(
    "UPDATE users SET username = $1, email = $2 WHERE id = $3",
    [username, email, userID],
    (err, result) => {
      if (err) {
        console.error(`error userID:${userID} cant updated`, err);
        res.status(500).send(err);
      } else {
        res.status(203).send(`userID:${userID} successfully updated`);
      }
    }
  );
});

// Deletes user by id
app.delete("/users/:id", async (req, res) => {
  try {
    const userID = req.params.id;

    await pool.query("DELETE FROM users WHERE id = $1", [userID]);

    res.status(200).send(`UserID: ${userID} successfully deleted`);
  } catch (err) {
    console.error(`Error deleting user with ID: ${userID}`, err);
    res.status(500).send(err);
  }
});
