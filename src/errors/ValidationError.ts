import { MubaroError } from "./MubaroError.js";

export class ValidationError extends MubaroError {
  constructor(message: string, code?: string) {
    super(message, code);

    this.name = "ValidationError";
  }
}
