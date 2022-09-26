import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function MailCompose() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setPhone(event.target.value);
  }

  const handleSubmit = (event) => {
    navigate(`/otp/${phone}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='card' style={{width: "25rem", height: "18rem"}}>
        <div className="card-body">
          <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png" />
            <h2>Sign up</h2>
            <input type="tel" className="form-control mb-3" id="PhoneNumber" value={phone} onChange={handleChange} placeholder="Phone number" />
            <input type="submit" value="Next" className="btn btn-primary float-end" />
        </div> 
        </div>
    </form>
  );
}