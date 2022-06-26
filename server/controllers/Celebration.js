
const ObjectID = require("mongodb").ObjectID;
const employeeProfile = require('../models/employee-profile');

module.exports.celebration = async function(req, res) {
    try {
        var DetailsInfo = [];
        console.log(req.body);
        var todayDate = new Date().toISOString().slice(0, 10);
        // console.log("date", new Date(ji.metaData.createdAt).toISOString().slice(0, 10), todayDate);
        var returnData = await employeeProfile.find({ companyID: req.params.companyID });
        // var matchDate = new Date(ji.metaData.createdAt).toISOString().slice(0, 10)
        console.log(new Date(returnData.dob).toISOString().slice(0, 10) == todayDate);
        if (new Date(returnData.dob).toISOString().slice(0, 10) == todayDate) {
            for (let i = 0; i < returnData.length; i++) {
                DetailsInfo[i] = {
                    name: returnData[i].family.name,
                    age: returnData[i].family.age,
                }
            }
        }else if(new Date(returnData.joiningDate).toISOString().slice(0, 10) == todayDate ){
            for (let i = 0; i < returnData.length; i++) {
                DetailsInfo[i] = {
                    name: returnData[i].family.name,
                    age: returnData[i].family.age,
                }
            }
        }
        res.send({ status: 'success', message: 'Data successfully find', data: DetailsInfo })
    } catch (error) {

    }
}