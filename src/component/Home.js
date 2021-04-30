import React, { Component } from 'react';
//import  './Main.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link"><Link to="/simpleusers/new">Manage User List</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Home;