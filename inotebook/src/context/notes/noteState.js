// import react from 'react';
import noteContext from './noteContext';

const NoteState = (props)=>{
     const state = {
         "name":"abhi",
         "class":"5a"
     };
     
    return (
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;