const Joi = require('joi');

const registerValidation = data =>{

    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);

}


const loginValidation = data =>{

    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);

}

const accountValidation = data =>{
    const schema = Joi.object({
        userId : Joi.string().min(1).required(),
        token : Joi.string().min(5).required(),
        token_secret : Joi.string().min(5).required(),
    });
    return schema.validate(data);

}

const tweetValidation = data =>{
    
    const schema = Joi.object({
        handle : Joi.string().min(1).required(),
        tweets : Joi.array(),
    });
    return schema.validate(data);

}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.accountValidation = accountValidation;
module.exports.tweetValidation = tweetValidation;