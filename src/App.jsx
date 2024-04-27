import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterPrivate from './routes/RouterPrivate';
import Login from './components/Login/Login';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login setAuthenticated={setAuthenticated} />
        </Route>
        <RouterPrivate
          path="/dashboard"
          authenticated={authenticated}
          component={() => <h2>Dashboard</h2>}
        />
        <RouterPrivate
          path="/home"
          authenticated={authenticated}
          component={() => <h2>Home</h2>}
        />
        <RouterPrivate
          path="/"
          authenticated={authenticated}
          component={() => <h2>Home</h2>}
        />
      </Switch>
    </Router>
  );
};

export default App;
