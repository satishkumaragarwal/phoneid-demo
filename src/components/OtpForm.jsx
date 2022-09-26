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
      // alert('A Phone number was submitted: ' + phone);
      const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY4NEQ1OTcyRTBCM0ZCMTdFRTdDRkI0MzUzQ0YyMkYzMjlDNjkyNEYiLCJ4NXQiOiJhRTFaY3VDei14ZnVmUHREVTg4aTh5bkdrazgiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJhcHBpZCI6IjJBQkVFNkI2LUYwOTItNDI3RS04MThCLTE5NzY0QjYzQzc5MiIsInNjcCI6IkNhbGVuZGFyLlJlYWQgQ2FsZW5kYXIuV3JpdGUgQ2FsZW5kYXJzLlJlYWRXcml0ZSBNYWlsYm94U2V0dGluZ3MuUmVhZFdyaXRlIE1haWwuUmVhZFdyaXRlIiwib2lkIjoiMmRlNzc5NTAtZDQ0OS00MmMwLWI3M2UtZmY3NWY1OTA4NGM1IiwidGlkIjoiZDk3ZDYyZmMtNGRiNi00M2NiLTk1ZGQtZmI4YTQ2OTQ5MjYxIiwic210cCI6InBob25lLTk4NzQ3OTQ1NTRAdGVzdC5vcmciLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJuYmYiOjE2NjQxNjk4MzQsImV4cCI6MTY2NDI1NjIzNCwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUtdGRzLmNvbS9kOTdkNjJmYy00ZGI2LTQzY2ItOTVkZC1mYjhhNDY5NDkyNjEiLCJhdWQiOiJodHRwczovL2V4Y2hhbmdlbGFicy5saXZlLWludC5jb20ifQ.MWYsdY3ncnUS6RX9nBAkPJ7B-GadBBI3ZCVNRZiOcixdDZZhN38VGVSTBKZcW9TStZ_UP_tgjZSMHZuN85ZTOvtIk7bGaL64kDqTPvFCGPRErcD_8E4f25lx17Dgx6GS7Js68AoR24ie-uTfcroZmEwXSoiqaTpbhJ21SRYu1-GqSSPY6tEKJ4R0vY33_qcMyZ_uO7IwQaRCgL8pudp5zoZYTgLNi0LAPqM9IFvpubhBqajsY3oEjSlJyiO0f95GM0AJly-93VTh6miuuN4o2ibVtFrYJeDMGndO92tew9fgyvx5KGJgr7p3e8PgzT0ijjl4SpdxG4zk8wm0e8SA3g'
      const headers = new Headers();
      headers.set('Access Token', token);
      const response = fetch(`https://exchangelabs.live-int.com:444/CalendarService/api/v1/${phone}/ValidateOtp?otp=${otp}`, {method: 'GET'})
      response.isValid && navigate('/home');
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