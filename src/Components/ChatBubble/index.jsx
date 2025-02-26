import React from 'react'

export default function ChatBubble({message, className}) {
  return (
    <div className={className}>{message}</div>
  )
}
