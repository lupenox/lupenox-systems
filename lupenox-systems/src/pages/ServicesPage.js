import React from "react";

function ServicesPage() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-success">Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Cybersecurity Audits</h5>
              <p className="card-text">Ensure your systems are secure with our expert security audits.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">Get a custom-built, secure, and high-performance website.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Consulting Services</h5>
              <p className="card-text">Professional IT consulting tailored to your business needs.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
