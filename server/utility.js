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
}
module.exports = new Utility;