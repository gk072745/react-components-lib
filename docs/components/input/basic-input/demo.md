import {
  BasicInputDemo,
  InputTypesDemo,
  InputStatesDemo,
  ValidationDemo,
  IconsDemo,
  LoadingDemo,
  CustomIconsDemo,
  AsyncValidationDemo,
  InputFeaturesDemo,
  CustomIconsWithLoadingDemo
} from "@site/src/demoPages/InputDemo.jsx";

# Demo

This page demonstrates the Basic Input component with various configurations and examples.

## Demo 1: Basic Input

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const BasicInputDemo = () => {
  const [basicValue, setBasicValue] = useState("");

  const handleBasicChange = (newValue) => {
    setBasicValue(newValue);
  };

  return (
    <BasicInput
      value={basicValue}
      onChange={handleBasicChange}
      label="Basic Input"
      placeholder="Enter text..."
    />
  );
};
```

### Interactive Demo

<BasicInputDemo />

## Demo 2: Input Types

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const InputTypesDemo = () => {
  const [textValue, setTextValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  return (
    <div>
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
  );
};
```

### Interactive Demo

<InputTypesDemo />

## Demo 3: Input States

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const InputStatesDemo = () => {
  const [normalValue, setNormalValue] = useState("Normal input");
  const [disabledValue] = useState("This is disabled");
  const [readonlyValue] = useState("This is readonly");

  return (
    <div>
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
  );
};
```

### Interactive Demo

<InputStatesDemo />

## Demo 4: Validation

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const ValidationDemo = () => {
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
    <div>
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
  );
};
```

### Interactive Demo

<ValidationDemo />

## Demo 5: Icons and Prepend/Append

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const IconsDemo = () => {
  const [prependValue, setPrependValue] = useState("");
  const [appendValue, setAppendValue] = useState("");
  const [bothValue, setBothValue] = useState("");

  return (
    <div>
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
  );
};
```

### Interactive Demo

<IconsDemo />

## Demo 6: Loading States

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const LoadingDemo = () => {
  const [loadingValue, setLoadingValue] = useState("");
  const [passwordLoadingValue, setPasswordLoadingValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);

  return (
    <div>
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
  );
};
```

### Interactive Demo

<LoadingDemo />

## Demo 7: Custom SVG Icons

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const CustomIconsDemo = () => {
  const [customPrependValue, setCustomPrependValue] = useState("");
  const [customAppendValue, setCustomAppendValue] = useState("");
  const [customInnerValue, setCustomInnerValue] = useState("");

  const customPrependIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div>
      <BasicInput
        value={customPrependValue}
        onChange={setCustomPrependValue}
        label="Custom Prepend Icon"
        placeholder="With custom prepend icon"
        prepend={true}
        prependIcon={customPrependIcon}
      />
      <BasicInput
        value={customAppendValue}
        onChange={setCustomAppendValue}
        label="Custom Append Icon"
        placeholder="With custom append icon"
        append={true}
        appendIcon={customPrependIcon}
      />
      <BasicInput
        value={customInnerValue}
        onChange={setCustomInnerValue}
        label="Custom Inner Icon"
        placeholder="With custom inner icon"
        appendInner={true}
        appendInnerIcon={customPrependIcon}
      />
    </div>
  );
};
```

### Interactive Demo

<CustomIconsDemo />

## Demo 8: Async Validation

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const AsyncValidationDemo = () => {
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
  );
};
```

### Interactive Demo

<AsyncValidationDemo />

## Demo 9: Additional Features

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const InputFeaturesDemo = () => {
  const [hintValue, setHintValue] = useState("");
  const [clearableValue, setClearableValue] = useState("");
  const [persistentValue, setPersistentValue] = useState("");

  return (
    <div>
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
  );
};
```

### Interactive Demo

<InputFeaturesDemo />

## Demo 10: Custom Icons with Loading

### Code Example

```jsx
import BasicInput from "@/src/components/sharedComponents/BasicInput";
import { useState } from "react";

const CustomIconsWithLoadingDemo = () => {
  const [customAppendValue, setCustomAppendValue] = useState("");
  const [customInnerValue, setCustomInnerValue] = useState("");
  const [isCustomAppendLoading, setIsCustomAppendLoading] = useState(false);
  const [isCustomInnerLoading, setIsCustomInnerLoading] = useState(false);

  const customIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div>
      <BasicInput
        value={customAppendValue}
        onChange={setCustomAppendValue}
        label="Custom Append with Loader"
        placeholder="Custom append icon + loading state"
        append={true}
        loading={isCustomAppendLoading}
        appendIcon={customIcon}
      />
      <BasicInput
        value={customInnerValue}
        onChange={setCustomInnerValue}
        label="Custom Inner with Loader"
        placeholder="Custom inner icon + loading state"
        appendInner={true}
        loading={isCustomInnerLoading}
        appendInnerIcon={customIcon}
      />
    </div>
  );
};
```

### Interactive Demo

<CustomIconsWithLoadingDemo />
