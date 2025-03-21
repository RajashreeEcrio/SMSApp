import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../assets/ecrio_red_logo.png";
import TextBox from "../../Components/TextBox";
import Spinner from "../../Components/Spinner";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../Context/UserDataContext";
import "./style.css";

export default function Login() {
  const [uname, setUname] = useState("");
  const [port, setPort] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [currentId, setCurrentId] = useState("0");
  const cId=useRef("0");

  const {
    phoneNum,
    setPhoneNum,
    password,
    setPassword,
    serverIP,
    setServerIP,
  } = useContext(UserDataContext);

  const navigate = useNavigate();

  const validate = () => {
    if (
      uname.trim() !== "" &&
      password.trim() !== "" &&
      phoneNum.trim() !== ""
    ) {
      const phoneregex = /^[+]?[0-9]*$/;
      if (phoneregex.test(phoneNum) && phoneNum.length === 13) {
        login();
      } else {
        alert(
          "Phone number must 13 characters & should only contain numbers & '+'."
        );
      }
    } else {
      alert("Plese fill all the fields!");
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/contacts");
      setLoading(false);
    }, 2000);
  };

  const inputFocus = (id) => {
    let inputRef = document.getElementById(id);
    inputRef.focus();
    console.log("inputFocus");
  };

  const handleKeyDown = (e) => {
    console.log("I'm called");
    
    if (e.key === "ArrowDown") {
      let newId=`${parseInt(cId.current)+1}`;
      cId.current=newId;
      inputFocus(newId);
      console.log("newId=======>",newId);
      
    } else if (e.key === "ArrowUp") {
      let newId=`${parseInt(cId.current)-1}`;
      cId.current=newId;
      inputFocus(newId);
      console.log("newId=======>",newId);

    }
  };

  window.addEventListener("keydown", handleKeyDown);

  useEffect(() => {
    inputFocus(cId.current);
  }, []);

  return (
    <div className="loginBackground">
      {loading ? (
        <Spinner />
      ) : (
        <div className="wrapper">
          <img src={logo} alt="" className="logo" />
          <div className="inputFields">
            {/* UserName */}
            <TextBox
              msgValue={uname}
              placeholder="Username"
              onChange={(e) => {
                setUname(e.target.value);
              }}
              className="loginInput"
              id={"0"}
            />

            {/* Password */}
            <div className="btnwrapper">
              <TextBox
                msgValue={password}
                placeholder="Password"
                type={showPwd ? "text" : "password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="loginInput"
                id={"1"}
              />
              <button
                type="button"
                className="iconbtn"
                id="2"
                onClick={() => {
                  setShowPwd(!showPwd);
                }}
              >
                {showPwd ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
            </div>

            {/* Phone Number */}
            <TextBox
              msgValue={phoneNum}
              maxLength={13}
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNum(e.target.value);
              }}
              className="loginInput"
              id={"3"}
            />

            {/* Server IP address */}
            <TextBox
              msgValue={serverIP}
              placeholder="Server Address"
              onChange={(e) => {
                setServerIP(e.target.value);
              }}
              className="loginInput"
              id={"4"}
            />

            {/* Port Address */}
            <TextBox
              msgValue={port}
              placeholder="Port"
              onChange={(e) => {
                setPort(e.target.value);
              }}
              className="loginInput"
              id={"5"}
            />
          </div>
          <button type="button" className="loginBtn" id="6" onClick={validate}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}
