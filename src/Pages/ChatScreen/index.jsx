import React, { useContext, useRef, useState } from "react";
import TextBox from "../../Components/TextBox";
import SendButton from "../../Components/SendButton";
import ChatBubble from "../../Components/ChatBubble";
import "./style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../Context/ContactContext";

export default function ChatScreen() {
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([]);
  const { contacts, currentContact } = useContext(ContactContext);
  const chatRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  const currentUser = contacts.find(
    (value) => value.contactNum === currentContact
  );

  // to handle message typing
  const messageChange = (e) => {
    setMsg(e.target.value);
  };

  // function to handle recording voice
  const voiceRecord = () => {};

  // handles message sending
  const messageSend = () => {
    if (msg.trim() === "") {
      alert("Message can't be empty");
    } else {
      let msgarray = [...chats];
      msgarray.push(msg);
      setChats(msgarray);
      setMsg("");
    }
  };

  const delMessages = () => {
    setChats([]);
  };

  // scroll to bottom automatically when a message is sent/received
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chats]);

  useEffect(() => {
    // to handle focus of textfield and button
    const handleFocus = (e) => {
      if (e.key === "Enter") {
        textRef.current.focus();
      } else if (e.key === "ArrowRight") {
        messageSend();
      }
    };
    document.addEventListener("keydown", handleFocus);
    return () => {
      document.removeEventListener("keydown", handleFocus);
    };
  }, []);

  return (
    <>
      <div className="screen">
        {/* header that has username & number */}
        <div className="header">
          <div className="leftbox">
            <button className="back" tabIndex="0" onClick={() => navigate(-1)}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <div className="uname">
              <h4 style={{ color: "#fff" }}>{currentUser.contactName}</h4>
              <h6 style={{ color: "#fff" }}>{currentUser.contactNum}</h6>
            </div>
          </div>
          {chats.length > 0 && (
            <button className="del" onClick={delMessages}>
              <i class="fa-solid fa-trash"></i>
            </button>
          )}
        </div>
        <hr style={{ color: "#999" }} />

        {/* chat screen, where the msgs are displayed */}
        <div ref={chatRef} className="chatwindow">
          {chats.length > 0 &&
            chats.map((currentmsg, index) => (
              <ChatBubble
                message={currentmsg}
                className={index % 2 === 0 ? "sendBubble" : "receiveBubble"}
              />
            ))}
        </div>

        {/* has input text box & send button */}
        <div className="box">
          <TextBox
            placeholder={"Message..."}
            className="textbox"
            onChange={messageChange}
            msgValue={msg}
            ref={textRef}
          />
          <SendButton
            onClick={msg.trim() === "" ? voiceRecord : messageSend}
            className="sendBtn"
            icon={
              msg.trim() === "" ? (
                <i class="fa-solid fa-microphone"></i>
              ) : (
                <i class="fa-solid fa-paper-plane"></i>
              )
            }
          />
        </div>
      </div>
    </>
  );
}
