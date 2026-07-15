export class MubaroError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "MubaroError";
  }
}
