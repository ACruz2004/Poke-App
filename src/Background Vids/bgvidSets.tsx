import videobg from "../assets/PokeballVid.mp4";
import { Parallax } from "react-parallax";
import { useEffect, useRef, useState } from "react";

const MakeHeadVidSets = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textPosition, setTextPosition] = useState("fixed"); // State to manage text position
  const [fontSize, setFontSize] = useState(6); // State to manage font size (default to 6rem, larger start size)
  const scrollThreshold = 225; // Set the scroll threshold in pixels

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    // Update text position based on scroll threshold
    if (scrollPos >= scrollThreshold) {
      setTextPosition("absolute"); // Change to absolute when scroll exceeds threshold
    } else {
      setTextPosition("fixed"); // Reset to fixed when above threshold
    }

    // Dynamically adjust font size based on scroll position
    const newFontSize = Math.max(2, 6 - scrollPos / 150); // Shrinks when scrolling down, grows when scrolling up, starts larger
    setFontSize(newFontSize);
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
          <h1 style={{ fontSize: `${fontSize}rem` }}> Sets</h1>
          {/* Adjust the paragraph size proportionally */}
        </Parallax>
      </div>
    </div>
  );
};

export default MakeHeadVidSets;
