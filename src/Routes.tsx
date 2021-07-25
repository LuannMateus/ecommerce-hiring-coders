import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './pages/Admin';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import ProductPage from './pages/Product';
import Cart from './pages/Cart';
import UserPage from './pages/User';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Authentication} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/user" component={UserPage} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
