import React, { useContext } from "react";
import { SocketContext } from "../utils/SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall, rejectCall } =
    useContext(SocketContext);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
      <div className="absolute flex flex-col gap-4 bg-white px-10 py-4 rounded-md items-center">
        <h1>{call.name} is calling!</h1>
        <div className="flex gap-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={answerCall}
          >
            Answer
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={rejectCall}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
