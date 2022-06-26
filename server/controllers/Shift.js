const ObjectID = require("mongodb").ObjectID;
const shiftCheck = require('../models/shift');

module.exports.ShiftChange = async function(req, res) {
    try {
        // var todayDate = new Date().toISOString().slice(0, 10);
        console.log(req.body);
        var shift = req.body.shifty;
        console.log(shift);
        if (shift === '9:00AM-6:30PM') {
            var returnTest = new test({
                shift: '9:00AM-6:30PM',
                ActualTime: '9:30h',
                maximumTime: '6:45PM',
                minimumTime: '6:30PM',
                companyId: req.body.userId
            })
            console.log(returnTest);
        } else if (shift === '10:00AM-7:30PM') {
            var returnTest = {
                shift: '10:00AM-7:30PM',
                ActualTime: '9:30h',
                maximumTime: '7:45PM',
                minimumTime: '7:30PM',
                companyId: req.body.userId
            }
        } else if (shift === '9:30AM-7:00PM') {
            var returnTest = {
                shift: '9:30AM-7:00PM',
                ActualTime: '9:30h',
                maximumTime: '7:15PM',
                minimumTime: '7:00PM',
                companyId: req.body.userId
            }
        }
        await shiftCheck.create(returnTest);
        res.send({ status: 'success', message: 'Save Data successfully...!!!', data: returnTest })

    } catch (error) {
        res.send(error)
    }
}