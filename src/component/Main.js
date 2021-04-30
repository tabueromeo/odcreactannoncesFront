
import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Signup from './users/signup'

function Main(){
    return  <BrowserRouter>
      <Route component = {Header} />
        <Switch>
        <Route exact path="/">
          <App/>
          </Route>
        </Switch>
        <Route path = "/Signup">
        <Signup/>
         </Route>
      </BrowserRouter>
    
}

export default Main