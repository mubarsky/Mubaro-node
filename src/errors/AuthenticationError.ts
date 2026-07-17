import {MubaroError} from "./MubaroError.js";

export class AuthenticationError extends MubaroError {
  constructor(message: string, code?: string) {
    super(message, code);

    this.name = "AuthenticationError";
  }
}
