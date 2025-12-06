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
          <div className="demo-state">
            <strong>Selected Range:</strong> {rangeValues[0]} - {rangeValues[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Variant Colors
export const VariantColorsDemo = () => {
  const [colorValues, setColorValues] = useState([30, 70]);

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Variant Colors</h3>
        <div className="demo-content">
          <div className="variant-colors-grid">
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              variant="default"
              label="Default"
            />
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              variant="primary"
              label="Primary"
            />
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              variant="success"
              label="Success"
            />
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              variant="warning"
              label="Warning"
            />
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              variant="danger"
              label="Danger"
            />
            <BasicRange
              value={colorValues}
              onChange={setColorValues}
              min={0}
              max={100}
              variant="info"
              label="Info"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Size Variants
export const SizesDemo = () => {
  const [sizeValues, setSizeValues] = useState([25, 75]);

  return (
    <div className="range-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Size Variants</h3>
        <div className="demo-content">
          <div className="size-variants-grid">
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
          <div className="states-grid">
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
              variant="primary"
              thumbLabel={true}
              label="Price Range ($)"
            />
            <BasicRange
              value={ageRange}
              onChange={setAgeRange}
              min={0}
              max={100}
              step={1}
              variant="success"
              thumbLabel={true}
              label="Age Range"
            />
            <BasicRange
              value={ratingRange}
              onChange={setRatingRange}
              min={1}
              max={5}
              step={0.5}
              variant="warning"
              thumbLabel="always"
              label="Rating Range"
            />
          </div>
          <div className="demo-state">
            <p>
              <strong>Price:</strong> ${priceRange[0]} - ${priceRange[1]}
            </p>
            <p>
              <strong>Age:</strong> {ageRange[0]} - {ageRange[1]} years
            </p>
            <p>
              <strong>Rating:</strong> {ratingRange[0]} - {ratingRange[1]} stars
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
      <VariantColorsDemo />
      <SizesDemo />
      <StepControlDemo />
      <ThumbLabelsDemo />
      <StatesDemo />
      <CustomRangesDemo />
    </div>
  );
};

export default RangeDemo;
