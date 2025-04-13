import React from "react";

const Pioneer = ({ pioneer, onBack }) => {
  return (
    <div className="card text-white bg-secondary p-4">
        
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{pioneer.name}</h2>
            <div className="col-md-4">
                <img src={pioneer.image} alt={pioneer.name} className="img-fluid"/>
            </div>
            <p className="card-text"><strong>Age:</strong><br/>{pioneer.age}</p>
            <p className="card-text"><strong>Known For:</strong><br/>{pioneer.knownFor}</p>
            <button className="btn btn-primary mt-3" onClick={onBack}>Return to Directory</button>
          </div>
        </div>
      </div>
  );
};

export default Pioneer;