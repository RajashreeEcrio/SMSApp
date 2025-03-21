import React from "react";

export default function TextBox({
  msgValue,
  maxLength,
  placeholder,
  className,
  id,
  onChange,
  ref,
  type,
}) {
  return (
    <>
      <input
        type={type !== "" ? type : "text"}
        className={className}
        id={id}
        value={msgValue}
        maxLength={maxLength ? maxLength : -1}
        placeholder={placeholder}
        onChange={onChange}
        tabIndex="1"
        ref={ref}
      />
    </>
  );
}
