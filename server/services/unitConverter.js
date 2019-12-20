const utility = require('../utility');
const tempEnum = ['celcius', 'farenheit']
const lengthEnum = ["inch", "yard", "centimetre", "feet"]
const volumeEnum = ["millilitre", "litre","gallon"]
module.exports.temperatureConversion = (body, callback) => {
    try {
        let
            errorMessage = "values found in request body",
            errorArray = [],
            isUnitEnumFlag = true,
            isConvertToEnumFlag = true;
        if (body.unit === null || body.value === null || body.convertTo === null) {
            let nullErrorMessage = "null " + errorMessage;
            errorArray.push(nullErrorMessage)
            throw errorArray;
        }
        if (body.unit === undefined || body.value === undefined || body.convertTo === undefined) {
            let undefinedErrorMessage = "undefined " + errorMessage;
            errorArray.push(undefinedErrorMessage);
            throw errorArray;
        }
        if (typeof (body.unit) !== "string") {
            let TypeErrorMessage = "unit cannot be a " + typeof (body.unit)
            errorArray.push(TypeErrorMessage);
            throw errorArray;
        }
        if (typeof (body.value) !== "number") {
            let TypeErrorMessage = "value cannot be a " + typeof (body.value)
            errorArray.push(TypeErrorMessage);
            throw errorArray;
        }
        if (typeof (body.convertTo) !== "string") {
            let typeErrorMessage = "convertTo cannot be a " + typeof (body.convertTo)
            errorArray.push(typeErrorMessage);
            throw errorArray;
        }
        if (body.measureCriteria === "temperature") {
            for (let i = 0; i < tempEnum.length; i++) {
                if (body.unit === tempEnum[i]) {
                    isUnitEnumFlag = false;
                }
                if (body.convertTo === tempEnum[i]) {
                    isConvertToEnumFlag = false
                }
            }
            if (isUnitEnumFlag === true || isConvertToEnumFlag === true) {
                let enumErrorMessage = "unit and convertTo can only be a celcius or farenheit"
                errorArray.push(enumErrorMessage)
                throw errorArray
            }
            utility.tempConversion(body, (err, data) => {
                if (data) {
                    return callback(null, data)
                }
            })
        } else if (body.measureCriteria === "length") {
            for (let i = 0; i < lengthEnum.length; i++) {
                if (body.unit === lengthEnum[i]) {
                    isUnitEnumFlag = false;
                }
                if (body.convertTo === lengthEnum[i]) {
                    isConvertToEnumFlag = false
                }
            }
            if (isUnitEnumFlag === true || isConvertToEnumFlag === true) {
                let enumErrorMessage = "unit and convertTo can only be a inch , yard , centimetre or feet"
                errorArray.push(enumErrorMessage)
                throw errorArray
            }
            utility.lengthConversion(body, (err, data)=> {
                if(data){
                    return callback(null, data)
                }
            })
        } else  {
            for (let i = 0; i < volumeEnum.length; i++) {
                if (body.unit === volumeEnum[i]) {
                    isUnitEnumFlag = false;
                }
                if (body.convertTo === volumeEnum[i]) {
                    isConvertToEnumFlag = false
                }
            }
            if (isUnitEnumFlag === true || isConvertToEnumFlag === true) {
                let enumErrorMessage = "unit and convertTo can only be a millilitre , litre or gallon"
                errorArray.push(enumErrorMessage)
                throw errorArray
            }
            utility.volumeConversion(body, (err, data)=> {
                if(data){
                    return callback(null, data)
                }
            })
        }
    } catch (err) {
        return callback(err, null);
    }
}