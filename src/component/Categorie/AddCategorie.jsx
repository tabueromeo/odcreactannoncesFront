import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react'
import { Redirect } from 'react-router';
class AddCategorie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {
                name: '',
                description: '',
                createdAt: '',
                updatedAt: ''
            },
            isRedirect: false
        }
    }

    handleChange = event => {
        let categoryTemp = this.state.category
        categoryTemp[event.target.name] = event.target.value
        this.setState({
            category: categoryTemp
        })
    }
    handleSubmit = event => {
        event.preventDefault()
    }
    render() {
        console.log(this.state.category);
        if (this.isRedirect) {
            return <Redirect to="/admin/categorie" />
        }
        return (
            <div>
                <h1 className="text-center">Creaction d'une categorie</h1>
                <form className="m-auto col-4" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input type="text" onChange={this.handleChange} name="name" id="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" onChange={this.handleChange} name="description" id="description" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </div>
        )
    }
}
export default AddCategorie;