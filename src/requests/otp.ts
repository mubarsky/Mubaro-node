export interface SendOtpRequest {
  email: string;

  subject?: string;

  html?: string;

  text?: string;

  template?: string;
}
