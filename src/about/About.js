import { Container, Card, Col, Row } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from "react-icons/md"
import { SiPython, SiJavascript } from "react-icons/si";
import { FaDatabase, FaEllipsisH } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import "./About.scss";

export default function About() {
  return (
    <Container className="about mb-3">
      <h3 className="timeline-header mb-3">Education & Experience</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ border: '1px solid rgba(0,0,0,0.125)', "box-shadow": "none"}}
          contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.125)' }}
          iconStyle={{ background: 'var(--success)', color: '#fff' }}
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
          contentStyle={{ border: '1px solid rgba(0,0,0,0.125)', "box-shadow": "none"}}
          contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.125)' }}
          iconStyle={{ background: 'var(--primary)', color: '#fff' }}
          icon={<MdWork/>}
          date="2015 - 2019"
        >
          <h3 className="vertical-timeline-element-title">Modeling & Simulation Developer</h3>
          <p className="vertical-timeline-element-subtitle">
            The Aerospace Corporation <br />
            Modeling & Simulation Department
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ border: '1px solid rgba(0,0,0,0.125)', "box-shadow": "none"}}
          contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.125)' }}
          iconStyle={{ background: 'var(--success)', color: '#fff' }}
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
          contentStyle={{ border: '1px solid rgba(0,0,0,0.125)', "box-shadow": "none"}}
          contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.125)' }}
          iconStyle={{ background: '#007bff', color: '#fff' }}
          icon={<MdWork/>}
          date="2016 - 2018"
        >
          <h3 className="vertical-timeline-element-title">Web & Graphics Software Developer</h3>
          <p className="vertical-timeline-element-subtitle">
            The Aerospace Corporation <br />
            Visualization & Immersive Technology Department
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
      <h3 className="mt-4 timeline-header mb-3">Skills</h3>
      <Row>
        <Col xs={6} lg={3} className="child-h-100">
          <Fade right duration={500}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="d-flex justify-content-center logo py"><div><SiPython/></div></Card.Title>
                <Card.Title>Python</Card.Title>
                <Card.Text className="mb-0">Flask</Card.Text>
                <Card.Text className="mb-0">Django</Card.Text>
                <Card.Text className="mb-0">SQLAlchemy</Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col xs={6} lg={3} className="child-h-100">
          <Fade right duration={500}>
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Title className="d-flex justify-content-center logo js"><div><SiJavascript/></div></Card.Title>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text className="mb-0">React</Card.Text>
                <Card.Text className="mb-0">Vue</Card.Text>
                <Card.Text className="mb-0">jQuery</Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col xs={6} lg={3} className="child-h-100 mt-4 mt-lg-0">
          <Fade right duration={500}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="d-flex justify-content-center logo db"><div><FaDatabase/></div></Card.Title>
                <Card.Title>Database</Card.Title>
                <Card.Text className="mb-0">PostgreSQL</Card.Text>
                <Card.Text className="mb-0">Neo4j</Card.Text>
                <Card.Text className="mb-0">MongoDB</Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col xs={6} lg={3} className="child-h-100 mt-4 mt-lg-0">
          <Fade right duration={500}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="d-flex justify-content-center logo other"><div><FaEllipsisH/></div></Card.Title>
                <Card.Title>Other</Card.Title>
                <Card.Text className="mb-0">Git</Card.Text>
                <Card.Text className="mb-0">Agile Development</Card.Text>
                <Card.Text className="mb-0">DevOps</Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}
