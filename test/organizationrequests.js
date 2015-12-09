import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Organization Invite Tests', () => {
  let testId = 0;

  it('should create a new client invite', (done) => {
    api.post('/organization/invite')
    .set('Accept', 'application/json')
    .send({
      userId: 1,
      organizationId: 1
    })
    .expect(200)
    .end((err, res) => {
      expect(parseInt(res.body.userId)).to.equal(1);
      expect(parseInt(res.body.organizationId)).to.equal(1);
      done();
    });
  });

  it('should create a new provider invite', (done) => {
    api.post('/organization/invite')
    .set('Accept', 'application/json')
    .send({
      userId: 3,
      organizationId: 1
    })
    .expect(200)
    .end((err, res) => {
      expect(parseInt(res.body.userId)).to.equal(3);
      expect(parseInt(res.body.organizationId)).to.equal(1);
      done();
    });
  });

  it('should create a new admin invite', (done) => {
    api.post('/organization/invite')
    .set('Accept', 'application/json')
    .send({
      userId: 5,
      organizationId: 1
    })
    .expect(200)
    .end((err, res) => {
      testId = parseInt(res.body.organizationId);
      expect(parseInt(res.body.userId)).to.equal(5);
      expect(parseInt(res.body.organizationId)).to.equal(1);
      done();
    });
  });

  it('see if client has invite', (done) => {
    api.get('/client/get_org_invites/1')
    .set('Accept', 'application/json')
    .expect(400)
    .end((err, res) => {
      expect(parseInt(res.body.id)).to.equal(testId);
      expect(res.body.name).to.equal('Primary Provider');
      done();
    });
  });

  it('see if provider has invite', (done) => {
    api.get('/provider/get_org_invites/1')
    .set('Accept', 'application/json')
    .expect(400)
    .end((err, res) => {
      expect(parseInt(res.body.id)).to.equal(testId);
      expect(res.body.name).to.equal('Primary Provider');
      done();
    });
  });

  it('see if admin has invite', (done) => {
    api.get('/admin/get_org_invites/1')
    .set('Accept', 'application/json')
    .expect(400)
    .end((err, res) => {
      expect(parseInt(res.body.id)).to.equal(testId);
      expect(res.body.name).to.equal('Primary Provider');
      done();
    });
  });

  it('client should accept the invite', (done) => {
    api.post('/client/accept_org_invite')
    .set('Accept', 'application/json')
    .send({
      userId: 1,
      organizationId: 1
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.success).to.equal(true);
      done();
    });
  });

  it('provider should accept the invite', (done) => {
    api.post('/provider/accept_org_invite')
    .set('Accept', 'application/json')
    .send({
      userId: 3,
      organizationId: 1
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.success).to.equal(true);
      done();
    });
  });

  it('admin should accept the invite', (done) => {
    api.post('/admin/accept_org_invite')
    .set('Accept', 'application/json')
    .send({
      userId: 5,
      organizationId: 1
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.success).to.equal(true);
      done();
    });
  });

});
