
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

function App() {
  const title= 'Welcome to the page';
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
       <Switch>
        <Route exact path="/">
          <Home />
          </Route>

          <Route path="/create">
          <Create />
          </Route>

       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
