import {
  BasicClickMenuDemo,
  HoverMenuDemo,
  PlacementDemo,
  PlacementVariantsDemo,
  CustomWidthDemo,
  CustomOffsetDemo,
  CallbacksDemo,
  ProgrammaticControlDemo,
  DisableOutsideClickDemo,
  ComplexContentDemo
} from "@site/src/demoPages/MenuDemo.jsx";

# Demo

This page demonstrates the Basic Menu component with various configurations and examples.

## Demo 1: Basic Click Menu

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";

const BasicClickMenuDemo = () => {
  return (
    <BasicMenu
      trigger={<button>Open Menu</button>}
      placement="bottom"
    >
      <div style={{ padding: "1rem" }}>
        <div style={{ padding: "0.5rem", cursor: "pointer" }}>Option 1</div>
        <div style={{ padding: "0.5rem", cursor: "pointer" }}>Option 2</div>
        <div style={{ padding: "0.5rem", cursor: "pointer" }}>Option 3</div>
      </div>
    </BasicMenu>
  );
};
```

### Interactive Demo

<BasicClickMenuDemo />

## Demo 2: Hover Menu

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";

const HoverMenuDemo = () => {
  return (
    <BasicMenu
      trigger={<button>Hover Me</button>}
      triggerType="hover"
      placement="bottom"
    >
      <div style={{ padding: "1rem" }}>
        <div style={{ padding: "0.5rem" }}>Hover Option 1</div>
        <div style={{ padding: "0.5rem" }}>Hover Option 2</div>
        <div style={{ padding: "0.5rem" }}>Hover Option 3</div>
      </div>
    </BasicMenu>
  );
};
```

### Interactive Demo

<HoverMenuDemo />

## Demo 3: Placement Options

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";

const PlacementDemo = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <BasicMenu trigger={<button>Top</button>} placement="top">
        <div style={{ padding: "1rem" }}>Top Menu</div>
      </BasicMenu>
      <BasicMenu trigger={<button>Bottom</button>} placement="bottom">
        <div style={{ padding: "1rem" }}>Bottom Menu</div>
      </BasicMenu>
      <BasicMenu trigger={<button>Left</button>} placement="left">
        <div style={{ padding: "1rem" }}>Left Menu</div>
      </BasicMenu>
      <BasicMenu trigger={<button>Right</button>} placement="right">
        <div style={{ padding: "1rem" }}>Right Menu</div>
      </BasicMenu>
    </div>
  );
};
```

### Interactive Demo

<PlacementDemo />

## Demo 4: Placement Variants

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";

const PlacementVariantsDemo = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <BasicMenu trigger={<button>Top Start</button>} placement="top-start">
        <div style={{ padding: "1rem" }}>Top Start</div>
      </BasicMenu>
      <BasicMenu trigger={<button>Top End</button>} placement="top-end">
        <div style={{ padding: "1rem" }}>Top End</div>
      </BasicMenu>
      <BasicMenu trigger={<button>Bottom Start</button>} placement="bottom-start">
        <div style={{ padding: "1rem" }}>Bottom Start</div>
      </BasicMenu>
      <BasicMenu trigger={<button>Bottom End</button>} placement="bottom-end">
        <div style={{ padding: "1rem" }}>Bottom End</div>
      </BasicMenu>
    </div>
  );
};
```

### Interactive Demo

<PlacementVariantsDemo />

## Demo 5: Custom Width

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";

const CustomWidthDemo = () => {
  return (
    <div>
      <BasicMenu
        trigger={<button>Auto Width</button>}
        matchTriggerWidth={false}
      >
        <div style={{ padding: "1rem" }}>This menu has auto width</div>
      </BasicMenu>
      <BasicMenu
        trigger={<button>300px Width</button>}
        width={300}
      >
        <div style={{ padding: "1rem" }}>This menu is 300px wide</div>
      </BasicMenu>
      <BasicMenu
        trigger={<button>Match Trigger</button>}
        matchTriggerWidth={true}
      >
        <div style={{ padding: "1rem" }}>This menu matches trigger width</div>
      </BasicMenu>
    </div>
  );
};
```

### Interactive Demo

<CustomWidthDemo />

## Demo 6: Custom Offset

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";

const CustomOffsetDemo = () => {
  return (
    <div>
      <BasicMenu
        trigger={<button>Default Offset</button>}
        placement="bottom"
      >
        <div style={{ padding: "1rem" }}>Default offset [0, 0.125]</div>
      </BasicMenu>
      <BasicMenu
        trigger={<button>Large Offset</button>}
        placement="bottom"
        offset={[0, 1]}
      >
        <div style={{ padding: "1rem" }}>Large offset [0, 1]</div>
      </BasicMenu>
      <BasicMenu
        trigger={<button>Horizontal Offset</button>}
        placement="right"
        offset={[1, 0]}
      >
        <div style={{ padding: "1rem" }}>Horizontal offset [1, 0]</div>
      </BasicMenu>
    </div>
  );
};
```

### Interactive Demo

<CustomOffsetDemo />

## Demo 7: Menu with Callbacks

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";
import { useState } from "react";

const CallbacksDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
    setMessage("Menu opened!");
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessage("Menu closed!");
  };

  return (
    <div>
      <BasicMenu
        trigger={<button>Menu with Callbacks</button>}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        <div style={{ padding: "1rem" }}>
          <div style={{ padding: "0.5rem" }}>Option 1</div>
          <div style={{ padding: "0.5rem" }}>Option 2</div>
        </div>
      </BasicMenu>
      <p>Status: {isOpen ? "Open" : "Closed"}</p>
      <p>{message}</p>
    </div>
  );
};
```

### Interactive Demo

<CallbacksDemo />

## Demo 8: Programmatic Control

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";
import { useRef, useState } from "react";

const ProgrammaticControlDemo = () => {
  const menuRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleOpen = () => {
    menuRef.current?.openMenu();
    setStatus("Menu opened programmatically");
  };

  const handleClose = () => {
    menuRef.current?.closeMenu();
    setStatus("Menu closed programmatically");
  };

  const handleToggle = () => {
    menuRef.current?.toggleMenu();
    setStatus(`Menu toggled. Is open: ${menuRef.current?.isOpen}`);
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        <button onClick={handleOpen}>Open</button>
        <button onClick={handleClose}>Close</button>
        <button onClick={handleToggle}>Toggle</button>
      </div>
      <BasicMenu
        ref={menuRef}
        trigger={<button>Controlled Menu</button>}
      >
        <div style={{ padding: "1rem" }}>
          <div style={{ padding: "0.5rem" }}>Option 1</div>
          <div style={{ padding: "0.5rem" }}>Option 2</div>
        </div>
      </BasicMenu>
      <p>{status}</p>
    </div>
  );
};
```

### Interactive Demo

<ProgrammaticControlDemo />

## Demo 9: Disable Outside Click Close

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";

const DisableOutsideClickDemo = () => {
  return (
    <div>
      <BasicMenu
        trigger={<button>Close on Outside Click (Default)</button>}
        closeOnOutsideClick={true}
      >
        <div style={{ padding: "1rem" }}>Click outside to close</div>
      </BasicMenu>
      <BasicMenu
        trigger={<button>Don't Close on Outside Click</button>}
        closeOnOutsideClick={false}
      >
        <div style={{ padding: "1rem" }}>Must press ESC to close</div>
      </BasicMenu>
    </div>
  );
};
```

### Interactive Demo

<DisableOutsideClickDemo />

## Demo 10: Complex Menu Content

### Code Example

```jsx
import BasicMenu from "@/src/components/sharedComponents/BasicMenu";

const ComplexContentDemo = () => {
  return (
    <BasicMenu
      trigger={<button>Complex Menu</button>}
      width={250}
    >
      <div style={{ padding: "0.5rem" }}>
        <div style={{ padding: "0.75rem", borderBottom: "1px solid #e5e7eb", fontWeight: "bold" }}>
          Menu Header
        </div>
        <div style={{ padding: "0.5rem", cursor: "pointer", borderBottom: "1px solid #e5e7eb" }}>
          Profile Settings
        </div>
        <div style={{ padding: "0.5rem", cursor: "pointer", borderBottom: "1px solid #e5e7eb" }}>
          Account Settings
        </div>
        <div style={{ padding: "0.5rem", cursor: "pointer", borderBottom: "1px solid #e5e7eb" }}>
          Privacy Settings
        </div>
        <div style={{ padding: "0.75rem", borderTop: "1px solid #e5e7eb", color: "#ef4444", cursor: "pointer" }}>
          Sign Out
        </div>
      </div>
    </BasicMenu>
  );
};
```

### Interactive Demo

<ComplexContentDemo />
