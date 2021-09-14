import React, { useState, useRef, useEffect } from "react";

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};
