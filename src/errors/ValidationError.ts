import { MubaroError } from "./MubaroError.js";

export class ValidationError extends MubaroError {
  constructor(message: string) {
    super(message);

    this.name = "ValidationError";
  }
}
