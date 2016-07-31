import React from 'react';
import {Link} from 'react-router';

const HomePage = ()=> {
	return ( 
		<div className="jumbotron">
			<h1>Welcome to Bookeroo</h1>
			<p className="lead">Best Booking App, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			<p>
				<Link className="btn btn-lg btn-success" to="booking">
					Book Now!
				</Link>
			</p>
		</div>
	);
};

export default HomePage;
