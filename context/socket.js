import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);

  // Establishing a connection
  useEffect(() => {
    const connection = io();
    setSocket(connection);
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

// consuming the context value
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
