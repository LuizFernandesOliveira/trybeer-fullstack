function authException(message, httpStatus) {
  this.message = message;
  this.httpStatus = httpStatus;
}

module.exports = authException;
