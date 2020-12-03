import Categories from './components/categories.js';
import Products from './components/products.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Cart from './components/cart.js';
function App() {
  return (
    <div>
    <Header />
    <Cart />
    <Categories />
    <Products />
    <Footer />
    </div>
  );
}

export default App;
