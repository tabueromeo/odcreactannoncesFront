import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Users/Login';
import Adduser from './Users/Adduser';

import Header from './Header'
import Signup from './users/signup'

function Main(){
    return  <BrowserRouter>
      <Route component = {Header} />
        <Switch>
         
          <Route exact path="/">
            <App/>
          </Route>
          <Route  path="/Login">
            <Login/>
          </Route>
            <Route  path="/Adduser">
            <Adduser/>
            </Route>
       
        <Route path = "/Signup">
        <Signup/>
         </Route>
         </Switch>
      </BrowserRouter>
    
}

export default Main