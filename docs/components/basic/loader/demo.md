import {
  BasicUsageExample,
  SizeVariantsExample,
  WidthVariantsExample,
  ColorVariantsExample,
  PositioningVariantsExample,
  CustomImageExample,
  BackgroundColorVariantsExample,
  RealWorldExamples
} from "@site/src/demoPages/LoaderDemo.jsx";

# Demo

This page alternates code examples with matching interactive demos.

## Basic Usage

### Code Example

```jsx
import Loader from "../components/sharedComponents/Loader";

export default function BasicUsageExample() {
  return (
    <div>
      <div style={{ position: "relative", height: 200, border: "1px solid #ddd", padding: 20 }}>
        <Loader />
      </div>
      <p>Default loader with local positioning</p>
    </div>
  );
}
```

### Interactive Demo

<BasicUsageExample />

## Size Variants

### Code Example

```jsx
import React, { useState } from "react";
import Loader from "../components/sharedComponents/Loader";

export default function SizeVariantsExample() {
  const [customSize, setCustomSize] = useState(40);
  return (
    <div>
      <Loader size={20} />
      <Loader size={40} />
      <Loader size={60} />
      <Loader size={80} />
      <label>
        Size:
        <input type="range" min="20" max="120" value={customSize} onChange={(e) => setCustomSize(Number(e.target.value))} />
      </label>
      <Loader size={customSize} />
    </div>
  );
}
```

### Interactive Demo

<SizeVariantsExample />

## Stroke Width Variants

### Code Example

```jsx
import React, { useState } from "react";
import Loader from "../components/sharedComponents/Loader";

export default function WidthVariantsExample() {
  const [customWidth, setCustomWidth] = useState(4);
  return (
    <div>
      <Loader size={50} width={2} />
      <Loader size={50} width={4} />
      <Loader size={50} width={6} />
      <Loader size={50} width={8} />
      <label>
        Width:
        <input type="range" min="1" max="12" value={customWidth} onChange={(e) => setCustomWidth(Number(e.target.value))} />
      </label>
      <Loader size={50} width={customWidth} />
    </div>
  );
}
```

### Interactive Demo

<WidthVariantsExample />

## Color Variants

### Code Example

```jsx
import React, { useState } from "react";
import Loader from "../components/sharedComponents/Loader";

export default function ColorVariantsExample() {
  const [fill, setFill] = useState("#000");
  const [empty, setEmpty] = useState("#e0e0e0");
  return (
    <div>
      <Loader fillColor="#000" emptyColor="#e0e0e0" />
      <Loader fillColor="#007bff" emptyColor="#e3f2fd" />
      <Loader fillColor="#28a745" emptyColor="#e8f5e8" />
      <Loader fillColor="#dc3545" emptyColor="#f8e8e8" />
      <input type="color" value={fill} onChange={(e) => setFill(e.target.value)} />
      <input type="color" value={empty} onChange={(e) => setEmpty(e.target.value)} />
      <Loader size={50} fillColor={fill} emptyColor={empty} />
    </div>
  );
}
```

### Interactive Demo

<ColorVariantsExample />

## Positioning Variants

### Code Example

```jsx
import React, { useState, useEffect } from "react";
import Loader from "../components/sharedComponents/Loader";

export default function PositioningVariantsExample() {
  const [showFull, setShowFull] = useState(false);
  useEffect(() => {
    if (showFull) {
      const t = setTimeout(() => setShowFull(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showFull]);
  return (
    <div>
      <div style={{ position: "relative", height: 150, border: "1px solid #ddd", padding: 20 }}>
        <Loader isLocalLoader={true} />
        <p>Content below the loader</p>
      </div>
      <button onClick={() => setShowFull(true)}>Show Full Screen Loader (3s)</button>
      {showFull && (
        <Loader isLocalLoader={false} bgColor="rgba(0,0,0,0.7)" fillColor="#fff" emptyColor="#404040" size={60} />
      )}
    </div>
  );
}
```

### Interactive Demo

<PositioningVariantsExample />

## Custom Image Loader

### Code Example

```jsx
import Loader from "../components/sharedComponents/Loader";

export default function CustomImageExample() {
  return (
    <div style={{ position: "relative", height: 150, border: "1px solid #ddd", padding: 20 }}>
      <Loader src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif" size={60} isLocalLoader={true} />
    </div>
  );
}
```

### Interactive Demo

<CustomImageExample />

## Background Color Variants

### Code Example

```jsx
import React, { useState } from "react";
import Loader from "../components/sharedComponents/Loader";

export default function BackgroundColorVariantsExample() {
  const [bg, setBg] = useState("rgba(255, 255, 255, 0.75)");
  return (
    <div>
      <Loader bgColor="transparent" />
      <Loader bgColor="rgba(255, 255, 255, 0.9)" />
      <Loader bgColor="rgba(0, 0, 0, 0.7)" fillColor="#fff" emptyColor="#404040" />
      <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} />
      <Loader bgColor={bg} />
    </div>
  );
}
```

### Interactive Demo

<BackgroundColorVariantsExample />

## Real-world Examples

### Code Example

```jsx
import React, { useState, useEffect } from "react";
import Loader from "../components/sharedComponents/Loader";

export default function RealWorldExamples() {
  const [loading, setLoading] = useState(false);
  const [full, setFull] = useState(false);
  useEffect(() => {
    if (full) {
      const t = setTimeout(() => setFull(false), 3000);
      return () => clearTimeout(t);
    }
  }, [full]);
  return (
    <div>
      <button onClick={() => setLoading((v) => !v)}>
        {loading ? "Loading..." : "Submit"}
      </button>
      {loading && <Loader size={16} width={2} />}

      <div style={{ position: "relative", height: 200, border: "1px solid #ddd", padding: 20, background: "#f8f9fa" }}>
        {loading ? (
          <Loader size={50} fillColor="#007bff" />
        ) : (
          <div>
            <h4>Card Content</h4>
            <p>This is the loaded content of the card.</p>
            <button onClick={() => setLoading(true)}>Load Content</button>
          </div>
        )}
      </div>

      <button onClick={() => setFull(true)}>Simulate Page Load</button>
      {full && (
        <Loader isLocalLoader={false} bgColor="rgba(0, 0, 0, 0.7)" fillColor="#fff" emptyColor="#404040" size={60} />
      )}
    </div>
  );
}
```

### Interactive Demo

<RealWorldExamples />


