const mongoose = require('mongoose');
const MetaData = require('./meta-data');
// const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


const shiftSchema = new mongoose.Schema({

    shift: String,
    minimumTime: String,
    maximumTime: String,
    ActualTime: String,
    metaData: MetaData.schema,
    companyId: { type: ObjectId }
})

module.exports = new mongoose.model('test', shiftSchema);
