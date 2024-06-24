import React from 'react';
import Header from "../../components/Header/Header"
import VideoCard from "../../components/VideoCard/VideoCard"
import Controls from '../../components/Controls/Controls';
import ChatPanel from '../../components/ChatPanel/ChatPanel';
import "./Home.css"

const Home = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <VideoCard />
        <ChatPanel />
      </div>
      <Controls />
    </div>
  );
};

export default Home;
