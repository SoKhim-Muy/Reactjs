const people = [
  {
    id: 1,
    name: "Creola Katherian Johnson",
    profession: "mathmatician",
  },
  {
    id: 2,
    name: "Mario Jose Molina-Pasquel Henriquez",
    profession: "Chemist",
  },
  {
    id: 3,
    name: "Mohammad Abdus Salam",
    profession: "Physicist",
  },
];
export default function People() {
  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <h2>{person.id}</h2>
          <h2>{person.name}</h2>
          <p>{person.profession}</p>
        </div>
      ))}
    </div>
  );
}
//If export by default, no need import use {}