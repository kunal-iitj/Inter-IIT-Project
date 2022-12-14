import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { getUserName } from '../services/localStorage';
import profile from "./../Images/profile.jpg"

import Profilearea from './Profilearea';
import Songsrecomm from './Songsrecomm';
import Topartists from './Topartists';




export default function Midforprofile() {
  const navigate = useNavigate()
  function leftScroll(heading) {
    const left = document.querySelector(`.${heading}`);
    if(left) left.scrollBy(-150, 0);
  }
  function rightScroll(heading) {
    const right = document.querySelector(`.${heading}`);
    if(right) right.scrollBy(150, 0);
  }

  return (
    <div className='parts'>
      <div className="part1">
      <button className="albums" onClick={()=>navigate('/albums')}>Albums</button>
            <button className="playlisttop" onClick={()=>navigate('/playlist')}>Playlist</button>
            <button className="genres" onClick={()=>navigate('/genres')}>Genres</button>
        <div className="profile">
        <img src={profile} alt="Avatar"/>
        <div className="Username">{getUserName()}</div>
        </div>
      </div>
      {/* <div className="Hots">
        <div className="albumphoto"><img src={profile} alt="" /></div>
        <div className="album_desc">Most Trending Songs| <p>#Artist Name</p></div>
      </div> */}


    <Profilearea />

    

      <div className="top-artists">
        <h1>Your Top Artists</h1>

        <Topartists/>
          
      </div>
      
      {/* <div className="top-songs"> */}
        {/* <h1>Your Top Songs</h1> */}
        {/* <Songsrecomm/> */}
      {/* </div> */}

      

      {/* <div className="part2">
        <h1>Instrumental</h1>
        <button className="left" onClick={()=>leftScroll("instrumental")}><img src={arrow} alt="" /></button>
        <Instrumental/>
          <button className="right" onClick={()=>rightScroll("instrumental")}><img src={arrow} alt="" /></button>
      </div> */}

      
    </div>
  )
}
