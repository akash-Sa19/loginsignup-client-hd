import axios from "axios";
import { User } from "../types/user";

const loginQuery = async (user: User) => {
  try {
    const response = await axios.post("/api/login", user);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

const signupQuery = async (user: User) => {
  try {
    const response = await axios.post("/api/signup", user);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

const otpVerificationQuery = async (user: User) => {
  try {
    const response = await axios.post("/api/otp-verification", user);
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
  }
};

export { loginQuery, signupQuery, otpVerificationQuery };
