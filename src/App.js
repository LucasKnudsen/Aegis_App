import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer';
import About from './views/About';
import ChooseStocks from './views/ChooseStocks';
import Funds from './views/Funds';
import FAQ from './views/FAQ';
import Profile from './views/Profile';
import Protection from './views/Protection';
import RecommendedFunds from './views/RecommendedFunds';
import RecommendedStocks from './views/RecommendedStocks';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Footer />
      <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/funds' component={RecommendedFunds} />
          <Route exact path='/choose-stocks' component={ChooseStocks} />
          <Route exact path='/recommended-stocks' component={RecommendedStocks} />
          <Route exact path='/hedge' component={Protection} />

          <Route exact path='/about' component={About} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/profile' component={Profile} />

          <Route exact path='/funds-old' component={Funds} />
        </Switch>
      </AnimatePresence>

    </>
  );
}

export default App;
