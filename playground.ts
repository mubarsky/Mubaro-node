import { Mubaro } from "./src/index.js";

const mubaro = new Mubaro({
  apiKey: "mubaro_live_d0e030f43974ea4549a277ce15a8539a74c27cc81c2d6c83",
});

try {
  const response = await mubaro.otp.sendOtp({
    email: "ismailmubarak1221@gmail.com",
  });

  console.log(response);
} catch (error) {
  console.error(error);
}