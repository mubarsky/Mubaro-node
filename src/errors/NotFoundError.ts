import { MubaroError } from "./MubaroError.js";

export class NotFoundError extends MubaroError {
  constructor(message: string, code?: string) {
    super(message, code);

    this.name = "NotFoundError";
  }
}
