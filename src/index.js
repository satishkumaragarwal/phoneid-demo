import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./components/error-page";
import {OtpForm, phoneLoader} from "./components/OtpForm";
import {MailHome} from "./components/MailHome";
import {MailCompose} from "./components/MailCompose";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "otp/:phone",
    element: <OtpForm />,
    loader: phoneLoader
  },
  {
    path: "home",
    element: <MailHome />,
  },
  {
    path: "compose",
    element: <MailCompose />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
