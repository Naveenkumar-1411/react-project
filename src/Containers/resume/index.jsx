import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContainer";
import {VerticalTimeline,VerticalTimelineElement }from 'react-vertical-timeline-component';
import'react-vertical-timeline-component/style.min.css'
import { data } from "./utils";
import './style.scss'
import {MdWork} from 'react-icons/md';

const Resume=()=>{
return(
    <section id="resume" className="resume">
    <PageHeaderContent
      headerText="Education Details"
      
      icon={<BsInfoCircleFill size={40} />}
    />
    <div className="timeline">
      <div className="timeline__education">
        <h3 className="timeline__education__header-text">Education</h3>
        <VerticalTimeline
        layout={'1-column'}
        lineColor="var(--yellow-theme-main-color)"
        >
          {
            data.education.map((item,i)=>
            <VerticalTimelineElement
            key={i}
            className="timeline__education__vertical-time-element"
            contentStyle={{
              background:'none',
              color: 'var(--yellow-theme-sub-text-color)',
              border:'1.5px solid var(--yellow-theme-main-color)'
            }}

            date="2016-2023"
            icon={<MdWork/>}
            iconStyle={{
              background:'#181818',
              color:'var(--yellow-theme-main-color)'
            }}
            >
              <div className="vertical-timeline-element-title-wrapper">
                <h3 >
                  {item.title}
                </h3>
                <h4 >
                  {
                    item.subtitle
                  }
                </h4>
                
              </div>
              <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
              

            </VerticalTimelineElement>
            )
          }
        </VerticalTimeline>
        
      </div>
    </div>
    
  </section>
)

}

export default Resume;