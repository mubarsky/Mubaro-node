import { MubaroError } from "./MubaroError.js";

export class OtpExpiredError extends MubaroError {
  constructor(message: string, code?:  string) {
    super(message,code);

    this.name = "OtpExpiredError";
  }
}
