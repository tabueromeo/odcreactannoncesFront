import App from "../App"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCategorie from "./Categorie/AddCategorie";
import UpdatedCategorie from "./Categorie/UpdatedCategorie";
import IndexCategorie from "./Categorie/IndexCategorie";
import DeleteCategorie from "./Categorie/DeleteCategorie";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> <App /></Route>
        <Route exact path="/admin/categorie"> <IndexCategorie /></Route>
        <Route path="/admin/categorie/add"> <AddCategorie /></Route>
        <Route path="/admin/categorie/:id/edit" component={UpdatedCategorie}></Route>
        <Route path="/admin/categorie/:id/delete" component={DeleteCategorie}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Main