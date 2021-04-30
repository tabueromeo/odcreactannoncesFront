import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
//import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class SimpleUserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      simpleusers: [], 
      isLoading: true
    };
    //this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://134.122.24.165:5000/privilege/read')
      .then(response => response.json())
      .then(response => console.log(response))
      .then(data => this.setState({simpleusers: data, isLoading: false}));
      console.log(this.state)
  }

  // async remove(id) {
  //   await fetch(`/api/simpleuser/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(() => {
  //     let updatedSimpleusers = [...this.state.simpleusers].filter(i => i.id !== id);
  //     this.setState({simpleusers: updatedSimpleusers});
  //   });
  // }

  render() {
    const {simpleusers, isLoading} = this.state;
    console.log(this.state)
    if (isLoading) {
      return <p>Loading...</p>;
    }

    const simpleuserList = simpleusers.map(simpleuser => {
      return <tr key={simpleuser.id}>
        <td style={{whiteSpace: 'nowrap'}}>{simpleuser.libelleprivilege}</td>
        <td style={{whiteSpace: 'nowrap'}}>{simpleuser.priviletype}</td>
        <td style={{whiteSpace: 'nowrap'}}>{simpleuser.typeuser}</td>
         
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/simpleusers/" + simpleuser.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(simpleuser.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
         
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/simpleusers/new">Add Simple User</Button>
          </div>
          <h3>Liste des Simple Users </h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Libelle User</th>
                <th width="10%">Niveau</th>
                <th width="20%">privilege</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {simpleuserList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default SimpleUserList;