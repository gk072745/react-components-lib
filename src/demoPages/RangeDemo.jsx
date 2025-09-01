import React, { useState } from "react";
import BasicRange from "../components/sharedComponents/BasicRange";
import "./rangeDemo.scss";

// Demo 1: Basic Range
export const BasicRangeDemo = () => {
  const [rangeValues, setRangeValues] = useState([20, 80]);

  const handleRangeChange = (values) => {
    console.log("Basic range changed:", values);
    setRangeValues(values);
  };

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Range</h3>
        <div className="demo-content">
          <div className="range-grid">
            <BasicRange
              value={rangeValues}
              onChange={handleRangeChange}
              min={0}
              max={100}
              label="Basic Range Slider"
            />
          </div>
          <p className="demo-result">
            Selected Range: {rangeValues[0]} - {rangeValues[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Custom Colors
export const CustomColorsDemo = () => {
  const [colorValues, setColorValues] = useState([30, 70]);

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Colors</h3>
        <div className="demo-content">
          <div className="range-grid">
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              color="#007bff"
              thumbColor="#0056b3"
              trackColor="#e9ecef"
              label="Blue Theme"
            />
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              color="#28a745"
              thumbColor="#1e7e34"
              trackColor="#f8f9fa"
              label="Green Theme"
            />
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              color="#dc3545"
              thumbColor="#c82333"
              trackColor="#f8d7da"
              label="Red Theme"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Different Sizes
export const SizesDemo = () => {
  const [sizeValues, setSizeValues] = useState([25, 75]);

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Different Sizes</h3>
        <div className="demo-content">
          <div className="range-grid">
            <BasicRange
              value={sizeValues}
              onChange={setSizeValues}
              min={0}
              max={100}
              size="xs"
              label="Extra Small"
            />
            <BasicRange
              value={sizeValues}
              onChange={setSizeValues}
              min={0}
              max={100}
              size="sm"
              label="Small"
            />
            <BasicRange
              value={sizeValues}
              onChange={setSizeValues}
              min={0}
              max={100}
              size="md"
              label="Medium"
            />
            <BasicRange
              value={sizeValues}
              onChange={setSizeValues}
              min={0}
              max={100}
              size="lg"
              label="Large"
            />
            <BasicRange
              value={sizeValues}
              onChange={setSizeValues}
              min={0}
              max={100}
              size="xl"
              label="Extra Large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Step Control
export const StepControlDemo = () => {
  const [stepValues, setStepValues] = useState([20, 80]);

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Step Control</h3>
        <div className="demo-content">
          <div className="range-grid">
            <BasicRange
              value={stepValues}
              onChange={setStepValues}
              min={0}
              max={100}
              step={1}
              label="Step: 1"
            />
            <BasicRange
              value={stepValues}
              onChange={setStepValues}
              min={0}
              max={100}
              step={5}
              label="Step: 5"
            />
            <BasicRange
              value={stepValues}
              onChange={setStepValues}
              min={0}
              max={100}
              step={10}
              label="Step: 10"
            />
            <BasicRange
              value={stepValues}
              onChange={setStepValues}
              min={0}
              max={100}
              step={0.1}
              label="Step: 0.1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Thumb Labels
export const ThumbLabelsDemo = () => {
  const [labelValues, setLabelValues] = useState([30, 70]);

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Thumb Labels</h3>
        <div className="demo-content">
          <div className="range-grid">
            <BasicRange
              value={labelValues}
              onChange={setLabelValues}
              min={0}
              max={100}
              thumbLabel={true}
              label="Labels on Drag/Focus"
            />
            <BasicRange
              value={labelValues}
              onChange={setLabelValues}
              min={0}
              max={100}
              thumbLabel="always"
              label="Always Visible Labels"
            />
            <BasicRange
              value={labelValues}
              onChange={setLabelValues}
              min={0}
              max={100}
              thumbLabel={false}
              label="No Labels"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: States
export const StatesDemo = () => {
  const [stateValues, setStateValues] = useState([40, 60]);

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">States</h3>
        <div className="demo-content">
          <div className="range-grid">
            <BasicRange
              value={stateValues}
              onChange={setStateValues}
              min={0}
              max={100}
              label="Normal"
            />
            <BasicRange
              value={stateValues}
              onChange={setStateValues}
              min={0}
              max={100}
              disabled={true}
              label="Disabled"
            />
            <BasicRange
              value={stateValues}
              onChange={setStateValues}
              min={0}
              max={100}
              readonly={true}
              label="Readonly"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Custom Ranges
export const CustomRangesDemo = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [ageRange, setAgeRange] = useState([18, 65]);
  const [ratingRange, setRatingRange] = useState([3, 5]);

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Ranges</h3>
        <div className="demo-content">
          <div className="range-grid">
            <BasicRange
              value={priceRange}
              onChange={setPriceRange}
              min={0}
              max={500}
              step={10}
              color="#007bff"
              thumbLabel={true}
              label="Price Range ($)"
            />
            <BasicRange
              value={ageRange}
              onChange={setAgeRange}
              min={0}
              max={100}
              step={1}
              color="#28a745"
              thumbLabel={true}
              label="Age Range"
            />
            <BasicRange
              value={ratingRange}
              onChange={setRatingRange}
              min={1}
              max={5}
              step={0.5}
              color="#ffc107"
              thumbLabel="always"
              label="Rating Range"
            />
          </div>
          <div className="demo-result">
            <p>
              Price: ${priceRange[0]} - ${priceRange[1]}
            </p>
            <p>
              Age: {ageRange[0]} - {ageRange[1]} years
            </p>
            <p>
              Rating: {ratingRange[0]} - {ratingRange[1]} stars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export for backward compatibility
const RangeDemo = () => {
  return (
    <div className="range-demo-container">
      <BasicRangeDemo />
      <CustomColorsDemo />
      <SizesDemo />
      <StepControlDemo />
      <ThumbLabelsDemo />
      <StatesDemo />
      <CustomRangesDemo />
    </div>
  );
};

export default RangeDemo;
