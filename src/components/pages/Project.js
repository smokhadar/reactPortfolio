import React from "react"
import '../../assets/css/project.css'

export default function Project(props) {

    const styles = {
        h3: {
            paddingTop: 20,
            fontFamily: 'League Spartan, sans-serif',
            fontSize: 20
        },
        div: {
            maxWidth: '500px !important'
        },
        a: {
            // textDecoration: 'none',
            color: 'white'
        }
    }

    return (
        <div className="row gx-5 gy-5 parentDiv">
            {/* <p>Hover for details.</p> */}
        {props.projectArray.map((project) => (
            <div className="col-6" style={styles.div}>
                <h1>{project.title}</h1>
            <div 
                className="projectDiv" key={project.title}
            >
                <img
                  alt={project.title}
                  className={`pImg img-fluid`}
                  src={project.image}
                  />
                  <p className="pP Hide">{project.description}</p>
                  <div>
                    {/* <h4>Tech used: </h4> */}
                    <h3 style={styles.h3}>
                        <a href={project.deployedLink} 
                        style={styles.a}
                        target="_blank">
                            Deployed Application</a></h3>
                    <h3 style={styles.h3}>
                        <a href={project.gitLink}
                        style={styles.a}>
                            GitHub Repo</a></h3>
                  </div>
            </div>
            </div>
         ))}
        </div>
    );
}

