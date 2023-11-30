const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

module.exports = function morganMiddleware(app) {
  // ... your morgan middleware logic
  const accessLogStream = fs.createWriteStream(path.join(__dirname, '../loggs/requests.log'), { flags: 'a' });
  app.use(morgan('combined', { stream: accessLogStream }));
};
