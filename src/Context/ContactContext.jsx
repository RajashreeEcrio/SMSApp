import { createContext, useState } from "react";

// creating context
export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    {
      contactName: "User 1",
      contactNum: "+911000000001",
    },
    {
      contactName: "User 2",
      contactNum: "+911000000002",
    },
    {
      contactName: "User 3",
      contactNum: "+911000000003",
    },
    {
      contactName: "User 4",
      contactNum: "+911000000004",
    },
    {
      contactName: "User 5",
      contactNum: "+911000000005",
    },
    {
      contactName: "User 6",
      contactNum: "+911000000006",
    },
    {
      contactName: "User 7",
      contactNum: "+911000000007",
    },
    {
      contactName: "User 8",
      contactNum: "+911000000008",
    },
  ]);
  const [currentContact, setCurrentContact] = useState(null);

  return (
    <ContactContext.Provider
      value={{ contacts, setContacts, currentContact, setCurrentContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
