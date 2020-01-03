const utility = require('../utility'),
    staticJson = require('../static/staticUnit.json'),
    tempEnum = ['celcius', 'farenheit'],
    lengthEnum = ["inch", "yard", "centimetre", "feet"],
    volumeEnum = ["millilitre", "litre", "gallon"],
    validationObj = require('./error.Handler');

module.exports.unitConversion = (body, callback) => {
    try {
        let
            errorMessage = "values found in request body";

        if (body.unit === null || body.value === null || body.convertTo === null)
            throw "null " + errorMessage;

        if (body.unit === undefined || body.value === undefined || body.convertTo === undefined)
            throw "undefined " + errorMessage;

        if (!validationObj.dataTypeValidate(body.unit, "string"))
            throw "unit cannot be a " + typeof (body.unit)

        if (!validationObj.dataTypeValidate(body.value, "number"))
            throw "value cannot be a " + typeof (body.value)

        if (!validationObj.dataTypeValidate(body.convertTo, "string"))
            throw "convertTo cannot be a " + typeof (body.convertTo)

        if (body.measureCriteria === "temperature") {
            if (!validationObj.enumTypeValidate(tempEnum, body))
                throw "unit and convertTo can only be a celcius or farenheit"

            utility.tempConversion(body, (err, data) => {
                if (data) {
                    return callback(null, data)
                }
            })
        } else if (body.measureCriteria === "length") {
            if (!validationObj.enumTypeValidate(lengthEnum, body))
                throw "unit and convertTo can only be a inch , yard , centimetre or feet";

            utility.lengthConversion(body, (err, data) => {
                if (data) {
                    return callback(null, data)
                }
            })
        } else {
            if (!validationObj.enumTypeValidate(volumeEnum, body)) 
                throw "unit and convertTo can only be a millilitre , litre or gallon";
            utility.volumeConversion(body, (err, data) => {
                if (data) {
                    return callback(null, data)
                }
            })
        }
    } catch (err) {
        return callback(err, null);
    }
}

module.exports.measureService = (params, callback) => {
    try {
        if (params == undefined || params === null || params === '')
            throw "wrong input for measure";
        if (params === "length") {
            return callback(null, staticJson.length)
        } else if (params === "volume") {
            return callback(null, staticJson.volume)
        } else {
            return callback(null, staticJson.temperature)
        }
    } catch (err) {
        return callback(err, null)
    }
}

