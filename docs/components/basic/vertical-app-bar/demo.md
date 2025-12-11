import {
  BasicUsageDemo,
  WithLogoDemo,
  CustomStylingDemo,
  WithNavigationItemsDemo,
  AdvancedFeaturesDemo,
  NestedItemsDemo,
  PositionVariantsDemo,
  AllFeaturesDemo,
} from "@site/src/demoPages/VerticalAppBarDemo.jsx";

# Demo

This page demonstrates the Vertical App Bar component with various configurations and examples.

## Demo 1: Basic Usage

### Code Example

```jsx
import React, { useState } from "react";
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const BasicUsageExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Navigation"
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? "20rem" : "0" }}>
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? "Unmount" : "Mount"} App Bar
        </button>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} App Bar
        </button>
      </div>
    </div>
  );
};
```

### Interactive Demo

<BasicUsageDemo />

## Demo 2: With Logo

### Code Example

```jsx
import React, { useState } from "react";
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const WithLogoExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const logoSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14l-5-4.87l6.91-1.01L12 2z"/></svg>';

  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="My App"
          logo={logoSvg}
          roundedLogo={true}
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? "20rem" : "0" }}>
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? "Unmount" : "Mount"} App Bar
        </button>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} App Bar
        </button>
      </div>
    </div>
  );
};
```

### Interactive Demo

<WithLogoDemo />

## Demo 3: Custom Styling

### Code Example

```jsx
import React, { useState } from "react";
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const CustomStylingExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Custom Style"
          style={{
            backgroundColor: "#34495e",
          }}
          width="250px"
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? "250px" : "0" }}>
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? "Unmount" : "Mount"} App Bar
        </button>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} App Bar
        </button>
      </div>
    </div>
  );
};
```

### Interactive Demo

<CustomStylingDemo />

## Demo 4: With Navigation Items

### Code Example

```jsx
import React, { useState } from "react";
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const WithNavigationItemsExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const logoSvg = '<svg>...</svg>';

  const navigationItems = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: '<svg>...</svg>',
    },
    {
      label: "Users",
      value: "users",
      icon: '<svg>...</svg>',
    },
  ];

  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Dashboard"
          logo={logoSvg}
          items={navigationItems}
          activeItem={active}
          onActiveItemChange={setActive}
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? "20rem" : "0" }}>
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? "Unmount" : "Mount"} App Bar
        </button>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} Navigation
        </button>
        <p>Active Item: {active || "none"}</p>
      </div>
    </div>
  );
};
```

### Interactive Demo

<WithNavigationItemsDemo />

## Demo 5: Advanced Features

### Code Example

```jsx
import React, { useState } from "react";
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const AdvancedFeaturesExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const logoSvg = '<svg>...</svg>';

  const nestedItems = [
    {
      label: "Content",
      value: "content",
      children: [
        { label: "Posts", value: "posts" },
        { label: "Pages", value: "pages" },
      ],
    },
  ];

  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Advanced"
          logo={logoSvg}
          items={nestedItems}
          persistIconsOnHide={true}
          expandOnHover={true}
          multiExpand={true}
          position="left"
          style={{
            backgroundColor: "#fff3e0",
          }}
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? "20rem" : "0" }}>
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? "Unmount" : "Mount"} App Bar
        </button>
        <button onClick={() => setOpen(!open)}>
          Toggle Advanced App Bar
        </button>
      </div>
    </div>
  );
};
```

### Interactive Demo

<AdvancedFeaturesDemo />

## Demo 6: Nested Items

### Code Example

```jsx
import React, { useState } from "react";
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const NestedItemsExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const logoSvg = '<svg>...</svg>';

  const nestedItemsDeep = [
    {
      label: "Management",
      value: "management",
      children: [
        {
          label: "Projects",
          value: "projects",
          children: [
            { label: "Roadmap", value: "roadmap" },
            {
              label: "Backlog",
              value: "backlog",
              children: [
                { label: "Bugs", value: "bugs" },
                { label: "Features", value: "features" },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Nested Navigation"
          logo={logoSvg}
          items={nestedItemsDeep}
          activeItem={active}
          onActiveItemChange={setActive}
          showChevron={true}
          multiExpand={false}
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? "20rem" : "0" }}>
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? "Unmount" : "Mount"} App Bar
        </button>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} Nested
        </button>
        <p>Active Item: {active || "none"}</p>
      </div>
    </div>
  );
};
```

### Interactive Demo

<NestedItemsDemo />

## Demo 7: Position Variants

### Code Example

```jsx
import React, { useState } from "react";
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const PositionVariantsExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLeft, setActiveLeft] = useState("");
  const [activeRight, setActiveRight] = useState("");

  const logoSvg = '<svg>...</svg>';

  const items = [
    { label: "Dashboard", value: "dashboard" },
    { label: "Users", value: "users" },
  ];

  return (
    <div className="app-bar-container two-bars">
      {mounted && (
        <>
          <VerticalAppBar
            modelValue={open}
            onModelValueChange={setOpen}
            title="Left Bar"
            logo={logoSvg}
            items={items}
            activeItem={activeLeft}
            onActiveItemChange={setActiveLeft}
            position="left"
            width="18rem"
            style={{
              backgroundColor: "#e3f2fd",
            }}
          />
          <VerticalAppBar
            modelValue={open}
            onModelValueChange={setOpen}
            title="Right Bar"
            logo={logoSvg}
            items={items}
            activeItem={activeRight}
            onActiveItemChange={setActiveRight}
            position="right"
            width="16rem"
            style={{
              backgroundColor: "#f3e5f5",
            }}
            overlay={false}
          />
        </>
      )}
      <div
        className="content"
        style={{
          marginLeft: mounted && open ? "18rem" : "0",
          marginRight: mounted && open ? "16rem" : "0",
        }}
      >
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? "Unmount" : "Mount"} App Bars
        </button>
        <button onClick={() => setOpen(!open)}>
          Toggle Both App Bars
        </button>
        <p>
          Left Active: {activeLeft || "none"} | Right Active: {activeRight || "none"}
        </p>
      </div>
    </div>
  );
};
```

### Interactive Demo

<PositionVariantsDemo />

## Demo 8: All Features Combined

### Code Example

```jsx
import React, { useState } from "react";
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const AllFeaturesExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const logoSvg = '<svg>...</svg>';

  const nestedItems = [
    {
      label: "Content",
      value: "content",
      children: [
        { label: "Posts", value: "posts" },
        { label: "Pages", value: "pages" },
      ],
    },
  ];

  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Full Featured"
          logo={logoSvg}
          roundedLogo={true}
          items={nestedItems}
          activeItem={active}
          onActiveItemChange={setActive}
          persistIconsOnHide={true}
          expandOnHover={true}
          expandOnClick={true}
          multiExpand={true}
          showChevron={true}
          elevation={true}
          floating={true}
          sticky={true}
          position="left"
          width="22rem"
          style={{
            backgroundColor: "#f8f9fa",
          }}
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? "22rem" : "0" }}>
        <button onClick={() => setMounted(!mounted)}>
          {mounted ? "Unmount" : "Mount"} App Bar
        </button>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"} Full Featured
        </button>
        <p>Active Item: {active || "none"}</p>
      </div>
    </div>
  );
};
```

### Interactive Demo

<AllFeaturesDemo />
