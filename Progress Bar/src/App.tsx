import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";

const App: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const onClickDecreaseProgress = (): void => {
    setProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 10));
  };

  const onClickIncreaseProgress = () => {
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 100 : prevProgress + 10
    );
  };

  const onClickReset = () => {
    setProgress(0);
  };

  return (
    <>
      <ProgressBar
        progress={progress}
        backGroundColor="#e0e0e0"
        progressColor="#4caf50"
      />
      <div
        style={{
          display: "flex",
          alignItems: " center",
          flexDirection: "column",
        }}
      >
        <div>
          <Button onClick={onClickDecreaseProgress} textVal="Decrease" />
          <Button onClick={onClickIncreaseProgress} textVal="Increase" />
        </div>
        <Button onClick={onClickReset} textVal="Reset" />
      </div>
    </>
  );
};

export default App;
