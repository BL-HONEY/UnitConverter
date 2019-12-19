const utility = require('../utility');
const tempEnum = ['celcius', 'farenheit']
const lengthEnum = ["inch" , "yard" , "centimetre" , "feet"]
module.exports.temperatureConversion = (body, callback) => {
    try {
        let errorMessage = "values found in request body";
        let errorArray = [];
        isThereError = false;
        isUnitEnumFlag = true;
        isConvertToEnumFlag = true;
        console.log("body", body);

        if (body.unit === null || body.value === null || body.convertTo === null) {
            nullErrorMessage = "null " + errorMessage;
            errorArray.push(nullErrorMessage)
            throw errorArray;
        }

        if (body.unit === undefined || body.value === undefined || body.convertTo === undefined) {
            undefinedErrorMessage = "undefined " + errorMessage;
            errorArray.push(undefinedErrorMessage);
            throw errorArray;
        }

        if (typeof (body.unit) !== "string") {
            isThereError = true;
            TypeErrorMessage = "unit cannot be a " + typeof (body.unit)
            errorArray.push(TypeErrorMessage);
            throw errorArray;
        }

        if (typeof (body.value) !== "number") {
            isThereError = true;
            TypeErrorMessage = "value cannot be a " + typeof (body.value)
            errorArray.push(TypeErrorMessage);
            throw errorArray;
        }

        if (typeof (body.convertTo) !== "string") {
            isThereError = true;
            TypeErrorMessage = "convertTo cannot be a " + typeof (body.convertTo)
            errorArray.push(TypeErrorMessage);
            throw errorArray;
        }
     if(body.measureCriteria === "temperature"){
        for (i = 0; i < tempEnum.length; i++) {
            if (body.unit === tempEnum[i]) {
              isUnitEnumFlag = false;
            }   
            if(body.convertTo === tempEnum[i]){
                isConvertToEnumFlag = false
            }
        }

        if(isUnitEnumFlag === true || isConvertToEnumFlag === true){
            let enumErrorMessage = "unit and convertTo can only be a celcius or farenheit"
            errorArray.push(enumErrorMessage)
            throw errorArray
        }
        if (isThereError === true)
            throw errorArray

        utility.tempConversion(body, (err, data) => {            
            if (data) {                
                return callback(null, data)
            }
        })
    }else if(body.measureCriteria === "length")
    {
        for (i = 0; i < lengthEnum.length; i++) {
            if (body.unit === lengthEnum[i]) {
              isUnitEnumFlag = false;
            }   
            if(body.convertTo === lengthEnum[i]){
                isConvertToEnumFlag = false
            }
        }

        if(isUnitEnumFlag === true || isConvertToEnumFlag === true){
            let enumErrorMessage = "unit and convertTo can only be a inch , yard , centimetre or feet"
            errorArray.push(enumErrorMessage)
            throw errorArray
        }
        if (isThereError === true)
            throw errorArray

        
    }
    } catch (err) {
        return callback(err, null);
    }
}