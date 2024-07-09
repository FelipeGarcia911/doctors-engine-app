import { SearchParams, ValidationResult } from "../types/types";

const hasAtLeastOne = (payload: SearchParams) => {
  return Object.keys(payload).length > 1;
};

const isNumberSize = (number?: string | undefined) => {
  return number ? number.length === 10 : true;
};

const isUSCountryCode = (country_code?: string | undefined) =>
  country_code?.toLowerCase() === "us";

const isValidCode = (code?: string | undefined) => code && code?.length === 2;

const isNotEmpty = (value?: string | undefined) => value && value?.length > 0;

const validate = (payload: SearchParams): ValidationResult => {
  let result = { hasError: false, message: "" };

  const hasOne = hasAtLeastOne(payload);
  if (!hasOne) {
    return { hasError: true, message: "Please fill at least one field" };
  }

  const isValidCountryCode = isValidCode(payload.country_code);
  if (!isValidCountryCode) {
    return {
      hasError: true,
      message: "Please enter a valid country code (e.g: US)",
    };
  }

  const isUS = isUSCountryCode(payload.country_code);
  if (isUS) {
    const isValidState = isValidCode(payload.state);
    if (!isValidState) {
      return {
        hasError: true,
        message: "Please enter a valid US state (e.g: FL)",
      };
    }

    const isValidCity = isNotEmpty(payload.city);
    if (!isValidCity) {
      return {
        hasError: true,
        message: "Please enter a valid city (e.g: Miami)",
      };
    }
  }

  const isValidNumber = isNumberSize(payload.number);
  if (!hasOne || !isValidNumber) {
    return { hasError: true, message: "Please enter a valid number" };
  }

  return result;
};

export default validate;
