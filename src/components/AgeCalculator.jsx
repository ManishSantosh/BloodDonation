import React, { useState } from "react";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [message, setMessage] = useState("");

  const calculateAge = () => {
    if (!dob) {
      setMessage("⚠️ Please select your date of birth.");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

    if (age >= 18 && age <= 65) {
      setMessage(`✅ Your age is ${age}. You are eligible to donate blood.`);
    } else {
      setMessage(`❌ Your age is ${age}. You are not eligible to donate blood.`);
    }
  };

  return (
    <section id="age-calculator" className="bg-light py-5">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col">
            <h1 className="display-4 fw-bold text-danger">AGE CALCULATOR</h1>
            <p className="lead text-dark">Check if you're eligible to donate blood (Age 18–65)</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm bg-white">
              <label htmlFor="dob"><strong>Enter Your Date of Birth:</strong></label>
              <input
                type="date"
                id="dob"
                className="form-control"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <button className="btn btn-success mt-3 btn-block" onClick={calculateAge}>
                Calculate Age
              </button>
              <div className="mt-4 text-center fw-bold">{message}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgeCalculator;
