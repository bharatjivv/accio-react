import React from 'react'
import GrandChild from './GrandChild'


export default function Child ({ username }) {
    return <GrandChild username={username} />
}