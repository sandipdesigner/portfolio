import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Mywork from './Mywork';
import Contact from './Contact';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />

    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/about" component={About} />

      <Route path="/mywork" component={Mywork} />

      <Route path="/contact" component={Contact} />

      </Switch>


    </div>
    </Router>
  );
}

export default App;
