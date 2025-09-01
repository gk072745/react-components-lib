# API

## Props

| Prop            | Type        | Default             | Description                                              |
| --------------- | ----------- | ------------------- | -------------------------------------------------------- |
| `prepend`       | `function`  | -                   | Function to render content before the title              |
| `title`         | `string`    | `'Accordion Title'` | Title text for the accordion                             |
| `append`        | `function`  | -                   | Function to render content after the title (custom icon) |
| `children`      | `ReactNode` | -                   | Content to display when accordion is expanded            |
| `initialIsOpen` | `boolean`   | `false`             | Whether the accordion starts in open state               |
| `onToggle`      | `function`  | -                   | Callback when accordion state changes                    |
| `disabled`      | `boolean`   | `false`             | Whether the accordion is disabled                        |

## Events

| Event      | Parameters | Description                        |
| ---------- | ---------- | ---------------------------------- |
| `onToggle` | `(isOpen)` | Fired when accordion state changes |

### Event Parameters

- **`isOpen`** (`boolean`): The new open/closed state of the accordion

## Slots (Custom Components)

| Slot      | Props                                | Description                                   |
| --------- | ------------------------------------ | --------------------------------------------- |
| `prepend` | `{ isOpen, handleToggle, disabled }` | Content to render before the title            |
| `append`  | `{ isOpen, handleToggle, disabled }` | Custom icon/content to render after the title |

### Slot Props

- **`isOpen`** (`boolean`): Whether the accordion is currently open
- **`handleToggle`** (`function`): Function to toggle the accordion state
- **`disabled`** (`boolean`): Whether the accordion is disabled

## Methods

The component doesn't expose any methods via refs.

## Example Usage

### Basic Usage

```jsx
import React from "react";
import { BasicAccordion } from "@your-org/react-ui-components";

function MyAccordion() {
  return (
    <BasicAccordion title="Click to expand">
      <p>This is the accordion content that will be shown when expanded.</p>
    </BasicAccordion>
  );
}
```

### With Initial Open State

```jsx
<BasicAccordion title="Pre-expanded Accordion" initialIsOpen={true}>
  <p>This accordion starts in an open state.</p>
</BasicAccordion>
```

### With Toggle Callback

```jsx
import React, { useState } from "react";
import { BasicAccordion } from "@your-org/react-ui-components";

function AccordionWithCallback() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newIsOpen) => {
    setIsOpen(newIsOpen);
    console.log("Accordion is now:", newIsOpen ? "open" : "closed");
  };

  return (
    <BasicAccordion title="Accordion with Callback" onToggle={handleToggle}>
      <p>Current state: {isOpen ? "Open" : "Closed"}</p>
    </BasicAccordion>
  );
}
```

### Disabled State

```jsx
<BasicAccordion title="Disabled Accordion" disabled={true}>
  <p>This content cannot be accessed because the accordion is disabled.</p>
</BasicAccordion>
```

### Custom Prepend Content

```jsx
const CustomPrepend = ({ isOpen, handleToggle, disabled }) => (
  <div
    style={{
      marginRight: "8px",
      color: isOpen ? "#007bff" : "#666",
      fontSize: "14px",
    }}
  >
    {isOpen ? "▼" : "▶"}
  </div>
);

<BasicAccordion title="Custom Prepend Icon" prepend={CustomPrepend}>
  <p>This accordion has a custom prepend icon.</p>
</BasicAccordion>;
```

### Custom Append Icon

```jsx
const CustomAppend = ({ isOpen, handleToggle, disabled }) => (
  <div
    style={{
      color: isOpen ? "#007bff" : "#666",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.2s ease",
    }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z" />
    </svg>
  </div>
);

<BasicAccordion title="Custom Append Icon" append={CustomAppend}>
  <p>This accordion has a custom append icon.</p>
</BasicAccordion>;
```

### Complex Content

```jsx
<BasicAccordion title="Complex Content">
  <div style={{ padding: "16px" }}>
    <h4>Section Title</h4>
    <p>This is a paragraph with some content.</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <button onClick={() => alert("Button clicked!")}>Click me</button>
  </div>
</BasicAccordion>
```

### Multiple Accordions

```jsx
import React, { useState } from "react";
import { BasicAccordion } from "@your-org/react-ui-components";

function AccordionGroup() {
  const [openStates, setOpenStates] = useState({});

  const handleToggle = (id) => (isOpen) => {
    setOpenStates((prev) => ({
      ...prev,
      [id]: isOpen,
    }));
  };

  const accordionData = [
    { id: 1, title: "First Section", content: "Content for first section" },
    { id: 2, title: "Second Section", content: "Content for second section" },
    { id: 3, title: "Third Section", content: "Content for third section" },
  ];

  return (
    <div className="accordion-group">
      {accordionData.map((item) => (
        <BasicAccordion
          key={item.id}
          title={item.title}
          onToggle={handleToggle(item.id)}
          initialIsOpen={openStates[item.id]}
        >
          <p>{item.content}</p>
        </BasicAccordion>
      ))}
    </div>
  );
}
```

### With Custom Styling

```jsx
const StyledPrepend = ({ isOpen }) => (
  <div
    style={{
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: isOpen ? "#007bff" : "#e9ecef",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "12px",
      color: isOpen ? "white" : "#666",
      fontSize: "12px",
      fontWeight: "bold",
    }}
  >
    {isOpen ? "−" : "+"}
  </div>
);

<BasicAccordion title="Styled Accordion" prepend={StyledPrepend}>
  <div
    style={{
      backgroundColor: "#f8f9fa",
      padding: "16px",
      borderTop: "1px solid #e9ecef",
    }}
  >
    <p>This accordion has custom styling.</p>
  </div>
</BasicAccordion>;
```

### Accessibility Example

```jsx
<BasicAccordion
  title="Accessible Accordion"
  onToggle={(isOpen) => {
    // Announce state change to screen readers
    const message = isOpen ? "Accordion expanded" : "Accordion collapsed";
    // You can use a screen reader announcement library here
    console.log(message);
  }}
>
  <p>This accordion includes proper accessibility features:</p>
  <ul>
    <li>Keyboard navigation (Enter/Space to toggle)</li>
    <li>ARIA attributes (aria-expanded, aria-disabled)</li>
    <li>Proper focus management</li>
    <li>Screen reader announcements</li>
  </ul>
</BasicAccordion>
```
