import { MubaroError } from "./MubaroError.js";

export class EmailDeliveryError extends MubaroError {
  constructor(message: string, code?: string) {
    super(message, code);

    this.name = "EmailDeliveryError";
  }
}
