// Header configuration that can be used for all API calls

// function that converts & returns the given parameter to base64 string
const convertToBase64 = (key, value) => {
  return btoa(`${key}:${value}`);
};

export const headers = {
  "Authorization": `Basic ${convertToBase64("+919600816183", "ecrio@123")}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
