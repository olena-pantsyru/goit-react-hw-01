import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
          </div>
  )
}


export default App
