export interface SendOtpRequest {
  email: string;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
  otp_id: string;
  status: string;
  recipient: string;
  expires_at: string;
}  