import React from 'react'

const BgVideo = props => (
  <div className="bg-video">
    <video className="bg-video__content" autoPlay muted loop>
      <source src={props.mp4Video} type="video/mp4" />
      <source src={props.webmVideo} type="video/webm" />
      Your browser is not supported!
    </video>
  </div>
)

export default BgVideo
