import React from "react";
import Users from "./User.json";
import UserCardClass from "./UserCardClass";
import "./app.css";


function App() {
  return (
    <div className="App">
      {Users.map((props) => (
        <UserCardClass
          name={props.name}
          age={props.age}
          bod={props.bod}
          zodiac={props.zodiac}
          photo={props.photo}
        />
      ))}
    </div>
  );
}
export default App;
//Another Way:
/* {users.map((user, index) => (
  <UserCard key = {user} {...user} index={index + 1}))}*/
