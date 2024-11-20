import axios from "axios";
import { User } from "../types/user";

const loginQuery = async (user: User) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_SIDE_API_URL}/login`,
      {
        email: user.email,
        password: user.password,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error: any | Error) {
    throw new Error(error.response?.data.message);
  }
};

const signupQuery = async (user: User) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_SIDE_API_URL}/signup`,
      {
        name: user.fname?.trim() + " " + user.lname?.trim(),
        email: user.email,
        password: user.password,
      }
    );
    return response.data;
  } catch (error: any | Error) {
    throw new Error(error.response?.data.message);
  }
};

const signOutQuery = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_SIDE_API_URL}/signout`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error: any | Error) {
    console.error(error);
    throw new Error(error.response?.data.message);
  }
};

const otpVerificationQuery = async (email: string, otp: string) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_SIDE_API_URL}/verify-otp`,
      {
        email: email.trim(),
        otp: otp.trim(),
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error: any | Error) {
    throw new Error(error.response?.data.message);
  }
};

const dashboardDataQuery = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_SIDE_API_URL}/dashboard`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error: any | Error) {
    throw new Error(error.response?.data.message);
  }
};

export {
  loginQuery,
  signupQuery,
  otpVerificationQuery,
  signOutQuery,
  dashboardDataQuery,
};
