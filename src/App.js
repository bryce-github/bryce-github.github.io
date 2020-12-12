import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.scss"

import Home from "./home/Home"
const About = React.lazy(() => import('./about/About'));
const Blog = React.lazy(() => import('./blog/Blog'));

export default function App() {

  const [cls, setClass] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setClass(window.pageYOffset ? "border-bottom" : "");
    }
  }, [])

  return (
    <Router>
      <Navbar collapseOnSelect expand="sm" fixed="top" bg="white" className={cls}>
        <Navbar.Brand>Bryce Anglin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/about">About</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Switch>
          <Route path="/about">
            <Suspense fallback={<div>Loading...</div>}>
              <div className="p-4 m-1"></div>
              <About />
            </Suspense>
          </Route>
          <Route path="/blog">
            <Suspense fallback={<div>Loading...</div>}>
              <div className="p-4 m-1"></div>
              <Blog />
            </Suspense>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
