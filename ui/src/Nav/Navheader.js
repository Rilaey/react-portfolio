import React from "react";
import Navlinks from "./Navlinks";
import AboutHeader from "../About/AboutHeader";

export default function Navheader() {
  return (
    <div>
      <section className="container test">
        <div className="row">
          <div className="col-12 nav-header">
            <h1 className="top-head">Welcome To My Portfolio</h1>
          </div>
        </div>
        <Navlinks />
      </section>
    <AboutHeader />
    </div>
  );
}
