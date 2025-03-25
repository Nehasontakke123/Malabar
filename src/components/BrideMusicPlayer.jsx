import { useEffect, useRef } from "react";
import { Howl } from "howler";

const BrideMusicPlayer = ({ music }) => {
  const soundRef = useRef(null);

  useEffect(() => {
    if (music) {
      // Stop any previous music
      if (soundRef.current) {
        soundRef.current.stop();
      }

      // Play new music
      soundRef.current = new Howl({
        src: [music],
        autoplay: true,
        loop: true,
        volume: 0.5, // Adjust volume as needed
        html5: true, // Ensures smooth playback
      });

      soundRef.current.play();
    }

    // Cleanup on component unmount
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
    };
  }, [music]);

  return null; // No UI needed
};

export default BrideMusicPlayer;
