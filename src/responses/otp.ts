export interface SendOtpResponse {
  id: string;
  status: string;
  expires_at: string;
}

export interface VerifyOtpResponse {
  id: string;
  status: string;
  verified: boolean;
  code: string;
  message: string;
}