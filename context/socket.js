import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

// consuming the context value
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);

  // Establishing a connection
  useEffect(() => {
    const connection = io();
    setSocket(connection);
    console.log("socket connection", connection);
  }, []);

  socket?.on("connect_error", async (err) => {
    console.log("Error establishing socket", err);
    await fetch("/api/socket");
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
