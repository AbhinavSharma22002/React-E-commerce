import React from 'react'
import Card from './card';

const Jeans = (props) => {
    return (
        <div>
            {props.data.map((item)=>{
                if(item.category==="jeans"){
                    return <Card item={item} key={item.id}></Card>;
                }
                else{
                    return;
                }
            })}
        </div>
    )
}

export default Jeans
