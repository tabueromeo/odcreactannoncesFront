import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCategorie from "./Categorie/AddCategorie";
import UpdatedCategorie from "./Categorie/UpdatedCategorie";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <App /></Route>
        <Route path="/admin/categorie/add"> <AddCategorie /></Route>
        <Route path="/admin/categorie/:id/edit" component={UpdatedCategorie}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Main