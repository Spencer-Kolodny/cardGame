import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export const useSocket = () => {
  const ctx = useContext(SocketContext);
  if (!ctx) throw new Error("Socket context not found");
  return ctx;
};
