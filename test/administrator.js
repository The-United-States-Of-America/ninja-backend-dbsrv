import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Administrator Tests', () => {
  it('should create a new user', (done) => {
    api.post('/admin/create')
    .set('Accept', 'application/json')
    .send({
       firstName: 'Test',
       lastName: 'User',
       email: 'test@admin.com',
       password: 'test'
    })
    .expect(200)
    .end((err, res) => {
      expect(res.body.firstName).to.equal('Test');
      expect(res.body.lastName).to.equal('User');
      expect(res.body.email).to.equal('test@admin.com');
      expect(res.body.password).to.equal('test');
      done();
    });
  });

  it('should return unique violation error', (done) => {
    api.post('/admin/create')
    .set('Accept', 'application/json')
    .send({
       firstName: 'Test',
       lastName: 'User',
       email: 'test@admin.com',
       password: 'test'
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.name).to.equal("error");
      expect(parseInt(res.body.code)).to.equal(23505);
      expect(res.body.detail).to.equal('Key (email)=(test@admin.com) already exists.');
      done();
    });
  });

});
