import React, { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../Context/ContactContext";
import { apiURL } from "../../Constants/apiEndPoints";
import Spinner from "../../Components/Spinner";
import { useHeaders } from "../../Constants/headers";
import "./style.css";

export default function Contacts() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { contacts, setContacts, setCurrentContact } =
    useContext(ContactContext);
  const headers = useHeaders();

  // Function to fetch contacts
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiURL.fetchContacts, {
        method: "GET",
        headers: headers,
      }).then((res) => res.json());

      if (response) {
        let contactArray = response.contacts_list;
        contactArray.sort((a, b) => a.contact_name.localeCompare(b.contact_name));
        setContacts(contactArray);
      } else {
        console.log("Error displaying the contacts");
      }
    } catch (e) {
      console.log("Error fetching contacts", e);
    }
    setLoading(false);
  };

  // Function to handle navigation
  const nav = (moveIndex) => {
    const items = document.querySelectorAll(".contact");
    const currentIndex = [...items].indexOf(document.activeElement);
    let nextIndex = currentIndex + moveIndex;

    // Wrap around navigation
    if (nextIndex < 0) nextIndex = items.length - 1;
    if (nextIndex >= items.length) nextIndex = 0;

    items[nextIndex].focus();
  };

  // Keydown event handler
  const handleKeyDown = useCallback((e) => {
    console.log("e==========>", e);
    console.log("e.key=>", e.key);

    switch (e.key) {
      case "ArrowUp":
        nav(-1);
        break;
      case "ArrowDown":
        nav(1);
        break;
      case "ArrowLeft":
        nav(-1);
        break;
      case "ArrowRight":
        nav(-1);
        break;
    }
  }, []);

  // useEffect to add and remove event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    fetchContacts();
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="contacts">
      {loading ? (
        <Spinner />
      ) : (
        contacts.map((contact, index) => (
          <div
            className="contact"
            key={contact.contact_id}
            tabIndex={index === 0 ? 0 : -1}  // ✅ First item focusable
          >
            <div className="userDetails">
              <i className="fa-solid fa-circle-user profile"></i>
              <h6 className="uname">{contact.contact_name}</h6>
            </div>

            <div className="icons">
              <button
                className="chatBtn"
                onClick={() => {
                  setCurrentContact(contact.contact_id);
                  navigate("/chatscreen");
                }}
              >
                <i className="fa-solid fa-message"></i>
              </button>
              <button className="edit">
                <i className="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
