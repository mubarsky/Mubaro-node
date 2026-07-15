import { MubaroError } from "./MubaroError.js";

export class NotFoundError extends MubaroError {
  constructor(message: string) {
    super(message);

    this.name = "NotFoundError";
  }
}
