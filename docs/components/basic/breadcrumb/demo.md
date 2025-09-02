import {
BasicBreadcrumbDemo,
EcommerceBreadcrumbDemo,
FileSystemBreadcrumbDemo,
CustomSeparatorDemo,
SVGSeparatorDemo,
FunctionSeparatorDemo,
CustomGapDemo,
InteractiveBreadcrumbDemo,
CodeExamplesDemo
} from "@site/src/demoPages/BreadcrumbDemo.jsx";

# Demo

This page demonstrates the BasicBreadCrumb component with various configurations and common use cases.

## Demo 1: Basic Usage

### Code Example

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const BasicBreadcrumbExample = () => {
  const basicItems = [
    { label: "Home", to: "/" },
    { label: "Components", to: "/components" },
    { label: "Breadcrumb", to: null, disabled: true },
  ];

  return <BasicBreadCrumb items={basicItems} />;
};
```

### Interactive Demo

<BasicBreadcrumbDemo />

## Demo 2: E-commerce Navigation

### Code Example

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const EcommerceExample = () => {
  const ecommerceItems = [
    { label: "Home", to: "/" },
    { label: "Electronics", to: "/electronics" },
    { label: "Computers", to: "/electronics/computers" },
    { label: "Laptops", to: "/electronics/computers/laptops" },
    { label: "Gaming Laptops", to: null, disabled: true },
  ];

  return <BasicBreadCrumb items={ecommerceItems} separator="›" gap="0.75rem" />;
};
```

### Interactive Demo

<EcommerceBreadcrumbDemo />

## Demo 3: File System Navigation

### Code Example

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const FileSystemExample = () => {
  const fileSystemItems = [
    { label: "Root", to: "/" },
    { label: "Documents", to: "/documents" },
    { label: "Work", to: "/documents/work" },
    { label: "Projects", to: "/documents/work/projects" },
    { label: "React App", to: null, disabled: true },
  ];

  return <BasicBreadCrumb items={fileSystemItems} separator="→" gap="1rem" />;
};
```

### Interactive Demo

<FileSystemBreadcrumbDemo />

## Demo 4: Custom Separator

### Code Example

```jsx
import React, { useState } from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const CustomSeparatorExample = () => {
  const [customSeparator, setCustomSeparator] = useState("›");
  const items = [
    { label: "Start", to: "/" },
    { label: "Middle", to: "/middle" },
    { label: "End", to: null, disabled: true },
  ];

  return (
    <div>
      <input
        value={customSeparator}
        onChange={(e) => setCustomSeparator(e.target.value)}
        placeholder="Enter separator"
      />
      <BasicBreadCrumb items={items} separator={customSeparator} gap="0.5rem" />
    </div>
  );
};
```

### Interactive Demo

<CustomSeparatorDemo />

## Demo 5: SVG Separators

### Code Example

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const SVGSeparatorExample = () => {
  const items = [
    { label: "Start", to: "/" },
    { label: "Middle", to: "/middle" },
    { label: "End", to: null, disabled: true },
  ];

  return (
    <div>
      <BasicBreadCrumb
        items={items}
        separator={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        }
        gap="0.5rem"
      />
    </div>
  );
};
```

### Interactive Demo

<SVGSeparatorDemo />

## Demo 6: Dynamic Separators

### Code Example

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const DynamicSeparatorExample = () => {
  const items = [
    { label: "Start", to: "/" },
    { label: "Middle", to: "/middle" },
    { label: "End", to: null, disabled: true },
  ];

  return (
    <div>
      <BasicBreadCrumb
        items={items}
        separator={() => (
          <span style={{ color: "#007bff", fontSize: "1.2rem" }}>→</span>
        )}
        gap="0.5rem"
      />
    </div>
  );
};
```

### Interactive Demo

<FunctionSeparatorDemo />

## Demo 7: Custom Gap

### Code Example

```jsx
import React, { useState } from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const CustomGapExample = () => {
  const [customGap, setCustomGap] = useState("0.5rem");
  const items = [
    { label: "Start", to: "/" },
    { label: "Middle", to: "/middle" },
    { label: "End", to: null, disabled: true },
  ];

  return (
    <div>
      <input
        value={customGap}
        onChange={(e) => setCustomGap(e.target.value)}
        placeholder="Enter gap value"
      />
      <BasicBreadCrumb items={items} separator="›" gap={customGap} />
    </div>
  );
};
```

### Interactive Demo

<CustomGapDemo />

## Demo 8: Interactive Example

### Code Example

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const InteractiveExample = () => {
  return (
    <BasicBreadCrumb
      items={[
        { label: "Home", to: "/" },
        { label: "Demo", to: "/demo" },
        { label: "Breadcrumb", to: "/demo/breadcrumb" },
        { label: "Current Page", to: null, disabled: true },
      ]}
      separator="›"
      gap="0.5rem"
    />
  );
};
```

### Interactive Demo

<InteractiveBreadcrumbDemo />

## Demo 9: Usage Examples

### Code Example

This demo shows various implementation patterns for the BasicBreadCrumb component.

### Interactive Demo

<CodeExamplesDemo />
