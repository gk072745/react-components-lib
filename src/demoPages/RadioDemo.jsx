import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";
import "./radioDemo.scss";

// Demo 1: Single Selection
export const SingleSelectionDemo = () => {
  const [singleValue, setSingleValue] = useState("");

  const handleSingleChange = (newValue, selectedValue) => {
    console.log("Single radio changed:", { newValue, selectedValue });
    setSingleValue(newValue);
  };

  return (
    <div className="radio-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Single Selection</h3>
        <div className="demo-content">
          <div className="radio-grid">
            <BasicRadio
              value="option1"
              modelValue={singleValue}
              onUpdateModelValue={setSingleValue}
              onChange={handleSingleChange}
              label="Option 1"
              size="md"
            />
            <BasicRadio
              value="option2"
              modelValue={singleValue}
              onUpdateModelValue={setSingleValue}
              onChange={handleSingleChange}
              label="Option 2"
              size="md"
            />
            <BasicRadio
              value="option3"
              modelValue={singleValue}
              onUpdateModelValue={setSingleValue}
              onChange={handleSingleChange}
              label="Option 3"
              size="md"
            />
          </div>
          <p className="demo-result">Selected: {singleValue || "None"}</p>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Multiple Selection
export const MultipleSelectionDemo = () => {
  const [multipleValues, setMultipleValues] = useState([]);

  const handleMultipleChange = (newValue, selectedValue) => {
    console.log("Multiple radio changed:", { newValue, selectedValue });
    setMultipleValues(newValue);
  };

  return (
    <div className="radio-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Multiple Selection</h3>
        <div className="demo-content">
          <div className="radio-grid">
            <BasicRadio
              value="multi1"
              modelValue={multipleValues}
              onUpdateModelValue={setMultipleValues}
              onChange={handleMultipleChange}
              label="Multi Option 1"
              multiple={true}
              size="md"
            />
            <BasicRadio
              value="multi2"
              modelValue={multipleValues}
              onUpdateModelValue={setMultipleValues}
              onChange={handleMultipleChange}
              label="Multi Option 2"
              multiple={true}
              size="md"
            />
            <BasicRadio
              value="multi3"
              modelValue={multipleValues}
              onUpdateModelValue={setMultipleValues}
              onChange={handleMultipleChange}
              label="Multi Option 3"
              multiple={true}
              size="md"
            />
          </div>
          <p className="demo-result">
            Selected:{" "}
            {multipleValues.length ? multipleValues.join(", ") : "None"}
          </p>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Sizes
export const SizesDemo = () => {
  const [sizeValue, setSizeValue] = useState("");

  return (
    <div className="radio-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Sizes</h3>
        <div className="demo-content">
          <div className="radio-grid">
            <BasicRadio
              value="xs"
              modelValue={sizeValue}
              onUpdateModelValue={setSizeValue}
              label="Extra Small"
              size="xs"
            />
            <BasicRadio
              value="sm"
              modelValue={sizeValue}
              onUpdateModelValue={setSizeValue}
              label="Small"
              size="sm"
            />
            <BasicRadio
              value="md"
              modelValue={sizeValue}
              onUpdateModelValue={setSizeValue}
              label="Medium"
              size="md"
            />
            <BasicRadio
              value="lg"
              modelValue={sizeValue}
              onUpdateModelValue={setSizeValue}
              label="Large"
              size="lg"
            />
            <BasicRadio
              value="xl"
              modelValue={sizeValue}
              onUpdateModelValue={setSizeValue}
              label="Extra Large"
              size="xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Colors
export const ColorsDemo = () => {
  const [colorValue, setColorValue] = useState("primary");

  const handleColorChange = (newValue) => {
    setColorValue(newValue);
  };

  return (
    <div className="radio-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Colors</h3>
        <div className="demo-content">
          <div className="radio-grid">
            <BasicRadio
              value="default"
              modelValue={colorValue}
              onUpdateModelValue={handleColorChange}
              label="Default"
              color="gray"
              size="md"
            />
            <BasicRadio
              value="primary"
              modelValue={colorValue}
              onUpdateModelValue={handleColorChange}
              label="Primary"
              color="blue"
              size="md"
            />
            <BasicRadio
              value="success"
              modelValue={colorValue}
              onUpdateModelValue={handleColorChange}
              label="Success"
              color="green"
              size="md"
            />
            <BasicRadio
              value="warning"
              modelValue={colorValue}
              onUpdateModelValue={handleColorChange}
              label="Warning"
              color="orange"
              size="md"
            />
            <BasicRadio
              value="danger"
              modelValue={colorValue}
              onUpdateModelValue={handleColorChange}
              label="Danger"
              color="red"
              size="md"
            />
            <BasicRadio
              value="info"
              modelValue={colorValue}
              onUpdateModelValue={handleColorChange}
              label="Info"
              color="cyan"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: States
export const StatesDemo = () => {
  const [stateValue, setStateValue] = useState("");

  return (
    <div className="radio-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">States</h3>
        <div className="demo-content">
          <div className="radio-grid">
            <BasicRadio
              value="normal"
              modelValue={stateValue}
              onUpdateModelValue={setStateValue}
              label="Normal"
              size="md"
            />
            <BasicRadio
              value="disabled"
              modelValue={stateValue}
              onUpdateModelValue={setStateValue}
              label="Disabled"
              disabled={true}
              size="md"
            />
            <BasicRadio
              value="readonly"
              modelValue={stateValue}
              onUpdateModelValue={setStateValue}
              label="Readonly"
              readonly={true}
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Toggle Mode
export const ToggleModeDemo = () => {
  const [toggleValue, setToggleValue] = useState("");

  return (
    <div className="radio-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Toggle Mode</h3>
        <div className="demo-content">
          <div className="radio-grid">
            <BasicRadio
              value="toggle1"
              modelValue={toggleValue}
              onUpdateModelValue={setToggleValue}
              label="Toggle Option 1"
              toggle={true}
              size="md"
            />
            <BasicRadio
              value="toggle2"
              modelValue={toggleValue}
              onUpdateModelValue={setToggleValue}
              label="Toggle Option 2"
              toggle={true}
              size="md"
            />
          </div>
          <p className="demo-result">Toggle allows deselection</p>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Custom Children
export const CustomChildrenDemo = () => {
  const [customValue, setCustomValue] = useState("");

  return (
    <div className="radio-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Children</h3>
        <div className="demo-content">
          <div className="radio-grid">
            <BasicRadio
              value="custom1"
              modelValue={customValue}
              onUpdateModelValue={setCustomValue}
              label="Custom Icon"
              size="md"
            >
              {({ isChecked }) => (
                <div
                  className="custom-radio"
                  style={{
                    borderColor: isChecked ? "#007bff" : "#ccc",
                    backgroundColor: isChecked ? "#007bff" : "white",
                  }}
                >
                  {isChecked && <span>✓</span>}
                </div>
              )}
            </BasicRadio>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export for backward compatibility
const RadioDemo = () => {
  return (
    <div className="radio-demo-container">
      <SingleSelectionDemo />
      <MultipleSelectionDemo />
      <SizesDemo />
      <ColorsDemo />
      <StatesDemo />
      <ToggleModeDemo />
      <CustomChildrenDemo />
    </div>
  );
};

export default RadioDemo;
