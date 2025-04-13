import React from "react";

const Pioneer = ({ pioneer, onBack }) => {
  return (
    <div className="card text-white bg-secondary p-4">
      <div className="card-body">
        <h2 className="card-title">{pioneer.name}</h2>
        <hr className="text-dark"></hr>
        <div className="col-md-4">
            <img src={pioneer.image} alt={pioneer.name} className="img-fluid p-4"/>
        </div>
        <p className="card-text"><strong>Age:</strong><br/>{pioneer.age}</p>
        <p className="card-text"><strong>Known For:</strong><br/>{pioneer.knownFor}</p>
        <button className="btn btn-primary mt-3" onClick={onBack}>Return to Directory</button>
      </div>
    </div>
  );
};

export default Pioneer;