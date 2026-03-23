const request = require('supertest');
const server = require('./app');

describe('GET /', () => {
  it('should return 200 OK and correct JSON message', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Application DevOps opérationnelle by Ali v2');
  });
});
