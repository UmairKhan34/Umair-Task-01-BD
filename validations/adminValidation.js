const Joi = require("joi");

module.exports = {
  createAdminSchema: async (req, res, next) => {
    const createUser = Joi.object({
      username: Joi.string().min(3).max(34).required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
        .required(),
    });
    try {
      await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
