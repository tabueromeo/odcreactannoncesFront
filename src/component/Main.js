
import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnnonceDetail from '../AnnonceDetail'

function Main(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App/>
          </Route>
          <Route path="/annonces/read/:id" component={AnnonceDetail} /> 
        </Switch>
      </BrowserRouter>
      )
    
}

export default Main