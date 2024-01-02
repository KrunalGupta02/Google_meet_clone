import Player from "@/components/Player";
import { useSocket } from "@/context/socket";
import useMediaStream from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";
import { useEffect } from "react";

const Room = () => {
  const socket = useSocket();

  // call the peerjs
  const { peer, myId } = usePeer();

  const { stream } = useMediaStream();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log("client id", socket.id);
    });
  }, [socket]);

  return (
    <div>
      <Player url={stream} muted playing playerId={myId} />
    </div>
  );
};

export default Room;
