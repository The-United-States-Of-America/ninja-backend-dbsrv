import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Specializations Tests', () => {
  it('should assign the doctor a specialization', (done) => {
    api.post('/provider/assignSpecialization')
    .set('Accept', 'application/json')
    .send({
      email: 'test@provider.com',
      code: '101YA0400X'
    })
    .expect(200, done);
  });

  it('should fail to assign a bad code', (done) => {
    api.post('/provider/assignSpecialization')
    .set('Accept', 'application/json')
    .send({
      email: 'test@provider.com',
      code: 'BADCODE'
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.name).to.equal('error');
      expect(parseInt(res.body.code)).to.equal(23503);
      expect(res.body.detail).to.equal('Key (taxonomyCode)=(BADCODE) is not present in table "tb_Taxonomy".');
      done();
    });
  });

  it('should fail to reassign a specialization', (done) => {
    api.post('/provider/assignSpecialization')
    .set('Accept', 'application/json')
    .send({
      email: 'test@provider.com',
      code: '101YA0400X'
    })
    .expect(400)
    .end((err, res) => {
      expect(res.body.name).to.equal('error');
      expect(parseInt(res.body.code)).to.equal(23505);
      expect(res.body.detail).to.equal('Key ("providerId", "taxonomyCode")=(3, 101YA0400X) already exists.');
      done();
    });
  });

});
