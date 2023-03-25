import React from 'react'
import './Video.css'
const Video = () => {
  return (
   <div id="video">
    <h1 className='h4'>Featured College</h1>
    <video width="100%" height="450px" controls>
      <source src='https://www.myglamm.com/images/TellMyGlammWhatYouWant.webm'/>
    </video>
   </div>
  )
}

export default Video
