import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './pages/Admin';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import ProductPage from './pages/Product';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Authentication} />
        <Route exact path="/product/:id" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
