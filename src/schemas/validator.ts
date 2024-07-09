import { SearchParams, ValidationResult } from "../types/types";
import Joi from "joi";

const validate = (
  payload: SearchParams,
  schema: Joi.Schema
): ValidationResult => {
  if (!schema) {
    return {
      hasError: true,
      message: "Validation schema is required.",
      params: null,
    };
  }

  let result = { hasError: false, message: "", params: null };

  const { error, value: validatedParams } = schema.validate(payload, {
    stripUnknown: true,
  });

  if (error) {
    const errorMessage = error.details
      .map((err: any) => err.message)
      .join(", ");
    result = { hasError: true, message: errorMessage, params: null };
  } else {
    result = { hasError: false, message: "", params: validatedParams };
  }

  return result;
};

export default validate;
