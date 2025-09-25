export default function ImageSlider() {
  return (
    <div
      id="supercarCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://resources.formula-e.pulselive.com/photo-resources/2022/11/10/23b16a1e-8998-4114-a696-e204f8c7e5e1/LvCH0daZ.jpg?width=1440&height=810"
            className="d-block w-100 img-fluid"
            alt="Supercar 1"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://www.exoticcarlist.com/blog/wp-content/uploads/2025/03/Bugatti-Bolide.jpg"
            className="d-block w-100 img-fluid"
            alt="Supercar 2"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/03/2023_6_Hours_of_Spa-Francorchamps_%28DSC04559%29.jpg"
            className="d-block w-100 img-fluid"
            alt="Supercar 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lemans.org/media/cache/api_news_large/assets/fileuploads/64/80/6480d3642981a.jpg"
            className="d-block w-100 img-fluid"
            alt="Supercar 3"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#supercarCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#supercarCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
