import React from "react";
import Main from "./Main"
import Nav from "./Nav";




import { messages, contacts } from "../data";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
