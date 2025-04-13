import React, { useState } from "react";
import Pioneer from "./Pioneer";

const pioneersData = [
  {
    id: 1,
    name: "Elizabeth J. Feinler",
    age: 94,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg",
    knownFor: "Created the Internet's first directory services and naming infrastructure",
    viewed: false,
  },
  {
    id: 2,
    name: "Tim Berners Lee",
    age: 69,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LS3_4919_%28cropped%29.jpg/945px-LS3_4919_%28cropped%29.jpg",
    knownFor: "Inventor of the World Wide Web, the HTML markup language, the URL system, and HTTP.",
    viewed: false,
  },
  {
    id: 3,
    name: "Ray Tomlinson",
    age: 74,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ray_Tomlinson.jpg",
    knownFor: "Implemented the first email program on the ARPANET system",
    viewed: false,
  },
];

function App() {
  const [pioneers, setPioneers] = useState(pioneersData);
  const [selectedPioneer, setSelectedPioneer] = useState(null);

  const handlePioneerClick = (id) => {
    const updatedList = pioneers.map((person) => {
      if (person.id === id) {
        return { ...person, viewed: true };
      } else {
        return person;
      }
    });

    setPioneers(updatedList);

    const clickedPerson = updatedList.find((person) => person.id === id);
    setSelectedPioneer(clickedPerson);
  };

  const handleBack = () => {
    setSelectedPioneer(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Internet Pioneers Bios</h1>
      {selectedPioneer && (
        <Pioneer pioneer={selectedPioneer} onBack={handleBack} />
      )}
      {!selectedPioneer && (
        <div className="row">
          {pioneers.map((pioneer) => (
            <div key={pioneer.id} className="col-md-4 mb-4" onClick={() => handlePioneerClick(pioneer.id)}>
              <div className="card h-100 position-relative">
                {pioneer.viewed && (
                  <span className="badge bg-danger position-absolute top-0 start-0">
                    VIEWED
                  </span>
                )}
                <img src={pioneer.image} className="card-img-top h-100 object-fit-cover" alt={pioneer.name} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-center">{pioneer.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
