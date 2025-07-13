import React from "react";

function DonationProcess() {
  const steps = [
    {
      title: "REGISTRATION",
      img: "rg.jpg",
      desc: "You need to complete a simple registration form with required contact info to begin the donation process.",
    },
    {
      title: "SCREENING",
      img: "scr.jpg",
      desc: "A drop of blood from your finger is tested to ensure iron levels are suitable for donation.",
    },
    {
      title: "DONATION",
      img: "bd.jpg",
      desc: "After passing the screening, you donate blood. The process takes only 6–10 minutes.",
    },
  ];

  return (
    <section id="donationprocess" className="bg-secondary text-white py-5">
      <div className="container-fluid text-center">
        <h1 className="py-2 mt-4 display-4 fw-bold">DONATION PROCESS</h1>
        <h3 className="fw-normal py-4">The donation process from the time you arrive until you leave</h3>
        <div className="row">
          {steps.map((step, i) => (
            <div className="col-lg-4 mb-4" key={i}>
              <div className="card bg-dark h-100">
                <img
                  className="card-img-top"
                  src={`/img/${step.img}`}
                  alt={step.title}
                  style={{ height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DonationProcess;
