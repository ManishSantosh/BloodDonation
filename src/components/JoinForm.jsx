import React from "react";

function JoinForm() {
  return (
    <section id="join" className="bg-secondary text-white py-5">
      <div className="container-fluid">
        <div className="text-center">
          <h1 className="display-4 mt-4 py-3 fw-bold">JOIN US</h1>
          <p className="fw-bold py-3">FEEL THE REAL PEACE</p>
        </div>

        <div className="card card-body bg-dark text-white">
          <div className="card-title text-center">
            <h3>REGISTRATION FORM</h3>
            <p className="fw-light small">
              Please fill in your info to register as a blood donor.
              Update your date of donation to hide your profile for 4 months.
            </p>
          </div>
          <form>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group col-md-3 mb-3">
                <input type="number" className="form-control" placeholder="Age" min="18" />
              </div>
              <div className="form-group col-md-3 mb-3">
                <input type="text" className="form-control" placeholder="Weight" />
              </div>
              <div className="form-group col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Address" />
              </div>
              <div className="form-group col-md-3 mb-3">
                <input type="number" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="form-group col-md-3 mb-3">
                <select className="form-control">
                  <option>Choose Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-success btn-lg btn-block">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default JoinForm;
