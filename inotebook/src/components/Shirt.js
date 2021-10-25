import React from 'react'
import { useHistory } from 'react-router';
import Card from './card';
const Shirt = (props) => {
    const history= useHistory();
    const order = (item)=>{
        if(localStorage.getItem('token')){
            console.log(item.id);
            props.order("hell","you","me",props.showAlert,localStorage.getItem('token'))
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
                    return <Card item={item} key={item.id} order = {order}></Card>;
                }
                else{
                    return;
                }
            })}
        </div>
    )
}

export default Shirt
