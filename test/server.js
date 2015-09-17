const should = require('chai').should(),
      expect = require('chai').expect(),
      supertest = require('supertest'),
      api = supertest('http://localhost:8000');

describe('SimpleTest', function() {
  it('should return a 200 response', function(done) {
    api.get('/sample_route/hello_world')
       .set('Accept', 'application/json')
       .expect(200, done);
  });
});
