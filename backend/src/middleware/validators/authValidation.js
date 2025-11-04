const { body } = require('express-validator');
const { isValidEmail } = require('../../utils/validators');
const passwordService = require('../../services/passwordService');

const signupValidation = [
    body('body')
     .trim()
     .notEmpty()
     .withMessage('Valid Email is required')
     .isEmail()
     .withMessage('Provide a valid email address')
     .normalizeEmail()
     .custom((value)=>{
        if(!isValidEmail(value)){
            throw new Error('Invalid Email')
        }
        return true;
    }),

    body('password')
      .notEmpty()
      .withMessage('Password is required')
      .isLength({min: 6})
      .withMessage('Password must be at least 6 characters')
      .custom((value)=>{
        const validation = passwordService.validatePasswordStrength(value);

        if(!validation.isValid){
            throw new Error(validation.errors.join(' '))
        }
        return true;
    })

];

const loginValidation = [
  // Email validation (simpler than signup)
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  // Password validation (just check it exists)
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

module.exports = {
  signupValidation,
  loginValidation
};