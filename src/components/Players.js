import React from 'react'

function Players(props) {
  return (
    <div className='playersDiv'>
      <img src={props.picURL}></img>
        <h3>Name:{props.Name}</h3>
        <h4>Team:{props.Team}</h4>
        <h4>Specialization:{props.Specialization}</h4>
    </div>
  )
}

export default Players
