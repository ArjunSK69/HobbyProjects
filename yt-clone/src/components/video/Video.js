import React from 'react'
import './_video.scss'
import { AiFillEye } from 'react-icons/ai'

function Video(){
  return (

    <div className="video">
      <div className="video_top">
        <img src="https://i.ytimg.com/vi/zv2rToDEWrM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyWcXuZjn0TogyLsYUGnU5p2ZZow" alt="" />
        <span>05.43</span>
      </div>
      <div className="video_title">
        Create app in 5 minutes #made by Chintu hhhhyyyyyys
      </div>
      <div className="video_details">
        <span>
          <AiFillEye /> 5m Views • 
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video_channel">
        <img src="https://yt3.ggpht.com/jF9Wp3D7dBYHpZZSJl-EyMHg5GqnO29tDIcihS-7zhrRX6PCNOnXReblJ3Xt2rPcYOy3TbzqyQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  )
}

export default Video
