import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/navBar/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {CartDetail} from './pages/cartDetail';
import {Contacto} from './pages/contacto';
import {Error} from './pages/error';
import {Faq} from './pages/faq';
import {Home} from './pages/home';
import {Tienda} from './pages/tienda';
import {Product} from './pages/product';
import { CategoryDetail } from './components/CategoryDetail/CategoryDetail';
import {CartProvider} from './context/cartContext'
import {Checkout} from './pages/cartCheckout'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/cartDetail">
                  <CartDetail />
                </Route>
                <Route path="/tienda">
                  <Tienda />
                </Route>
                <Route path="/contacto">
                  <Contacto />
                </Route>
                <Route path="/faq">
                  <Faq />
                </Route>
                <Route path="/product/:productId">
                  <Product />
                </Route>
                <Route path='/category/:categoryId'>
                  <CategoryDetail />
                </Route>
                <Route path='/cartCheckout'>
                  <Checkout />
                </Route>
                <Route path="*">
                  <Error />
                </Route>
              </Switch>
          </div>
      </Router>
    </CartProvider>
    
  );
}

export default App;
