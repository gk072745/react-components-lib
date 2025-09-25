import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";
import "./textareaDemo.scss";

// Demo 1: Basic Textarea
export const BasicTextareaDemo = () => {
  const [basicValue, setBasicValue] = useState("");

  const handleBasicChange = (newValue) => {
    setBasicValue(newValue);
    console.log("Basic textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="Basic Textarea"
      placeholder="Enter your message here..."
      value={basicValue}
      onChange={handleBasicChange}
      hint="This is a basic textarea with default settings"
    />
  );
};

// Demo 2: Auto Grow Textarea
export const AutoGrowDemo = () => {
  const [autoGrowValue, setAutoGrowValue] = useState("");

  const handleAutoGrowChange = (newValue) => {
    setAutoGrowValue(newValue);
    console.log("Auto grow textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="Auto Grow Textarea"
      placeholder="Type to see auto-resize..."
      value={autoGrowValue}
      onChange={handleAutoGrowChange}
      autoGrow={true}
      minRows={2}
      hint="This textarea automatically grows as you type"
    />
  );
};

// Demo 3: Character Counter
export const CounterDemo = () => {
  const [counterValue, setCounterValue] = useState("");

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue);
    console.log("Counter textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="With Character Counter"
      placeholder="Type to see character count..."
      value={counterValue}
      onChange={handleCounterChange}
      maxlength={100}
      counter={true}
      hint="Shows character count with maximum limit"
    />
  );
};

// Demo 4: Validation Rules
export const ValidationDemo = () => {
  const [validationValue, setValidationValue] = useState("");

  const handleValidationChange = (newValue) => {
    setValidationValue(newValue);
    console.log("Validation textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="With Validation"
      placeholder="Enter at least 10 characters..."
      value={validationValue}
      onChange={handleValidationChange}
      rules={[
        { rule: "required", message: "This field is required" },
        { rule: "minLength", condition: 10, message: "Must be at least 10 characters" },
      ]}
      hint="This textarea has validation rules"
    />
  );
};

// Demo 5: No Resize
export const NoResizeDemo = () => {
  const [noResizeValue, setNoResizeValue] = useState("");

  const handleNoResizeChange = (newValue) => {
    setNoResizeValue(newValue);
    console.log("No resize textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="No Resize Textarea"
      placeholder="This textarea cannot be resized..."
      value={noResizeValue}
      onChange={handleNoResizeChange}
      noResize={true}
      rows={4}
      hint="This textarea has resize disabled"
    />
  );
};

// Demo 6: Different States
export const StatesDemo = () => {
  const [loadingValue, setLoadingValue] = useState("");
  const [disabledValue] = useState("This textarea is disabled");
  const [readonlyValue] = useState("This textarea is readonly");

  return (
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
    <BasicTextarea
      label="Custom Icons"
      placeholder="Textarea with custom icons..."
      value={customIconsValue}
      onChange={setCustomIconsValue}
      prepend={true}
      append={true}
      prependIcon={customPrependIcon}
      appendIcon={customAppendIcon}
      hint="This textarea has custom icons"
    />
  );
};

// Demo 8: All Features Combined
export const AllFeaturesDemo = () => {
  const [allFeaturesValue, setAllFeaturesValue] = useState("");

  const handleAllFeaturesChange = (newValue) => {
    setAllFeaturesValue(newValue);
    console.log("All features textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="Feature-Rich Textarea"
      placeholder="Try all features..."
      value={allFeaturesValue}
      onChange={handleAllFeaturesChange}
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
  );
};

// Complete Demo Component
const TextareaDemo = () => {
  const [basicValue, setBasicValue] = useState("");
  const [autoGrowValue, setAutoGrowValue] = useState("");
  const [counterValue, setCounterValue] = useState("");
  const [validationValue, setValidationValue] = useState("");
  const [disabledValue] = useState("This textarea is disabled");
  const [readonlyValue] = useState("This textarea is readonly");
  const [loadingValue, setLoadingValue] = useState("");
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
    <div className="textarea-demo">
      <div className="demo-header">
        <h1>BasicTextarea Component Demo</h1>
        <p>
          Comprehensive textarea component with auto-grow, validation, character
          counter, and multiple customization options.
        </p>
      </div>

      <div className="demo-section">
        <h2>Basic Textarea</h2>
        <p>Basic textarea with default settings.</p>
        <BasicTextarea
          label="Basic Textarea"
          placeholder="Enter your message here..."
          value={basicValue}
          onChange={setBasicValue}
          hint="This is a basic textarea with default settings"
        />
        {basicValue && (
          <div className="textarea-info">
            <strong>Current value:</strong> {basicValue}
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>Auto Grow Textarea</h2>
        <p>Textarea that automatically grows as you type.</p>
        <BasicTextarea
          label="Auto Grow Textarea"
          placeholder="Type to see auto-resize..."
          value={autoGrowValue}
          onChange={setAutoGrowValue}
          autoGrow={true}
          minRows={2}
          hint="This textarea automatically grows as you type"
        />
        {autoGrowValue && (
          <div className="textarea-info">
            <strong>Current value:</strong> {autoGrowValue}
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>Character Counter</h2>
        <p>Textarea with character counter and maximum length.</p>
        <BasicTextarea
          label="With Character Counter"
          placeholder="Type to see character count..."
          value={counterValue}
          onChange={setCounterValue}
          maxlength={100}
          counter={true}
          hint="Shows character count with maximum limit"
        />
        {counterValue && (
          <div className="textarea-info">
            <strong>Current value:</strong> {counterValue} ({counterValue.length}/100)
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>Validation Rules</h2>
        <p>Textarea with validation rules and error handling.</p>
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
        {validationValue && (
          <div className="textarea-info">
            <strong>Current value:</strong> {validationValue}
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>No Resize</h2>
        <p>Textarea with resize functionality disabled.</p>
        <BasicTextarea
          label="No Resize Textarea"
          placeholder="This textarea cannot be resized..."
          value={basicValue}
          onChange={setBasicValue}
          noResize={true}
          rows={4}
          hint="This textarea has resize disabled"
        />
      </div>

      <div className="demo-section">
        <h2>Different States</h2>
        <p>Textarea in various states - disabled, loading, and readonly.</p>
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

      <div className="demo-section">
        <h2>Custom Icons</h2>
        <p>Textarea with custom prepend and append icons.</p>
        <BasicTextarea
          label="Custom Icons"
          placeholder="Textarea with custom icons..."
          value={customIconsValue}
          onChange={setCustomIconsValue}
          prepend={true}
          append={true}
          prependIcon={customPrependIcon}
          appendIcon={customAppendIcon}
          hint="This textarea has custom icons"
        />
        {customIconsValue && (
          <div className="textarea-info">
            <strong>Current value:</strong> {customIconsValue}
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>All Features Combined</h2>
        <p>Textarea demonstrating all available features together.</p>
        <BasicTextarea
          label="Feature-Rich Textarea"
          placeholder="Try all features..."
          value={basicValue}
          onChange={setBasicValue}
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
        {basicValue && (
          <div className="textarea-info">
            <strong>Current value:</strong> {basicValue} ({basicValue.length}/200)
          </div>
        )}
      </div>
    </div>
  );
};

export default TextareaDemo;
