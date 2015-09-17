const should = require('chai').should(),
      expect = require('chai').expect(),
      supertest = require('supertest'),
      config = require('../dist/config'),
      api = supertest('http://localhost:' + config.development.port);

describe('SimpleTest', () => {
  let server;
  beforeEach( () => server = require('../dist/app') );
  afterEach( (done) => server.close(done) );

  it('should return a 200 response', (done) => {
    api.get('/sample_route/hello_world')
       .set('Accept', 'application/json')
       .expect(200, done);
  });

});
