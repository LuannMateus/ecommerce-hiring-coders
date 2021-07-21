import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './pages/Admin';
import Authentication from './pages/Authentication';
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Authentication} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
