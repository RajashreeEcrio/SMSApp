// Header configuration that can be used for all API calls

import { useContext } from "react";
import { UserDataContext } from "../Context/UserDataContext";

// function that converts & returns the given parameter to base64 string
export const convertToBase64 = (key, value) => {
  return btoa(`${key}:${value}`);
};

export const useHeaders = () => {
  const { phoneNum, password } = useContext(UserDataContext);
  return {
    "Authorization": `Basic ${convertToBase64("+919952528424", "ecrio@123")}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
};
