import {
  BasicUsageDemo,
  CustomStylingDemo,
  ControlledStateDemo,
  CustomClassNameDemo,
  NavigationExampleDemo,
  OverlayInteractionDemo,
  PopupIntegrationDemo,
  AllFeaturesDemo,
} from "@site/src/demoPages/SidePanelDemo.jsx";

# Demo

This page demonstrates the Side Panel component with various configurations and examples.

## Demo 1: Basic Usage

### Code Example

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const BasicUsageExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Side Panel</button>
      <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};
```

### Interactive Demo

<BasicUsageDemo />

## Demo 2: Custom Styling

### Code Example

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const CustomStylingExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Custom Styled Panel</button>
      <SidePanel
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        style={{
          width: "350px",
          backgroundColor: "#f8f9fa",
        }}
      />
    </>
  );
};
```

### Interactive Demo

<CustomStylingDemo />

## Demo 3: Controlled State

### Code Example

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const ControlledStateExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Panel</button>
      <button onClick={() => setIsOpen(false)}>Close Panel</button>
      <p>Current state: {isOpen ? "Open" : "Closed"}</p>
      <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};
```

### Interactive Demo

<ControlledStateDemo />

## Demo 4: Custom ClassName

### Code Example

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const CustomClassNameExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Panel with Custom Class</button>
      <SidePanel
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        className="custom-side-panel"
      />
    </>
  );
};
```

### Interactive Demo

<CustomClassNameDemo />

## Demo 5: Navigation Example

### Code Example

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const NavigationExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Navigation Panel</button>
      <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};
```

### Interactive Demo

<NavigationExampleDemo />

## Demo 6: Overlay Interaction

### Code Example

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const OverlayInteractionExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Panel</button>
      <p>Click the overlay to close the panel</p>
      <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};
```

### Interactive Demo

<OverlayInteractionDemo />

## Demo 7: Popup Integration

### Code Example

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const PopupIntegrationExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Panel with Popup</button>
      <p>Open the panel and click "Popup Example" to see popup integration</p>
      <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};
```

### Interactive Demo

<PopupIntegrationDemo />

## Demo 8: All Features Combined

### Code Example

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const AllFeaturesExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Full Featured Panel</button>
      <SidePanel
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        className="featured-panel"
        style={{
          boxShadow: "4px 0 20px rgba(0, 0, 0, 0.15)",
        }}
      />
    </>
  );
};
```

### Interactive Demo

<AllFeaturesDemo />

