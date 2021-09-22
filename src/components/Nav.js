import React from "react";
import { messages, contacts } from "../data";
import Contact from "./Contact"




function Nav () {
    return (
    <nav>
    <h2>Contacts</h2>
    <ul className="contacts">
{contacts.map(c => <Contact name={c.name} key={c.id}/>)}
    </ul>
  </nav>
    )
}

export default Nav