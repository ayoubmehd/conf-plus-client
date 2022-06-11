import type { NextPage } from "next";
import React, { FC, useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";

const socket = io("http://localhost:8000"); // Old: http://localhost:8000
const peer = new Peer({
  path: "/",
  host: "https://9000-peers-peerjsserver-wsqhtsiaqxp.ws-eu45.gitpod.io",
  secure: true,
});

const Conf: FC = () => {
  const [peerMediaStream, setPeerMediaStream] = useState<MediaStream | null>(
    null
  );
  const [mediaTracks, setMediaTracks] = useState<MediaStream[]>([]);
  const [call, setCall] = useState<Peer.MediaConnection>();
  const [started, setStarted] = useState<boolean>(false);
  const [currentPeerId, setCurrentPeerId] = useState<string>("");

  const connect = useCallback(() => {
    if (!call) {
      console.warn("No call", { call });
      return;
    }

    call.on("stream", streamListener);
    return () => {
      call.off("stream", streamListener);
    };
  }, [call]);

  // listeners
  const newPeerListener = useCallback(
    (newPeerId: string) => {
      if (!peerMediaStream) {
        console.warn("No peer media stream", { peerMediaStream });
        return;
      }
      if (currentPeerId === newPeerId) {
        console.warn("Same peer", { currentPeerId, newPeerId });
        return;
      }
      peer.connect(newPeerId);
      const _call = peer.call(newPeerId, peerMediaStream);
      setCall(_call);
    },
    [peerMediaStream, currentPeerId]
  );

  useEffect(() => {
    peer.on("open", (id) => {
      setCurrentPeerId(id);
    });

    peer.on("error", errorsListener);
  }, []);

  useEffect(() => {
    if (!peerMediaStream) {
      console.warn("No peer media stream", { peerMediaStream });
      return;
    }

    if (!call) {
      console.warn("No call", { call });
      return;
    }

    peer.on("call", callListener);

    call.answer(peerMediaStream);

    connect();

    return () => {
      peer.off("call", callListener);
      call.off("stream", streamListener);
    };
  }, [call, peerMediaStream]);

  useEffect(() => {
    console.log("peerMediaStream", { peerMediaStream, mediaTracks, call });

    socket.on("new-peer", newPeerListener);

    () => {
      socket.off("new-peer", newPeerListener);
    };
  }, [peerMediaStream, mediaTracks, currentPeerId]);

  useEffect(() => {
    console.log("mediaTracks", { mediaTracks, peerMediaStream });
  }, [mediaTracks]);

  const errorsListener = (err: any) => {
    console.log("err", err);
    throw err;
  };

  const streamListener = (remoteStream: MediaStream) => {
    console.log("stream", { remoteStream });
    setMediaTracks((prev) => [...prev, remoteStream]);
  };

  const callListener = (_call: Peer.MediaConnection) => {
    setCall(_call);
  };

  const constraints = {
    audio: false,
    video: true,
  };

  const getUserMedia = async () => {
    const _stream = await navigator.mediaDevices.getUserMedia(constraints);
    setStarted(true);
    setPeerMediaStream(_stream);
  };

  const join = () => {
    if (!currentPeerId) {
      console.log("No peer id", { currentPeerId });
      return;
    }

    socket.emit("new-user", currentPeerId);
  };

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
      <button disabled={started} onClick={getUserMedia}>
        Start
      </button>
      <button onClick={join}>Join</button>
      <button disabled>Answer Call</button>
      <div>
        <input defaultValue={currentPeerId} type="text" readOnly />
        <form method="post">
          <div>
            <input type="text" name="peer_id" />
            <button>Connect</button>
          </div>
        </form>
        <div></div>
        <form method="post">
          <div>
            <input type="text" />
            <button>Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Conf;
