


// ReactDOM.render(<Header />, document.getElementById('root'));
import classes from './LoginPage.module.css';
// import img from '../../assets/image.jpg';
// import { Link } from 'react-router-dom';
import { useRef } from 'react';

const LoginPage = () => {
    const fromInputRef = useRef();
    const toInputRef = useRef();
    const flightnameInputRef = useRef();
    const dateInputRef = useRef();
    const classInputRef = useRef();
    const returndateInputRef = useRef();



    return (
        <div className={classes.landing}>
            {/* <h1>Your{this.state.titletag}</h1> */}
            <form className={classes.form}>
                <h1>Booking</h1>
                <div className={classes.similar}>
                    <div className={classes.control}>
                        <label htmlFor='from'>From</label>
                        <input type='from' id='from' placeholder='text' required ref={fromInputRef}  />
                    </div> 
                    <div className={classes.control}>
                        <label htmlFor='to'>To</label>
                        <input type='to' id='to' placeholder='text' required ref={toInputRef}  />
                    </div>   
                </div>
                <div className={classes.similar}>
                        <div className={classes.control}>
                        <label htmlFor='date'>Depart on</label>
                        <input type='date' id='date' required ref={dateInputRef}  />
                        </div>  
                        <div className={classes.control}>
                        <label htmlFor='returndate'>Return on</label>
                        <input type='date' id='returndate' required ref={returndateInputRef}  />
                        </div> 
                </div>
                <div className={classes.similar}>
                        <div className={classes.control}>
                        <label htmlFor='flightname'>Flight Name</label>
                        <input type='flightname' id='flightname' placeholder='text' required ref={flightnameInputRef}  />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='class'>Class</label>
                        <input type='class' id='class' required ref={classInputRef}  />
                    </div> 
                </div>
            
               
            
                    
            </form>
                
        </div>

        
    );
}
export default LoginPage
