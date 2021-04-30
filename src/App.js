import logo from './logo.svg';
import './App.css';
import ListeAnnonces from './ListeAnnoncesEtRecherche'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ListeAnnonces />
    </div>
  );
}

export default App;
