const {pool} = require("./dbConnect");

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
//     ('user2','user2@user.com')
// `,
//   (err, result) => {
//     if (err) console.error("Error seeding users table", err);
//     else console.log(result);
//   }
// );
