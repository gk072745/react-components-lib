import React, { useState } from "react";
import BasicInput from "../components/sharedComponents/BasicInput";
import "./inputDemo.scss";

// Demo 1: Basic Input
export const BasicInputDemo = () => {
  const [basicValue, setBasicValue] = useState("");

  const handleBasicChange = (newValue) => {
    console.log("Basic input changed:", newValue);
    setBasicValue(newValue);
  };

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Input</h3>
        <div className="demo-content">
          <div className="input-group">
            <BasicInput
              value={basicValue}
              onChange={handleBasicChange}
              label="Basic Input"
              placeholder="Enter text..."
            />
          </div>
          <div className="demo-state">
            <strong>Current Value:</strong> {basicValue || "Empty"}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Input Types
export const InputTypesDemo = () => {
  const [textValue, setTextValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Input Types</h3>
        <div className="demo-content">
          <div className="input-grid">
            <BasicInput
              value={textValue}
              onChange={setTextValue}
              label="Text Input"
              type="text"
              placeholder="Enter text"
            />
            <BasicInput
              value={emailValue}
              onChange={setEmailValue}
              label="Email Input"
              type="email"
              placeholder="Enter email"
            />
            <BasicInput
              value={passwordValue}
              onChange={setPasswordValue}
              label="Password Input"
              type="password"
              placeholder="Enter password"
              appendInner={true}
            />
            <BasicInput
              value={numberValue}
              onChange={setNumberValue}
              label="Number Input"
              type="number"
              placeholder="Enter number"
            />
            <BasicInput
              value={urlValue}
              onChange={setUrlValue}
              label="URL Input"
              type="url"
              placeholder="https://example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Input States
export const InputStatesDemo = () => {
  const [normalValue, setNormalValue] = useState("Normal input");
  const [disabledValue] = useState("This is disabled");
  const [readonlyValue] = useState("This is readonly");

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Input States</h3>
        <div className="demo-content">
          <div className="input-grid">
            <BasicInput
              value={normalValue}
              onChange={setNormalValue}
              label="Normal Input"
              placeholder="This is editable"
            />
            <BasicInput
              value={disabledValue}
              label="Disabled Input"
              disabled={true}
            />
            <BasicInput
              value={readonlyValue}
              label="Readonly Input"
              readonly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Validation
export const ValidationDemo = () => {
  const [emailValue, setEmailValue] = useState("");
  const [requiredValue, setRequiredValue] = useState("");

  const emailRules = [
    { rule: "required", message: "Email is required" },
    { rule: "email", message: "Email must be valid" },
  ];

  const requiredRules = [
    { rule: "required", message: "This field is required" },
  ];

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Input Validation</h3>
        <div className="demo-content">
          <div className="input-grid">
            <BasicInput
              value={emailValue}
              onChange={setEmailValue}
              label="Email with Validation"
              type="email"
              placeholder="Enter email"
              rules={emailRules}
              hint="Please enter a valid email address"
            />
            <BasicInput
              value={requiredValue}
              onChange={setRequiredValue}
              label="Required Field"
              placeholder="This field is required"
              rules={requiredRules}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Icons and Prepend/Append
export const IconsDemo = () => {
  const [prependValue, setPrependValue] = useState("");
  const [appendValue, setAppendValue] = useState("");
  const [bothValue, setBothValue] = useState("");

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Icons and Prepend/Append</h3>
        <div className="demo-content">
          <div className="input-grid">
            <BasicInput
              value={prependValue}
              onChange={setPrependValue}
              label="With Prepend Icon"
              placeholder="Search..."
              prepend={true}
              onPrependClick={() => console.log("Prepend clicked")}
            />
            <BasicInput
              value={appendValue}
              onChange={setAppendValue}
              label="With Append Icon"
              placeholder="Clearable input"
              append={true}
              clearable={true}
              onAppendClick={() => console.log("Append clicked")}
            />
            <BasicInput
              value={bothValue}
              onChange={setBothValue}
              label="With Both Icons"
              placeholder="Full featured"
              prepend={true}
              append={true}
              clearable={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Loading States
export const LoadingDemo = () => {
  const [loadingValue, setLoadingValue] = useState("");
  const [passwordLoadingValue, setPasswordLoadingValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const togglePasswordLoading = () => {
    setIsPasswordLoading(!isPasswordLoading);
  };

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Loading States</h3>
        <div className="demo-content">
          <div className="input-grid">
            <BasicInput
              value={loadingValue}
              onChange={setLoadingValue}
              label="Loading Input"
              placeholder="Type while loading"
              loading={isLoading}
              appendInner={true}
            />
            <BasicInput
              value={passwordLoadingValue}
              onChange={setPasswordLoadingValue}
              label="Password with Loading"
              type="password"
              placeholder="Enter password"
              loading={isPasswordLoading}
              appendInner={true}
            />
          </div>
          <div className="demo-controls">
            <button onClick={toggleLoading} className="demo-button">
              {isLoading ? "Stop" : "Start"} Loading
            </button>
            <button onClick={togglePasswordLoading} className="demo-button">
              {isPasswordLoading ? "Stop" : "Start"} Password Loading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Custom SVG Icons
export const CustomIconsDemo = () => {
  const [customPrependValue, setCustomPrependValue] = useState("");
  const [customAppendValue, setCustomAppendValue] = useState("");
  const [customInnerValue, setCustomInnerValue] = useState("");

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom SVG Icons</h3>
        <div className="demo-content">
          <div className="input-grid">
            <BasicInput
              value={customPrependValue}
              onChange={setCustomPrependValue}
              label="Custom Prepend Icon"
              placeholder="With custom prepend icon"
              prepend={true}
              prependIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <BasicInput
              value={customAppendValue}
              onChange={setCustomAppendValue}
              label="Custom Append Icon"
              placeholder="With custom append icon"
              append={true}
              appendIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <BasicInput
              value={customInnerValue}
              onChange={setCustomInnerValue}
              label="Custom Inner Icon"
              placeholder="With custom inner icon"
              appendInner={true}
              appendInnerIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"
                    fill="#8B5CF6"
                  />
                  <path
                    d="M21 9V7L15 4L12 2L9 4L3 7V9L12 13L21 9Z"
                    fill="#8B5CF6"
                  />
                  <path
                    d="M12 13L9 11L3 8V10L9 13L12 15L15 13L21 10V8L15 11L12 13Z"
                    fill="#8B5CF6"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: Async Validation
export const AsyncValidationDemo = () => {
  const [asyncEmail, setAsyncEmail] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const asyncEmailValidation = async (value) => {
    setIsValidating(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate validation logic
    const isValid = value.includes("@") && value.includes(".");

    setIsValidating(false);

    return {
      valid: isValid,
      message: isValid ? "" : "Please enter a valid email address",
    };
  };

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Async Validation</h3>
        <div className="demo-content">
          <div className="input-group">
            <BasicInput
              value={asyncEmail}
              onChange={setAsyncEmail}
              label="Async Email Validation"
              placeholder="Enter email for async validation"
              type="email"
              asyncValidation={asyncEmailValidation}
              loading={isValidating}
              appendInner={true}
            />
          </div>
          <div className="demo-state">
            <strong>React 19 Features:</strong>
            <ul>
              <li>
                ✅ <strong>Async Validation:</strong> Server-side validation
                with loading state
              </li>
              <li>
                ✅ <strong>Modern Ref Handling:</strong> No forwardRef needed
              </li>
              <li>
                ✅ <strong>Better Performance:</strong> Optimized re-renders
              </li>
              <li>
                ✅ <strong>Enhanced UX:</strong> Real-time validation feedback
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 9: Additional Features
export const InputFeaturesDemo = () => {
  const [hintValue, setHintValue] = useState("");
  const [clearableValue, setClearableValue] = useState("");
  const [persistentValue, setPersistentValue] = useState("");

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Additional Features</h3>
        <div className="demo-content">
          <div className="input-grid">
            <BasicInput
              value={hintValue}
              onChange={setHintValue}
              label="Input with Hint"
              placeholder="Type something"
              hint="This is a helpful hint"
            />
            <BasicInput
              value={clearableValue}
              onChange={setClearableValue}
              label="Clearable Input"
              placeholder="Type to see clear button"
              clearable={true}
              onClearClick={() => console.log("Clear clicked")}
            />
            <BasicInput
              value={persistentValue}
              onChange={setPersistentValue}
              label="Persistent Details"
              placeholder="Details always visible"
              hint="This hint is always visible"
              persistentDetails={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 10: Custom Icons with Loading
export const CustomIconsWithLoadingDemo = () => {
  const [customAppendValue, setCustomAppendValue] = useState("");
  const [customInnerValue, setCustomInnerValue] = useState("");
  const [isCustomAppendLoading, setIsCustomAppendLoading] = useState(false);
  const [isCustomInnerLoading, setIsCustomInnerLoading] = useState(false);

  const toggleCustomAppendLoading = () => {
    setIsCustomAppendLoading(!isCustomAppendLoading);
  };

  const toggleCustomInnerLoading = () => {
    setIsCustomInnerLoading(!isCustomInnerLoading);
  };

  return (
    <div className="input-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Icons with Loading</h3>
        <div className="demo-content">
          <div className="input-grid">
            <BasicInput
              value={customAppendValue}
              onChange={setCustomAppendValue}
              label="Custom Append with Loader"
              placeholder="Custom append icon + loading state"
              append={true}
              loading={isCustomAppendLoading}
              appendIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <BasicInput
              value={customInnerValue}
              onChange={setCustomInnerValue}
              label="Custom Inner with Loader"
              placeholder="Custom inner icon + loading state"
              appendInner={true}
              loading={isCustomInnerLoading}
              appendInnerIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"
                    fill="#F59E0B"
                  />
                  <path
                    d="M21 9V7L15 4L12 2L9 4L3 7V9L12 13L21 9Z"
                    fill="#F59E0B"
                  />
                  <path
                    d="M12 13L9 11L3 8V10L9 13L12 15L15 13L21 10V8L15 11L12 13Z"
                    fill="#F59E0B"
                  />
                </svg>
              }
            />
          </div>
          <div className="demo-controls">
            <button onClick={toggleCustomAppendLoading} className="demo-button">
              {isCustomAppendLoading ? "Stop" : "Start"} Custom Append Loading
            </button>
            <button onClick={toggleCustomInnerLoading} className="demo-button">
              {isCustomInnerLoading ? "Stop" : "Start"} Custom Inner Loading
            </button>
          </div>
          <div className="demo-state">
            <strong>Custom Icons + Loading Features:</strong>
            <ul>
              <li>
                ✅ <strong>Custom Append with Loader:</strong> Custom icon when
                not loading, loader when loading
              </li>
              <li>
                ✅ <strong>Custom Inner with Loader:</strong> Custom icon when
                not loading, loader + custom icon when loading
              </li>
              <li>
                ✅ <strong>Flexible Combinations:</strong> Mix custom icons with
                loading states
              </li>
              <li>
                ✅ <strong>Visual Feedback:</strong> Clear indication of loading
                vs normal states
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export for backward compatibility
const InputDemo = () => {
  return (
    <div className="input-demo-container">
      <BasicInputDemo />
      <InputTypesDemo />
      <InputStatesDemo />
      <ValidationDemo />
      <IconsDemo />
      <LoadingDemo />
      <CustomIconsDemo />
      <AsyncValidationDemo />
      <InputFeaturesDemo />
      <CustomIconsWithLoadingDemo />
    </div>
  );
};

export default InputDemo;
