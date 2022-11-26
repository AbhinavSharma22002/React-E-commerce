import React, { useEffect, useState } from 'react'
// import {  useHistory } from "react-router-dom";
import Card3 from './Card3';

const Order = (props) => {
  
const [data, setdata] = useState([]);


  const calling =  async ()=>{
    const response = await fetch("https://139.59.27.238/api/notes/checkOrder", {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),          
        },
      });

      const json = await response.json();
      if (response.status === 200) {
       setdata(json);
      } else {
        props.showAlert("Error", "danger");
      }
  };
  
  useEffect(() => {
    calling();
    // eslint-disable-next-line
  }, []);

    return (
        <div className="container">
          {data.length===0?<>No Orders For now!!</>:<>
            {data.map((order)=>{
         return( order.order.map((item)=>{
            return (
              <Card3 order={item} showAlert={props.showAlert} key={item._id}>
              </Card3>);
          })
         );
        })}
          </>}
        </div>
    )
}

export default Order
