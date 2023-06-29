import React, { useContext, useState } from "react";
import { SocketContext } from "../utils/SocketContext";

const Info = ({ children }) => {
  const { name, setName, me, callAccepted, callEnded, callUser, leaveCall } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="flex">
      <div class="mx-auto mt-5 w-screen max-w-screen-md py-2 leading-6">
        <form
          noValidate
          autoComplete="off"
          class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"
        >
          <input
            type="idtocall"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            name="idtocall"
            class="h-14 w-full rounded-md py-4 pr-10 pl-4 outline-none focus:ring-2"
            placeholder="Enter Your Friends ID"
          />
          {callAccepted && !callEnded ? (
            <button
              class="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                leaveCall();
              }}
            >
              Disconnect
            </button>
          ) : (
            <button
              class="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
                console.log("idToCall", idToCall);
                callUser(idToCall);
              }}
            >
              Connect
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Info;
