import React from 'react';
import './Controls.css';
import MicIcon from "../../assets/mic.png"
import VideoIcon from "../../assets/video .png"
import CCIcon from "../../assets/cc.png"
import HandIcon from "../../assets/hand.png"
import ShareIcon from "../../assets/share.png"
import MenuIcon from "../../assets/menu.png"
import CallIcon from "../../assets/telephone.png"

const Controls = () => {
  return (
    <div className="controls">
   <img src={MicIcon} className='control-icon'/>
   <img src={VideoIcon} className='control-icon'/>
   <img src={CCIcon} className='control-icon'/>
   <img src={HandIcon} className='control-icon'/>
   <img src={ShareIcon} className='control-icon'/>
   <img src={MenuIcon} className='control-icon'/>
   <img src={CallIcon} className='control-icon'/>
    </div>
  );
};

export default Controls;
