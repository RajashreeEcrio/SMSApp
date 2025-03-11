import { createContext, useState } from "react";

// creating context
export const ContactContext = createContext();

// defining & sharing the context
export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  return (
    <ContactContext.Provider
      value={{ contacts, setContacts, currentContact, setCurrentContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
