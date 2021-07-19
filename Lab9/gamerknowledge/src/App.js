import React, { useState,useGlobalState } from 'react';
import logo from './logo.svg';
import './App.css';
import legends from './json/legends.json'
import LegendPage from './LegendPage.js';
import SigninPage from './SigninPage';
import Tutorials from './Tutorials.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const legendsInfo = legends

function App() {

  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
          <Navbar.Brand>GamerKnowledge</Navbar.Brand>
          <Nav className="me-auto navBar" >
            <Nav.Link className={(window.location.href === "http://localhost:3000/legends") ? "active" : ""} href="/legends" >Legends</Nav.Link>
            <Nav.Link className={(window.location.href === "http://localhost:3000/tutorials") ? "active" : ""} href="/tutorials">Tutorials</Nav.Link>
            <Nav.Link className={(window.location.href === "http://localhost:3000/signin") ? "active" : ""} href="/signin">Sign In</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button style={{display: language === "en" ? 'block' : 'none'}} variant="outline-info" onClick={() => {
                    setLanguage("fr");  
                    }}>English</Button>
            <Button style={{display: language === "fr" ? 'block' : 'none'}} variant="outline-info" onClick={() => {
                    setLanguage("en");  
                    }}>Français</Button>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/legends" >
              <LegendPage legends = {legendsInfo} />
          </Route>
          <Route path="/tutorials" >
              <Tutorials/>
          </Route>
          <Route path="/signin" >
            <SigninPage language={language==="en"}></SigninPage>
          </Route>
        </Switch>
      </Router>
      <Widget/>
      <footer id="footer" style={{position:"statix",bottom:"0",right: "0",paddingTop: "10px",paddingBottom: "10px",width:"100%", height: "fit-content",background:"#424546",textAlign: "center",color: "#f1f1f1"}}>
          <p>Author: Alex DeGrace</p>
      </footer>
    </div>
  );
}

export default App;
