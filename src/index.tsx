import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./routers/Projects";
import ErrorPage from "./routers/ErrorPage";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ],
  {
    basename: "/portfolio-web",
  }
);

ReactDOM.createRoot(document.querySelector(".root") as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
