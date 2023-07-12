import React from 'react'

export function MsgPreview({ msg }) {
  return (
    <div className="msg-preview">
      <div className="other">
        <div className="name">{msg.from}</div>
        <div className="msg">{msg.txt}</div>
      </div>

    </div>
  )
}
