import React from "react"
import '../../assets/css/project.css'

export default function Project(props) {
    // const [ hover, setHover ] = useState(false);
    // https://stackoverflow.com/questions/69874346/how-can-i-hover-in-react-using-usestate

    const styles = {
        h2: {
            paddingTop: 30,
            fontFamily: 'League Spartan, sans-serif',
        },
        h3: {
            paddingTop: 10,
            fontFamily: 'League Spartan, sans-serif',
            fontSize: 15
        },
        div: {
            maxWidth: '500px !important'
        }
    }

    return (
        <div className="row gx-5 gy-5 parentDiv">
            <h1 style={styles.h1}></h1>
            {/* <p>Hover for details.</p> */}
        {props.projectArray.map((project) => (
            <div className="col-6" style={styles.div}>
                <h1>{project.title}</h1>
            <div 
                className="projectDiv" key={project.title}
                // onMouseEnter={()=> setHover(true)}
                // onMouseLeave={()=> setHover(false)}
            >
                {/* <h2 style={styles.h2}>{project.title}</h2> */}
                <img
                  alt={project.title}
                  className={`pImg img-fluid`}
                  src={project.image}
                  />
                  <p className="pP Hide">{project.description}</p>
                  <div>
                    <h4>Tech used: </h4>
                    <h3 style={styles.h3}>Click <a href={project.deployedLink} target="_blank">here</a> for the deployed app.</h3>
                    <h3 style={styles.h3}>Check out the repository <a href={project.gitLink}>here</a>.</h3>
                  </div>
            </div>
            </div>
         ))}
        </div>
    );
}

