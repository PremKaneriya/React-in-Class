/* eslint-disable no-unused-vars */
import React from "react";

const VideoCompo = () => {
  return (
    <>
       <div className="p-16 bg-gradient-to-b from-yellow-300 to-white">    
      <h1 className="text-4xl font-bold mb-4">#PhirSeZiddKar</h1>
      <iframe 
        width="100%" 
        height="500px" 
        src="https://www.youtube.com/embed/GRq1Ywp4cEg?autoplay=1&mute=1&rel=0" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
    </>
  );
};

export default VideoCompo;
