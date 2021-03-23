import React, {useContext, useEffect, useState} from 'react'
import {io} from "socket.io-client"
import "./../topnav/navbar.css"



export default function RealTimeChat(){
// const [messages, setMessages] = 

return(
    <rightNav>
      <div>
        {/* display each and every message in the state as a for loop */}
        {messages.length > 0 && messages.map(msg=> (
          <div>
            <p>
              {msg}
            </p>
          </div>
        ))}
        {/* input field */}
        <input value={message} name="message" onChange={e => onChange(e)}/>
        {/* button */}
        <button onClick={() => onClick()}>Send Message</button>
      </div>
      </rightNav>
)