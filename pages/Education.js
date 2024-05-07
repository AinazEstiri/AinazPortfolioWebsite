import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import "@material-ui/icons";
import "../styles/Education.css"; 
import { Build, Code, QuestionAnswer } from '@material-ui/icons';

function Education() {
  return (
    <div className="experience">

    <VerticalTimeline lineColor="#b59e1f">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span className="custom-date">2024-2026</span>}
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">University of California San Diego, La Jolla, California</h3>
          <p>M.S. in Computer Science and Engineering</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span className="custom-date">2020-2024</span>}
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">University of California Riverside, Riverside, California</h3>
          <p>B.S. in Computer Science and Business Applications</p>

          <h4>Relevent Coursework:</h4>
          <p className="coursework">Data/Discrete Structures and Algorithms, Databases and Big-Data Management Systems, Software Engineering and Design, AI and Machine Learning Algorithms, Web Development, Technical Product Development, Entrepreneurship and Startup in Computing, Project Management, Marketing, Operating Systems, Machine Organization and Assembly Language, Financial Accounting, Micro/Macro Economics, and Statistics</p>
        </VerticalTimelineElement>




        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span className="custom-date">2016-2020</span>}
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Calabasas High School, Calabasas, California</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span className="custom-date">2013-2016</span>}
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">A.E. Wright Middle School, Calabasas, California</h3>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span className="custom-date">2008-2013</span>}
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Woodland Hills Elementry School, Woodland Hills, California</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>






      <div className="skills">

      <h1>Skills</h1>
        <ol className="list"></ol>
      </div>

      <div className="experience">
        <VerticalTimeline lineColor="#b59e1f">
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<Code />}
        >
          <h1 className="vertical-timeline-element-title">
          Programming Languages
          </h1>
              <ul>C++: Advanced Proficiency</ul>
              <ul>Python: Advanced Proficiency</ul>
              <ul> HTML/CSS: Advanced Proficiency</ul>
              <ul>Javascript: Advanced Proficiency</ul>
              <ul>SQL: Advanced Proficiency</ul>
              <ul>Assembly: Basic Proficiency</ul>
              <ul>Java: Basic Proficiency</ul>
              
        </VerticalTimelineElement>




        <VerticalTimelineElement
          className="vertical-timeline-element--work"

          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<Build />}
        >
          <h1 className="vertical-timeline-element-title">
          Tools/Technologies
          </h1>
          <p>React, Node.js, MySQL, pip, STL, CMake, gtest, Matplotlib, NumPy, Pandas scikit-learn, Git, Github, VS Code, PyCharm, CLion, Mac OS, Linux, Windows,  Google Office Suite, Microsoft Office, Adobe</p>
              
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"

          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<QuestionAnswer />}
        >
          <h1 className="vertical-timeline-element-title">
          Languages
          </h1>
              <ul>Farsi: Fleunt</ul>
              <ul>English: Fluent</ul>
              <ul>Spanish: Basic Proficiency</ul>
             
              
        </VerticalTimelineElement>
        </VerticalTimeline>
      </div>


    </div>

  );
}

export default Education;
