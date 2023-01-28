import React from "react";
import '../css/index.css'
import picture from "../img/my-pic.jpeg";

export default function AboutCard() {
  return (
    <section className="container test2">
      <div className="row middle-card test2">
        <div className="col-6 test2">
          <img src={picture} alt="profile-picture" className="profile-pic"/>
        </div>
        <div className="col-6 test2">
          <p className="card-txt test2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>
        </div>
      </div>
    </section>
  );
}
