import Categories from './components/categories.js';
import Products from './components/products.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Cart from './components/cart.js';
import ProductDetails from './components/productDetails.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ViewCart from './components/viewCart.js'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/'>

    <Cart />
    <Categories />
    <Products />

      </Route>
      <Route path='/product/:id' component={ProductDetails}>
      </Route>
      <Route path='/cart'>
      <ViewCart />
      </Route>
    </Switch>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
