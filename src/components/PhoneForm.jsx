import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function PhoneForm() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setPhone(event.target.value);
  }

  const handleSubmit = (event) => {
    // alert('A Phone number was submitted: ' + phone);
    navigate('/otp');
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
            <input type="tel" className="form-control mb-3" id="PhoneNumber" value={phone} onChange={handleChange} />
            <input type="submit" value="Signup" className="btn btn-primary" />
        </div>  
    </form>
  );
}