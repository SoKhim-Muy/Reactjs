import React from "react";
const fruites = ["Apple", "Banana", "Cherry", "Mango", "Kiwi"];
export const SimpleList = () => {
  return (
    <div>
      <ul>
        {fruites.map((fr, index) => (
          <li key={fr}>
            {index + 1}.{fr}
          </li>
        ))}
      </ul>
      <p>Total Fruites: {fruites.length}</p>
      <h4>Fruites List using filter:</h4>
      <div>
        {fruites
          .filter((fr) => fr.toLowerCase().includes("a"))
          .map((fr, index) => (
            <p key={fr}>
              {index + 1}.{fr}
            </p>
          ))}
      </div>
    </div>
  );
};
