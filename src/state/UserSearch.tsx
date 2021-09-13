import React, { useState } from "react";

interface UserSearchProps {}

const users = [
  {
    name: "Thea",
    age: 27,
  },
  {
    name: "Tiril",
    age: 26,
  },
  {
    name: "Amanda",
    age: 26,
  },
];

export const UserSearch: React.FC<UserSearchProps> = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Serach
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};
