import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Home from './Home';
import HeaderContainer from './header-container'
import displayCard from './DisplayCard';
import DisplayDetail from './displayDetail'

function App() {
  return (
    <Router>
      <div className="siteborder">
      <Container fluid  className="p-0  d-flex flex-column">
      <Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <Col className="px-3 py-8">
          <HeaderContainer />
          </Col>
        </Row>
          <Col md="12">
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/display/:display">
                    <DisplayDetail />
                </Route>
                <Route path="/">
                  <Home />
                </Route>

              </Switch>
          </Col>
        
        </Container>
        </div>
    </Router>
  );
}
/*
<Row noGutters className="flex-grow-1">
</Row> 
<Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <Col className="px-3 py-2">
            
          </Col>
        </Row>
<HeaderContainer />
<Route path="/resume">
                  <Resume />
                </Route>
                <Route path="designs">
                    <Design />
                </Route>*/

export default App;
