import React, { useState } from "react";
export const FormInput = () => {
  const [name, setName] = useState("Mon Minh");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form>
        <h2>{name}</h2>
        <h2>{password}</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={handleChange}
            id="name"
            name="name"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </form>
    </div>
  );
};