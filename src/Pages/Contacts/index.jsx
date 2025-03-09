import React, { useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../Context/ContactContext";

export default function Contacts() {
  const navigate = useNavigate();
  const { contacts, setCurrentContact } = useContext(ContactContext);

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="contacts">
      {contacts.map((contact) => (
        <div className="contact" key={contact.contactNum}>
          <div className="userDetails">
            <i class="fa-solid fa-circle-user profile"></i>
            <h6 className="uname">{contact.contactName}</h6>
          </div>

          <div className="icons">
            <button
              className="chatBtn"
              onClick={() => {
                setCurrentContact(contact.contactNum);
                navigateTo("/chatscreen");
              }}
            >
              <i className="fa-solid fa-message"></i>
            </button>
            <button className="edit">
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
