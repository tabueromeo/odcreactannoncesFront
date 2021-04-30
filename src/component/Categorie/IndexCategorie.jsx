import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class IndexCategorie extends Component{
     constructor(props){
         super(props);
         this.state={
             categories:[{}]
         }
         
     }
 
    render(){
        return(
         <div>
            <h1 className="text-center">Affichage des Catégories</h1>
            <table className="table col-11 mx-auto table-borderless text-center mt-4">
                <thead>
                    <tr>
                        <th>Nom de la catégorie</th>
                        <th>Description</th>
                        <th>Utilisateur</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bien Immobilier</td>
                        <td>Un bien immobilier diffère des biens personnels,
                             lesquels ne sont pas attachées en permanence au fonds de terre,
                              comme les véhicules, les bateaux, les bijoux, les meubles,
                               les outils et le roulant d'une ferme agricole.</td>
                        <td>Rachel</td>
                        <td className="d-flex"> 
                       <Link to="/admin/categorie/1/edit"><button type="button" className="btn btn-outline-primary mr-4">Modifier</button></Link>
                       <Link to="/admin/categorie/1/delete"><button type="button" className="btn btn-outline-danger">Supprimer</button></Link> 
                        </td>
                    </tr>
                    <tr>
                        <td>Achat&Ventre</td>
                        <td>L’achat est un acte économique entre un acheteur (le client) et un vendeur (le fournisseur) 
                            qui consiste à acquérir un service, un produit ou un bien, moyennant une contrepartie souvent
                             financière.  la vente est un acte passif, demeurant dans l'attente de l'acquisition par une autre personne 
                             d'un objet ou de la vertu d'une personne, l'achat est un acte actif demandant de la part du requérant un assentiment,
                              un déboursement et une appropriation pratique d'un objet ou de la vertu d'une personne.</td>
                        <td>Florian</td>
                        <td className="d-flex">  
                        <Link to="/admin/categorie/2/edit"><button type="button" className="btn btn-outline-primary mr-4">Modifier</button></Link>
                       <Link to="/admin/categorie/2/delete"><button type="button" className="btn btn-outline-danger">Supprimer</button></Link> 
                        </td>
                    </tr>
                    <tr>
                        <td>Bijoux-Montre</td>
                        <td>Un bijou est un élément de parure corporelle qui peut être porté sur le vêtement,
                             sur le corps ou même dans le corps. D'après le site du CNRTL,
                              le bijou correspond à un "petit objet servant à la parure, précieux par sa matière,
                               la façon dont il est travaillé ou simplement son originalité". </td>
                        <td>Estelle</td>
                        <td className="d-flex"> 
                        <Link to="/admin/categorie/3/edit"><button type="button" className="btn btn-outline-primary mr-4">Modifier</button></Link>
                       <Link to="/admin/categorie/3/delete"><button type="button" className="btn btn-outline-danger">Supprimer</button></Link> 
                        </td>
                    </tr>
                    <tr>
                        <td>Cours&Formation</td>
                        <td>La formation consiste à enseigner à un employé les connaissances et 
                            les compétences nécessaires à l’exécution de ses fonctions courantes.
                             La formation professionnelle est généralement adoptée pour des personnes 
                             exerçant déjà une activité professionnelle, et souhaitant accroître leurs compétences.</td>
                        <td>Yared</td>
                        <td className="d-flex"> 
                        <Link to="/admin/categorie/4/edit"><button type="button" className="btn btn-outline-primary mr-4">Modifier</button></Link>
                       <Link to="/admin/categorie/4/delete"><button type="button" className="btn btn-outline-danger">Supprimer</button></Link> 
                        </td>
                    </tr>
                   
                </tbody>
            </table>
         </div>
        
        )
    }
}


export default IndexCategorie