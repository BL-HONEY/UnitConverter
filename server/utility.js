class Utility {
    tempConversion(body, callback)  {
        if (body.unit === "celcius" && body.convertTo === "farenheit") {
            let valueInFarenheit = (body.value * 9 / 5) + 32
            return callback(null, valueInFarenheit);
        } else if(body.unit === "farenheit" && body.convertTo === "celcius"){
            let valueInCelcius = (body.value - 32) * 5 / 9
            return callback(null, valueInCelcius)
        }else{
            return callback(null, body.value)
        }
    }
    lengthConversion(body, callback){
        if (body.convertTo === "yard") {
            let resultData = this.convertToYard(body.unit, body.value);
            return callback(null, resultData)
        }else if(body.convertTo === "inch"){
            let resultData = this.convertToInches(body.unit, body.value);
            return callback(null, resultData)
        } else if(body.convertTo === "centimetre"){
            let resultData = this.convertToCentimetre(body.unit, body.value);
            return callback(null, resultData) 
        }else{
            let resultData = this.convertToFeet(body.unit, body.value);
            return callback(null, resultData) 
        }
    }

    volumeConversion(body, callback){
        if (body.convertTo === "millilitre") {
            let resultData = this.convertToMillilitre(body.unit, body.value);
            return callback(null, resultData)
        }
        else if(body.convertTo === "gallon"){
             let resultData = this.convertToGallon(body.unit, body.value);
             return callback(null, resultData)
        }else{
            let resultData = this.convertToLitre(body.unit, body.value);
            return callback(null, resultData) 
        }
    }

    convertToMillilitre(unit, value){
        if(unit === "gallon"){
            return value * 3785
        }else if(unit === "litre"){
            return value * 1000
        }else{
            return value;
        }
    }

    convertToLitre(unit, value){
        if(unit === "gallon"){
            return value * 3.78541
        }else if(unit === "millilitre"){
            return value / 1000
        }else{
            return value;
        }
    }
    convertToGallon(unit, value){
        if(unit === "litre"){
            return value / 3.78541
        }else if(unit === "millilitre"){
            return value / 3785
        }else{
            return value;
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
        }else {
            return value;
        }
    }

    convertToInches (unit, value){
        if (unit === "feet") {
            return value * 12;
        }
        else if(unit === "yard") {
            return value * 36;
        }
        else if(unit === "centimetre"){
            return value / 2.54;
        }else {
            return value;
        }
    }

    convertToFeet (unit, value){
        if (unit === "inch") {
            return value / 12;
        }
        else if(unit === "yard") {
            return value * 3;
        }
        else if(unit === "centimetre") {
            return value / 30.48;
        }else {
            return value;
        }
    }

    convertToCentimetre (unit, value){
        if (unit === "inch") {
            return value * 2.54;
        }
        else if(unit === "yard") {
            return value * 91.44;
        }
        else if(unit === "feet"){
            return value * 30.48;
        }else{
            return value
        }
    }
}
module.exports = new Utility;