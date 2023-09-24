import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContainer";
import { Animate } from "react-simple-animate";
import "./style.scss";

import { FaHtml5, FaJs } from "react-icons/fa";
import { DiReact, DiCss3 } from "react-icons/di";

const personalDetails = [
  {
    label: "Name",
    value: "Naveen Kumar P",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "5/67,Periyagoundapatti,Namakkal",
  },
  {
    label: "E-mail",
    value: "naveenbe2023@gmail.com",
  },
  {
    label: "Contact",
    value: "+91 9629398197",
  },
];

const jobSummary =
  "A Front-End Developer is someone who creates websites and web applications.The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>FrontEnd Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">Personal Details</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaJs size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaHtml5 size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiReact size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiCss3 size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
