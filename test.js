const request = require('supertest');
const app = require('./index');


describe('GET /users', () => {
    it('responds with json containing a list of users', async () => {
      const response = await request(app).get('/users');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ]);
    });
  });  
