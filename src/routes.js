import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './pages/home/HomePage.js';
import BookingPage from './pages/booking/BookingPage';
import SeatingsPage from './pages/seatings/SeatingsPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="booking" component={BookingPage} />
    <Route path="seatings" component={SeatingsPage} />
  </Route>
);
