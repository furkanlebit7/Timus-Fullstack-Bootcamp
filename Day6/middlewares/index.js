const helmet = require('helmet');
const bodyParser = require('body-parser');
const morganMiddleware = require('./morganMiddleware');

module.exports = function (app) {
  // Helmet for security headers
  app.use(helmet());

  // Morgan for logging
  morganMiddleware(app);

  // Body parser for JSON requests
  app.use(bodyParser.json());
};
