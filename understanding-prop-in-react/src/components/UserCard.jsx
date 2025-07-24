import React from 'react'

const UserCard = ({isOnline, children}) => {
  return (
    <div
        style={{
            border: '2px solid #aaa',
            padding: '1rem',
            borderRadius: '10px',
            margin: '1rem',
            width: '10%'
        }}
    >
        <div>
            <strong>Status: </strong> {' '}
            {isOnline ? (
                <span style={{color: 'green'}}> Online </span>
            ): (
                <span style={{color: 'red'}}> Offline </span>
            )}
        </div>
        <div>{children}</div>
    </div>
  )
}

export default UserCard;