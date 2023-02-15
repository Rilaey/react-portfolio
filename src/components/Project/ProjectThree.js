import React from "react";
import "../../css/index.css";
import WeatherLogo from "../../img/WeatherLogo.jpg";

export default function ProjectThree() {
  return (
    <section className="container">
      <div className="row projects-card">
        <div className="col-6">
          <img src={WeatherLogo} alt="logo" className="weather-logo" />
        </div>
        <div className="col-6 project-bio">
          <h2>Weather Forecast</h2>
          <h4>Built with HTML, CSS, and Javascript</h4>
          <p>
            Check out the 5 day and current weather in any city of your choice.
            With a polished UI it makes for a fun user experience.
          </p>
          <p>
            <a href="https://github.com/Rilaey/Weather-Forcast">Github Repo</a>
          </p>
          <p>
            <a href="https://rilaey.github.io/Weather-Forcast/">
              Live Application
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
