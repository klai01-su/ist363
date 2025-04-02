// // global variable - every components can see it
// const myGlobalVariable = 'Global Variable';

// function App() {
//   // local variable - only works inside the component
//   const myLocalVariable = 'Local Variable';
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>{myGlobalVariable}</p>
//       <p>{myLocalVariable}</p>
//       <p>separate<br/>lines</p>
//     </div>
//   );
// }

// export default App;


// 1. 
// // arrow function long form
// const Hello2 = () => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// // arrow function concise form
// const Hello3 = () => ( <div><h1>Hello World</h1></div> ); 

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <Hello2 />
//       <Hello3 />
//     </div>
//   );
// }

// export default App;


// 2. 
// function App () {
//   const handleChange = (event) => {
//     // whole event
//     console.log(event);
//     // value of the typing
//     console.log(event.target.value);
//   };
  
//   return (
//     <div>
//       <label htmlFor="search">Search: </label>
//       <input type="text" id="search" onChange={handleChange} />
//     </div>
//   );
// }

// export default App;


// 3.
// // bring in react useState code
// import { useState } from 'react';

// // sets up useState, what variable, what function changes it, and what start value
// const Home = () => {
//   const [name, setName] = useState("Kaz");

//   // function actually making dynamic change
//   let handleClick = () => {
//     setName ("John");
//   }

//   return (
//     <div className = "home">
//       <h1>Homepage</h1>
//       <p>{ name }</p>
//       <button onClick={handleClick}>Update </button>
//     </div>
//   );
// }

// export default Home;


// 4.
const students = [
  { suid: 123456, name: "Sue Flay", year: "senior", major: "Applied Data Analytics" },
  { suid: 234567, name: "Ella Vader", year: "junior", major: "Information Management and Technology" },
  { suid: 345678, name: "Chris P Bacon", year: "junior", major: "Innovation, Society and Technology" },
];

function App() {
  let filteredStudents = students;

  const handleChange = (event) => {
    filteredStudents = students.filter(student => student.name == event.target.value);
    console.log(filteredStudents);
  };
  
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
      <h1>Students</h1>
      <ul>
        {
        filteredStudents.map((item) => {
        return
        <li key={item.suid}>
          Name: {item.name}<br/>
          Year: {item.year}<br/>
          Major: {item.major}
        </li>
        })}
      </ul>
    </div>
  );
}

export default App;
