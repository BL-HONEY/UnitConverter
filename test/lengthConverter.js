//Require the dev-dependencies
const
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../server'),
    should = chai.should(),
    assert = require('chai').assert,
    unitConverterService = require('../server/services/unitConverter');


    describe('Testing the conversion function for improper enum types', () => {
        it('should return "unit and convertTo can only be a inch , yard , centimetre or feet" ' , (done) => {
           let requestBody = {
               "unit":"celcius",
               "convertTo":"faren",
               "value":4,
               "measureCriteria": "length"
           }
           unitConverterService.temperatureConversion(requestBody, (err, data) => {
               if(err){                   
                 assert.equal(err, "unit and convertTo can only be a inch , yard , centimetre or feet");
                 done();
               }
           })
        });
        it('should return "unit and convertTo can only be a inch , yard , centimetre or feet" ' , (done) => {
            let requestBody = {
                "unit":"yard",
                "convertTo":"inchhh",
                "value":4,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(err){                   
                  assert.equal(err, "unit and convertTo can only be a inch , yard , centimetre or feet");
                  done();
                }
            })
         });
     }); 


     describe('Testing the conversion function to compare different values', () => {
        it('should return proper converted value in yard' , (done) => {
           let requestBody = {
               "unit":"feet",
               "convertTo":"yard",
               "value":3,
               "measureCriteria": "length"
           }
           unitConverterService.temperatureConversion(requestBody, (err, data) => {
               if(data){                   
                 assert.equal(data, 1);
                 done();
               }
           })
        });
      
     }); 