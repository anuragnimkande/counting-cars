export default function About() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div
        className="jumbotron jumbotron-fluid text-white text-center bg-dark"
        style={{
          backgroundImage:
            'url("https://imgs.search.brave.com/9FXVdD3Raf54I1nEGBQjd96VD7NInWw8M6JBYR05lMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyY292ZXJzLmNv/bS9fbmV4dC9pbWFn/ZT91cmw9L2ltYWdl/cy9ob21lL2hlcm8u/cG5nJnc9Mzg0MCZx/PTc1")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">About This Project</h1>
          <p className="lead">
            A showcase of automotive passion through modern web development.
          </p>
        </div>
      </div>

      <hr />

      {/* Mission Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2>Our Vision</h2>
            <p className="lead">
              This website was created as a portfolio project to demonstrate
              proficiency in modern web technologies. It is a tribute to the
              automotive world, designed to provide a seamless and visually
              engaging experience for car enthusiasts. The project highlights a
              blend of technical skill and a passion for design.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Key Technologies</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-code-slash me-2"></i> Frontend: React.js
                  </li>
                  <li>
                    <i className="bi bi-file-earmark-code me-2"></i> Styling:
                    Bootstrap 5 & Custom CSS
                  </li>
                  <li>
                    <i className="bi bi-bootstrap me-2"></i> Components:
                    Responsive Layouts & Carousels
                  </li>
                  <li>
                    <i className="bi bi-server me-2"></i> Data: Static JSON Data
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Developer Section */}
      <div className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="mb-3">Developed By</h2>
          <p className="lead fw-bold">RAGNOSTAR</p>
          <p className="text-muted">
            This project represents a culmination of skills in React and
            front-end development, crafted with a deep appreciation for the
            automotive industry.
          </p>
        </div>
      </div>
    </div>
  );
}
