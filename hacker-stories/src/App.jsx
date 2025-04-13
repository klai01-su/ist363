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
// import { useState } from "react";

// // NEW: modularize our search > takes a call back as a prop
// const Search = ({ onSearch }) => (
//   <div>
//     <label htmlFor="search">Search: </label>
//     {/* onSearch prop is the passed function to handle the change */}
//     <input id="search" type="text" onChange={onSearch} />
//   </div>
// );

// const List = (props) => (
//   <ul>
//     {props.list.map((item) => (
//       <li key={item.suid}>{item.name} {item.year} {item.major}</li>
//     ))}
//   </ul>
// );

// function App() {
//   // moved out of the global scope
//   const students = [
//     {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
//     {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
//     {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
//   ];

//   let [filteredStudents, setFilteredStudents] = useState(students);

//   // This handler function stays here because state lives in App
//   const handleChange = (event) => {
//     setFilteredStudents(
//       students.filter(student => 
//         student.name.toLowerCase().includes(event.target.value.toLowerCase())
//       )
//     );}
  
//   return (
//   <div>
//     {/* NEW: Pass the handler function down to Search component as a prop */}
//     <Search onSearch={handleChange} />
//     <h1>Students</h1>
//     {/* passing the students object to the list componenet */}
//     <List list={filteredStudents} />
//   </div>
//       );
//     };  

// export default App;


// 5.
import { useState } from "react";
import About from './About';
// ./ means same folder as the App.jsx file

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

// conditional rendering aka navigation SPAs
function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link btn btn-link text-light" onClick={() => setPage("home")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link text-light" onClick={() => setPage("about")}>
                About
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {page === "home" && <Home />}
      {page === "about" && <About />}
    </>
  );
}

export default App;