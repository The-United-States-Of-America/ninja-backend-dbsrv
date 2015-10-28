import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Family Invite Tests', () => {
  let testId = 0;

  it('should create a new invite', (done) => {
    api.post('/family/invite')
    .set('Accept', 'application/json')
    .send({
      clientId: 1,
      familyId: 1
    })
    .expect(200)
    .end((err, res) => {
      testId = parseInt(res.body.familyId);
      expect(parseInt(res.body.clientId)).to.equal(1);
      expect(parseInt(res.body.familyId)).to.equal(1);
      done();
    });
  });

  it('see if user has invite', (done) => {
    api.get('/client/get_invites/1')
    .set('Accept', 'application/json')
    .expect(400)
    .end((err, res) => {
      expect(parseInt(res.body.id)).to.equal(testId);
      expect(res.body.name).to.equal('Test Family');
      done();
    });
  });

  it('should accept the invite', (done) => {
    api.post('/client/accept_invite')
    .set('Accept', 'application/json')
    .send({
      clientId: 1,
      familyId: 1
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.success).to.equal(true);
      done();
    });
  });

});
