import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import PlanReact from './components/PlanReact'
import PlanRedux from './components/PlanRedux'
import Subtema from './components/Subtema'
import { RUTAS } from "./helpers/constants"

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path={RUTAS.inicio}  component={Home} />
        <Route exact path={RUTAS.planReact} component={PlanReact} />
        <Route exact path={`${RUTAS.planReact}/:subtema`} component={Subtema} />
        <Route exact path={RUTAS.planRedux}  component={PlanRedux} />
        <Route exact path={`${RUTAS.planRedux}/:subtema`} component={PlanRedux} />
        <Route exact path={`${RUTAS.planRedux}/:subtema`} component={Subtema} />
      </BrowserRouter>
    </div>
  );
}

export default App;
