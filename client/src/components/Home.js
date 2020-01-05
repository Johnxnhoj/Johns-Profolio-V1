import React from "react"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Icon from "../lib/Icon"
import LivingWill from "./LivingWill"
import Etsy from "./Etsy"
import PubBar from "./PubBar"

import { useEffect } from "react"

export default props => {
  return (
    <div className="Container-1">
      <div className="Container-0">
        <div className="Container">
          <div className="NavBar">
            <div id="NavCon">
              <a>LOGO</a>
              <a href="#About">ABOUT</a>
              <a href="#Projects">PROJECTS</a>
              <a href="#Skills">SKILLS</a>
              <a href="#Contact">CONTACT</a>
            </div>
          </div>
          <header id="Home">
            <div className="content">
              <div className="Name">
                <h1 className="Name">
                  Hello World, I'm John and I am a Full Stack Web Developer.
                </h1>
              </div>
            </div>
          </header>

          <main>
            <div className="Page-About" id="About">
              <div className="aboutMe">
                <p className="aboutmebox">
                  My name is John Carbajal and I am a full stuck web developer
                  ready for new opportunities. As of December 20th, 2019 I have
                  completed the Punch Code 12 week highly immersive program for
                  Full-stack Engineering. 60+ hours a week developing
                  Front-End/Full-Stack projects in a project and team based
                  learning environment. Learned up-to-date Front-End
                  Languages(JavaScript, HTML, CSS) and Frameworks (React.js,
                  React-Redux) along with Back-end Technologies(JSON, SQL,
                  Express, Node.js). Worked in an Agile Environment utilizing
                  the Scrum framework during our capstone project during the
                  final 3 weeks. Learned problem solving techniques. Built
                  prototypes for websites for production quality web
                  applications.
                </p>
              </div>
              <div className="johnpic"></div>
            </div>
            <div className="Page-Projects" id="Projects">
              <div className="Pro-name">
                <div className="name-sqr">
                  <p className="centerName">My Projects</p>
                  <Router>
                    <div className="title-pro">
                      <Link to="LivingWill">Living Will</Link>
                      <Link to="Etsy">Etsy Page</Link>
                      <Link to="PubBar">Pub Bar</Link>
                    </div>
                    <div className="Pro-info">
                      <div className="srq-info">
                        <Route path="/LivingWill" component={LivingWill} />
                        <Route path="/Etsy" component={Etsy} />
                        <Route path="/PubBar" component={PubBar} />
                      </div>
                    </div>
                  </Router>
                </div>
              </div>
            </div>
            <div className="Skill-con" id="Skills">
              <div className="info-skills">
                Languesges Frameworks and back end Technologies
              </div>
              <div className="Page-Skills">
                <div className="html-logo"></div>
                <div className="css-logo"></div>
                <div className="javascript-logo"></div>
                <div className="React-logo"></div>
                <div className="Mysql-logo"></div>
                <div className="node-logo"></div>
                <div className="photoshop-logo"></div>
                <div className="xd-logo"></div>
                <div className="illistrator-logo"></div>
              </div>
            </div>
            <div className="Page-Contact" id="Contact">
              <a href="https://github.com/Johnxnhoj/" className="con-info">
                <Icon icon="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/johnncarbajal/html/"
                className="con-info"
              >
                <Icon icon="linkedin" />
              </a>
              <a href="https://johnxjuanito@gmail.com/" className="con-info2">
                johnxjuanito@gmail.com
              </a>
              <a className="con-info2">Phone: 702-824-3378</a>
            </div>
          </main>
          <footer>footer</footer>
        </div>
      </div>
    </div>
  )
}
