import React from "react"
import axios from "axios"
import './AnnonceDetail.scss';


class AnnonceDetail extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
          

            annonce :
            { 
            },
            
             
            

        }
    }
 
    
    componentDidMount() 
    {  
        let id = this.props.match.params.id;
        
        axios.get( "http://134.122.24.165:5000/annonces/read" ).then(res => {
            const annonceInfos = res.data.find( item => (item._id === id) );
            this.setState({ annonce: annonceInfos });
        })
    }
        
        
    render(){

        let left = Math.floor(Math.random() * 200 + 700 ) + "px";
        let top = Math.floor(Math.random() * 200 + 150 ) + "px";
        let size = "scale(" + (Math.random() + 0.7) + ")";
       
    return(
               

<div className="annonce1">
       
     <h1>Detail sur l'annonce</h1>
    <div>
    <img alt="ImgAnnonce" title={this.state.annonce.name} className="imgannonce" src={this.state.annonce.photo}
        src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        height="200" width="auto" />
    </div>
    <br></br>
    <div>
     <ul className="ul">
      <li><h1>Categorie : {this.state.annonce.category}</h1></li>
        <li><h1>Libelle : {this.state.annonce.name}</h1></li>
        <li><h1>Ville : {this.state.annonce.localisation}</h1> </li>
        <li><h1>Description : {this.state.annonce.description}</h1></li>
        <li><h1>Nombre de Poste : {this.state.annonce.postNumber}</h1> </li>
    
     <div className="circle" style={{left, top, 
         size}}></div>
     <div className="circle2" style={{left, top, 
         size}}></div>
     </ul>
     </div>

</div>
               )
    }
}

      
    

export default AnnonceDetail;