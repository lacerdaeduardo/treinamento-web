import http from 'http';
import assert from 'assert';

import '../server.js';

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get(`http://localhost:${port}`, res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});