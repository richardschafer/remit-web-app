import React from 'react';
import { Switch, Route } from 'react-router';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';

class App extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
