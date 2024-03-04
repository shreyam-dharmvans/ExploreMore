const Joi = require('joi');

module.exports.listingSchema= Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        // image: Joi.string().allow("", null)
        image: Joi.object({
            url: Joi.string(),
            filename: Joi.string(),
        }).allow("",null),
    //     owner: Joi.string(),
    //     geometry: Joi.object({
    //         type: Joi.string(),
    //         coordinates: Joi.array(),
    //     }),
    }).required(),
    
});

module.exports.reviewSchema= Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});