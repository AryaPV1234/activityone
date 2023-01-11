import LandingPage from './page/LandingPage/LandingPage';
import LoginPage  from './page/LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      {/* <NavBar>
        <AboutUs />
      </NavBar> */}

      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path='/about' component={AboutUs}/>
        
      </Switch>
    </>
  );
}

export default App;
