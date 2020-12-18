import React, { Suspense } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./Blog.scss";

const posts = {
  'python-units-1': {
    name: "Physical Units in Python: Part 1 - Emulating Python Primitives",
    date: "Dec 17 2020",
    tags: ["python"],
    description: 
      `One problem that comes up when using computer programming to solve 
      physics problems is handling physical units like distance or time. 
      In this series, we'll look at developing a flexible framework for 
      handling units in Python. Part 1 of this series will take a look
      at some prerequisite Python knowledge that will be useful when 
      creating something that acts like a primitive Python type.`,
    article: React.lazy(() => import('./posts/python-units-1/Post'))
  },
  'python-import': {
    name: "How Python Imports Packages",
    date: "Dec 12 2020",
    tags: ["python"],
    description: 
    `Understanding the import system in Python can be confusing at times, especially
    when you're running into unexpected import errors. In this post, we'll take a 
    brief look into the python import system and provide the knowledge you need
    to fix that import error.`,
    article: React.lazy(() => import('./posts/python-import/Post'))
  },
  'python-venv': {
    name: "Python Virtual Environments",
    date: "Dec 11 2020",
    tags: ["python"],
    description: 
      `Python virtual environments are a great way to manage and share dependencies 
      for a project. But what are they exactly, and how do they work? In this post, we'll 
      take a practical look at virtual environments and give you the understanding you need 
      to start using them today.`,
    article: React.lazy(() => import('./posts/python-venv/Post'))
  },
};

export default function Blog() {
  let match = useRouteMatch();

  return (
    <Container className="Blog">
      <Switch>
        <Route path={`${match.path}/:postId`}>
          <Suspense fallback={<div>Loading...</div>}>
            <FetchPost/>
          </Suspense>
        </Route> 
        <Route path={match.path}>
          <Row>
            <Col>
              <h3>Posts</h3>
            </Col>
          </Row>
          <Fade right cascade duration="500">
            <div>
              {Object.keys(posts).map((key) => {
                return (
                  <Row key={key} className='mb-3'>
                    <Col>
                      <Card>
                        <Card.Body>
                          <Link to={`${match.url}/${key}`}>
                            <Card.Title>
                              {posts[key].name}
                            </Card.Title>
                          </Link>
                          <Card.Subtitle>
                            {posts[key].date}
                          </Card.Subtitle>
                          <Card.Text>
                            {posts[key].description}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          {posts[key].tags.map((tag) => {
                            return <small key={tag} className="text-muted">#{tag}</small>
                          })}
                        </Card.Footer>
                      </Card>
                    </Col>
                  </Row>
                )
              })}
            </div>
          </Fade>
        </Route>
      </Switch>
    </Container>
  );
}

function FetchPost() {
  const { postId } = useParams();
  const Post = posts[postId].article;
  return <Post />
}
