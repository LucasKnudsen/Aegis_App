import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import { AnimatePresence } from 'framer-motion'

const App = () => {

  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path='/' exact component={LandingPage} />
        <Route path='/dashboard' exact component={Dashboard} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
