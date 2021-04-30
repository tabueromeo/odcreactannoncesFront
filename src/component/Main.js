
import Home from "../component/Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleUserList from '../component/SimpleUserList';
import SimpleUserEdit from '../component/SimpleUserEdit';

function Main(){
    return (<Router>
        <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/simpleusers/:id' component={SimpleUserEdit}/>
        <Route path='/simpleusers' exact={true} component={SimpleUserList}/>          
         
        </Switch>
      </Router>
    )
}

export default Main