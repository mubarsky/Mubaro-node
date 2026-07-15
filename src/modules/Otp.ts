import { HttpClient } from "../core/HttpClient.js";
import type { SendOtpRequest, SendOtpResponse } from "../types/otp.js";

export class Otp {
  constructor(private readonly http: HttpClient) {}

  sendOtp(data: SendOtpRequest) {
    return this.http.request<SendOtpResponse>( 
      "POST",
      "/otp-services/send-otp",
      data,
    );
  }
}