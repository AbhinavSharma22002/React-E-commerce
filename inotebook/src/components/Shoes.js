import React from 'react'
import Card from './card';

const Shoes = (props) => {
    return (
        <div>
             {props.data.map((item)=>{
                if(item.category==="shoes"){
                    return <Card item={item} key={item.id}></Card>;
                }
                else{
                    return;
                }
            })}
        </div>
    )
}

export default Shoes
