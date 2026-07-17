import { MubaroError } from "./MubaroError.js";

export class InvalidOtpError extends MubaroError {
  constructor(message: string, code?: string) {
    super(message, code);

    this.name = "InvalidOtpError";
  }
}
