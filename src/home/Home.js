import { useState } from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Avatar from "./avatar-removebg-min.png";
import {
  Link
} from "react-router-dom";
import "./Home.scss";
import Fade from 'react-reveal/Fade';

export default function Home() {
  
  const [imageLoaded, loadImage] = useState(false);
  const imageStyle = imageLoaded ? {} : {visibility: 'hidden'};

  return (
    <Container className="home">
      <Row className="pt-6 align-items-bottom h-100">
        <Col xs={12} lg={6} className="d-flex flex-column align-items-center align-items-lg-start align-self-center mt-5 mb-2">
          <h1>Hello, I'm Bryce</h1>
          <p>Web & Software Developer</p>
          <Link to="/about">
            <Button>About Me</Button>
          </Link>
        </Col>
        <Col xs={12} lg={6} className="h-100 overflow-hidden">
          <Fade right distance="12px">
            <Image fluid src={Avatar} style={imageStyle} onLoad={() => loadImage(true)} />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}