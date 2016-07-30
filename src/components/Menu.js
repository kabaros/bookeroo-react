import React from 'react';
import { Link, IndexLink } from 'react-router';

const Menu = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/booking" activeClassName="active">Booking</Link>
      {" | "}
      <Link to="/seatings" activeClassName="active">Seatings</Link>
    </nav>
  );
};

export default Menu;
