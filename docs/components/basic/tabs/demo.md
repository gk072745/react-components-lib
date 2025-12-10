import {
  BasicSingleDemo,
  MultipleSelectionDemo,
  BottomLineStyleDemo,
  SinglePackedDemo,
  DarkGoldVariantDemo,
  DarkGoldBottomLineDemo,
  IconsSlotsDemo,
  SinglePackedDarkGoldDemo
} from "@site/src/demoPages/TabsDemo.jsx";

# Demo

This page demonstrates the Tabs component with various configurations and examples.

## Demo 1: Basic Single Selection

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";

const BasicSingleExample = () => {
  const items = useMemo(
    () => [
      { value: "home", name: "Home" },
      { value: "profile", name: "Profile" },
      { value: "settings", name: "Settings" },
      { value: "help", name: "Help" },
    ],
    []
  );
  const [selected, setSelected] = useState("home");

  return (
    <BasicTabs
      tabItems={items}
      selected={selected}
      onItemClicked={(item) => setSelected(item.value)}
    />
  );
};
```

### Interactive Demo

<BasicSingleDemo />

## Demo 2: Multiple Selection

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";

const MultipleSelectionExample = () => {
  const items = useMemo(
    () => [
      { value: "home", name: "Home" },
      { value: "profile", name: "Profile" },
      { value: "settings", name: "Settings" },
      { value: "help", name: "Help" },
    ],
    []
  );
  const [selected, setSelected] = useState(["home"]);

  return (
    <BasicTabs
      tabItems={items}
      multiple={true}
      selected={selected}
      onItemClicked={(item) => {
        setSelected((prev) => {
          const isSelected = prev.includes(item.value);
          return isSelected
            ? prev.filter((v) => v !== item.value)
            : [...prev, item.value];
        });
      }}
    />
  );
};
```

### Interactive Demo

<MultipleSelectionDemo />

## Demo 3: Bottom Line Style

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";

const BottomLineStyleExample = () => {
  const items = useMemo(
    () => [
      { value: "home", name: "Home" },
      { value: "profile", name: "Profile" },
      { value: "settings", name: "Settings" },
      { value: "help", name: "Help" },
    ],
    []
  );
  const [selected, setSelected] = useState("profile");

  return (
    <BasicTabs
      tabItems={items}
      selected={selected}
      bottomLineStyle={true}
      onItemClicked={(item) => setSelected(item.value)}
    />
  );
};
```

### Interactive Demo

<BottomLineStyleDemo />

## Demo 4: Single Packed Variant

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";

const SinglePackedExample = () => {
  const items = useMemo(
    () => [
      { value: "home", name: "Home" },
      { value: "profile", name: "Profile" },
      { value: "settings", name: "Settings" },
      { value: "help", name: "Help" },
    ],
    []
  );
  const [selected, setSelected] = useState("settings");

  return (
    <BasicTabs
      tabItems={items}
      selected={selected}
      singlePacked={true}
      onItemClicked={(item) => setSelected(item.value)}
    />
  );
};
```

### Interactive Demo

<SinglePackedDemo />

## Demo 5: Dark Gold Variant

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";

const DarkGoldVariantExample = () => {
  const items = useMemo(
    () => [
      { value: "home", name: "Home" },
      { value: "profile", name: "Profile" },
      { value: "settings", name: "Settings" },
      { value: "help", name: "Help" },
    ],
    []
  );
  const [selected, setSelected] = useState("home");

  return (
    <BasicTabs
      tabItems={items}
      selected={selected}
      variant="dark-gold"
      onItemClicked={(item) => setSelected(item.value)}
    />
  );
};
```

### Interactive Demo

<DarkGoldVariantDemo />

## Demo 6: Dark Gold Bottom Line

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";

const DarkGoldBottomLineExample = () => {
  const items = useMemo(
    () => [
      { value: "home", name: "Home" },
      { value: "profile", name: "Profile" },
      { value: "settings", name: "Settings" },
      { value: "help", name: "Help" },
    ],
    []
  );
  const [selected, setSelected] = useState("home");

  return (
    <BasicTabs
      tabItems={items}
      selected={selected}
      bottomLineStyle={true}
      variant="dark-gold"
      onItemClicked={(item) => setSelected(item.value)}
    />
  );
};
```

### Interactive Demo

<DarkGoldBottomLineDemo />

## Demo 7: Icons and Slots

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";

const IconsSlotsExample = () => {
  const items = useMemo(
    () => [
      {
        value: "grid",
        name: "Grid",
        icon: `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1" y="1" width="6" height="6" fill="#666" />
          <rect x="9" y="1" width="6" height="6" fill="#888" />
          <rect x="1" y="9" width="6" height="6" fill="#888" />
          <rect x="9" y="9" width="6" height="6" fill="#666" />
        </svg>`,
      },
      {
        value: "list",
        name: "List",
        icon: `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="3" cy="4" r="1.5" fill="#666" />
          <rect x="6" y="3" width="8" height="2" fill="#888" />
          <circle cx="3" cy="8" r="1.5" fill="#666" />
          <rect x="6" y="7" width="8" height="2" fill="#888" />
          <circle cx="3" cy="12" r="1.5" fill="#666" />
          <rect x="6" y="11" width="8" height="2" fill="#888" />
        </svg>`,
      },
      {
        value: "table",
        name: "Table",
        icon: `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1" y="3" width="14" height="10" stroke="#666" fill="none" />
          <line x1="1" y1="7" x2="15" y2="7" stroke="#888" />
          <line x1="6" y1="3" x2="6" y2="13" stroke="#888" />
          <line x1="11" y1="3" x2="11" y2="13" stroke="#888" />
        </svg>`,
      },
    ],
    []
  );
  const [selected, setSelected] = useState("grid");

  return (
    <BasicTabs
      tabItems={items}
      selected={selected}
      onItemClicked={(item) => setSelected(item.value)}
    >
      {({ name, item }) => {
        if (name === "prepend" && item.value === "list") {
          return <span className="chip">NEW</span>;
        }
        return null;
      }}
    </BasicTabs>
  );
};
```

### Interactive Demo

<IconsSlotsDemo />

## Demo 8: Single Packed Dark Gold

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";

const SinglePackedDarkGoldExample = () => {
  const items = useMemo(
    () => [
      { value: "home", name: "Home" },
      { value: "profile", name: "Profile" },
      { value: "settings", name: "Settings" },
      { value: "help", name: "Help" },
    ],
    []
  );
  const [selected, setSelected] = useState("settings");

  return (
    <BasicTabs
      tabItems={items}
      selected={selected}
      singlePacked={true}
      variant="dark-gold"
      onItemClicked={(item) => setSelected(item.value)}
    />
  );
};
```

### Interactive Demo

<SinglePackedDarkGoldDemo />
