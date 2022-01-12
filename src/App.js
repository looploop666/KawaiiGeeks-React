import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/navBar/navBar';
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <ItemListContainer greeting = {'Somos GEEKS pero no perdimos lo KAWAII!'}/>
      
    </div>
  );
}

export default App;
