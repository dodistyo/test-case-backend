const helper = require('./util');


describe('Check helper function', () => {
    it('responds with json containing a list of users', async () => {
      const response = await helper();
      expect(response).toEqual([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ]);
    });
  });  
