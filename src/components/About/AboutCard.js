import React from "react";
import '../../css/index.css'
import picture from "../../img/my-pic.jpeg";

export default function AboutCard() {
  return (
    <section className="container test2">
      <div className="row middle-card test2">
        <div className="col-6 test2">
          <img src={picture} alt="profile-picture" className="profile-pic"/>
        </div>
        <div className="col-6 test2">
          <p className="card-txt test2">
            I began my coding journey half way through 2022 and quickly fell in love with
            learning and the problem solving aspects of programming. About a year after being
            self taught I enrolled at the University of Central Flordia full stack coding bootcamp
            to have a more structured learning process. Currently I'm looking for my first job
            in this field and I would love to dive head first into the industry! Thank you for
            checking out my portfolio and giving me the chance of a lifetime!
          </p>
        </div>
      </div>
    </section>
  );
}
