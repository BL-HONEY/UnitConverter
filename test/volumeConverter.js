const
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../server'),
    should = chai.should(),
    assert = require('chai').assert,
    unitConverterService = require('../server/services/unitConverter');

    describe('Testing the conversion function for improper enum types', () => {
        it('should return with out of enum range error ' , (done) => {
           let requestBody = {
               "unit":"celcius",
               "convertTo":"faren",
               "value":4,
               "measureCriteria": "volume"
           }
           unitConverterService.unitConversion(requestBody, (err, data) => {
               if(err){                   
                 assert.equal(err, "unit and convertTo can only be a millilitre , litre or gallon");
                 done();
               }
           })
        });

        it('should return with out of enum range error  ' , (done) => {
            let requestBody = {
                "unit":"gallon",
                "convertTo":"faren",
                "value":4,
                "measureCriteria": "volume"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){                   
                  assert.equal(err, "unit and convertTo can only be a millilitre , litre or gallon");
                  done();
                }
            })
         });

         it('should return with out of enum range error  ' , (done) => {
            let requestBody = {
                "unit":"gal",
                "convertTo":"millilitre",
                "value":4,
                "measureCriteria": "volume"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(err){                   
                  assert.equal(err, "unit and convertTo can only be a millilitre , litre or gallon");
                  done();
                }
            })
         });
       
     }); 

     describe('checking all length conversion in millilitre', () => {
        it('should return proper converted value from gallon millilitre' , (done) => {
           let requestBody = {
               "unit":"gallon",
               "convertTo":"millilitre",
               "value":1,
               "measureCriteria": "volume"
           }
           unitConverterService.unitConversion(requestBody, (err, data) => {
               if(data){                   
                 assert.equal(data, 3785);
                 done();
               }
           })
        });
        it('should return proper converted value from litre to millilitre' , (done) => {
            let requestBody = {
                "unit":"litre",
                "convertTo":"millilitre",
                "value":1,
                "measureCriteria": "volume"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.equal(data, 1000);
                  done();
                }
            })
         });

         it('should return proper converted value from millilitre to millilitre' , (done) => {
            let requestBody = {
                "unit":"millilitre",
                "convertTo":"millilitre",
                "value":1,
                "measureCriteria": "volume"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.equal(data, 1);
                  done();
                }
            })
         });
      
     }); 

     describe('checking all volume conversion in litre', () => {
        it('should return proper converted value from gallon to litre' , (done) => {
           let requestBody = {
               "unit":"gallon",
               "convertTo":"litre",
               "value":1,
               "measureCriteria": "volume"
           }
           unitConverterService.unitConversion(requestBody, (err, data) => {
               if(data){                   
                 assert.equal(data, 3.78541);
                 done();
               }
           })
        });
        it('should return proper converted value from millilire to litre' , (done) => {
            let requestBody = {
                "unit":"millilitre",
                "convertTo":"litre",
                "value":1000,
                "measureCriteria": "volume"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.equal(data, 1);
                  done();
                }
            })
         });

         it('should return proper converted value from litre to litre' , (done) => {
            let requestBody = {
                "unit":"litre",
                "convertTo":"litre",
                "value":1,
                "measureCriteria": "volume"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.equal(data, 1);
                  done();
                }
            })
         });
      
     }); 


     describe('checking all volume conversion in gallon', () => {
        it('should return proper converted value from litre to gallon' , (done) => {
           let requestBody = {
               "unit":"millilitre",
               "convertTo":"gallon",
               "value":3785.41,
               "measureCriteria": "volume"
           }
           unitConverterService.unitConversion(requestBody, (err, data) => {               
               if(data){                   
                 assert.equal(Math.floor(data), 1);
                 done();
               }
           })
        });
        it('should return proper converted value from litre to gallon' , (done) => {
            let requestBody = {
                "unit":"litre",
                "convertTo":"gallon",
                "value":3.78541,
                "measureCriteria": "volume"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.equal(data, 1);
                  done();
                }
            })
         });

         it('should return proper converted value from gallon to gallon' , (done) => {
            let requestBody = {
                "unit":"gallon",
                "convertTo":"gallon",
                "value":1,
                "measureCriteria": "volume"
            }
            unitConverterService.unitConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.equal(data, 1);
                  done();
                }
            })
         });
      
     }); 