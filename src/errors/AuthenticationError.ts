import {MubaroError} from "./MubaroError.js";

export class AuthenticationError extends MubaroError {
  constructor(message: string) {
    super(message);

    this.name = "AuthenticationError";
  }
}
