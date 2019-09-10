import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const ResponsivePlayer = ({ videoKey }) => {
  const url = `https://www.youtube.com/watch?v=${videoKey}`
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        playing
        controls
        data-testid="react-player"
        />
    </div>
  )
}

export default ResponsivePlayer
