import React, { useState} from "react"
import az from '../../assets/images/background/azbw.png'
import '../../assets/css/home.css'

export default function Home() {
    // const [color, setColor] = useState('white');

    function changeColor(e) {
        e.target.style.color = 'black';
        e.target.style.textShadow = '2px 2px white';
    }
    
    const handleMouseLeave = (e) => {
        e.target.style.color = 'white';
        e.target.style.textShadow = '2px 2px green';
    }

    const styles = {
        homeContainer: {
            background: `url(${az}) center center repeat`,
            height: '800px',
            backgroundSize: '500px',
        },
       img: {
        borderRadius: 900,
        maxHeight: 400,
        maxWidth: 400
       },
       name: {
        paddingTop: 100,
        fontSize: 25,
        fontFamily: 'Inconsolata, monospace'
       },
       header: {
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: 120,
        color: 'white',
        paddingTop: '50px',
        textShadow: '2px 2px green'
       }
    };

    return (
        <div className="text-center" style={styles.homeContainer}>
            <div className="row align-items-start">
                 <div className="col">
                    <h1 className="header" style={styles.header}
                    onMouseOver={changeColor} 
                    onMouseLeave={handleMouseLeave}>DEVELOPER</h1>
                    <h1 className="header" style={styles.header}
                    onMouseOver={changeColor} 
                    onMouseLeave={handleMouseLeave}>INNOVATOR</h1>
                    <h1 className="header" style={styles.header}
                    onMouseOver={changeColor} 
                    onMouseLeave={handleMouseLeave}>LEADER</h1>
            </div>
            </div>
        </div>
    );
}