import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './bootstrap.min.css'

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import LaunchPadScreen from './screens/LaunchPadScreen';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/launchpads/:id' component={LaunchPadScreen} />
          <Route path='/about' component={AboutScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
