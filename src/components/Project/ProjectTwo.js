import React from "react";
import ParkFinderLogo from "../../img/ParkFinderLogo.png";
import "../../css/index.css";

export default function ProjectOne() {
  return (
    <section className="container">
      <div className="row projects-card">
        <div className="col-6">
          <img src={ParkFinderLogo} alt="logo" className="park-logo" />
        </div>
        <div className="col-6 project-bio">
          <h2>Park Finder</h2>
          <h4>Built with HTML, CSS, and Javascript</h4>
          <p>
            Let Park Finder choose your next destination for you! With Park
            Finder's search feature you can find a random state park in the
            United States or narrow down the search based on location mile
            radius with the help of the Google Maps API.
          </p>
          <p>
            <a href="https://github.com/Rilaey/Park-Finder">Github Repo</a>
          </p>
          <p>
            <a href="https://rilaey.github.io/Park-Finder/">Live Application</a>
          </p>
        </div>
      </div>
    </section>
  );
}
