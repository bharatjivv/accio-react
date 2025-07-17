import React, { useContext } from 'react'
import { UserKaContext } from '../App';

const C3 = () => {
    const data = useContext(UserKaContext);
    console.log('C3', data);
  return (
    <div style={{width: "90%", height:"40%" , overflow:'auto', backgroundColor:'peachpuff', border: '1px solid black' }}>
        C3
        <p>Yaha use kar liya data {data}</p>
    </div>
  )
}

export default C3