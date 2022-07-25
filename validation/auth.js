const {body, validationResult} = require('express-validator')
const {Users} = require('../models')
exports.registerValidator = [
    body('username').notEmpty().withMessage('Username is required')
                    .isLength({min:4, max:50}).withMessage('Invalid username')
                    .custom(async function(username){
                        const user = await Users.findOne({where: {username}})
                        if(user){
                            throw new Error('Username exist')
                        }
                    }),
    body('password').notEmpty().withMessage("Password is required")
                    .isLength({min:8, max: 16}).withMessage("Password should be between 8 to 16 characters long"),

    body('password_confirm').custom(function(password, {req}){
        if(req.body.password !== password){
            throw new Error('Passwords do not match')
        }
        return true
    })
                    
]

exports.loginValidator = [
    body('username').notEmpty().withMessage('Username is required')
                    .isLength({min:4, max:50}).withMessage('Invalid username'),
    body('password').notEmpty().withMessage("Password is required")
                    .isLength({min:8, max: 16}).withMessage("Password should be between 8 to 16 characters long")
                    
]