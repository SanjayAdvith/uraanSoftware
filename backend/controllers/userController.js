import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Survey from '../models/surveyModel.js'

// login user

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})




// desc    Register a new user

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, address, qualification, mobile, pin } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        address,
        qualification,
        mobile,
        pin
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Get  all users

const getUsers = asyncHandler(async (req, res) => {
    const user = await User.find({})
    res.send(user)

})



const survey = asyncHandler(async (req, res) => {
    const { name, email, age, occupation, mobile, pin, address, district, state, message } = req.body



    const user = await Survey.create({


        name, email, age, occupation, mobile, pin, address, district, state, message
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const getSurveys = asyncHandler(async (req, res) => {
    const survey = await Survey.find({})
    res.send(survey)

})


export { login, registerUser, getUsers, getSurveys, survey }