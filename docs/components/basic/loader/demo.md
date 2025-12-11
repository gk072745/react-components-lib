import {
  BasicUsageDemo,
  VariantColorsDemo,
  SizeVariantsDemo,
  WidthVariantsDemo,
  PositioningVariantsDemo,
  CustomImageDemo,
  CustomChildrenDemo,
  AllVariantsDemo,
} from "@site/src/demoPages/LoaderDemo.jsx";

# Demo

This page demonstrates the Loader component with various configurations and examples.

## Demo 1: Basic Usage

### Code Example

```jsx
import React from "react";
import Loader from "../components/sharedComponents/Loader";

const BasicUsageExample = () => {
  return (
    <div style={{ position: "relative", height: 200, border: "1px solid #ddd", padding: 20 }}>
      <Loader />
    </div>
  );
};
```

### Interactive Demo

<BasicUsageDemo />

## Demo 2: Variant Colors

### Code Example

```jsx
import React from "react";
import Loader from "../components/sharedComponents/Loader";

const VariantColorsExample = () => {
  return (
    <div>
      <Loader variant="default" />
      <Loader variant="primary" />
      <Loader variant="success" />
      <Loader variant="warning" />
      <Loader variant="danger" />
      <Loader variant="info" />
    </div>
  );
};
```

### Interactive Demo

<VariantColorsDemo />

## Demo 3: Size Variants

### Code Example

```jsx
import React from "react";
import Loader from "../components/sharedComponents/Loader";

const SizeVariantsExample = () => {
  return (
    <div>
      <Loader size={20} />
      <Loader size={40} />
      <Loader size={60} />
      <Loader size={80} />
    </div>
  );
};
```

### Interactive Demo

<SizeVariantsDemo />

## Demo 4: Stroke Width Variants

### Code Example

```jsx
import React from "react";
import Loader from "../components/sharedComponents/Loader";

const WidthVariantsExample = () => {
  return (
    <div>
      <Loader size={50} width={2} />
      <Loader size={50} width={4} />
      <Loader size={50} width={6} />
      <Loader size={50} width={8} />
    </div>
  );
};
```

### Interactive Demo

<WidthVariantsDemo />

## Demo 5: Positioning Variants

### Code Example

```jsx
import React, { useState, useEffect } from "react";
import Loader from "../components/sharedComponents/Loader";

const PositioningVariantsExample = () => {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    if (showFull) {
      const timer = setTimeout(() => setShowFull(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showFull]);

  return (
    <div>
      <div style={{ position: "relative", height: 150, border: "1px solid #ddd", padding: 20 }}>
        <Loader isLocalLoader={true} />
        <p>Content below the loader</p>
      </div>
      <button onClick={() => setShowFull(true)}>Show Full Screen Loader (3s)</button>
      {showFull && <Loader isLocalLoader={false} variant="primary" size={60} />}
    </div>
  );
};
```

### Interactive Demo

<PositioningVariantsDemo />

## Demo 6: Custom Image Loader

### Code Example

```jsx
import React from "react";
import Loader from "../components/sharedComponents/Loader";

const CustomImageExample = () => {
  return (
    <div style={{ position: "relative", height: 150, border: "1px solid #ddd", padding: 20 }}>
      <Loader
        src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif"
        size={60}
        isLocalLoader={true}
      />
    </div>
  );
};
```

### Interactive Demo

<CustomImageDemo />

## Demo 7: Custom Children

### Code Example

```jsx
import React from "react";
import Loader from "../components/sharedComponents/Loader";

const CustomChildrenExample = () => {
  return (
    <div style={{ position: "relative", height: 150, border: "1px solid #ddd", padding: 20 }}>
      <Loader isLocalLoader={true}>
        <div style={{ textAlign: "center", color: "#007bff" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "4px solid #e1e5e9",
              borderTop: "4px solid #007bff",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto",
            }}
          />
          <p>Loading...</p>
        </div>
      </Loader>
    </div>
  );
};
```

### Interactive Demo

<CustomChildrenDemo />

## Demo 8: All Variants Combined

### Code Example

```jsx
import React from "react";
import Loader from "../components/sharedComponents/Loader";

const AllVariantsExample = () => {
  return (
    <div>
      <Loader size={30} width={2} variant="primary" />
      <Loader size={80} width={8} variant="success" />
      <Loader size={50} width={6} variant="danger" />
    </div>
  );
};
```

### Interactive Demo

<AllVariantsDemo />
