import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'
import './ListeAnnoncesEtRecherche.css'

class ListeAnnonces extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        isLoaded: false,
        currentPage: 1,
        perPage: 2,
        filter: "",
        ListeAnnonces: [
            {
                id: 1,
                description: `Résumé
                Job étudiant : Manutentionnaire (F/H), 74150 Rumilly, Intérim, 3 à 6 mois, Temps plein.
                Secteur : Industrie / Environnement
                Fonction : Production / Opérations
                Entreprise : ADEQUAT RUMILLY
                
                L'entreprise
                Décroche le job Adéquat !
                
                Adéquat t'accompagne dans ta recherche d'emploi (intérim, CDD, CDI) et te propose + de 5000 jobs dans tous les secteurs d'activité : Industrie, Logistique, Transport, Bâtiment Travaux Public, Tertiaire
                
                Adéquat c'est + de 260 agences en France et une identité forte : simplicité et proximité
                Retrouve toutes nos offres d'emplois sur lejobadequat.com et candidate facilement avec ou sans CV ou inscris-toi à notre CVthèque pour être visible auprès de nos 1000 recruteurs
                
                Description du poste
                Mission courte durée selon profil et disponibilité LE SAMEDI - Débutant accepté
                
                Secteur RUMILLY ST FELIX Vous souhaitez travailler les samedis ou vacances scolaires pendant vos études et découvrir un autre univers que celui de la restauration, de la grande distribution ou du baby-sitting, rejoignez l'univers dynamique de la logistique. Vos qualités et compétences seront réellement appréciées et vous pourrez engranger de l'expérience. Notre agence Adéquat de RUMILLY recrute des étudiants sur le poste de : Agent de QUAI (H/F). Vos missions :
                - Alimentation des chaines,
                - Port de charges, emballage et travaux de manutention.
                
                Votre profil :
                - Débutant accepté,
                - Sérieux, ponctuel, dynamique, organisé et doté d'un esprit d'équipe,
                - La maîtrise des outils de manutention et la connaissance des règles de sécurité sont appréciées
                Votre rémunération et vos avantages :
                - Taux horaire fixe+ 10% de fin de mission + 10% de congés payés
                - Primes liées au poste (A MODIFIER SI BESOIN)
                - Primes collective et/ou individuelle + participation aux bénéfices + CET 5%
                - Acompte de paye à la semaine si besoin,
                - Possibilité d'intégration rapide, de formation et d'évolution,
                - Bénéficiez d'aides et de services dédiés (mutuelle, logement, garde enfant, déplacement...).
                Pour toutes questions, vous pouvez nous joindre au 04.50.10.15.00 . Rejoignez le groupe Adéquat, l'acteur le plus dynamique du secteur de l'emploi depuis 2 ans ! Adéquat, simplement pour vous !`,
                wording: "Manutentionnaire (H/F)",
                category: "Job Etudiant",
                photo: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
                postNumber: 1,
                createdAt: new Date('2021-04-30')
            },
            {
                id: 2,
                description: `Résumé
                Job étudiant : Manutentionnaire (F/H), 74150 Rumilly, Intérim, 3 à 6 mois, Temps plein.
                Secteur : Industrie / Environnement
                Fonction : Production / Opérations
                Entreprise : ADEQUAT RUMILLY
                
                L'entreprise
                Décroche le job Adéquat !
                
                Adéquat t'accompagne dans ta recherche d'emploi (intérim, CDD, CDI) et te propose + de 5000 jobs dans tous les secteurs d'activité : Industrie, Logistique, Transport, Bâtiment Travaux Public, Tertiaire
                
                Adéquat c'est + de 260 agences en France et une identité forte : simplicité et proximité
                Retrouve toutes nos offres d'emplois sur lejobadequat.com et candidate facilement avec ou sans CV ou inscris-toi à notre CVthèque pour être visible auprès de nos 1000 recruteurs
                
                Description du poste
                Mission courte durée selon profil et disponibilité LE SAMEDI - Débutant accepté
                
                Secteur RUMILLY ST FELIX Vous souhaitez travailler les samedis ou vacances scolaires pendant vos études et découvrir un autre univers que celui de la restauration, de la grande distribution ou du baby-sitting, rejoignez l'univers dynamique de la logistique. Vos qualités et compétences seront réellement appréciées et vous pourrez engranger de l'expérience. Notre agence Adéquat de RUMILLY recrute des étudiants sur le poste de : Agent de QUAI (H/F). Vos missions :
                - Alimentation des chaines,
                - Port de charges, emballage et travaux de manutention.
                
                Votre profil :
                - Débutant accepté,
                - Sérieux, ponctuel, dynamique, organisé et doté d'un esprit d'équipe,
                - La maîtrise des outils de manutention et la connaissance des règles de sécurité sont appréciées
                Votre rémunération et vos avantages :
                - Taux horaire fixe+ 10% de fin de mission + 10% de congés payés
                - Primes liées au poste (A MODIFIER SI BESOIN)
                - Primes collective et/ou individuelle + participation aux bénéfices + CET 5%
                - Acompte de paye à la semaine si besoin,
                - Possibilité d'intégration rapide, de formation et d'évolution,
                - Bénéficiez d'aides et de services dédiés (mutuelle, logement, garde enfant, déplacement...).
                Pour toutes questions, vous pouvez nous joindre au 04.50.10.15.00 . Rejoignez le groupe Adéquat, l'acteur le plus dynamique du secteur de l'emploi depuis 2 ans ! Adéquat, simplement pour vous !`,
                wording: "Assistant de direction intérimaire (H/F)",
                category: "Temporaire",
                photo: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
                postNumber: 2,
                createdAt: new Date('2021-04-15')
            },
            {
                id: 3,
                description: `Résumé
                Job étudiant : Manutentionnaire (F/H), 74150 Rumilly, Intérim, 3 à 6 mois, Temps plein.
                Secteur : Industrie / Environnement
                Fonction : Production / Opérations
                Entreprise : ADEQUAT RUMILLY
                
                L'entreprise
                Décroche le job Adéquat !
                
                Adéquat t'accompagne dans ta recherche d'emploi (intérim, CDD, CDI) et te propose + de 5000 jobs dans tous les secteurs d'activité : Industrie, Logistique, Transport, Bâtiment Travaux Public, Tertiaire
                
                Adéquat c'est + de 260 agences en France et une identité forte : simplicité et proximité
                Retrouve toutes nos offres d'emplois sur lejobadequat.com et candidate facilement avec ou sans CV ou inscris-toi à notre CVthèque pour être visible auprès de nos 1000 recruteurs
                
                Description du poste
                Mission courte durée selon profil et disponibilité LE SAMEDI - Débutant accepté
                
                Secteur RUMILLY ST FELIX Vous souhaitez travailler les samedis ou vacances scolaires pendant vos études et découvrir un autre univers que celui de la restauration, de la grande distribution ou du baby-sitting, rejoignez l'univers dynamique de la logistique. Vos qualités et compétences seront réellement appréciées et vous pourrez engranger de l'expérience. Notre agence Adéquat de RUMILLY recrute des étudiants sur le poste de : Agent de QUAI (H/F). Vos missions :
                - Alimentation des chaines,
                - Port de charges, emballage et travaux de manutention.
                
                Votre profil :
                - Débutant accepté,
                - Sérieux, ponctuel, dynamique, organisé et doté d'un esprit d'équipe,
                - La maîtrise des outils de manutention et la connaissance des règles de sécurité sont appréciées
                Votre rémunération et vos avantages :
                - Taux horaire fixe+ 10% de fin de mission + 10% de congés payés
                - Primes liées au poste (A MODIFIER SI BESOIN)
                - Primes collective et/ou individuelle + participation aux bénéfices + CET 5%
                - Acompte de paye à la semaine si besoin,
                - Possibilité d'intégration rapide, de formation et d'évolution,
                - Bénéficiez d'aides et de services dédiés (mutuelle, logement, garde enfant, déplacement...).
                Pour toutes questions, vous pouvez nous joindre au 04.50.10.15.00 . Rejoignez le groupe Adéquat, l'acteur le plus dynamique du secteur de l'emploi depuis 2 ans ! Adéquat, simplement pour vous !`,
                wording: "Agent d'entretien (H/F)",
                category: "Job Etudiant",
                photo: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
                postNumber: 1,
                createdAt: new Date('2021-04-29')
            }
        ],
        filterList: [],
    }

    handleChange = (e) => {
        // this.setState({ isLoaded: false })
        // console.log(e.target.value)
        // setTimeout(() => {
        //     this.setState({ isLoaded: true })
        //     let listAnn = this.state.ListeAnnonces
        //     listAnn.filter(item => ( 
        //             (item.wording.includes(document.querySelector('#input').value) ) ) )
        //     console.log(listAnn)
        // } , 2000 )
        this.setState({ filter: e.target.value})
    }

    handlePageChange = value => {
        this.setState({
          currentPage: value
        });
    };

    handleSearch = (e) => {
        // this.setState({ isLoaded: false })
        var filter = document.querySelector("#input").value
        axios.get('http://134.122.24.165:5000/annonces/read')
            .then( res => {
                let temp = res.data
                // .map(item => {
                //     item = {
                //         ...item,
                //         date: new Date(item.date)
                //     }
                //     console.log(item)
                // })
                this.setState({ListeAnnonces: temp ,  isLoaded: true})
                this.filterSearch(filter)
            })
        setTimeout(() => {
            let listAnn = this.filterSearch(filter)
            // let listAnn = this.state.ListeAnnonces.filter(item => ( item.wording.includes( filter ) ) )
            // console.log(filter)
            // console.log(listAnn)
        } , 2000 )
    }

    filterSearch = (filter) => {

        var listAnn = this.state.ListeAnnonces;
        var categ_filter = document.querySelector("#categ_filter").checked
        var word_filter = document.querySelector("#word_filter").checked
        var date_filter = document.querySelector("#date_filter").checked
        console.log( categ_filter + " | " + word_filter + " | " + date_filter )
        if(categ_filter === true) { 
            listAnn = this.state.ListeAnnonces.filter(item => ( item.category.includes( filter ) ) ); 
        }
        if(word_filter === true) { 
            listAnn = this.state.ListeAnnonces.filter(item => ( item.wording.includes( filter ) ) )  
        }
        if(date_filter === true) { 
            console.log(listAnn)
            listAnn.sort( (a,b) => ( a.date - b.date) )
            // listAnn.map( item => console.log(item.date))
        }
        this.setState({ filterList: listAnn, isLoaded: true })
    }

    componentDidMount() {
        axios.get('http://134.122.24.165:5000/annonces/read')
            .then( res => {
                let temp = res.data
                // .map(item => {
                //     item = {
                //         ...item,
                //         date: new Date(item.date)
                //     }
                // })
                this.setState({ListeAnnonces: temp, isLoaded: true })
        })
        // setTimeout(() => this.setState({ isLoaded: true}), 2000 );
    }

    render() {
        let TempListAnn = this.state.filterList.length == 0 ? this.state.ListeAnnonces : this.state.filterList
        let {
            currentPage, perPage
        } = this.state

        let indexLast = currentPage * perPage
        let indexFirst = indexLast - perPage 

        return(
            <div className="ListeAnnonces__Page">
                <nav id="navBar" className="NavBar">
                    <div className="NavBar__Container">
                        <div className="NavBar__Logo">
                            {/* <img src={logo} /> */}
                            <h3 className="font-2"> <span style={{ color: 'orangered'}}>ODC</span> Annonces</h3>
                        </div>
                        <div className="NavBar__Container__List">
                            <ul className="NavBar__List">
                                {/* <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="padding-top Container">
                    <h1 className="color-primary">Liste des Annonces</h1>
                    <div className="ListeAnnonces__Search">
                        <form className="d-flex justify-content-center flex-col">
                            <div className="Search__Input d-flex align-items-center">
                                <svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <input type="text" id="input" onChange={this.handleChange} placeholder="Rechercher une annonce"/>
                            </div>
                            <div className="Filter_Search">
                                <div className="d-flex justify-content-center align-items-center">
                                    Filtres : 
                                    <input type="radio" name="search_filter" className="search_filter" id="categ_filter" value="Catégorie"/> Catégorie
                                    <input type="radio" name="search_filter" className="search_filter" id="word_filter" value="Libellé"/> Libellé
                                    <input type="checkbox" name="search_filter" className="search_filter" id="date_filter" value=""/> Date de publication
                                </div>
                            </div>
                            <div className="Paging">
                                <div className="d-flex Filter_Search justify-content-center align-items-center">
                                    Nombre d'éléments :
                                    <select className="search_filter" onChange={ (e) => {
                                        this.setState({ perPage: e.target.value })
                                    }}>
                                        <option>2</option>
                                        <option>10</option>
                                        <option>25</option>
                                    </select>
                                </div>
                            </div>
                            <button onClick={this.handleSearch} className="searchAnnBtn" style={{ alignSelf: "center"}} type="button">Rechercher</button>
                        </form>
                    </div>
                    
                    { !this.state.isLoaded ? 
                        <div className="loader color-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 38 38" stroke="#fff">
                                <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(1 1)" stroke-width="2">
                                        <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                                        <path d="M36 18c0-9.94-8.06-18-18-18">
                                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                                        </path>
                                    </g>
                                </g>
                            </svg>                        
                        </div>
                    : 
                        <div className="ListeAnnonces__List">
                            { TempListAnn.length !== 0 ? TempListAnn.slice(indexFirst, indexLast).map((item, index) => (
                                <div className="Annonce__Card" key={index}>
                                    <img src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                                        height="200" width="auto" />
                                    <div className="Annonce__Card__Details">
                                        <Link to={"/annonces/read/" + item._id }><h2>{item.name}</h2></Link>
                                        <span className="Category">{item.category}</span>
                                        <p>Nombre de postes : <span className="color-primary">{item.postNumber}<b></b></span></p>
                                        <p>Ajouté le <b>
                                            {new Date(item.createdAt).getDate() + "/" + ( new Date(item.createdAt).getMonth() + 1) + "/" + new Date(item.createdAt).getFullYear() } à {new Date(item.createdAt).getHours() }:{new Date(item.createdAt).getMinutes()}</b></p> 
                                    </div>
                                </div>
                            )) : 
                                <div className="loader">
                                    <h1 className="color-primary">Aucun résultat !!!</h1>
                                </div>
                            }
                        </div>
                    }
                        <div className="paginate">
                            <Pagination 
                                defaultCurrent={this.state.currentPage}
                                defaultPageSize={this.state.perPage}
                                pageSize={this.state.perPage}
                                onChange={this.handlePageChange}
                                current={this.state.currentPage}
                                total={ TempListAnn.length }
                                style={{ listStyle: "none" }}
                                className="d-flex justify-content-center align-items-center"
                            />
                        </div>
                </div>
            </div>
        )

    }
}

export default ListeAnnonces