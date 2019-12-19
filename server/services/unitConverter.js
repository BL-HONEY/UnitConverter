const utility = require('../utility');
const tempEnum = ['celcius', 'farenheit']
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
     
        for (i = 0; i < tempEnum.length; i++) {
            if (body.unit === tempEnum[i]) {
              isUnitEnumFlag = false;
            }   
            if(body.convertTo === tempEnum[i]){
                isConvertToEnumFlag = false
            }
        }

        if(isUnitEnumFlag === true || isConvertToEnumFlag === true){
            let enumErrorMessage = "unit and convertTo can only be a celcius of farenheit"
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
    } catch (err) {
        return callback(err, null);
    }
}