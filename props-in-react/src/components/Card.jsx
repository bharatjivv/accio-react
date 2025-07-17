function Card (props) {
    console.log(props);
    // console.log('title of props', props.title);
    // console.log('description of props', props.description);

    return (
        <div style={{width: '300px', padding:'8px', border: '1px solid #ababab'}}>
          <div style={{width: '100%', height: '200px'}}>
            <img style={{width: '100%', height: '100%', objectFit:'cover'}} src={props.img} alt='topg'/>
          </div>
          <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>
    );
}

export default Card;
