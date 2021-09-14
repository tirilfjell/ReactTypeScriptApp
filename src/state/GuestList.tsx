import React, { useState } from "react";

interface GuestListProps {}

export const GuestList: React.FC<GuestListProps> = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>Guest List </h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name of guest"
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};
