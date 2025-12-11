import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";
import "./sliderDemo.scss";

// Demo 1: Basic Slider
export const BasicSliderDemo = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (newValue) => {
    console.log("Basic slider changed:", newValue);
    setSliderValue(newValue);
  };

  return (
    <div className="slider-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Slider</h3>
        <div className="demo-content">
          <div className="slider-grid">
            <BasicSlider
              value={sliderValue}
              onChange={handleSliderChange}
              label="Volume Control"
              min={0}
              max={100}
              step={1}
              variant="primary"
              size="md"
            />
          </div>
          <div className="demo-state">
            <strong>Current Value:</strong> {sliderValue}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Variant Colors
export const VariantColorsDemo = () => {
  const [defaultValue, setDefaultValue] = useState(50);
  const [primaryValue, setPrimaryValue] = useState(60);
  const [successValue, setSuccessValue] = useState(70);
  const [warningValue, setWarningValue] = useState(80);
  const [dangerValue, setDangerValue] = useState(90);
  const [infoValue, setInfoValue] = useState(40);

  return (
    <div className="slider-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Variant Colors</h3>
        <div className="demo-content">
          <div className="variant-colors-grid">
            <BasicSlider
              value={defaultValue}
              onChange={setDefaultValue}
              label="Default"
              min={0}
              max={100}
              step={1}
              variant="default"
              size="md"
            />
            <BasicSlider
              value={primaryValue}
              onChange={setPrimaryValue}
              label="Primary"
              min={0}
              max={100}
              step={1}
              variant="primary"
              size="md"
            />
            <BasicSlider
              value={successValue}
              onChange={setSuccessValue}
              label="Success"
              min={0}
              max={100}
              step={1}
              variant="success"
              size="md"
            />
            <BasicSlider
              value={warningValue}
              onChange={setWarningValue}
              label="Warning"
              min={0}
              max={100}
              step={1}
              variant="warning"
              size="md"
            />
            <BasicSlider
              value={dangerValue}
              onChange={setDangerValue}
              label="Danger"
              min={0}
              max={100}
              step={1}
              variant="danger"
              size="md"
            />
            <BasicSlider
              value={infoValue}
              onChange={setInfoValue}
              label="Info"
              min={0}
              max={100}
              step={1}
              variant="info"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Sizes
export const SizesDemo = () => {
  const [xsValue, setXsValue] = useState(25);
  const [smValue, setSmValue] = useState(30);
  const [mdValue, setMdValue] = useState(35);
  const [lgValue, setLgValue] = useState(40);
  const [xlValue, setXlValue] = useState(45);

  return (
    <div className="slider-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Size Variants</h3>
        <div className="demo-content">
          <div className="size-variants-grid">
            <BasicSlider
              value={xsValue}
              onChange={setXsValue}
              label="Extra Small (xs)"
              min={0}
              max={100}
              step={1}
              variant="info"
              size="xs"
            />
            <BasicSlider
              value={smValue}
              onChange={setSmValue}
              label="Small (sm)"
              min={0}
              max={100}
              step={1}
              variant="warning"
              size="sm"
            />
            <BasicSlider
              value={mdValue}
              onChange={setMdValue}
              label="Medium (md)"
              min={0}
              max={100}
              step={1}
              variant="success"
              size="md"
            />
            <BasicSlider
              value={lgValue}
              onChange={setLgValue}
              label="Large (lg)"
              min={0}
              max={100}
              step={1}
              variant="danger"
              size="lg"
            />
            <BasicSlider
              value={xlValue}
              onChange={setXlValue}
              label="Extra Large (xl)"
              min={0}
              max={100}
              step={1}
              variant="primary"
              size="xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Thumb Labels
export const ThumbLabelsDemo = () => {
  const [thumbLabelValue, setThumbLabelValue] = useState(75);
  const [alwaysLabelValue, setAlwaysLabelValue] = useState(25);

  return (
    <div className="slider-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Thumb Labels</h3>
        <div className="demo-content">
          <div className="slider-grid">
            <BasicSlider
              value={thumbLabelValue}
              onChange={setThumbLabelValue}
              label="Show on Drag/Focus"
              min={-50}
              max={150}
              step={5}
              variant="success"
              thumbLabel={true}
              size="lg"
            />
            <div className="demo-state">
              <strong>Current Value:</strong> {thumbLabelValue}°C
            </div>
            <BasicSlider
              value={alwaysLabelValue}
              onChange={setAlwaysLabelValue}
              label="Always Visible"
              min={0}
              max={100}
              step={0.1}
              variant="danger"
              thumbLabel="always"
              size="md"
            />
            <div className="demo-state">
              <strong>Current Percentage:</strong> {alwaysLabelValue.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Step Control
export const StepControlDemo = () => {
  const [decimalValue, setDecimalValue] = useState(60);

  return (
    <div className="slider-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Step Control</h3>
        <div className="demo-content">
          <div className="slider-grid">
            <BasicSlider
              value={decimalValue}
              onChange={setDecimalValue}
              label="Decimal Control (step: 0.25)"
              min={0}
              max={10}
              step={0.25}
              variant="info"
              thumbLabel={true}
              size="md"
            />
            <div className="demo-state">
              <strong>Current Value:</strong> {decimalValue.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Custom Ranges
export const CustomRangesDemo = () => {
  const [smallRangeValue, setSmallRangeValue] = useState(5);
  const [largeRangeValue, setLargeRangeValue] = useState(500);
  const [negativeRangeValue, setNegativeRangeValue] = useState(-25);

  return (
    <div className="slider-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Ranges</h3>
        <div className="demo-content">
          <div className="slider-grid">
            <BasicSlider
              value={smallRangeValue}
              onChange={setSmallRangeValue}
              label="Small Range (0-10)"
              min={0}
              max={10}
              step={1}
              variant="primary"
              size="md"
            />
            <div className="demo-state">
              <strong>Value:</strong> {smallRangeValue}
            </div>
            <BasicSlider
              value={largeRangeValue}
              onChange={setLargeRangeValue}
              label="Large Range (0-1000)"
              min={0}
              max={1000}
              step={10}
              variant="success"
              size="md"
            />
            <div className="demo-state">
              <strong>Value:</strong> {largeRangeValue}
            </div>
            <BasicSlider
              value={negativeRangeValue}
              onChange={setNegativeRangeValue}
              label="Negative Range (-100 to 100)"
              min={-100}
              max={100}
              step={5}
              variant="warning"
              size="md"
            />
            <div className="demo-state">
              <strong>Value:</strong> {negativeRangeValue}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: States
export const StatesDemo = () => {
  return (
    <div className="slider-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">States</h3>
        <div className="demo-content">
          <div className="states-grid">
            <BasicSlider
              value={50}
              label="Disabled Slider"
              min={0}
              max={100}
              step={1}
              variant="primary"
              disabled={true}
              size="md"
            />
            <BasicSlider
              value={60}
              label="Readonly Slider"
              min={0}
              max={100}
              step={1}
              variant="success"
              readonly={true}
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: With Labels
export const WithLabelsDemo = () => {
  const [labeledValue, setLabeledValue] = useState(50);

  return (
    <div className="slider-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">With Labels</h3>
        <div className="demo-content">
          <div className="slider-grid">
            <BasicSlider
              value={labeledValue}
              onChange={setLabeledValue}
              label="Volume"
              min={0}
              max={100}
              step={1}
              variant="primary"
              size="md"
            />
            <div className="demo-state">
              <strong>Volume Level:</strong> {labeledValue}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderDemo = () => {
  return (
    <div className="slider-demo-container">
      <BasicSliderDemo />
      <VariantColorsDemo />
      <SizesDemo />
      <ThumbLabelsDemo />
      <StepControlDemo />
      <CustomRangesDemo />
      <StatesDemo />
      <WithLabelsDemo />
    </div>
  );
};

export default SliderDemo;
