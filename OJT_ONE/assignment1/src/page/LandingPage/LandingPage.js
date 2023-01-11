
import classes from './LandingPage.module.css';
import { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import NavBar  from '../../components/NavBar';
import AboutUs from '../../components/AboutUs';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {titletag: "Welcome to Qatar Airways"};
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({titletag: "Let's explore!"})
        }, 1000)
      }

    render() {
        return (
            <div className={classes.tag}>
                <div className={classes.landing}>
                <NavBar /> 
                <h1>QATAR AIRWAYS</h1>
                <h2>Hi ✈{this.state.titletag}</h2>
                
                    {/* <img src={img} alt="image.jpg" /> */}
                
                    

                </div>
                {/* <div id='section-1' className={classes.players}>
                    <AboutUs />
                </div> */}
                
            
            
        </div>
            
        )
    };
}
export default LandingPage;