import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-awesome.min.css';
import './main.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Mywork from './Mywork';
import Contact from './Contact';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/portfolio">
    <div className="App">
      <Nav />

    <Switch>
      <Route path="/portfolio/" exact component={Home} />

      <Route path="/portfolio/about" component={About} />

      <Route path="/portfolio/mywork" component={Mywork} />

      <Route path="/portfolio/contact" component={Contact} />

      </Switch>


    </div>
    </Router>
  );
}

export default App;
