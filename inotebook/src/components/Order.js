import React from 'react'
import {  useHistory } from "react-router-dom";

const Order = () => {
    
  let history = useHistory();
    return (
        <>
        {localStorage.getItem("token")?(<>

        </>):(<>
        
        </>)}
        </>
    )
}

export default Order
