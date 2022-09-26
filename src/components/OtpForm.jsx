import React, { useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';

export async function phoneLoader({ params }) {
  return params.phone;
} 

  export function OtpForm() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const phone = useLoaderData();
    
    const handleChange = (event) => {
        setOtp(event.target.value);
    }
  
    const handleSubmit = (event) => {
      navigate('/home');
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <div className='card' style={{width: "25rem", height: "18rem"}}>
              <div className="card-body">
              <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png" />
                <h2>OTP</h2>
                <input type="number" className="form-control mb-3" id="OtpNumber" value={otp} onChange={handleChange} />
                <input type="submit" value="Next" className="btn btn-primary float-end" />
            </div>  
          </div>  
        </form>
    );
  }