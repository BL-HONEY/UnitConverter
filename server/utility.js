module.exports.tempConversion = (body, callback) => {
    if (body.unit === "celcius") {
        let valueInFarenheit = (body.value * 9 / 5) + 32
        return callback(null, valueInFarenheit);
    } else {

        let valueInCelcius = (body.value - 32) * 5 / 9
        return callback(null, valueInCelcius)
    }
}

module.exports.lengthConversion = (body, callback)=> {
    console.log("body in lengthconversion: ", body);
    
    if(body.convertTo === "yard"){
        console.log("i am here: ", body.convertTo);
        
     let resultData = convertToYard(body.unit, value);
     console.log("test resut: ", resultData);
     
     return callback(null, resultData)
    }
}
function convertToYard(unit, value) {
    console.log("i am here also");
    
    if(unit === "feet"){
        return value/3;
    }
}