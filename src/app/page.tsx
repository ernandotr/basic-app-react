"use client";

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import User from "@/components/User";
import { useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState('Ernando');
  const age = 40;
  return (
    <div>
      <Menu /><br />

      <User name={userName} age={age}>
        <p>This is un extra content provided as children.</p>
      </User> <br />
      <button onClick={() => setUserName("Luciana")}>Change</button>
      <h1>Welcome to my App!</h1> <br />
      
      <Footer />
    </div>
  );
}

export default Home;
