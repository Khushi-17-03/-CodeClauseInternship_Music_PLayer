import React from "react";
import "./queue.css";

export default function Queue({ tracks, setCurrentIndex }) {
  console.log(tracks);

  const formatDuration = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p className="track-duration">
                {formatDuration(track?.track?.duration_ms)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
