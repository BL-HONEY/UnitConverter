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


     describe('checking all length conversion in yard', () => {
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
        it('should return proper converted value in yard' , (done) => {
            let requestBody = {
                "unit":"inch",
                "convertTo":"yard",
                "value":36,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.equal(data, 1);
                  done();
                }
            })
         });
        it('1 feet should not be equal to 1 yard' , (done) => {
            let requestBody = {
                "unit":"feet",
                "convertTo":"yard",
                "value":1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.notEqual(data, 1);
                  done();
                }
            })
         });

         it('1 inch should not be equal to 1 yard' , (done) => {
            let requestBody = {
                "unit":"inch",
                "convertTo":"yard",
                "value":1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                   
                  assert.notEqual(data, 1);
                  done();
                }
            })
         });

         it('1 inch should be equal to 0.010936132983377079 yard' , (done) => {
            let requestBody = {
                "unit":"centimetre",
                "convertTo":"yard",
                "value":1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                                       
                  assert.equal(data, 0.010936132983377079);
                  done();
                }
            })
         });
      
     }); 


     describe('checking all length conversion in inches', () => {

        it('1 foot should be equal to 12 inch' , (done) => {
            let requestBody = {
                "unit":"feet",
                "convertTo":"inch",
                "value":1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){      
                    console.log(data);
                                                     
                  assert.equal( Math.floor( data), 12);
                  done();
                }
            })
         });
        it('should return proper converted value in inches' , (done) => {
           let requestBody = {
               "unit":"yard",
               "convertTo":"inch",
               "value":1,
               "measureCriteria": "length"
           }
           unitConverterService.temperatureConversion(requestBody, (err, data) => {
               if(data){    
                   console.log("data at 117: ", data);
                                  
                 assert.equal(data, 36);
                 done();
               }
           })
        });

         it('2.54 centimetre should be equal to 1 inch' , (done) => {
            let requestBody = {
                "unit":"centimetre",
                "convertTo":"inch",
                "value":2.54,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){      
                    console.log(data);
                                                     
                  assert.equal( Math.floor( data), 1);
                  done();
                }
            })
         });
      
     }); 



     describe('checking all length conversion in feet', () => {

        it('1 inch should be equal to 0.0833333 feet' , (done) => {
            let requestBody = {
                "unit":"inch",
                "convertTo":"feet",
                "value":1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){     
                    console.log("data at 187:", data);
                                                                          
                  assert.equal( data, 0.08333333333333333);
                  done();
                }
            })
         });
     
         it('1 yard should be equal to 3 feet' , (done) => {
            let requestBody = {
                "unit":"yard",
                "convertTo":"feet",
                "value":1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                                                                               
                  assert.equal( Math.floor( data), 3);
                  done();
                }
            })
         });

         it('38.48 centimetre should be equal to 1 feet' , (done) => {
            let requestBody = {
                "unit":"centimetre",
                "convertTo":"feet",
                "value": 38.48,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                                                                               
                  assert.equal( Math.floor( data), 1);
                  done();
                }
            })
         });
       
      
     }); 


     describe('checking all length conversion in centimetre', () => {

        it('1 yard should be equal to 91.44 centimetre' , (done) => {
            let requestBody = {
                "unit":"yard",
                "convertTo":"centimetre",
                "value":1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                                                                               
                  assert.equal( data, 91.44);
                  done();
                }
            })
         });
     
         it('1 foot should be equal to 30.48 centimetre' , (done) => {
            let requestBody = {
                "unit":"feet",
                "convertTo":"centimetre",
                "value":1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                                                                               
                  assert.equal( data, 30.48);
                  done();
                }
            })
         });

         it('1 inch should be equal to 2.54 centimetre' , (done) => {
            let requestBody = {
                "unit":"inch",
                "convertTo":"centimetre",
                "value": 1,
                "measureCriteria": "length"
            }
            unitConverterService.temperatureConversion(requestBody, (err, data) => {
                if(data){                                                                               
                  assert.equal(data, 2.54);
                  done();
                }
            })
         });
       
      
     });