import React, {useState} from "react"
import samira from '../../assets/images/samira.new.png'
import '../../assets/css/about.css'

export default function About() {
    const styles = {
        container: {
            width: '400px',
            paddingTop: 20,
        },
       img: {
        borderRadius: 900,
        maxHeight: 300,
        maxWidth: 300,
        paddingTop: 20,
        marginBottom: 40,
       },
       name: {
        paddingTop: 60,
        fontSize: 60,
        fontFamily: 'Inconsolata, monospace'
       },
       header: {
        fontFamily: 'Titillium Web, sans-serif',
        fontSize: 65
        }
}   ;

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className="about container text-center">
            <div className="row align-items-start">
                <div className="col-4" style={styles.container}>
                    <img src={samira} style={styles.img}/>
                    </div>
                <div className="col-8">
                    <p style={styles.name}>Hi, I'm Samira.</p>
                    <p className="about" style={styles.about}>Here is a bunch of information about me. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    {/* <p style={styles.about}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> */}
                </div>
            </div>
        </div>
    )
}