import React from "react";
import AboutHeader from "../components/About/AboutHeader"
import Navlinks from "../components/Nav/Navlinks";

export default function Index() {
  return (
    <div>
      <section className="container test">
        <div className="row">
          <div className="col-12 nav-header">
            <h1 className="top-head">Welcome To My Portfolio</h1>
          </div>
        </div>
      </section>
      <Navlinks />
      <AboutHeader />
    </div>
  );
}
