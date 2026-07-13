import "./profile.css"
function UserCardClass(props) {
  return (
    <div className="user-card">
      <img src={props.photo} alt={props.name} className="user-photo"/>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Date of Birth: {props.bod}</p>
      <p>Zodiac: {props.zodiac}</p>
    </div>
  );
}
export default UserCardClass;
