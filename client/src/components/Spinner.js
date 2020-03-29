import React from 'react'

const Spinner = () => {
  return (
    <div className='ui segment' style={{ height: '100vh' }}>
      <div className='ui active inverted dimmer' style={{ position: 'relative', top: '40%' }}>
        <div className='ui text loader'>Loading</div>
      </div>
      <p />
    </div>
  )
}

export default Spinner
