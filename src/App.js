import IconLabelTabs from './components/NavBar'
import "./Assets/scss/index.scss"
import Products from './components/ItemListContainer';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetail';
import { Cart } from './components/Cart';


function App() {
  return (

    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <IconLabelTabs />
        <Switch>
          <Route exact path="/" component={Products}></Route>
          <Route exact path="/ItemDetailContainer/:id" component={ItemDetailContainer}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
        </Switch>
      </BrowserRouter>
      </header>

    </div>
  );
}

export default App;
