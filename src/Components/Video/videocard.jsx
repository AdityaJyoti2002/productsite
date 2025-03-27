// src/VideoCover.js
import React from 'react';
import styled from 'styled-components';
// import backgroundVideo from 'src/assets/WhatsApp Video 2025-03-28 at 1.20.32 AM.mp4'; // Replace with your video path
// import backgroundMusic from 'src/assets/WhatsApp Audio 2025-03-28 at 2.49.59 AM.mpeg'; // Replace with your music path

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 20px;
`;

const VideoCover = () => {
  return (
    <VideoContainer>
      <VideoBackground autoPlay loop muted>
        <source src="src/assets/WhatsApp Video 2025-03-28 at 1.20.32 AM.mp4" type="video/mp4" />
        
      </VideoBackground>
   
      <audio autoPlay loop>
  <source src="/assets/WhatsApp Audio 2025-03-28 at 2.49.59 AM.mpeg" type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>
    </VideoContainer>
  );
};

export default VideoCover;