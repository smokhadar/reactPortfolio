import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/navigation.css';

export default function Navigation({ currentPage }) {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    const styles = {
        navBar: {
            background: 'white',
            display: 'flex',
            justifyContent: 'flex-start',
            margin: 0
        },
        navItem: {
            listStyleType: 'none',
            fontSize: 20,
            padding: 20,
            fontFamily: 'Montserrat, sans-serif',
        },
        link: {
            textDecoration: 'none',
            // color: 'white',
            color: 'black'
        },
        p: {
            fontSize: 50,
            paddingTop: 20,
            paddingLeft: 20,
            color: 'white',
            color: 'black',
            paddingRight: 180,
            fontFamily: 'Shadows Into Light, cursive',
        }
    }

    return (
        <ul className="navbar nav-pills" style={styles.navBar}>
            <Link to="/reactPortfolio" style={styles.link}>
                <p style={styles.p}>Samira Khadar</p>
            </Link>
            <li className="nav-item" style={styles.navItem}>
                <Link to="/about" style={styles.link}>
                 <a 
                  className={url === '/about' ? 'nav-link active' : 'nav-link'}
                  >
                  About
                  </a>
                </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
                <Link to="/portfolio" style={styles.link}>
                    <a
                    className={url === '/portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                    Portfolio
                    </a>
                 </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
                <Link to="/resume" style={styles.link}>
                    <a
                    className={url === '/resume' ? 'nav-link active' : 'nav-link'}
                    >
                    Resume
                    </a>
                </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
                <Link to="/contact" style={styles.link}>
                    <a
                    className={url === '/contact' ? 'nav-link active' : 'nav-link'}
                    >
                    Contact
                    </a>
                </Link>
            </li>
        </ul>
    );
}