import React from "react";

function BannerCarousel() {
  const slides = ["sl1.jpg", "sl4.jpg", "sl3.jpg"];
  const captions = ["text-danger", "text-white", "text-danger"];

  return (
    <section className="mt-5 pt-4" id="banner">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((img, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={img}>
              <img src={`/img/${img}`} className="d-block w-100" alt={`slide-${i + 1}`} style={{ height: "600px" }} />
              <div className={`carousel-caption text-left ${captions[i]}`}>
                <h5>DONATE BLOOD SAVE LIFE.</h5>
                <h1 className="display-4 fw-bold">DONATE BLOOD<br />AND INSPIRE OTHERS</h1>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default BannerCarousel;
