export interface SendOtpRequest {
  email: string;
  from?: string;
  subject?: string;
  html?: string;
  text?: string;
  template?: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}
