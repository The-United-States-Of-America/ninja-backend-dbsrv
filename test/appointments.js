import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect,
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

  it('should update the previous appointment', (done) => {
    api.post('/appt/update')
    .set('Accept', 'application/json')
    .send({
      query: {
        clientId: 1,
        providerId: 3,
        dateRequested: testTime
      },
      update: {
        dateRequested: new Date(),
        state: 2,
        comments: "I can only make it an hour later than that!"
      }
    })
    .expect(200)
    .end((err, res) => {
      expect(parseInt(res.body.clientId)).to.equal(1);
      expect(parseInt(res.body.providerId)).to.equal(3);
      expect(parseInt(res.body.state)).to.equal(2);
      expect(res.body.comments).to.equal('I can only make it an hour later than that!');
      done();
    });
  });

});
