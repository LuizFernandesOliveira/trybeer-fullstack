const { validateGetToken } =  require('../validations/authValidation');

module.exports = {
  createAndGetTokenByUser(user) {
    const { email, password } = user;
    validateGetToken(email);
  }
};
