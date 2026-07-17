import {
  MubaroError,
  ValidationError,
  AuthenticationError,
  RateLimitError,
  NotFoundError,
  InvalidOtpError,
  OtpExpiredError,
  OtpAlreadyUsedError,
  EmailDeliveryError,
} from "./index.js";

export function createError(
  status: number,
  code: string | undefined,
  message: string,
): Error {
  switch (code) {
    case "INVALID_OTP":
      return new InvalidOtpError(message, code);

    case "OTP_EXPIRED":
      return new OtpExpiredError(message, code);

    case "OTP_ALREADY_USED":
      return new OtpAlreadyUsedError(message, code);

    case "EMAIL_DELIVERY_FAILED":
      return new EmailDeliveryError(message, code);

    case "OTP_NOT_FOUND":
      return new NotFoundError(message, code);
  }

  switch (status) {
    case 400:
    case 422:
      return new ValidationError(message);

    case 401:
    case 403:
      return new AuthenticationError(message);

    case 404:
      return new NotFoundError(message);

    case 429:
      return new RateLimitError(message);

    default:
      return new MubaroError(message);
  }
}