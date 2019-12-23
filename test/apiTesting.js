//Require the dev-dependencies
// const
//     chai = require('chai'),
//     chaiHttp = require('chai-http'),
//     should = chai.should(),
//     assert = require('chai').assert;

var chai = require('chai')
var chaiHttp = require('chai-http')
chai.use(chaiHttp)
chai.should()

let server = require('../index');

describe('/GET error for wrong measure type', () => {
    it('should give error for wrong measure type', (done) => {
        chai.request(server)
            .get('/api/unitConverter/lengt')
            .end((err, res) => {
                res.should.have.status(400);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done();
            });
    });
});

describe('/GET units for measure type length', () => {
    it('should GET all units for measure type length', (done) => {
        chai.request(server)
            .get('/api/unitConverter/length')
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done();
            });
    });
});

describe('/POST unit conversion api check', () => {
    it('should respond with error for wrong measure type', (done) => {
        chai.request(server)
            .post('/api/unitConverter/lengt')
            .end((err, res) => {
                res.should.have.status(400);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done();
            });
    });

    it('should respond with error for wrong measure type', (done) => {
        let filteredReqBody = {
            "convertTo": "inch",
            "value": 2,
            "unit": "centimetre",
            "measureCriteria": "length"
        }
        chai.request(server)
            .post('/api/unitConverter/length')
            .send(filteredReqBody)
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done();
            });
    });

    it('should respond with error for wrong measure type', (done) => {
        let filteredReqBody = {
            "convertTo": "inch",
            "value": 2,
            "unit": "centimetre",
            "measureCriteria": "length"
        }
        chai.request(server)
            .post('/api/unitConverter/length')
            .send(filteredReqBody)
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done();
            });
    });
});


