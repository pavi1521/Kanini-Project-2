import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import deskImage from '/pic.png'; // Replace with the actual path to your image
import '../App.css'; // Assuming you have an external CSS file for additional styles

const Desk = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-left">Book a Desk</h2>
      <h6 className="text-secondary text-left mb-4">Book a desk for the day to use in the common area of any Kanini location</h6>

      <div className="row">
        <div className="col-md-6">
          {/* Form section */}
          <div className="form-container">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" className="form-control small-input" placeholder="Enter location" />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" className="form-control small-input" />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <img src="add.png" alt="add"/>
              <h6>Add a colleague</h6>
            </div>
            <div className="d-flex justify-content-start">
              <button className="btn btn-primary">Book a Desk</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Image section */}
          <div className="image-container">
            <img src={deskImage} alt="Desk" className="desk-image" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Desk;
