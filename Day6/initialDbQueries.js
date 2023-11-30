// const { pool } = require("./dbConnect");

// // Creates Table if users table does not exist
// pool.query(
//   `
//   CREATE TABLE IF NOT EXISTS users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL
//   )
// `,
//   (err, result) => {
//     if (err) console.error("Error creating table users", err);
//     else console.log(result);
//   }
// );

// // Inserts dummy data into users table
// pool.query(
//   `
//   INSERT INTO users (username, email)
//   VALUES
//     ('user1','user1@user.com'),
//     ('user2','user2@user.com'),
//     ('user3','user3@user.com'),
//     ('user4','user4@user.com'),
//     ('user5','user5@user.com')
// `,
//   (err, result) => {
//     if (err) console.error("Error seeding users table", err);
//     else console.log(result);
//   }
// );

// // Creates Table if notes table does not exist
// pool.query(
//   `
//     CREATE TABLE IF NOT EXISTS notes (
//       id SERIAL PRIMARY KEY,
//       userId INT NOT NULL,
//       title VARCHAR(255) NOT NULL,
//       content TEXT NOT NULL,
//       FOREIGN KEY (userId) REFERENCES users(id)
//     )
//   `,
//   (err, result) => {
//     if (err) console.error("Error creating table notes", err);
//     else console.log(result);
//   }
// );

// // Inserts dummy data into notes table
// pool.query(
//   `
//     INSERT INTO notes (userId, title,content)
//     VALUES
//       ('1','note1','note1 content'),
//       ('1','note2','note2 content'),
//       ('1','note3','note3 content'),
//       ('2','note4','note4 content'),
//       ('2','note5','note5 content'),
//       ('2','note6','note6 content')
//   `,
//   (err, result) => {
//     if (err) console.error("Error seeding notes table", err);
//     else console.log(result);
//   }
// );
