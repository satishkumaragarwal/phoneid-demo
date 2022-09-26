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
            <div className="m-4 d-flex flex-column justify-content-center">
              <img style={{width: "30%"}} src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png" />
                <h2 className='my-2'>Verify phone number</h2>
                <span className='my-1'>Enter the OTP sent to +91 951342XXXX</span>

                <input type="number" className="form-control my-3" id="OtpNumber" value={otp} onChange={handleChange} />
                <input type="submit" value="Next" className="btn btn-primary align-self-end col-3" />
            </div>  
        </form>
    );
  }