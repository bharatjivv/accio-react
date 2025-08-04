import React, {useState, useEffect} from 'react'

const FetchData = () => {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {setUser(data)
        console.log(data)
    });
        
    }, [])
    
    return (
        <div>
            {
                user ? (
                    user.map((user) => <p key={user.id}>{user.name}</p>)
                ) : (
                    <p> Loading </p>

                )
            }
        </div>
    )  
  
}

export default FetchData