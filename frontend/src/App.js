import './App.css';
import { Link, Route, Router } from "wouter";

import { AppContextProvider } from './AppContext';
import { Home } from './Home'
import { Save } from './Save'
import { Fetch } from './Fetch'

function App() {
  return (
    <>
    <nav>
      <ul className="ul-nav">
        <li className="li-nav"><Link to="/home">Home</Link></li>
        {/* <li className="li-nav"><Link to="/save">Save</Link></li> */}
        <li className='li-nav'><Link to="/fetch">Fetch</Link></li>
      </ul>
    </nav>
      <AppContextProvider>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/fetch'>
          <Fetch />
        </Route>
        <Route path='/save/:id'>
          {params => <Save id={params.id} />}
        </Route>
    </AppContextProvider>
    </>
  );
}

export default App;
