import { useState, useEffect } from "react";
import { roomList } from "../../mocks/reservations";


export default function Contacts() {
const [contactInfo, setContactInfo] = useState([]);

useEffect(() => {
    const fetchContactInfo = () => {
      setContactInfo(roomList.map((room) => room.contact));
    };

    fetchContactInfo();
  }, []);

  return (
    <div>
    <h1>Contacts</h1>
    {contactInfo.map((contact, index) => (
      <div key={index}>
        <h2>{contact.phone}</h2>
        <p>{contact.email}</p>
      </div>
    ))}
  </div>
  );
}
