const showSendOtpButton = (otpButton, aadhaarInputBar) => {
  aadhaarInputBar.oninput = () => {
    otpButton.disabled = aadhaarInputBar.value.length < 12;
    aadhaarInputBar.value = aadhaarInputBar.value.slice(0, 12);
  };
};

const showInputOtpBar = (sendOtpButton, otpSection) => {
  sendOtpButton.onclick = () => {
    otpSection.classList.remove("hidden");
  };
};

const setUpVerifyOtpButton = (inputOtpBar, verifyOtpButton, otp) => {
  verifyOtpButton.onclick = () => {
    if (parseInt(inputOtpBar.value) === otp) {
      console.log("successful");
    } else {
      console.log("Failure");
    }
  };
};

const generateOTP = () => Math.round(Math.random() * 10000);

const setUpSendOtpButton = (otpButton) => {
  const otp = generateOTP();

  otpButton.onclick = () => {
    console.log("sending otp to aadhaar linked mobile number");
    console.log("OTP: " + otp);
  };

  return otp;
};

const main = () => {
  const sendOtpButton = document.getElementById("sendOtpButton");
  const aadhaarInputBar = document.getElementById("aadhaar");
  const inputOtpBar = document.getElementById("otpSection");
  const verifyOtpButton = document.getElementById("verify");
  showSendOtpButton(sendOtpButton, aadhaarInputBar);
  showInputOtpBar(sendOtpButton, inputOtpBar);
  const otp = setUpSendOtpButton(sendOtpButton);
  setUpVerifyOtpButton(inputOtpBar, verifyOtpButton, otp);
};

window.onload = main;
