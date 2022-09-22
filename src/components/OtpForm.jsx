import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  export function OtpForm() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        setOtp(event.target.value);
    }
  
    const handleSubmit = (event) => {
      // alert('A Phone number was submitted: ' + phone);
      navigate('/home');
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="OtpNumber" className="form-label">OTP</label>
                <input type="number" className="form-control mb-3" id="OtpNumber" value={otp} onChange={handleChange} />
                <input type="submit" value="Submit" className="btn btn-primary" />
            </div>  
        </form>
    );
  }