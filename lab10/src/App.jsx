const students = [
  { suid: 123456, name: "Sue Flay", year: "senior", major: "Applied Data Analytics" },
  { suid: 234567, name: "Ella Vader", year: "junior", major: "Information Management and Technology" },
  { suid: 345678, name: "Chris P Bacon", year: "junior", major: "Innovation, Society and Technology" },
];

let filteredStudents = students.filter(item => item.name === "Sue Flay");

function App() {
  return (
    <div>
      <h1>Filtered Students</h1>
      <ul>
        {filteredStudents.map((item) => (
          <li key={item.suid}>
            Name: {item.name}<br/>
            Year: {item.year}<br/>
            Major: {item.major}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
