import React from 'react'
import Greetings from './Greetings'
import Button from './Button'
import LoginCheck from './LoginCheck'
import Card from './Card'
import UserCard from './UserCard'

const App = () => {
  const handleClick = () => {
    alert('Button clicked from App! ');
  }

  return (
    <div>
      <h1>Understanding Props</h1>
      <p>Props are passed to Components and can be recieved as props directly. You either recieve them as props or by destructuring</p>
      <Greetings name="Bharat" />
      <Button onclick={handleClick}/>
      <LoginCheck isLoggedIn={true} name='Bharat'/>
      <Card>
        <h2>Title inside Card</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, repellendus.</p>
      </Card>
<h1>Mini App : UserCard</h1>
      <div>
        <h2>User Status</h2>
        <UserCard isOnline={true}>
          <h3>Bharat</h3>
          <p>Developer</p>
        </UserCard>
        <UserCard isOnline={false}>
          <h3>Sneha</h3>
          <p>UI Designer</p>
        </UserCard>
      </div>
//     </div>
  )
}

export default App
