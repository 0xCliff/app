const Joi = require('joi');

const authSchema = Joi.object({
  user: {
    username: Joi.string().min(1).max(50).required(),
    password: Joi.string().min(1).max(255).required(),
  },
}).required();

module.exports = authSchema;
