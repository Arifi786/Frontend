// VideoBackground.js
import React from 'react';


function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src="/vedio" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* You can add other content on top of the video background */}
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is some content on top of the video background.</p>
      </div>
    </div>
  );
}

export default VideoBackground;
