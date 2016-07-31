
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/toastr/package/toastr.css';
import './styles/styles.css';

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);