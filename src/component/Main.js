import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCategorie from "./Categorie/AddCategorie";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <App /></Route>
        <Route path="/admin/categorie/add"> <AddCategorie /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Main