import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatapp from '../../Assets/Projects/chatapp.png'
import car from '../../Assets/Projects/car-rental.png'
import olx from '../../Assets/Projects/olx.png'
import netflix from '../../Assets/Projects/netflix.png'
import portfolio from '../../Assets/Projects/portfolio.png'



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="ChatApp"
              description="ChatApp is a dynamic and user-friendly chat application built with PHP, MySQL, 
              and JavaScript. Whether you're connecting with friends or making new ones, 
              ChatApp provides a seamless and interactive platform for real-time conversations."
              ghLink="https://github.com/Jamshibkl/ChatApp"
              demoLink="https://chathereapp.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car-Rental "
              description="Dive into the world of modern web development with my React Car Rental website, a testament to my proficiency in crafting dynamic and user-friendly platforms. 
              This project seamlessly integrates cutting-edge technologies to provide an intuitive, responsive, and secure car rental experience."
              ghLink="https://github.com/Jamshibkl/React-Car-Rental-Website"
              demoLink="https://jamshibkl.github.io/React-Car-Rental-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="OLX Clone"
              description="Explore this React OLX Clone, a fully functional and dynamic web application built using React.js and Firebase. 
              This project aims to replicate the user experience of a popular online marketplace, 
              allowing users to post ads, browse listings, and interact with a real-time Firebase backend."
              ghLink="https://github.com/Jamshibkl/React_olx_clone"
              demoLink="https://react-olx-clone-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description=" React Netflix Clone, a project that replicates the sleek and user-friendly interface of the popular streaming service. Built using React.js, this clone showcases your ability to create a dynamic and responsive application that delivers a seamless streaming experience."
              ghLink="https://github.com/Jamshibkl/React-Netflix-Clone"
              demoLink="https://jamshibkl.github.io/React-Netflix-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="my Personal Portfolio Website, a showcase of my skills, projects, and professional background. This platform serves as a window into my expertise and accomplishments, 
              offering a glimpse into the technologies and projects that define my journey in the world of web development."
              ghLink="https://github.com/Jamshibkl/Portfolio"
              demoLink="https://portfolio-jamshibkls-projects.vercel.app/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
