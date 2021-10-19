import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";
const About = () => {

    const a = useContext(noteContext);

    return (
        <div>
            This is about {a.name} who studies in {a.class}
        </div>
    )
}

export default About;
