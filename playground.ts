import { Mubaro } from "./src/index.js";

const mubaro = new Mubaro({
  apiKey: "YOUR_API_KEY",
});


  const send = await mubaro.otp.sendOtp({
    email: "ismailmubarak1221@gmail.com",
  });

console.log(send);
  
  const verify = await mubaro.otp.verifyOtp({
    email: "ismailmubarak1221@gmail.com",
    otp: "123456",
  });

  console.log(verify);
