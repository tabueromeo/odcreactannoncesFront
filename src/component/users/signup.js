import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'



function Signup(){

    const [user, setuser] = useState({
        name:"",	
        email:"",	
        telnum:"",	
        firstName:"",	
        password:""	
    })

    const handleChange=(e)=>{
        let usertempo= user
        usertempo[e.target.name]=e.target.value
    console.log(user)
    }

    const handleSubmit =(e)=> {
        console.log(user)
        
        axios.post("http://134.122.24.165:5000/user/signup", user)
        .then(res => {
       console.log(res.data);
      }).catch(erreur =>{
        //On traite ici les erreurs éventuellement survenues
        console.log(erreur);
        });
        e.preventDefault()
    }

    return(
        <div>
            <form class="text-center">
                <div>
                    <label>
                   Name
                            <input class="form-control"  onChange={handleChange} type= "text" name="name"/>
                        </label>
                </div>
                <div>
                    <label>
                    First Name
                            <input class="form-control" onChange={handleChange} type= "text" name="firstName"/>
                        </label>
                </div>

                <div>
                    <label>
                        Password
                        <input class="form-control" onChange={handleChange} type= "password" name="password"/>
                    </label>
                </div>
                <div>
                    <label controlId="formBasicEmail">
                        Email
                        <input class="form-control" onChange={handleChange} type= "text" name="email"/>
                    </label>
                    <div>
                <label>
                      Phone Number
                       <input class="form-control" onChange={handleChange} type= "text" name="telnum"/>
                  </label>
                </div>
                </div>
                <div>
                    <input class="btn btn-primary" onClick= {handleSubmit} type="submit" value="Envoyer"/>
                </div>
            </form>
        </div>
    )
}

export default Signup;