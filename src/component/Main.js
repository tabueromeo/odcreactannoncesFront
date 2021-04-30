
import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModifSupp from "./ModifSupp";
import CreateModifAnnonce from "./CreateModifAnnonce";

function Main(){
    return  <BrowserRouter>
        <Switch>
         
        <Route exact path="/">
          <ModifSupp/>
          </Route>
        <Route path = "/createmodifannonce/:id" component = {CreateModifAnnonce} />
        </Switch>
      </BrowserRouter>
    
}

export default Main