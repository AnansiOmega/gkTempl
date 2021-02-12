import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Volunteers } from './pages/volunteers'
import { Donors } from './pages/donors'
import { Stories } from './pages/stories'
import { MyNav } from './components/navbar'
import { Footer } from './components/footer'

const App = () => {
  return (
    <div className="App">
      <MyNav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/volunteers' component={Volunteers} />
        <Route path='/donors' component={Donors} />
        <Route path='/stories' component={Stories} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
