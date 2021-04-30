
import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Main(){
    return  <BrowserRouter>
        <Switch>
         
        <Route exact path="/">
          <App/>
          </Route>
         
        </Switch>
      </BrowserRouter>
    
}

export default Main