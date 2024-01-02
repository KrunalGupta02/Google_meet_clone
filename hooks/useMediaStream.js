const { useState, useEffect, useRef } = require("react");

const useMediaStream = () => {
  const [state, setState] = useState(null);
  const isStreamSet = useRef(false);

  useEffect(() => {
    // This will generate the peer only one time
    if (isStreamSet.current) return;
    isStreamSet.current = true;

    (async function initStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        setState(stream);
        console.log("Setting your stream");
      } catch (e) {
        console.log("Error in the media navigator");
      }
    })();
  }, []);

  return { stream: state };
};

export default useMediaStream;
