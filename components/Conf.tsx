import type { NextPage } from "next";
import React, { FC, useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";

const Conf: FC = () => {
  const [peerMediaStream, setPeerMediaStream] = useState<MediaStream | null>(
    null
  );
  const [mediaTracks, setMediaTracks] = useState<MediaStream[]>([]);
  const [call, setCall] = useState<Peer.MediaConnection>();
  const [started, setStarted] = useState<boolean>(false);
  const [currentPeerId, setCurrentPeerId] = useState<string>("");

  return (
    <>
      <div className="videos">
        <video
          ref={(element) => {
            if (element) {
              element.srcObject = peerMediaStream;
            }
          }}
          autoPlay
        ></video>
        {mediaTracks.map((track, i) => (
          <video
            ref={(element) => {
              if (element) {
                element.srcObject = track;
              }
            }}
            key={i}
            autoPlay
          ></video>
        ))}
      </div>
    </>
  );
};

export default Conf;
