const AuthException = require('../exceptions/authException');
const httpStatus = require('../helpers/httpStatus');
const message = require('../helpers/message');

function validEmail(email) {
  if (email === undefined) {
    throw new AuthException(message.AUTH_VALID_EMAIL_REQUIRED, httpStatus.BAD_REQUEST);
  }
}

function validateGetToken(email) {
  validEmail(email);
}

module.exports = {
  validateGetToken,
};
