import { createContext, useState } from "react";

//creating user context
export const UserDataContext = createContext();

// Defining & sharing the context
export const UserDataProvider = ({ children }) => {
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [serverIP, setServerIP] = useState("");

  return (
    <UserDataContext.Provider
      value={{
        phoneNum,
        setPhoneNum,
        password,
        setPassword,
        serverIP,
        setServerIP,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
