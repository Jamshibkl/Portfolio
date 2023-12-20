import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
        👋 Hello! Everyone, I am <span className="purple"> Mohammed Jamsheer </span>
             from <span className="purple"> Kerala 🌴, India.</span>
            <br />
            I am BCA Final-year student 🎓 looking to pursue opportunities in <br/> front-end development.
            <br />
            Proficient in ReactJS, with a keen interest in utilizing my skills to create dynamic and user-centric web applications.
             Dedicated to continuous learning and contributing to meaningful projects to enhance my coding capabilities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Embrace the challenges as stepping stones to your success, 
            for in each obstacle lies an opportunity waiting to be discovered by your determination."{" "}
          </p>
          <footer className="blockquote-footer">Mohammed Jamsheer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
