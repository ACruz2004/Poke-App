import videobg from "../assets/PokeballVid.mp4";
import { Parallax } from "react-parallax";
import { useEffect, useRef, useState } from "react";

const MakeHeadVid = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textPosition, setTextPosition] = useState("fixed"); // State to manage text position
  const scrollThreshold = 225; // Set the scroll threshold in pixels

  const handleScroll = () => {
    // Check the current scroll position
    if (window.scrollY >= scrollThreshold) {
      setTextPosition("absolute"); // Change to absolute when scroll exceeds threshold
    } else {
      setTextPosition("fixed"); // Reset to fixed when above threshold
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
    };
  }, []);

  return (
    <div className="main">
      <video ref={videoRef} src={videobg} autoPlay loop muted playsInline />
      <div className={`text ${textPosition}`}>
        <Parallax>
          <h1>Welcome</h1>
          <p>To PokéTrove!</p>
        </Parallax>
      </div>
    </div>
  );
};

export default MakeHeadVid;
