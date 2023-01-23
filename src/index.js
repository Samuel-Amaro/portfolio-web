import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Projects from "./routers/Projects";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/projects",
    element: <Projects />
  }
]);

ReactDOM.createRoot(document.querySelector(".root")).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
