// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import SeeAndDo from './components/SeeAndDo';
import TravelEssential from './components/TravelEssential';
import IndianCalendarPage from './components/IndianCalendarPage';
import IndiaMap from './components/IndiaMap';
import TripPlannerPage from './components/TripPlannerPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/see-and-do" component={SeeAndDo} />
          <Route path="/travelEssential" component={TravelEssential} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/map" component={IndiaMap} />
          <Route path="/india-calendar" component={IndianCalendarPage} />
          <Route path="/plan-your-trip" component={TripPlannerPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
