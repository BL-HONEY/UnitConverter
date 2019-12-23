//Require the dev-dependencies
const
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../server'),
    should = chai.should(),
    assert = require('chai').assert,
    unitConverterService = require('../server/services/unitConverter');

describe('testing if there is a function for temperature conversion', () => {
    it('should check existence of temperature function', (done) => {
        let requestBody = {}
        unitConverterService.unitConversion(requestBody, (err, data) => {
            if (err) {
                done();
            } else {
                if (data)
                    done();
            }
        })
    });
});
    describe('Testing the temperature function for null value', () => {
        it('should return with error for null value', (done) => {
           let requestBody = {
               "unit":null,
               "convertTo":"farenheit",
               "value":4,
               "measureCriteria": "temperature"
           }
           unitConverterService.unitConversion(requestBody, (err, data) => {
               if(err){
                   console.log(err);
                   
                 assert.equal(err, "null values found in request body");
                 done();
               }
           })
        });

        it('should return with error for null value', (done) => {
            let requestBody = {
                "unit": "celcius",
                "convertTo": null,
                "value": 4,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){
                  assert.equal(err, "null values found in request body");
                  done();
                }
            })
         });

         it('should return with error for null value', (done) => {
            let requestBody = {
                "unit": "celcius",
                "convertTo": "farenheit",
                "value": null,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){
                  assert.equal(err, "null values found in request body");
                  done();
                }
            })
         });
    });    


    describe('Testing the temperature function for undefined value', () => {
        it('should return with error for undefined value', (done) => {
           let requestBody = {
               "unit":undefined,
               "convertTo":"farenheit",
               "value":4,
               "measureCriteria": "temperature"
           }
           unitConverterService.unitConversion(requestBody, (err, data) => {
               if(err){
                 assert.equal(err, "undefined values found in request body");
                 done();
               }
           })
        });

        it('should return with error for undefined value', (done) => {
            let requestBody = {
                "unit": "celcius",
                "convertTo": undefined,
                "value": 4,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){
                  assert.equal(err, "undefined values found in request body");
                  done();
                }
            })
         });

         it('should return with error for null value', (done) => {
            let requestBody = {
                "unit": "celcius",
                "convertTo": "farenheit",
                "value": undefined,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){
                  assert.equal(err, "undefined values found in request body");
                  done();
                }
            })
         });
    });    


    describe('Testing the temperature function for improper data types', () => {
        it('should return "Unit cannot be a number" ' , (done) => {
           let requestBody = {
               "unit":34,
               "convertTo":"farenheit",
               "value":4,
               "measureCriteria": "temperature"
           }
           unitConverterService.unitConversion(requestBody, (err, data) => {
               if(err){
                 assert.equal(err, "unit cannot be a number");
                 done();
               }
           })
        });

        it('should return "value cannot be a string" ' , (done) => {
            let requestBody = {
                "unit":"celcius",
                "convertTo":"farenheit",
                "value":"xyz",
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){                    
                  assert.equal(err, "value cannot be a string");
                  done();
                }
            })
         });

         it('should return "convertTo cannot be a number" ' , (done) => {
            let requestBody = {
                "unit":"celcius",
                "convertTo":23,
                "value":32,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){
                  assert.equal(err, "convertTo cannot be a number");
                  done();
                }
            })
         });
     });    



    describe('Testing the temperature function for improper enum types', () => {
        it('should return "unit and convertTo can only be a celcius or farenheit" ' , (done) => {
           let requestBody = {
               "unit":"celcius",
               "convertTo":"faren",
               "value":4,
               "measureCriteria": "temperature"

           }
           unitConverterService.unitConversion(requestBody, (err, data) => {
               if(err){                   
                 assert.equal(err, "unit and convertTo can only be a celcius or farenheit");
                 done();
               }
           })
        });

        it('should return "unit and convertTo can only be a celcius of farenheit" ' , (done) => {
            let requestBody = {
                "unit":"celc",
                "convertTo":"farenheit",
                "value":4,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){
                  assert.equal(err, "unit and convertTo can only be a celcius or farenheit");
                  done();
                }
            })
         });

         it('should return "unit and convertTo can only be a celcius or farenheit" ' , (done) => {
            let requestBody = {
                "unit":"celc",
                "convertTo":"farenhei",
                "value":4,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){                    
                  assert.equal(err, "unit and convertTo can only be a celcius or farenheit");
                  done();
                }
            })
         });
     }); 



     describe('Testing the temperature function for proper conversions', () => {
        it('should return "proper convertion of farenheit to celcius" ' , (done) => {
           let requestBody = {
               "unit":"farenheit",
               "convertTo":"celcius",
               "value":212,
               "measureCriteria": "temperature"
           }
           unitConverterService.unitConversion(requestBody, (err, data) => {               
               if(data){                                      
                 assert.equal(data, 100 );
                 done();
               }
           })
        });

        it('should return "proper convertion of celcius to farenheit" ' , (done) => {
            let requestBody = {
                "unit":"celcius",
                "convertTo":"farenheit",
                "value":100,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {               
                if(data){                                      
                  assert.equal(data, 212 );
                  done();
                }
            })
         });

         it('should return "proper convertion of celcius to celcius" ' , (done) => {
            let requestBody = {
                "unit":"celcius",
                "convertTo":"celcius",
                "value":100,
                "measureCriteria": "temperature"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {               
                if(data){                                      
                  assert.equal(data, 100 );
                  done();
                }
            })
         });

        });