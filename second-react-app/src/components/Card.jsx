// function Card () {
//     const cobraImg = 'https://imgs.search.brave.com/GYXct52hyFA3TNei4CZIgVYbjXbQgBCGmJkYz-XHy_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS9zdGFuZGFy/ZC85NzYvY3BzcHJv/ZHBiLzE2MjgwL3By/b2R1Y3Rpb24vXzEz/MzcyNTcwOV9hbmRy/ZXd0YXRlLnBuZw'
    
//     return (
//         <div style={{width: '300px', padding:'8px', border: '1px solid #ababab'}}>
//           <div style={{width: '100%', height: '200px'}}>
//             <img style={{width: '100%', height: '100%', objectFit:'cover'}} src={cobraImg} alt='topg'/>
//           </div>
//           <div>
//             <h3>Manali, Himachal Pradesh</h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus natus asperiores ipsam ratione optio maiores saepe, incidunt animi iure voluptatibus culpa neque nemo possimus perspiciatis recusandae facere eius obcaecati.</p>
//           </div>
//         </div>
//     );
// }

// export default Card;


const cobraImg = 'https://imgs.search.brave.com/GYXct52hyFA3TNei4CZIgVYbjXbQgBCGmJkYz-XHy_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS9zdGFuZGFy/ZC85NzYvY3BzcHJv/ZHBiLzE2MjgwL3By/b2R1Y3Rpb24vXzEz/MzcyNTcwOV9hbmRy/ZXd0YXRlLnBuZw'


const Card = () => {
  return (

    <div>
        <div style={{width: '300px', padding:'8px', border: '1px solid #ababab'}}>
           <div style={{width: '100%', height: '200px'}}>
             <img style={{width: '100%', height: '100%', objectFit:'cover'}} src={cobraImg} alt='topg'/>
           </div>
           <div>
             <h3>Manali, Himachal Pradesh</h3>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus natus asperiores ipsam ratione optio maiores saepe, incidunt animi iure voluptatibus culpa neque nemo possimus perspiciatis recusandae facere eius obcaecati.</p>
           </div>
         </div>
    </div>
  )
}

export default Card