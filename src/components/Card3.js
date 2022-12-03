import React, { useState } from 'react'
import { useEffect } from 'react'

const Card3 = (props) => {
    const [data, setdata] = useState({});
    useEffect(() => {
        calling();
        // eslint-disable-next-line
    }, []);
    const calling= async()=>{
        const response = await fetch("https://abhinav-cloud-odlx6.ondigitalocean.app/api/notes/Data1/".concat(props.order.id), {
            method: "Get",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const json = await response.json();
          if (response.status === 200) {
            setdata(json);
          } else {
            props.showAlert("Error", "danger");
          }
        }
    return (
        <>
     <div>
      <div className="card my-3">
        <h5 className="card-header">Ref Id: {data._id}</h5>
        <div className="card-body">
          <h5 className="card-title"style={{fontSize:'4vmax'}}>{data.name}</h5>
          <p className="card-text">
            <span>
            <img src={`./images/${data.image}`} alt="your item"/>
            <span style={{color:'black',fontSize:'40px',float:'right'}} className="mx-4">
              ${props.order.number*data.price}
              <br/>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
        </>
    )
}

export default Card3
