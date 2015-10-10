import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Client Tests', () => {
  it('should create a new user', (done) => {
    api.post('/client/create')
    .set('Accept', 'application/json')
    .send({
      ssn: 123456789,
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
      expect(parseInt(res.body.ssn)).to.equal(123456789);
      expect(res.body.familyId).to.equal(null);
      done();
    });
  });

  it('should return unique violation error', (done) => {
    api.post('/client/create')
    .set('Accept', 'application/json')
    .send({
      ssn: 123456789,
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
