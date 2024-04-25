import Joi from "joi";

const createAmountValidation = Joi.object({
    amount: Joi.number().required()
});

export {
    createAmountValidation
}