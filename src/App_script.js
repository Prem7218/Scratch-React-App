import React from "react";
import ReactDOM from "react-dom/client"; 
const div = document.querySelector('div');
const heading = React.createElement("h1", {className: "heading"}, "Welcome to React application");
const root = ReactDOM.createRoot(div);
root.render(heading);
