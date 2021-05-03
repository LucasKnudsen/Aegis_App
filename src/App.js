import React from 'react';
import {  Route, Switch, useLocation } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer';
import About from './views/About';

const App = () => {
  const location = useLocation();
  console.log('I render')
  return (
    <>
     <Footer />
      <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/about' component={About} />
        </Switch>
      </AnimatePresence>
     
    </>
  );
}

export default App;
