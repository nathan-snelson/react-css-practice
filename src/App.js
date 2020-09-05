import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Profile from './views/Profile';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Router>
      <div>
        <NavBar bg="dark" variant="dark">
          <NavBar.Brand>SCWG</NavBar.Brand>

          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link className="link" to={'/'}>Home</Link></Nav.Link>
              <Nav.Link><Link className="link" to={'/about'}>About</Link></Nav.Link>
              <Nav.Link><Link className="link" to={'/profile'}>Profile</Link></Nav.Link>
              <Nav.Link><Link className="link" to={'/contact'}>Contact</Link></Nav.Link>                                          
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
          </NavBar.Collapse>
        </NavBar>         
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;