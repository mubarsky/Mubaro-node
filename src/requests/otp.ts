export interface SendOtpRequest {
  email: string;
  subject?: string;
  html?: string;
  text?: string;
  template?: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}
