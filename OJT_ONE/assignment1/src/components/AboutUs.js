
import classes from './AboutUs.module.css';
import img from '../assets/img 2.jpg';

const AboutUs = () =>{
    return(
        
        <div className={classes.about}>
            <img src={img} alt="image" /> 
            <div className={classes.para}>
            <h2 className={classes.title}>About Us</h2>
                <p className={classes.aboutus}>
                 Qatar Airways is proud to be one of the youngest global airlines
                 to serve all six continents, and thanks to our customers’ 
                 response to our offerings, we are also the world’s 
                 fastest-growing airline. We connect more than 140 destinations
                 on the map every day, with a fleet of the latest-generation aircraft,
                 and an unrivalled level of service from our home and hub, 
                 the Five-star airport, Hamad International Airport in Doha, the State of Qatar.
                </p>
            </div>
        </div>
    ) 
}
export default AboutUs;  