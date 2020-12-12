import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from "react-icons/md"
import "./About.scss";

export default function About() {
  return (
    <Container className="about">
      <h3>Education & Experience</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ border: '1px solid #bbb'}}
          contentArrowStyle={{ borderRight: '7px solid #bbb' }}
          iconStyle={{ background: '#007bff', color: '#fff' }}
          icon={<MdSchool/>}
          date="2011 - 2015"
        >
          <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
          <p className="vertical-timeline-element-subtitle">
            Mechanical Engineering & Technology Management <br />
            University of California, Davis
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: '1px solid #bbb'}}
          contentArrowStyle={{ borderRight: '7px solid #bbb' }}
          iconStyle={{ background: '#007bff', color: '#fff' }}
          icon={<MdWork/>}
          date="2015 - 2019"
        >
          <h3 className="vertical-timeline-element-title">Modeling & Simulation Developer</h3>
          <p className="vertical-timeline-element-subtitle">
            The Aerospace Corporation <br />
            El Segundo, CA
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ border: '1px solid #bbb'}}
          contentArrowStyle={{ borderRight: '7px solid #bbb' }}
          iconStyle={{ background: '#007bff', color: '#fff' }}
          icon={<MdSchool/>}
          date="2016 - 2018"
        >
          <h3 className="vertical-timeline-element-title">Master's Degree</h3>
          <p className="vertical-timeline-element-subtitle">
            Aerospace Engineering & System Controls <br />
            University of California, Los Angeles
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: '1px solid #bbb'}}
          contentArrowStyle={{ borderRight: '7px solid #bbb' }}
          iconStyle={{ background: '#007bff', color: '#fff' }}
          icon={<MdSchool/>}
          date="2016 - 2018"
        >
          <h3 className="vertical-timeline-element-title">Web & Graphics Software Developer</h3>
          <p className="vertical-timeline-element-subtitle">
            The Aerospace Corporation <br />
            El Segundo, CA
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}