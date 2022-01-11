import React from "react";
import './PlayerVideo.css';

const Video = () => {
    return (
        <>      
            <div className="container-fluid">
                <iframe 
                    width="100%" 
                    height="500vh"
                    src="https://www.youtube.com/embed/to9_Nz_xvV4?list=PLZ01OZPKXWbuDm6lOq2x8D2zdyr7_Bg4Y" 
                    title="Rick And Morty" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
        </>
    )
}

export default Video;