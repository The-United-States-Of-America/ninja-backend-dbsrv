import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Family Tests', () => {
  let testId = 0;

  it('should create a new family', (done) => {
    api.post('/family/create')
    .set('Accept', 'application/json')
    .send({
      name: 'Test Family'
    })
    .expect(200)
    .end((err, res) => {
      testId = res.body.id;
      expect(res.body.name).to.equal('Test Family');
      done();
    });
  });

  it('should create another new family', (done) => {
    api.post('/family/create')
    .set('Accept', 'application/json')
    .send({
      name: 'Test Family'
    })
    .expect(200)
    .end((err, res) => {
      expect(res.body.id).to.not.equal(testId);
      expect(res.body.name).to.equal('Test Family');
      done();
    });
  });

});
