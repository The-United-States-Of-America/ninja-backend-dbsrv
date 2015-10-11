import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Provider Tests', () => {
  it('should create a new user', (done) => {
    api.post('/provider/create')
    .set('Accept', 'application/json')
    .send({
       ssn: 123456789,
       npi: 123456789,
       firstName: 'Test',
       lastName: 'User',
       email: 'test@test.com',
       password: 'test',
       prefix: 'Mr.'
    })
    .expect(200)
    .end((err, res) => {
      expect(res.body.firstName).to.equal('Test');
      expect(res.body.lastName).to.equal('User');
      expect(res.body.email).to.equal('test@test.com');
      expect(res.body.password).to.equal('test');
      expect(res.body.prefix).to.equal('Mr.');
      expect(parseInt(res.body.ssn)).to.equal(123456789);
      expect(parseInt(res.body.npi)).to.equal(123456789);
      done();
    });
  });

  it('should return unique violation error', (done) => {
    api.post('/provider/create')
    .set('Accept', 'application/json')
    .send({
       ssn: 123456789,
       npi: 123456789,
       firstName: 'Test',
       lastName: 'User',
       email: 'test@test.com',
       password: 'test',
       prefix: 'Mr.'
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.name).to.equal("error");
      expect(parseInt(res.body.code)).to.equal(23505);
      expect(res.body.detail).to.equal('Key (ssn, npi)=(123456789, 123456789) already exists.');
      done();
    });
  });

});
