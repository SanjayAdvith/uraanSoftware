import mongoose from 'mongoose'


const surveySchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    occupation: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true,
        default: 0
    },
    pin: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamp: true })


const Survey = mongoose.model('Survey', surveySchema)

export default Survey