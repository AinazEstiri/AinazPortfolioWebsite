import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "@material-ui/icons";
import { BorderColor, Computer, DevicesOther } from "@material-ui/icons";
import "../styles/Experience.css"; 


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#b59e1f">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6/2023 - 8/2023"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cybersecurity Researcher 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            NASA | AMES Research Center, California USA
          </h4>
          <ul>
                <li>Gained a solid understanding of OSSEC+ software and HIDS to develop a UML diagram to illustrate the HIDS architecture in the Urban Air Mobility environment</li>
                <li>Ability to work cohesively with individuals from different backgrounds and disciplines, showcasing effective interpersonal skills and contributing to the overall success of cross-functional initiatives.</li>
                <li>Developed & implemented test plans for HIDS to address visibility of security within UAM environment</li>
                <li>Co-authored a paper on HIDS for publication with mentor and coworker</li>
            </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6/2023 - 8/2023"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<BorderColor/>}
        >
          <h3 className="vertical-timeline-element-title">
          Publication: Aviation Technical Paper
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Co-Located 2024 AIAA AVIATION Forum and 2024 ASCEND
          </h4>
          <ul>
              <li>Cyber Resiliency and the Implementation of a Host-Based Intrusion Detection System in an Urban Air Mobility Environment </li>
          </ul>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6/2023 - 8/2023"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          DEIA Support 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            NASA | AMES Research Center, California USA
          </h4>
          <ul>
                <li>Identified & recommended HBCUs to technical directorates in support of HBCU technology showcase</li>
                <li>Successfully demonstrated strong team player attributes by actively engaging and fostering open communication with diverse teams across various departments.</li>
                <li>Assisted in the maintenance of distribution lists and Microsoft Teams groups</li>
                <li>Supported the coordination of recruiting engagement by developing recruiting schedules, registering recruiters, booking housing, etc.</li>
                <li>Facilitated NASA’s SATERN training assessments</li>
                <li>Increased engagement with underrepresented communities</li>
            </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="5/2019 - Present"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          User Experience Tester
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          UserTesting | Remote, California USA 
          </h4>
          <ul>
              <li>Evaluate and advise on improving User Experience and User Interface design for different companies, including Apple, Google, Amazon, Ring, Verizon, Adobe, etc.</li>
          </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="9/2021 - Present
          "
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          CS Lab, Programming, & Mathematics Tutor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          University of California Riverside | Riverside, California USA 
          </h4>
          <ul>
              <li>Assist students with Operating Systems Design and C++ Lab assignments. Advise on best practices. Assess and grade student coding styles and approaches. Tutoring students.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6/2021 - 9/2021"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          CS Researcher - Internship 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          NSF International Research | Riverside, California USA 
          </h4>
          <ul>
              <li>Researched approximate commuting for mathematical equations and DCT image processing with decision trees and python. Created quality images with 100% software and no hardware usage.</li>
              <li>Acted as Scrum Master for developing DCT image processing software prototype</li>
          </ul>
        </VerticalTimelineElement>

      </VerticalTimeline>







      <div className="skills">

       <h1>Extracurriculars</h1>
         <ol className="list"></ol>
      </div>
      
      <div className="experience">
        <VerticalTimeline lineColor="#b59e1f">
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="7/2022"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<BorderColor />}
        >
          <h3 className="vertical-timeline-element-title">
          MasterCard Cybersecurity
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Virtual Experience Program on Forage
          </h4>
          <p>Designed a phishing email simulation and Interpret phishing simulation results.</p>
        </VerticalTimelineElement>




          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6/2020 - 8/2020"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Intern Volunteer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote - Dupont
          </h4>
          <p>Applied Python to perform data classification and drive automated decisioning</p>
        </VerticalTimelineElement>



          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10/2020 - 6/2021"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<Computer />}
        >
          <h3 className="vertical-timeline-element-title">
          Hackathon Moderator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          University of California Riverside
          </h4>
          <p>Moderated hackers whilst coding, answering coding questions, and referring hackers to mentors.</p>
        </VerticalTimelineElement>




          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="8/2016 - 6/2020"
          iconStyle={{ background: "#b59e1f", color: "#fff" }}
          icon={<DevicesOther />}
        >
          <h3 className="vertical-timeline-element-title">
          Technology Support Advisor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Calabasas Library
          </h4>
          <p>Taught coding to children through code.org and codacademy.com. Provided network, computer, and mobile support to the elderly and children.</p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      </div>


               
  


    </div>
  );
}

export default Experience;