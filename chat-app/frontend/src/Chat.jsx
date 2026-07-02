import React from 'react'

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2 className='chat-title'>Chat Box</h2>
        <span className='chat-user'>Logged in user : username</span>
        <button className='chat-logout'>Logout</button>
      </div>
    <div className="chat-message">
      <div className="chat-bubble">
        <span className='chat-sender'>Sender</span>
        <p>Sended message</p>
      </div>
      <div className="chat-bubble own-message">
        <span className='chat-sender'>User</span>
        <p>User message</p>
      </div>
       
    </div>
    <form action="" className='chat-form'>
      <input className='chat-input' type="text" name="" id="" />
      <button>Send</button>
    </form>
    </div>
  )
}

export default Chat