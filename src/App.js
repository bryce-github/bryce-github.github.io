import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.scss"

import Home from "./Home"
const About = React.lazy(() => import('./About'));
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
      <Navbar sticky="top" bg="white" className={cls}>
        <Navbar.Brand>
          Bryce Anglin
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
        </Nav>
      </Navbar>
        <Switch>
          <Route path="/about">
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          </Route>
          <Route path="/blog">
            <Suspense fallback={<div>Loading...</div>}>
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
