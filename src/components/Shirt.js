import React from 'react';
import Card from './card';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
const Shirt = (props) => {
     const context = useContext(noteContext);
    const history= useHistory();

    const order = (item)=>{
        if(localStorage.getItem('token')){
            context.AddNote(item,props.showAlert,localStorage.getItem('token'))
        }
        else{
            props.showAlert("Please Log In to Proceed","danger");
            history.push('/login');
        }
    };
    return (
        <div>
             {props.data.map((item)=>{
                if(item.category==="shirt"){
                    return (<Card item={item} key={item.id} order={order}></Card>);
                }
                else{
                    //eslint-disable-next-line
                    return;
                }
            })}
        </div>
    )
}

export default Shirt
