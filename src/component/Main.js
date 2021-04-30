import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Users/Login';
import Adduser from './Users/Adduser';


function Main(){
    return  <BrowserRouter>
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
         
        </Switch>
      </BrowserRouter>
    
}

export default Main