import React, { useState, useEffect } from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";
import "./linearProgressDemo.scss";

// Demo 1: Basic Usage
export const BasicUsageDemo = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="linear-progress-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Usage</h3>
        <div className="demo-content">
          <LinearProgress modelValue={progress} />
          <p>Auto-progressing bar: {progress}%</p>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Variant Colors
export const VariantColorsDemo = () => {
  return (
    <div className="linear-progress-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Variant Colors</h3>
        <div className="demo-content">
          <div className="row">
            <div>
              <p>Default</p>
              <LinearProgress modelValue={60} variant="default" />
            </div>
            <div>
              <p>Primary</p>
              <LinearProgress modelValue={60} variant="primary" />
            </div>
            <div>
              <p>Success</p>
              <LinearProgress modelValue={60} variant="success" />
            </div>
            <div>
              <p>Warning</p>
              <LinearProgress modelValue={60} variant="warning" />
            </div>
            <div>
              <p>Danger</p>
              <LinearProgress modelValue={60} variant="danger" />
            </div>
            <div>
              <p>Info</p>
              <LinearProgress modelValue={60} variant="info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Height Variants
export const HeightVariantsDemo = () => {
  const [customHeight, setCustomHeight] = useState(8);

  return (
    <div className="linear-progress-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Height Variants</h3>
        <div className="demo-content">
          <div className="row">
            <div>
              <p>Thin (2px)</p>
              <LinearProgress modelValue={75} height={2} />
            </div>
            <div>
              <p>Default (4px)</p>
              <LinearProgress modelValue={75} height={4} />
            </div>
            <div>
              <p>Medium (8px)</p>
              <LinearProgress modelValue={75} height={8} />
            </div>
            <div>
              <p>Thick (16px)</p>
              <LinearProgress modelValue={75} height={16} />
            </div>
          </div>
          <div className="row">
            <div style={{ width: "100%" }}>
              <label>
                Custom Height: {customHeight}px
                <input
                  type="range"
                  min="2"
                  max="32"
                  value={customHeight}
                  onChange={(e) => setCustomHeight(Number(e.target.value))}
                  style={{ width: "100%", marginTop: "0.5rem" }}
                />
              </label>
              <LinearProgress modelValue={75} height={customHeight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Progress Values
export const ProgressValuesDemo = () => {
  const [customProgress, setCustomProgress] = useState(45);

  return (
    <div className="linear-progress-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Progress Values</h3>
        <div className="demo-content">
          <div className="row">
            <div style={{ width: "100%" }}>
              <label>
                Progress: {customProgress}%
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={customProgress}
                  onChange={(e) => setCustomProgress(Number(e.target.value))}
                  style={{ width: "100%", marginTop: "0.5rem" }}
                />
              </label>
              <LinearProgress modelValue={customProgress} height={8} />
            </div>
          </div>
          <div className="row">
            <div style={{ width: "100%" }}>
              <p>Fixed Values:</p>
              <LinearProgress modelValue={25} height={6} />
              <LinearProgress modelValue={50} height={6} />
              <LinearProgress modelValue={75} height={6} />
              <LinearProgress modelValue={100} height={6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Rounded and Indeterminate
export const RoundedIndeterminateDemo = () => {
  return (
    <div className="linear-progress-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Rounded and Indeterminate</h3>
        <div className="demo-content">
          <div className="row">
            <div style={{ width: "100%" }}>
              <p>Rounded</p>
              <LinearProgress modelValue={65} rounded={true} height={8} />
            </div>
            <div style={{ width: "100%" }}>
              <p>Indeterminate</p>
              <LinearProgress indeterminate={true} height={8} />
            </div>
            <div style={{ width: "100%" }}>
              <p>Rounded + Indeterminate</p>
              <LinearProgress
                indeterminate={true}
                rounded={true}
                height={8}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Absolute Positioning
export const AbsolutePositioningDemo = () => {
  return (
    <div className="linear-progress-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Absolute Positioning</h3>
        <div className="demo-content">
          <div
            style={{
              position: "relative",
              height: "100px",
              border: "1px solid #e1e5e9",
              padding: "20px",
              borderRadius: "6px",
            }}
          >
            <LinearProgress absolute={true} modelValue={80} height={4} />
            <p style={{ marginTop: "10px" }}>
              Progress bar positioned at the top of this container
            </p>
            <p>Content below the progress bar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: All Variants Combined
export const AllVariantsDemo = () => {
  return (
    <div className="linear-progress-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">All Variants Combined</h3>
        <div className="demo-content">
          <div className="row">
            <div style={{ width: "100%" }}>
              <p>Default variant, rounded, 50%</p>
              <LinearProgress
                modelValue={50}
                variant="default"
                rounded={true}
                height={8}
              />
            </div>
            <div style={{ width: "100%" }}>
              <p>Success variant, rounded, 75%</p>
              <LinearProgress
                modelValue={75}
                variant="success"
                rounded={true}
                height={8}
              />
            </div>
            <div style={{ width: "100%" }}>
              <p>Danger variant, indeterminate</p>
              <LinearProgress
                indeterminate={true}
                variant="danger"
                height={8}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: States Demo
export const StatesDemo = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="linear-progress-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">States Demo</h3>
        <div className="demo-content">
          <div className="row">
            <div style={{ width: "100%" }}>
              <p>Loading (0%)</p>
              <LinearProgress modelValue={0} height={6} />
            </div>
            <div style={{ width: "100%" }}>
              <p>In Progress ({progress}%)</p>
              <LinearProgress modelValue={progress} height={6} />
            </div>
            <div style={{ width: "100%" }}>
              <p>Complete (100%)</p>
              <LinearProgress modelValue={100} height={6} />
            </div>
            <div style={{ width: "100%" }}>
              <p>Indeterminate (Unknown)</p>
              <LinearProgress indeterminate={true} height={6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Demo Component
export default function LinearProgressDemo() {
  return (
    <div className="linear-progress-demo-container">
      <BasicUsageDemo />
      <VariantColorsDemo />
      <HeightVariantsDemo />
      <ProgressValuesDemo />
      <RoundedIndeterminateDemo />
      <AbsolutePositioningDemo />
      <AllVariantsDemo />
      <StatesDemo />
    </div>
  );
}
