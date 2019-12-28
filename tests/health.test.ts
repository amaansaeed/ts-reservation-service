import server from '../src/index';
import request from 'supertest';

describe('Reservations Service: Health', () => {
  beforeAll(() => {});

  afterAll(() => {
    server.close();
  });

  describe('GET /reservations/health', () => {
    it('should return server healthy', async () => {
      const response = await request(server).get('/reservations/health');
      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('server healthy!');
    });
  });
});
