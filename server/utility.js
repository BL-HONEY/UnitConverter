class Utility {
    constructor(){
        this.resultData = null;
    }
    tempConversion(body, callback)  {
        if (body.unit === "celcius" && body.convertTo === "farenheit") {
            this.resultData = (body.value * 9 / 5) + 32
        } else if(body.unit === "farenheit" && body.convertTo === "celcius"){
            this.resultData = (body.value - 32) * 5 / 9
        }else{
            this.resultData = body.value
        }
        return callback(null, this.resultData)
    }
    lengthConversion(body, callback){
        if (body.convertTo === "yard") {
            this.resultData = this.convertToYard(body.unit, body.value);
        }else if(body.convertTo === "inch"){
             this.resultData = this.convertToInches(body.unit, body.value);
        } else if(body.convertTo === "centimetre"){
             this.resultData = this.convertToCentimetre(body.unit, body.value);
        }else{
             this.resultData = this.convertToFeet(body.unit, body.value);
        }
        return callback(null, this.resultData)

    }

    volumeConversion(body, callback){
        if (body.convertTo === "millilitre") {
            this.resultData = this.convertToMillilitre(body.unit, body.value);
        }
        else if(body.convertTo === "gallon"){
              this.resultData = this.convertToGallon(body.unit, body.value);
        }else{
            this.resultData = this.convertToLitre(body.unit, body.value);
        }
        return callback(null, this.resultData)

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