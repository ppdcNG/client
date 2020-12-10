import React from 'react';
import "../styles/base.css";
import "../styles/landing.css";

const Landing = () => {
  return (
    <main>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-6 header">
            <h1 className="heading-1">For collecting Money</h1>
            <p className="tagline ml-">gwapp  is an initiative of the PPDC Finance and Tech teams, to facilitace, organise and manage financial requisitions withign the organisations</p>
            <button className="btn btn-gw-primary">Sign in <i className="fab fa-google"></i></button>
            <button className="btn btn-gw-secondary">Admin Signin <i className="fab fa-google"></i></button>
          </div>
          <div className="col-lg-6 d-none d-lg-block right-col">
            <div className="inner-shadow diamond diamond-1"></div>
            <div className="inner-shadow diamond diamond-2"></div>
            <div className="inner-shadow diamond diamond-3"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing;