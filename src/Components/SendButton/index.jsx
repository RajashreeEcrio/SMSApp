import React from "react";

export default function SendButton({ className, onClick, icon }) {
  return (
    <>
      <button className={className} onClick={onClick} tabIndex="0">
        {icon}
      </button>
    </>
  );
}
