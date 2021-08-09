import React, { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Vessel from './Vessel';

class App extends Component {


  render() {
    return(
      <div>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route path='/vessel/:id' component={Vessel}/>

        <Footer />
      </div>

    );
  }
}

export default App