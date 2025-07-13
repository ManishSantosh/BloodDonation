import React from "react";

function WhyDonate() {
  const reasons = [
    {
      title: "Save Lives",
      text: "Each blood donation can save up to three lives. Be a hero to someone in need.",
    },
    {
      title: "Health Benefits",
      text: "Regular donations can improve heart health and reduce harmful iron stores.",
    },
    {
      title: "Community Impact",
      text: "Your donation supports hospitals, emergency care, and community health efforts.",
    },
  ];

  return (
    <section id="why-donate" className="bg-light py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-danger mb-4">WHY DONATE BLOOD?</h1>
        <p className="lead text-dark mb-5">
          Your blood can save lives. Here's why you should consider donating.
        </p>
        <div className="row">
          {reasons.map((r, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="p-4 border rounded bg-white shadow-sm h-100">
                <h4 className="text-success">{r.title}</h4>
                <p className="text-muted">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyDonate;
