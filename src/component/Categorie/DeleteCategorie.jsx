import { Component } from 'react'
import { Redirect } from 'react-router';

class DeleteCategorie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            id: this.props.match.params.id
        }

    }

    componentDidMount(){
        const id=this.state.id
        console.log(id)
    }
    render(){
        if (this.state.isRedirect) {
            return <Redirect to="/admin/categorie"/>
        }
        return(
            <h1>Suppression d'une categorie </h1>
        )
    }

}
export default DeleteCategorie