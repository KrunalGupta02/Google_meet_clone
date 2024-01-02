import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";

const Room = () => {
  const socket = useSocket();

  // call the peerjs
  const { peer, myId } = usePeer();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log("client id", socket.id);
    });
  }, [socket]);
};
