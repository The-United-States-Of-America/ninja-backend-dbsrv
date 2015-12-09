import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('Appointment Tests', () => {
  let testTime = new Date();
  it('should create a new appointment', (done) => {
    api.post('/appt/create')
    .set('Accept', 'application/json')
    .send({
      clientId: 1,
      providerId: 3,
      dateRequested: testTime,
      info: 'New Allergies: pollen, no new medications',
    })
    .expect(200)
    .end((err, res) => {
      expect(parseInt(res.body.clientId)).to.equal(1);
      expect(parseInt(res.body.providerId)).to.equal(3);
      expect(res.body.info).to.equal('New Allergies: pollen, no new medications');
      done();
    });
  });

});
