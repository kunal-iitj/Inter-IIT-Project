import React from 'react'
import profile from '../Images/profile.jpg'
export default function Tile3(props) {
  return (
    <div className='album-tile'>
      <div className="album-img"><img src={props.image? props.image:profile} alt="" /></div>
      <div className="album-content"><div className='album-name'>{props.name}</div><div className='album-followers'>{props.followers? props.followers:""} </div> </div>
      
    </div>
  )
}
