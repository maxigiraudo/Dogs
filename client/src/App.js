import "./App.css";
import Dogs from "./components/Dogs/Dogs";
import Inicial from "./components/Inicial";
import Order from "./components/Order";
import SearchBar from "./components/SearchBar";
import { Switch, Route } from "react-router";
import DogDetail from "./components/DogDetail/DogDetail";
import AddDog from "./components/AddDog";
import NavBar from "./components/NavBar/NavBar";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Inicial} />
        <Route path="/home">
          <NavBar />
          <SearchBar />

          <Order />
          <Filter />
          <Dogs />
        </Route>
        <Route exact path="/add" component={AddDog} />
        <Route exact path="/:id" component={DogDetail} />
      </Switch>
    </div>
  );
}

{
  /* <div className="App">
      <h1>Henry Dogs</h1>
      <SearchBar />
      <Switch>
        <Route path="/add">
          <AddDog />
        </Route>
        <Route path="/:id">
          <DogDetail />
        </Route>
        <Route path="/">
          <Order />
          <Dogs />
        </Route>
      </Switch>
    </div> */
}
export default App;
