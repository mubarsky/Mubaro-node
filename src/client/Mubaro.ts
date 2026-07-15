import type { MubaroConfig } from "../types/config.js";
import { DEFAULT_BASE_URL } from "../core/constants.js";
import { HttpClient } from "../core/HttpClient.js";
import { Otp } from "../modules/otp.js";

export class Mubaro {
  public readonly apiKey: string;
  public readonly baseUrl: string;
  private readonly http: HttpClient;
  public readonly otp: Otp;
  constructor(config: MubaroConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl ?? DEFAULT_BASE_URL;
    this.http = new HttpClient(this.baseUrl, this.apiKey);
    this.otp = new Otp(this.http);
  } 


}
