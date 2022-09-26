import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function PhoneForm() {
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
        <div className="m-4 d-flex flex-column">
          <img className='align-self-start' style={{width: "30%"}} src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png" />
            <h2 className='my-2'>Sign up</h2>
            <input type="tel" className="form-control mb-3" id="PhoneNumber" value={phone} onChange={handleChange} placeholder="Phone number" />
            <input type="submit" value="Next" className="btn btn-primary align-self-end col-3" />
        </div> 
    </form>
  );
}