import React from 'react'
import Card from './card';

const Shirt = (props) => {
    return (
        <div>
             {props.data.map((item)=>{
                if(item.category==="shirt"){
                    return <Card item={item} key={item.id}></Card>;
                }
                else{
                    return;
                }
            })}
        </div>
    )
}

export default Shirt
