import React from "react";
import gmail from '../assets/images/gmail.png';
import location from '../assets/images/location.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import stack from '../assets/images/stack.png';
import '../assets/css/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    
    const styles = {
        icon: {
            maxHeight: '20px',
            marginRight: '5px',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            fontStyle: 'italic'
        },
        appIcon: {
            height: '40px'
        }
    }

    return (
        <footer className="footer text-center text-lg-start">
            <div className="row text-center d-flex justify-content-center">
                <Link to="/contact">
                 <button 
                        type="button" 
                        className="btn btn-success"
                        href="#contact"
                        >
                        CONTACT ME
                    </button>
                </Link>
                    <div className="row">
                        <div className="col">
                            <p className="contactInfo">
                             <img src={gmail} className="icon" style={styles.icon}/>
                            smokhadar@gmail.com</p>
                            <p className="contactInfo">
                             <img src={location} className="icon" />
                             Edmonds, WA</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="contactInfo">
                             <img src={github} style={styles.appIcon}/>
                            </p>
                            <p className="contactInfo">
                             <img src={linkedin} style={styles.appIcon}/></p>
                             <p className="contactInfo">
                             <img src={stack} className="icon" style={styles.appIcon} />
                             </p>
                        </div>
                    </div>
            </div>
            <div className="row text-center">
            <ul className="col list">
                <Link to="/" style={styles.link}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={styles.link}>
                    <li>About</li>
                </Link>
                <Link to="/portfolio" style={styles.link}>
                    <li>Portfolio</li>
                </Link>
                <Link to="/resume" style={styles.link}>
                    <li>Resume</li>
                </Link>
                </ul>
            </div>
        </footer>
    )
}