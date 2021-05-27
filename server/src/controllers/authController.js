const authService = require('../services/authService');
const httpStatus = require('../helpers/httpStatus');

module.exports = {
  createAndGetTokenByUser(request, response) {
    try {
      const data = request.body;
      const { token } = authService.createAndGetTokenByUser(data);
      return response.status(httpStatus.OK).json({ token });
    } catch ({ httpStatus, message }) {
      return response.status(httpStatus).json({ message });
    }
  },
};
