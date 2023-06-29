import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../utils/SocketContext";
import {
  BsCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillTelephoneOutboundFill,
  BsFillTelephoneXFill,
  BsMicFill,
  BsMicMuteFill,
} from "react-icons/bs";

const VideoPlayer = ({
  videoEnabled,
  audioEnabled,
  setAudioEnabled,
  setVideoEnabled,
}) => {
  const {
    name,
    me,
    setName,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    leaveCall,
  } = useContext(SocketContext);
  const [copy, setCopy] = useState(false);
  const copyToClipboard = async () => {
    navigator.clipboard.writeText(me);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);
    setName("Aman");
  };

  return (
    <div className="flex justify-center items-center p-4 gap-4">
      {stream && videoEnabled && (
        <div className="flex flex-col gap-4 p-4 border-2 rounded-md bg-slate-200">
          <video
            className="rounded-md w-fit"
            playsInline
            muted
            ref={myVideo}
            autoPlay
          />
          <div className="relative flex justify-center items-center p-2 w-full gap-2">
            {audioEnabled ? (
              <div
                className="rounded-full bg-blue-600 p-2"
                onClick={() => setAudioEnabled(false)}
              >
                <BsMicFill className="text-3xl text-zinc-100" />
              </div>
            ) : (
              <div
                className="rounded-full bg-blue-600 p-2"
                onClick={() => setAudioEnabled(true)}
              >
                <BsMicMuteFill className="text-3xl text-zinc-100" />
              </div>
            )}

            {videoEnabled ? (
              <div
                className="rounded-full bg-blue-600 p-2"
                onClick={() => setVideoEnabled(false)}
              >
                <BsCameraVideoFill className="text-3xl text-zinc-100" />
              </div>
            ) : (
              <div className="rounded-full bg-blue-600 p-2">
                <BsFillCameraVideoOffFill className="text-3xl text-zinc-100" />
              </div>
            )}
            <p className="absolute left-0 font-semibold text-2xl text-zinc-800">
              {name || "Name"}
            </p>
            <button
              class="absolute right-0  inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
              onClick={copyToClipboard}
            >
              {!copy ? "Copy Your ID" : "Copied"}
            </button>
          </div>
        </div>
      )}

      {callAccepted && !callEnded && (
        <div className="flex flex-col gap-4 p-4 border-2 rounded-md bg-slate-200">
          <video
            className="rounded-md w-fit"
            playsInline
            muted
            ref={userVideo}
            autoPlay
          />
          <div className="relative flex justify-between p-2 items-center  w-full gap-2">
            <p className="font-semibold text-2xl text-zinc-800">
              {name || "Name"}
            </p>
            <div
              class=" flex gap-4 h-12 rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700 items-center justify-between"
              onClick={leaveCall}
            >
              {/* <BsFillTelephoneXFill className="text-xl text-zinc-100" /> */}
              <p className="text-xl">End Call</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
