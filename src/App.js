import IconLabelTabs from './components/NavBar/NavBar'
import "./Assets/scss/index.scss"
import Products from './components/Shop/ItemListContainer';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ItemDetailContainer } from './components/Shop/ItemDetail';
import { Cart } from './components/Cart';
import { CartProvider } from './Context/CartContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <CartProvider>
        <IconLabelTabs />
        <Switch>
          <Route exact path="/" component={Products}></Route>
          <Route exact path="/ItemDetailContainer/:id" component={ItemDetailContainer}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
        </Switch>
      </CartProvider>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
