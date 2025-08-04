import React , {useState, useEffect} from 'react'

const Timer = () => {
    const [seconds, setSeconds ] = useState(0);

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setSeconds(prev => prev + 2);
        }, 2000);

        return () => {
            clearInterval(IntervalId);
            console.log('Timer cleaned up');
        }
    }, []);
    
    
  return (
    <div style={{padding:'10px', margin:'10px'}}>
        <p>Timer: {seconds} seconds</p>
    </div>
  )
}

export default Timer