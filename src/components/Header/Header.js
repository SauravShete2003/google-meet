import React from 'react';
import './Header.css';
import VideoLogo from "../Header/video-camera .png"

const Header = () => {
  return (
    <header className="header">
      <img src={VideoLogo} alt="Logo" className="logo" />
      <h1>Google Meet </h1>
    </header>
  );
};

export default Header;
