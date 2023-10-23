import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./practice.css"
import App from "./components/App";
// import "./components/trip.css"

export const index = () => {
  return <div>
    <h1>hi</h1>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
