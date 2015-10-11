import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Organization Tests', () => {
  let testId = 0;

  it('should create a new organization', (done) => {
    api.post('/organization/create')
    .set('Accept', 'application/json')
    .send({
      name: 'Primary Provider',
      state: 'NY',
      address: '123 Test Lane',
      zip: '12345',
      phone: '123456790'
    })
    .expect(200)
    .end((err, res) => {
      testId = res.body.id;
      expect(res.body.name).to.equal('Primary Provider');
      done();
    });
  });

  it('should not create duplicate organization', (done) => {
    api.post('/organization/create')
    .set('Accept', 'application/json')
    .send({
      name: 'Primary Provider',
      state: 'NY',
      address: '123 Test Lane',
      zip: '12345',
      phone: '123456790'
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.name).to.equal("error");
      expect(parseInt(res.body.code)).to.equal(23505);
      expect(res.body.detail).to.equal('Key (name)=(Primary Provider) already exists.');
      done();
    });
  });

});
