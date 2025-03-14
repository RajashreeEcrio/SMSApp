import React, { useContext, useEffect, useState } from "react";
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

  // function that calls the Util server API
  const fetchContacts = async () => {
    const response = await fetch(apiURL.fetchContacts, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .catch((e) => console.log("Error fetching contacts", e));

    if (response) {
      let contactArray = response.contacts_list;
      contactArray.sort((a,b) =>
        a.contact_name.localeCompare(b.contact_name)
      );
      console.log(contactArray);
      
      setContacts(contactArray);
    } else {
      console.log("Error displaying the contacts");
    }
    setLoading(false);
  };

  // navigate to respective screens
  const navigateTo = (path) => {
    navigate(path);
  };

  // to fetch contacts on initial load
  useEffect(() => {
    fetchContacts();
    setLoading(true);
  }, []);

  return (
    <div className="contacts">
      {/* contacts array is mapped to display list of contacts */}
      {loading ? (
        <Spinner />
      ) : (
        contacts.map((contact) => (
          <div className="contact" key={contact.contact_id}>
            <div className="userDetails">
              <i class="fa-solid fa-circle-user profile"></i>
              <h6 className="uname">{contact.contact_name}</h6>
            </div>

            <div className="icons">
              <button
                className="chatBtn"
                onClick={() => {
                  setCurrentContact(contact.contact_id);
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
        ))
      )}
    </div>
  );
}
