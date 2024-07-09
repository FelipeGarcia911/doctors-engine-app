import Joi from "joi";

const Schema = Joi.object({
  number: Joi.string().length(10).optional().label("NPI"),
  first_name: Joi.string().optional().label("First Name"),
  last_name: Joi.string().optional().label("Last Name"),
  country_code: Joi.string()
    .length(2)
    .lowercase()
    .optional()
    .label("Country Code"),
  state: Joi.when("country_code", {
    is: "us",
    then: Joi.string().length(2).required().lowercase().label("State"),
    otherwise: Joi.string().length(2).optional().lowercase().label("State"),
  }),
  city: Joi.when("country_code", {
    is: "us",
    then: Joi.string().required().lowercase().label("City"),
    otherwise: Joi.string().optional().lowercase().label("City"),
  }).when("state", {
    is: Joi.exist(),
    then: Joi.required(),
    otherwise: Joi.string().optional().lowercase().label("City"),
  }),
  postal_code: Joi.string().optional().label("Postal Code"),
  limit: Joi.number().integer().max(100).optional().label("Limit"),
})
  .or(
    "number",
    "first_name",
    "last_name",
    "country_code",
    "city",
    "state",
    "postal_code"
  )
  .messages({
    "object.missing": "At least one of the fields {#paths} is required.",
  })
  .options({ stripUnknown: true, abortEarly: false });

export default Schema;
