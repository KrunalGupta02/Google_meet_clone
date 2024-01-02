const { useEffect, useState, useRef } = require("react");

const usePeer = () => {
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");
  const isPeerSet = useRef(false);

  useEffect(() => {
    // This will generate the peer only one time
    if (isPeerSet.current) return;
    isPeerSet.current = true;

    (async function initPeer() {
      // this is the way to importing the library in the useeffect ==> var peer = new Peer()
      const myPeer = new (await import("peerjs")).default();
      setPeer(myPeer);

      myPeer.on("open", (id) => {
        console.log(`your peer id is ${id}`);
        setMyId(id);
      });
    })();
  }, []);

  return { peer, myId };
};

export default usePeer;
