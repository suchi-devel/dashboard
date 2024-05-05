import ReactDOM from "react-dom/client";
import Main from "./Main"; // importing Main class component
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Main /> // calling Main Component
);
