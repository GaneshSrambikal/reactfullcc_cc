import React from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contacts={{
          name: "MR.whiteson",
          imgUrl: "http://placekitten.com/300/200" ,
          phone: "(515)-2485944",
          email: "abc@gmailc.om"
        }}
      />

      <ContactCard
        contacts={{
          name: "killer",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(515)-2211944",
          email: "abadfdc@gmailc.om"
        }}
      />
    </div>
  );
}

export default App;
