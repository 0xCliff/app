const Joi = require('joi');

const userSchema = Joi.object({
  user: {
    name: Joi.string().required(),
    username: Joi.string().max(50).required(),
    password: Joi.string().max(255).required(),
    email: Joi.string().max(255).required(),
  },
}).required();

module.exports = userSchema;
