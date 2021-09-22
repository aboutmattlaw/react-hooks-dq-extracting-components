import React from "react";
import { messages, contacts } from "../data";
import Contact from "./Contact"




function Nav ({name}) {
    return (
    <nav>
    <h2>Contacts</h2>
    <ul className="contacts">
{name.map(c => <Contact name={c.name} key={c.id}/>)}
    </ul>
  </nav>
    )
}

export default Nav