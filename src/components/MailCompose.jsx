import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

export function MailCompose() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setPhone(event.target.value);
  }

  const onClose = () => {
    navigate('/home');
  }

  return (
    <form>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
              <button type="button" class="btn-close" aria-label="Close" onClick={onClose}/>
              <a class="navbar-brand center-block" href="#">New message</a>
              <i class="bi bi-send p-1" style={{ fontSize: "20px"}}/>
          </div>
      </nav>
    	<div class="d-flex flex-column h-100">
        <div class="d-flex flex-row border-0">
          <div class="p-1">To:</div>
          <div class="p-1">
            <input type="text" name="name" class="w-94 border-0" style={{ width: "180%"}}/>
          </div>
        </div>
        <hr style={{margin: '3px'}}/>
        <div class="p-1">
          <input type="text" name="name" class="w-94 border-0" style={{ width: "95%"}} placeholder="Add a subject"/>
        </div>  
        <hr style={{margin: '3px'}}/>
        <div class="p-2 h-100 flex-grow-1">
          <textarea
            id="test-mailing"
            name="test-mailing"
            required
            style={{width: '95%', height: '600px'}}
            class="border-0"
            placeholder="Type '@' to mention someone"
          />  
        </div>
    	</div>
  	</form>
  );
}
