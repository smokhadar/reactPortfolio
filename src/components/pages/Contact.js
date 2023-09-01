import React from "react";

export default function Contact() {

    const submissionAlert = () => {
        alert('Thanks for reaching out! I will follow up ASAP.');
    }

    const styles = {
        button: {
            fontSize: 18
        },
        form: {
            paddingTop: '20px',
        },
        div: {
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '40px',
            paddingTop: '20px'
        },
        label: {
            paddingBottom: 10,
            
        }
    }

    return (
        <div style={styles.div}>
            <form style={styles.form}>
                <div className="mb-3">
                    {/* <label for="name" className="form-label">Your name</label> */}
                    <input type="name"
                    className="form-control" placeholder="Name"></input>
                </div>
                <div className="mb-3">
                    {/* <label style={styles.label}for="email" className="form-lavel">Email</label> */}
                     <input type="email" className="form-control" placeholder="Email"></input>
                </div>
                <div className="mb-3">
                    <div style={styles.label}>Please select what services you are interested in.</div>
                    <select class="form-select" aria-label="Select menu">
                        <option value="1">Fullstack</option>
                        <option value="2">Frontend</option>
                        <option value="3">Backend</option>
                        <option value="4">Other</option>
                    </select>
                </div>
            <button type="submit" 
            className="btn btn-light" 
            style={styles.button}
            onClick={submissionAlert}>Submit</button>
            </form>
        </div>
    );
}