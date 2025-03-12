import React from "react";

export default function TextBox({
  msgValue,
  maxLength,
  placeholder,
  className,
  onChange,
  ref,
  type,
}) {
  return (
    <>
      <input
        type={type !== "" ? type : "text"}
        className={className}
        value={msgValue}
        maxLength={maxLength ? maxLength : -1}
        placeholder={placeholder}
        onChange={onChange}
        tabIndex="0"
        ref={ref}
      />
    </>
  );
}
