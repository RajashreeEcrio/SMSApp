import React, { useState } from "react";
import logo from "../../assets/ecrio-logo.svg";
import TextBox from "../../Components/TextBox";
import Spinner from "../../Components/Spinner";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [loading, setLoading] = useState(false);

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
        <>
          <img src={logo} alt="" className="logo" />
          <div className="inputFields">
            <TextBox
              msgValue={uname}
              placeholder="Username"
              onChange={(e) => {
                setUname(e.target.value);
              }}
              className="loginInput"
            />
            <TextBox
              msgValue={password}
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="loginInput"
            />
            <TextBox
              msgValue={phoneNum}
              maxLength={13}
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNum(e.target.value);
              }}
              className="loginInput"
            />
          </div>
          <button type="button" className="loginBtn" onClick={validate}>
            Login
          </button>
        </>
      )}
    </div>
  );
}
