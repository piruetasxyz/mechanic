import React, { useState, useEffect, useRef } from "react";

export const handler = ({ width, height, frame, done }) => {
  const isPlaying = useRef(true);
  const frameCount = useDrawLoop(isPlaying.current);

  const r = width / 3;
  const x = frameCount;

  useEffect(() => {
    if (frameCount < 100) {
      if (frame) frame();
    } else if (isPlaying.current) {
      isPlaying.current = false;
      if (done) done();
    }
  }, [frameCount]);

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} stroke="none" fill="red" />
      <ellipse cx={x} cy={height / 2} rx={r} ry={r} stroke="none" fill="cyan" />
    </svg>
  );
};

// This will need to be parsed into a JSON file for the API
// We will probably do this with a webpack loader
// We also need a nicer API to create this file
export const params = {
  size: {
    default: {
      width: 600,
      height: 600
    }
  }
};

export const settings = {
  engine: "react",
  animated: true
};

const useDrawLoop = isPlaying => {
  const raf = useRef();
  const [frameCount, setFrameCount] = useState(0);

  useEffect(() => {
    cancelAnimationFrame(raf.current);

    if (!isPlaying) {
      return;
    }

    const draw = () => {
      setFrameCount(cur => cur + 1);
      raf.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf.current);
    };
  }, [isPlaying]);

  return frameCount;
};
