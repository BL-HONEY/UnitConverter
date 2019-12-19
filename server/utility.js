class Utility {
    tempConversion(body, callback)  {
        if (body.unit === "celcius") {
            let valueInFarenheit = (body.value * 9 / 5) + 32
            return callback(null, valueInFarenheit);
        } else {
            let valueInCelcius = (body.value - 32) * 5 / 9
            return callback(null, valueInCelcius)
        }
    }
    lengthConversion(body, callback){
        if (body.convertTo === "yard") {
            let resultData = this.convertToYard(body.unit, body.value);
            return callback(null, resultData)
        }else if(body.convertTo === "inch"){
            let resultData = this.convertToInches(body.unit, body.value);
            return callback(null, resultData)
        }else{
            let resultData = this.convertToFeet(body.unit, body.value);
            return callback(null, resultData) 
        }
    }
    convertToYard (unit, value){
        if (unit === "feet") {
            return value / 3;
        }
        else if(unit === "inch") {
            return value / 36;
        }else if(unit === "centimetre"){
            return value / 91.44;
        }
    }

    convertToInches (unit, value){
        if (unit === "feet") {
            return value * 12;
        }
        else if(unit === "yard") {
            return value * 36;
        }else if(unit === "centimetre"){
            return value / 2.54;
        }
    }

    convertToFeet (unit, value){
        if (unit === "inch") {
            return value / 12;
        }
        else if(unit === "yard") {
            return value * 3;
        }
        else if(unit === "centimetre"){
            return value / 30.48;
        }
    }
}
module.exports = new Utility;