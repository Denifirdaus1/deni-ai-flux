import React from 'react';

const SolarSystem = () => {
  return (
    <div className="solar-system">
      <div className="sun">
        <div className="corona" />
      </div>
      <div className="orbit mercury-orbit">
        <div className="planet mercury" />
      </div>
      <div className="orbit venus-orbit">
        <div className="planet venus" />
      </div>
      <div className="orbit earth-orbit">
        <div className="planet earth">
          <div className="moon" />
        </div>
        <div className="iss">
          <div className="iss-panels" />
        </div>
      </div>
      <div className="orbit mars-orbit">
        <div className="planet mars" />
      </div>
      <div className="stars">
        <div className="star star-1" />
        <div className="star star-2" />
        <div className="star star-3" />
        <div className="star star-4" />
        <div className="star star-5" />
      </div>
    </div>
  );
};

export default SolarSystem;