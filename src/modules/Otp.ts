import { HttpClient } from "../core/HttpClient.js";
import type { SendOtpRequest, VerifyOtpRequest } from "../requests/otp.js";
import type {  SendOtpResponse, VerifyOtpResponse } from "../responses/otp.js";

export class Otp {
  constructor(private readonly http: HttpClient) {}

  sendOtp(data: SendOtpRequest) {
    return this.http.request<SendOtpResponse>(
      "POST",
      "/otp-services/send-otp",
      data,
    );
  }

  verifyOtp(data: VerifyOtpRequest) {
    return this.http.request<VerifyOtpResponse>(
      "POST",
      "/otp-services/verify-otp",
      data,
    );
  }
}