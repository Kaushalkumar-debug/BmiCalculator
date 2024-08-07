import { useMemo, useState } from "react";
import "./BmiCalculator.css";
const BmiCalculator = () => {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(180);
  function onWeightChange(event) {
    setWeight(event.target.value);
    console.log(weight);
  }
  function onHeightChange(event) {
    setHeight(event.target.value);
    console.log(height);
  }
  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [height, weight]);
  return (
    <main>
      <h1>Bmi Calculator</h1>
      <div className="input-section">
        <p className="input-slider">weight:{weight}kg</p>
      </div>
      <input
        type="range"
        step="1"
        min="40"
        max="200"
        onChange={onWeightChange}
      />
      <div className="section-input">
        <p className="slider-input">height:{height}cm</p>
      </div>
      <input
        type="range"
        step="1"
        min="2"
        max="200"
        onChange={onHeightChange}
      />
      <div className="output-section">
        <p>Your Bmi is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default BmiCalculator;
