import React from "react";
import Main from "./Main"
import Nav from "./Nav";
import { messages, contacts } from "../data.js";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Nav contacts={contacts}/>
      <Main/>
    </div>
  );
}

export default App;
