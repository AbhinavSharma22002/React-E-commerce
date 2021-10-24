import React from 'react'
import Card from './card';

const Watch = (props) => {
    return (
        <div>
             {props.data.map((item)=>{
                if(item.category==="watch"){
                    return <Card item={item} key={item.id}></Card>;
                }
                else{
                    return;
                }
            })}
        </div>
    )
}

export default Watch
