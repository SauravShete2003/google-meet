import React from 'react';
import "./VideoCard.css"
import Saurav from "../../assets/1707758181035.jpg"
import SurajSir from "../../assets/suraj.png";
import OnMic from "../../assets/on-mic.png"
import OffMic from "../../assets/off-mic.png"



const VideoCard = () => {

  return (
    <div className="video-grid">
      <div className="video-tile">
        <img src={Saurav} className='profile-img'/>
       <img src={OffMic} className='mic-img'/>
       <span className='students-name'>Saurav</span>
       
      </div>
      <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=21' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Pooja</span>
      </div>
      <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=27' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Priti</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=31' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Srushti</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=33' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Vishal</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=53' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Lakshman</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=56' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Kunal</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=60' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Rahul</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=61' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Shubham</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=68' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Akash</span>
      </div>
         <div className="video-tile">
        <img src='https://i.pravatar.cc/150?img=16' className='profile-img'/>
        <img src={OffMic} className='mic-img'/>
        <span className='students-name'>Sonali</span>
      </div>
         <div className="video-tile">
        <img src={SurajSir} className='profile-img'/>
        <img src={OnMic} className='mic-img'/>
        <span className='students-name'>Suraj Sir</span>
      </div>
    </div>
  );
};

export default VideoCard;
