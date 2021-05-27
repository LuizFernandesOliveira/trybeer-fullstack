const frisby = require('frisby');

const url = 'http://localhost:3333';
const message = require('../../src/helpers/message');

describe('[TEST] AuthController', () => {
  it('será validado se o campo "email" é obrigatório', async () => {
    await frisby.post(`${url}/auth/token`, { password: '123456' })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.token).toBe(undefined);
        expect(json.message).toBe(message.AUTH_VALID_EMAIL_REQUIRED);
      });
  });
});
