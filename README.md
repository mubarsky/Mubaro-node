# Mubaro Node.js SDK

Official Node.js SDK for Mubaro.

Send and verify one-time passwords (OTPs) with Mubaro's official Node.js SDK. Built with TypeScript for a fast, reliable, and developer-friendly authentication experience.

---

## Features

- 🚀 Simple API
- 🔐 Send OTPs with one method
- ✅ Verify OTPs with one method
- 🛡️ Typed errors
- 💙 First-class TypeScript support

---

## Requirements

- Node.js 18+
- Mubaro API Key

---

## Installation

```bash
npm install mubaro
```

---

## Quick Start

```ts
import { Mubaro } from "mubaro";

const mubaro = new Mubaro({
  apiKey: process.env.MUBARO_API_KEY!,
});
```

---

## Send an OTP

```ts
const response = await mubaro.otp.sendOtp({
  email: "user@example.com",
});

console.log(response);
```

Example response

```json
{
  "id": "...",
  "status": "sent",
  "expires_at": "..."
}
```

---

## Verify an OTP

```ts
const response = await mubaro.otp.verifyOtp({
  email: "user@example.com",
  otp: "123456",
});

console.log(response);
```

Example response

```json
{
  "id": "...",
  "status": "verified",
  "verified": true,
  "code": "OTP_VERIFIED",
  "message": "OTP verified successfully."
}
```

---

## Error Handling

```ts
import {
  InvalidOtpError,
  OtpExpiredError,
  OtpAlreadyUsedError,
} from "mubaro";

try {
  await mubaro.otp.verifyOtp({
    email,
    otp,
  });
} catch (error) {
  if (error instanceof InvalidOtpError) {
    console.log("Incorrect OTP.");
  }

  if (error instanceof OtpExpiredError) {
    console.log("OTP expired.");
  }

  if (error instanceof OtpAlreadyUsedError) {
    console.log("OTP already used.");
  }
}
```

---

## API

| Method | Description |
|----------|-------------|
| sendOtp() | Sends an OTP |
| verifyOtp() | Verifies an OTP |

---

## TypeScript

The Mubaro SDK is written in TypeScript and ships with complete type definitions.

No additional typings are required.

---

## Documentation

https://www.mubaro.app/docs

---

## License

MIT