const {validationResult} = requires('express-validator');
const {HTTP_STATUS} = require('../utils/constants');


const validateRequest = (req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            status: 'error',
            message: 'Validation failed',
            errors: errors.array().map(err =>({
                field: err.path,
                message: err.msg
            }))
        });
    }

    next();
};

module.exports = validateRequest;