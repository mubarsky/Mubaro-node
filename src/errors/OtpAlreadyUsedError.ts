import { MubaroError } from "./MubaroError.js";

export class OtpAlreadyUsedError extends MubaroError {
  constructor(message: string, code?: string) {
    super(message, code);

    this.name = "OtpAlreadyUsedError";
  }
}
