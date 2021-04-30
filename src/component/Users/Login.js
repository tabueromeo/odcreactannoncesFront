import React from "react";
import './Login.css';
import axios from "axios";

 class Login extends React.Component{
        constructor(props){
            super(props);
            this.state={
                user:
                {
                    email :"",
                    password :"",
                }
            }
        }; 

       handleSubmit = (event) =>{

             event.preventDefault()
           console.log(this.state.user);
    
           axios.post(`http://134.122.24.165:5000/user/login`, this.state.user)
            .then(res => {
                const user =res.data
                 //permet d'enregistrer notre token que le navigateur nous a generer lorsque nous nous sommes connecte
                 //et lorsq
                 localStorage.setItem('token', user.userTokeng);
                 console.log(localStorage.getItem('token'))
    
             console.log(res.data);
               })
                  .catch(erreur =>{
              //On traite ici les erreurs éventuellement survenues
               alert("serveur indisponible")
               console.log(erreur);
              });
       }
 
 handleChange = (event)=>{

    let usertmp = this.state.user
    usertmp[event.target.name] = event.target.value
    this.setState ({user:usertmp});

}


 render(){


     return(
<div ClassName= "login">
<div className="container">
        <h3 className="h3">Login form</h3>

                <form className="form" action="" method="post">

                    <div className="form-group">
                        <label for="email" className="label">
                            <strong>email:</strong>
                            <input type = "text" name="email" id="username" className ="button" onChange = {this.handleChange} ></input> 
                        </label>
                    </div>
                        <br></br>

                    <div className="form-group">
                        <label for="password" className="label">
                            <strong>password: </strong>

                            <input className="button" type = "text" onChange = {this.handleChange} name="password"></input>
                        
                        </label>
                    </div>

                    <div className="form-group">
                        <button  type="connect" className="button"  onClick = {this.handleSubmit} >Sign in</button> <br></br>
                    </div>
                    
                </form>
  </div>
        
  </div>
      )
     }
 }
     

 export default Login; 
    