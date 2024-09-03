const User = require('../models/User');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { email, password, firstName,username, lastName, country, role } = req.body;
    // validate all with joi here 
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        firstName: Joi.string().required(),
        username: Joi.string().required(),
        lastName: Joi.string().required(),
        country: Joi.string().required(),
        role: Joi.string().valid('client', 'freelancer', 'admin').required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({success: false, error: error.details[0].message });
    }

    // check if user already exists
    const emailFromDb = await User.findOne({ email });
    if(emailFromDb){
        return res.status(400).send({success: false, error: "User Already Exist!"});
    }

    // hash the password then store 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const user = await User.create({
        email,
        hashedPassword,
        username,
        firstName,
        lastName,
        country,
        role
    });

    // create jwt token and append with user array 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.header('auth-token', token).send({success: true, message: 'Registered Successfully!', user});

};


const login = async (req, res) => {
    const { email, password } = req.body;

    // validate all with joi here 
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({success: false, error: error.details[0].message });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send({success: false, error: "User not found!"});
    }
    // first hash the pass then compare 
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
        return res.status(400).send({success: false, error: "Invalid Password!"});
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.header('auth-token', token).send({success: true, message: 'Logged in Successfully!', user});
}

module.exports = { register, login };
