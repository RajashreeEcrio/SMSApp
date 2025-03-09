import React from 'react'

export default function TextBox({ msgValue, placeholder, className, onChange, ref }) {
  return (
    <>
    <input
        type="text"
        className={className}
        value={msgValue}
        placeholder={placeholder}
        onChange={onChange}
        tabIndex="0"
        ref={ref}
      />
    </>
  )
}
