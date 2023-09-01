import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({ currentPage }) {

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
            // position: 'relative',
            // left: 0,
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
        <ul className="navbar nav-tabs" style={styles.navBar}>
            <Link to="/" style={styles.link}>
                <p style={styles.p}>Samira Khadar</p>
            </Link>
            <li className="nav-item" style={styles.navItem}>
                <Link to="/about" style={styles.link}>
                 <a 
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                  >
                  About
                  </a>
                </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
                <Link to="/portfolio" style={styles.link}>
                    <a
                    className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                    >
                    Portfolio
                    </a>
                 </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
                <Link to="/resume" style={styles.link}>
                    <a
                    className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}
                    >
                    Resume
                    </a>
                </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
                <Link to="/contact" style={styles.link}>
                    <a
                    className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                    >
                    Contact
                    </a>
                </Link>
            </li>
        </ul>
    );
}