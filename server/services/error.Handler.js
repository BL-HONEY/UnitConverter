class ErrorHandler {
    constructor() {
        this.isUnitEnumFlag = false;
        this.isConvertToEnumFlag = false;

    }
    nullCheck(){

    }
    dataTypeValidate(value, dataType){
        if (typeof (value) !== dataType) 
        return false;
        return true;
    }
    enumTypeValidate(enumArray, toBeValidatedObj) {
        let isUnitEnumFlag = false;
        let isConvertToEnumFlag = false;

        for (let i = 0; i < enumArray.length; i++) {
            if (toBeValidatedObj.unit === enumArray[i]) {
                isUnitEnumFlag = true
            }
            if (toBeValidatedObj.convertTo === enumArray[i]) {
                isConvertToEnumFlag = true;
            }
        }
        if (isConvertToEnumFlag === false || isUnitEnumFlag === false)
            return false;
        return true;
    }
}

module.exports = new ErrorHandler;