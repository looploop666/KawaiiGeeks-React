import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/navBar/navBar';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Cart} from './pages/cart';
import {Contacto} from './pages/contacto';
import {Error} from './pages/error';
import {Faq} from './pages/faq';
import {Home} from './pages/home';
import {Tienda} from './pages/tienda';
import {Product} from './pages/product';
import {Category} from './pages/category';
import { CategoryDetail } from './components/CategoryDetail/CategoryDetail';


function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
           <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
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
              <Route path="*">
                <Error />
              </Route>
          </Switch>
         
      </div>
    </Router>
    
  );
}

export default App;
