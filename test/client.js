import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Client Tests', () => {
  // let server;
  // before( () => server = require('../src/app') );
  // after( (done) => server.close(done) );

  it('should create a new user', (done) => {
    api.post('/client/create_user')
    .set('Accept', 'application/json')
    .send({
      ssn: 661184972,
      firstName: 'Pranav',
      lastName: 'Sathy',
      email: 'sathyp@rpi.edu',
      password: 'test'
    })
    .expect(200)
    .end((err, res) => {
      expect(res.body.firstName).to.equal('Pranav');
      expect(res.body.lastName).to.equal('Sathy');
      expect(res.body.email).to.equal('sathyp@rpi.edu');
      expect(res.body.password).to.equal('test');
      expect(parseInt(res.body.ssn)).to.equal(661184972);
      expect(res.body.familyId).to.equal(null);
      done();
    });
  });

  it('should return unique violation error', (done) => {
    api.post('/client/create_user')
    .set('Accept', 'application/json')
    .send({
      ssn: 661184972,
      firstName: 'New',
      lastName: 'Guy',
      email: 'sathyp@rpi.edu',
      password: 'test'
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.name).to.equal("SequelizeUniqueConstraintError");
      expect(res.body.message).to.equal("Validation error");
      expect(res.body.errors[0].message).to.equal("email must be unique");
      done();
    });
  });

});
