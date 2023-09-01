import React from "react";

export default function Resume() {
    const styles = {
        jobContainer: {
            marginTop: 20
        },
        description: {
            paddingTop: 10
        },
        jobTitle: {
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 'bold'
        }
    }

    return (
        <div className="container" style={styles.jobContainer}>
                <div className="row">
                    <div className="col">
                        <h3 style={styles.jobTitle}>Development Manager</h3>
                    </div>
                    <div className="col" style={styles.description}>
                        <p>description</p>
                        <ul>
                            <li>point a</li>
                            <li>point b</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 style={styles.jobTitle}>Campaign Manager</h3>
                    </div>
                    <div className="col">
                        <p>description</p>
                        <ul>
                            <li>point a</li>
                            <li>point b</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 style={styles.jobTitle}>Legal Assistant</h3>
                    </div>
                    <div className="col">
                        <p>description</p>
                        <ul>
                            <li>point a</li>
                            <li>point b</li>
                        </ul>
                    </div>
                    <a href="./directory/yourfile.pdf" download="newfilename">Download resume pdf</a>
                </div>
        </div>
    );
}