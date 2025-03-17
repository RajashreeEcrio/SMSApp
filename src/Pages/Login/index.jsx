import React, { useContext, useState } from "react";
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
              />
              <button
                type="button"
                className="iconbtn"
                onClick={() => {
                  setShowPwd(!showPwd);
                }}
              >
                {showPwd ? (
                  <i class="fa-solid fa-eye-slash"></i>
                ) : (
                  <i class="fa-solid fa-eye"></i>
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
            />

            {/* Server IP address */}
            <TextBox
              msgValue={serverIP}
              placeholder="Server Address"
              onChange={(e) => {
                setServerIP(e.target.value);
              }}
              className="loginInput"
            />

            {/* Port Address */}
            <TextBox
              msgValue={port}
              placeholder="Port"
              onChange={(e) => {
                setPort(e.target.value);
              }}
              className="loginInput"
            />
          </div>
          <button type="button" className="loginBtn" onClick={validate}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}
