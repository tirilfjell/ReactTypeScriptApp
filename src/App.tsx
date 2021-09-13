import React from "react";

import "./App.css";
import { GuestList } from "./state/GuestList";
import { UserSearch } from "./state/UserSearch";

function App() {
  return (
    <div className="App">
      <GuestList />
      <UserSearch />
    </div>
  );
}

export default App;
