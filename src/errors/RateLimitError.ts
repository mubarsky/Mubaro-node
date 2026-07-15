import { MubaroError } from "./MubaroError.js";

export class RateLimitError extends MubaroError {
  constructor(message: string) {
    super(message);

    this.name = "RateLimitError";
  }
}
