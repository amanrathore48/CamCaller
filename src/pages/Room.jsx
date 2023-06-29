import React, { useContext, useEffect, useState } from "react";
import Info from "../components/Info";
import Notifications from "../components/Notifications";
import VideoPlayer from "../components/VideoPlayer";
import { SocketContext } from "../utils/SocketContext";

const Room = () => {
  const { call, callAccepted, stream, setStream, myVideo } =
    useContext(SocketContext);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: videoEnabled, audio: audioEnabled })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });
  }, [videoEnabled, audioEnabled]);

  const toggleVideo = () => {
    setVideoEnabled((prevEnabled) => !prevEnabled);
    stream.getVideoTracks()[0].enabled = !videoEnabled;
  };
  const toggleAudio = () => {
    setAudioEnabled((prevEnabled) => !prevEnabled);
    stream.getAudioTracks()[0].enabled = !audioEnabled;
  };
  return (
    <div className="w-[90vw] min-h-screen  mx-auto">
      <Info />
      {call && call.isReceivingCall && !callAccepted && <Notifications />}
      <VideoPlayer
        videoEnabled={videoEnabled}
        setVideoEnabled={setVideoEnabled}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />
    </div>
  );
};

export default Room;
