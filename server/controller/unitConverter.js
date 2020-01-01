'use strict'
const unitConverterService = require("../services/unitConverter");
const measureEnum = ["length", "volume", "temperature"]
let measureEnumFLag = false;

class UnitConverterControl {

    conversionControl(req, res) {
        try {
            let measure = req.params.measure
            for (let i = 0; i < measureEnum.length; i++) {
                if (measure === measureEnum[i]) {
                    measureEnumFLag = true
                }
            }
            if (measureEnumFLag === false) {
                res.status(400).send({
                    status: false,
                    code: 400,
                    message: "measure can only be length, temperature or volume"
                })
            } else {
                let filteredReqBody = {
                    "convertTo": req.body.convertTo,
                    "value": req.body.value,
                    "unit": req.body.unit,
                    "measureCriteria": measure
                }

                unitConverterService.unitConversion(filteredReqBody, (err, response) => {
                    if (err) {
                        res.status(400).send({
                            status: false,
                            message: err
                        })
                    } else {
                        filteredReqBody.convertedValue = response
                        let responseBody = filteredReqBody
                        res.status(200).send({
                            status: true,
                            data: responseBody,
                            message: "converted successfully"
                        })
                    }
                })
            }


        } catch (err) {
            res.status(500).send({
                status: false,
                message: err
            })
        }

    }
    measureControl(req, res) {
        try {
            let measure = req.params.measure
            for (let i = 0; i < measureEnum.length; i++) {
                if (measure === measureEnum[i]) {
                    measureEnumFLag = true
                }
            }
            if (measureEnumFLag === false) {
                res.status(400).send({
                    status: false,
                    message: "measure can only be length, temperature or volume"
                })
            } else {
                unitConverterService.measureService(measure, (err, response) => {
                    //    if(err){
                    //     res.status(422).send({
                    //         status: false,
                    //         error: err
                    //       })
                    //    }else{
                    let responseBody = {
                        "measure": measure,
                        "units": response
                    }
                    res.status(200).send({
                        status: true,
                        code: 200,
                        data: responseBody,
                    })
                    //    }
                })
            }
        } catch (err) {
            res.status(500).send({
                status: false,
                message: err
            })
        }
    }
}

module.exports = new UnitConverterControl();