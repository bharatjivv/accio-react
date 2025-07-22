import React from 'react'

const ChildComponent = ({showModal, setShowModal}) => {
  return (
    <div className='child'>
      <h2>Child Component</h2>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {showModal && (
        <>
          <h3>Modal Content</h3>
          <p>This is the modal content.</p>
        </>
      )}
    </div>
  )
}

export default ChildComponent