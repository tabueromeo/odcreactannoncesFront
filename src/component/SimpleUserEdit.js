import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../component/AppNavbar';
import axios from 'axios'

class  SimpleUserEdit extends Component {

  emptySimpleUser = {
    libelleprivilege: '',
    priviletype : '',
    typeuser  : '',
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptySimpleUser
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   async componentDidMount() {
//     if (this.props.match.params.id !== 'new') {
//       const addprivilege = await (await fetch(`http://134.122.24.165:5000/privilege/addprivilege/${this.props.match.params.id}`)).json();
//       this.setState({item: addprivilege});
//     }
//   }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    // axios.post(`https://mamaison.arenaplaza.site/api/User/CreatedUser`, this.state.item)
    //      .then(res => {
    //         console.log(res);
             

    //       }).catch(erreur =>{
    //         //On traite ici les erreurs éventuellement survenues
    //         alert("serveur indisponible")
    //         console.log(erreur);
    //     });

    await fetch('http://134.122.24.165:5000/privilege/addprivilege', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
      
    });
    //this.props.history.push('/simpleusers');
    
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Externe User' : 'Add Externe User'}</h2>;
    console.log(this.state.item)

    return <div>
      <AppNavbar/> 
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="libelleprivilege">Libelle Privilege</Label>
            <Input type="text" name="libelleprivilege" id="libelleprivilege" value={item.libelleprivilege || ''}
                   onChange={this.handleChange} autoComplete="libelleprivilege"/>
          </FormGroup>
          <FormGroup>
            <Label for="priviletype">Type de Privilege </Label>
            <Input type="text" name="priviletype" id="priviletype" value={item.priviletype  || ''}
                   onChange={this.handleChange} autoComplete="priviletype"/>
          </FormGroup>
          <FormGroup>
            <Label for="typeuser  ">Niveau </Label>
            <Input type="text" name="typeuser" id="typeuser" value={item.typeuser  || ''}
                   onChange={this.handleChange} autoComplete="typeuser"/>
          </FormGroup>          
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/simpleusers">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(SimpleUserEdit);