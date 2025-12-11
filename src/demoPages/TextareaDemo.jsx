import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";
import "./textareaDemo.scss";

// Demo 1: Basic Textarea
export const BasicTextareaDemo = () => {
  const [basicValue, setBasicValue] = useState("");

  return (
    <div className="textarea-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Textarea</h3>
        <div className="demo-content">
          <div className="textarea-grid">
            <BasicTextarea
              label="Basic Textarea"
              placeholder="Enter your message here..."
              value={basicValue}
              onChange={setBasicValue}
              hint="This is a basic textarea with default settings"
            />
          </div>
          <div className="demo-state">
            <strong>Value:</strong> {basicValue || "(empty)"}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Auto Grow Textarea
export const AutoGrowDemo = () => {
  const [autoGrowValue, setAutoGrowValue] = useState("");

  return (
    <div className="textarea-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Auto Grow Textarea</h3>
        <div className="demo-content">
          <div className="textarea-grid">
            <BasicTextarea
              label="Auto Grow Textarea"
              placeholder="Type to see auto-resize..."
              value={autoGrowValue}
              onChange={setAutoGrowValue}
              autoGrow={true}
              minRows={2}
              hint="This textarea automatically grows as you type"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Character Counter
export const CounterDemo = () => {
  const [counterValue, setCounterValue] = useState("");

  return (
    <div className="textarea-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Character Counter</h3>
        <div className="demo-content">
          <div className="textarea-grid">
            <BasicTextarea
              label="With Character Counter"
              placeholder="Type to see character count..."
              value={counterValue}
              onChange={setCounterValue}
              maxlength={100}
              counter={true}
              hint="Shows character count with maximum limit"
            />
          </div>
          <div className="demo-state">
            <strong>Characters:</strong> {counterValue.length} / 100
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Validation Rules
export const ValidationDemo = () => {
  const [validationValue, setValidationValue] = useState("");

  return (
    <div className="textarea-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Validation Rules</h3>
        <div className="demo-content">
          <div className="textarea-grid">
            <BasicTextarea
              label="With Validation"
              placeholder="Enter at least 10 characters..."
              value={validationValue}
              onChange={setValidationValue}
              rules={[
                { rule: "required", message: "This field is required" },
                { rule: "minLength", condition: 10, message: "Must be at least 10 characters" },
              ]}
              hint="This textarea has validation rules"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: No Resize
export const NoResizeDemo = () => {
  const [noResizeValue, setNoResizeValue] = useState("");

  return (
    <div className="textarea-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">No Resize Textarea</h3>
        <div className="demo-content">
          <div className="textarea-grid">
            <BasicTextarea
              label="No Resize Textarea"
              placeholder="This textarea cannot be resized..."
              value={noResizeValue}
              onChange={setNoResizeValue}
              noResize={true}
              rows={4}
              hint="This textarea has resize disabled"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Different States
export const StatesDemo = () => {
  const [loadingValue, setLoadingValue] = useState("");
  const [disabledValue] = useState("This textarea is disabled");
  const [readonlyValue] = useState("This textarea is readonly");

  return (
    <div className="textarea-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Different States</h3>
        <div className="demo-content">
          <div className="textarea-grid">
            <BasicTextarea
              label="Disabled Textarea"
              value={disabledValue}
              disabled={true}
              hint="This textarea is disabled"
            />
            <BasicTextarea
              label="Loading Textarea"
              placeholder="This textarea is loading..."
              value={loadingValue}
              onChange={setLoadingValue}
              loading={true}
              hint="This textarea shows loading state"
            />
            <BasicTextarea
              label="Readonly Textarea"
              value={readonlyValue}
              readonly={true}
              hint="This textarea is readonly"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Custom Icons
export const CustomIconsDemo = () => {
  const [customIconsValue, setCustomIconsValue] = useState("");

  const customPrependIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" fill="#1C274C" />
    </svg>
  );

  const customAppendIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" fill="#1C274C" />
    </svg>
  );

  return (
    <div className="textarea-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Icons</h3>
        <div className="demo-content">
          <div className="textarea-grid">
            <BasicTextarea
              label="Custom Icons"
              placeholder="Textarea with custom icons..."
              value={customIconsValue}
              onChange={setCustomIconsValue}
              prependIcon={customPrependIcon}
              appendIcon={customAppendIcon}
              hint="This textarea has custom icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: All Features Combined
export const AllFeaturesDemo = () => {
  const [allFeaturesValue, setAllFeaturesValue] = useState("");

  return (
    <div className="textarea-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">All Features Combined</h3>
        <div className="demo-content">
          <div className="textarea-grid">
            <BasicTextarea
              label="Feature-Rich Textarea"
              placeholder="Try all features..."
              value={allFeaturesValue}
              onChange={setAllFeaturesValue}
              autoGrow={true}
              counter={true}
              maxlength={200}
              rows={3}
              minRows={2}
              rules={[
                { rule: "required", message: "This field is required" },
                { rule: "minLength", condition: 5, message: "Must be at least 5 characters" },
              ]}
              hint="This textarea demonstrates all available features"
            />
          </div>
          <div className="demo-state">
            <strong>Characters:</strong> {allFeaturesValue.length} / 200
          </div>
        </div>
      </div>
    </div>
  );
};

const TextareaDemo = () => {
  return (
    <div className="textarea-demo-container">
      <BasicTextareaDemo />
      <AutoGrowDemo />
      <CounterDemo />
      <ValidationDemo />
      <NoResizeDemo />
      <StatesDemo />
      <CustomIconsDemo />
      <AllFeaturesDemo />
    </div>
  );
};

export default TextareaDemo;
