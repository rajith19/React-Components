import React from "react";

interface ProgressBarProps {
  progress: number;
  backGroundColor: string;
  progressColor: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  backGroundColor = "#e0e0e0",
  progressColor = "#4caf50",
}) => {
  const textColor = progress >= 50 ? "white" : "black";

  return (
    <>
      <div
        style={{
          background: backGroundColor,
          width: "500px",
          borderRadius: "8px",
          overflow: "hidden",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            background: progressColor,
            height: "30px",
          }}
        ></div>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the text
            color: textColor,
          }}
        >
          {progress}%
        </span>
      </div>
    </>
  );
};

export default ProgressBar;
