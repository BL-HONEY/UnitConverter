module.exports.tempConversion = (body, callback) => {
    if (body.unit === "celcius") {
        let valueInFarenheit = (body.value * 9 / 5) + 32
        return callback(null, valueInFarenheit);
    } else if (body.unit === "farenheit") {
        console.log("i am here at 10");

        let valueInCelcius = (body.value - 32) * 5 / 9
        return callback(null, valueInCelcius)
    }
}