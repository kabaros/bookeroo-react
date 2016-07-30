// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Menu from './Menu';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
