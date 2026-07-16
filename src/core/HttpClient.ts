import type { HttpMethod } from "../types/http.js";
import {AuthenticationError,MubaroError,NotFoundError,ValidationError,RateLimitError} from "../errors/index.js";
export class HttpClient {
  constructor(
    private readonly baseUrl: string,
    private readonly apiKey: string,
  ) {}

  async request<T>(
    method: HttpMethod,
    path: string,
    body?: unknown,
  ): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
     this.handleError(
       response.status,
       data.message ?? "An unknown error occurred.",
     );
    }

    return data as T;
  }

  private handleError(status: number, message: string): never {
    switch (status) {
      case 400:
      case 422:
        throw new ValidationError(message);

      case 401:
      case 403:
        throw new AuthenticationError(message);

      case 404:
        throw new NotFoundError(message);

      case 429:
        throw new RateLimitError(message);

      default:
        throw new MubaroError(message || "Something went wrong.");
    }
  }
}
