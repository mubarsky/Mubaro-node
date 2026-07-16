import { Mubaro } from "./src/index.js";

const mubaro = new Mubaro({
  apiKey: "mubaro_live_d0e030f43974ea4549a277ce15a8539a74c27cc81c2d6c83",
});


//   const send = await mubaro.otp.sendOtp({
//     email: "ismailmubarak1221@gmail.com",
//   });

// console.log(send);
  
  const verify = await mubaro.otp.verifyOtp({
    email: "ismailmubarak1221@gmail.com",
    otp: "853007",
  });

  console.log(verify);
