import {
BasicChipsDemo,
SolidVariantsDemo,
OutlinedVariantsDemo,
FilledVariantsDemo,
ClosableChipsDemo,
ObjectBasedChipsDemo,
CustomContentDemo,
FunctionBasedContentDemo,
DisabledStateDemo,
InteractiveSelectionDemo,
MixedContentTypesDemo,
ResponsiveGridDemo,
AnimationExamplesDemo,
AccessibilityFeaturesDemo
} from "@site/src/demoPages/ChipDemo.jsx";

# Demo

This page demonstrates the Chip component with various configurations and examples.

## Demo 1: Basic Chips

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const BasicChipsDemo = () => {
  return (
    <div className="chip-grid">
      <BasicChip chip="Simple Chip" />
      <BasicChip chip="Another Chip" />
      <BasicChip chip="Basic Example" />
    </div>
  );
};
```

### Interactive Demo

<BasicChipsDemo />

## Demo 2: Solid Variants

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const SolidVariantsDemo = () => {
  return (
    <div className="chip-grid">
      <BasicChip chip="Default" variant="default" variantType="solid" />
      <BasicChip chip="Primary" variant="primary" variantType="solid" />
      <BasicChip chip="Success" variant="success" variantType="solid" />
      <BasicChip chip="Warning" variant="warning" variantType="solid" />
      <BasicChip chip="Danger" variant="danger" variantType="solid" />
      <BasicChip chip="Info" variant="info" variantType="solid" />
    </div>
  );
};
```

### Interactive Demo

<SolidVariantsDemo />

## Demo 3: Outlined Variants

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const OutlinedVariantsDemo = () => {
  return (
    <div className="chip-grid">
      <BasicChip chip="Default" variant="default" variantType="outlined" />
      <BasicChip chip="Primary" variant="primary" variantType="outlined" />
      <BasicChip chip="Success" variant="success" variantType="outlined" />
      <BasicChip chip="Warning" variant="warning" variantType="outlined" />
      <BasicChip chip="Danger" variant="danger" variantType="outlined" />
      <BasicChip chip="Info" variant="info" variantType="outlined" />
    </div>
  );
};
```

### Interactive Demo

<OutlinedVariantsDemo />

## Demo 4: Filled Variants

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const FilledVariantsDemo = () => {
  return (
    <div className="chip-grid">
      <BasicChip chip="Default" variant="default" variantType="filled" />
      <BasicChip chip="Primary" variant="primary" variantType="filled" />
      <BasicChip chip="Success" variant="success" variantType="filled" />
      <BasicChip chip="Warning" variant="warning" variantType="filled" />
      <BasicChip chip="Danger" variant="danger" variantType="filled" />
      <BasicChip chip="Info" variant="info" variantType="filled" />
    </div>
  );
};
```

### Interactive Demo

<FilledVariantsDemo />

## Demo 5: Closable Chips

### Code Example

```jsx
import React, { useState } from "react";
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const ClosableChipsDemo = () => {
  const [customChips, setCustomChips] = useState([
    { id: 1, text: "React", value: "react" },
    { id: 2, text: "Vue.js", value: "vue" },
    { id: 3, text: "Angular", value: "angular" },
    { id: 4, text: "Svelte", value: "svelte" },
  ]);

  const handleChipDelete = (chipValue) => {
    console.log("Deleting chip:", chipValue);
    setCustomChips((prev) => prev.filter((chip) => chip.value !== chipValue));
  };

  return (
    <div className="chip-grid">
      {customChips.map((chip) => (
        <BasicChip
          key={chip.id}
          chip={chip}
          textKey="text"
          valueKey="value"
          closable
          onDeleteChip={handleChipDelete}
          variant="info"
          variantType="outlined"
        />
      ))}
    </div>
  );
};
```

### Interactive Demo

<ClosableChipsDemo />

## Demo 6: Object-based Chips

### Code Example

```jsx
import React, { useState } from "react";
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const ObjectBasedChipsDemo = () => {
  const [objectChips, setObjectChips] = useState([
    { text: "Frontend", value: "frontend", category: "web" },
    { text: "Backend", value: "backend", category: "web" },
    { text: "Mobile", value: "mobile", category: "app" },
    { text: "Desktop", value: "desktop", category: "app" },
    { text: "Cloud", value: "cloud", category: "infra" },
  ]);

  return (
    <div className="chip-grid">
      {objectChips.map((chip, index) => (
        <BasicChip
          key={index}
          chip={chip}
          textKey="text"
          valueKey="value"
          variant={
            chip.category === "web"
              ? "info"
              : chip.category === "app"
              ? "success"
              : "warning"
          }
          variantType="filled"
          closable
          onDeleteChip={(value) => {
            console.log("Deleted:", value);
            setObjectChips((prev) =>
              prev.filter((chip) => chip.value !== value)
            );
          }}
        />
      ))}
    </div>
  );
};
```

### Interactive Demo

<ObjectBasedChipsDemo />

## Demo 7: Custom Content

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const CustomContentDemo = () => {
  const CustomPrepend = ({ isDisabled }) => (
    <span
      style={{
        fontSize: "1.2em",
        opacity: isDisabled ? 0.5 : 1,
        marginRight: "0.25rem",
      }}
    >
      🚀
    </span>
  );

  const CustomAppend = ({ isDisabled }) => (
    <span
      style={{
        fontSize: "0.8em",
        opacity: isDisabled ? 0.5 : 1,
        marginLeft: "0.25rem",
      }}
    >
      ✓
    </span>
  );

  const CustomClose = ({ isDisabled, onDelete }) => (
    <button
      onClick={(event) => onDelete(event)}
      disabled={isDisabled}
      style={{
        background: "none",
        border: "none",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.5 : 1,
        fontSize: "1.2em",
        padding: "0.25rem",
        borderRadius: "50%",
        transition: "all 0.2s ease",
      }}
    >
      ❌
    </button>
  );

  return (
    <div className="chip-grid">
      <BasicChip
        chip="With Prepend"
        prepend={<CustomPrepend />}
        variant="success"
        variantType="solid"
      />
      <BasicChip
        chip="With Append"
        append={<CustomAppend />}
        variant="warning"
        variantType="outlined"
      />
      <BasicChip
        chip="With Both"
        prepend={<CustomPrepend />}
        append={<CustomAppend />}
        variant="danger"
        variantType="filled"
      />
      <BasicChip
        chip="Custom Close"
        closable
        close={({ chipValue, isDisabled, onDelete }) => (
          <CustomClose
            chipValue={chipValue}
            isDisabled={isDisabled}
            onDelete={onDelete}
          />
        )}
        onDeleteChip={(value) => console.log("Custom delete:", value)}
        variant="info"
        variantType="outlined"
      />
    </div>
  );
};
```

### Interactive Demo

<CustomContentDemo />

## Demo 8: Function-based Content

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const FunctionBasedContentDemo = () => {
  return (
    <div className="chip-grid">
      <BasicChip
        chip={{ text: "Dynamic Content", value: "dynamic" }}
        prepend={({ isDisabled }) => (
          <span style={{ color: isDisabled ? "#ccc" : "#ff6b6b" }}>🔥</span>
        )}
        children={({ chip, isDisabled }) => (
          <span
            style={{
              fontWeight: "bold",
              color: isDisabled ? "#ccc" : "#333",
            }}
          >
            {chip.text}
          </span>
        )}
        append={({ chip, isDisabled }) => (
          <span
            style={{
              fontSize: "0.8em",
              color: isDisabled ? "#ccc" : "#666",
            }}
          >
            ({chip.value})
          </span>
        )}
        variant="primary"
        variantType="filled"
      />
    </div>
  );
};
```

### Interactive Demo

<FunctionBasedContentDemo />

## Demo 9: Disabled State

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const DisabledStateDemo = () => {
  const CustomPrepend = ({ isDisabled }) => (
    <span
      style={{
        fontSize: "1.2em",
        opacity: isDisabled ? 0.5 : 1,
        marginRight: "0.25rem",
      }}
    >
      🚀
    </span>
  );

  const CustomAppend = ({ isDisabled }) => (
    <span
      style={{
        fontSize: "0.8em",
        opacity: isDisabled ? 0.5 : 1,
        marginLeft: "0.25rem",
      }}
    >
      ✓
    </span>
  );

  return (
    <div className="chip-grid">
      <BasicChip chip="Normal Chip" variant="success" variantType="solid" />
      <BasicChip
        chip="Disabled Chip"
        variant="success"
        variantType="solid"
        disabled
      />
      <BasicChip
        chip="Disabled Closable"
        variant="danger"
        variantType="outlined"
        closable
        disabled
      />
      <BasicChip
        chip="Disabled with Custom Content"
        variant="info"
        variantType="filled"
        disabled
        prepend={<CustomPrepend />}
        append={<CustomAppend />}
      />
    </div>
  );
};
```

### Interactive Demo

<DisabledStateDemo />

## Demo 10: Interactive Selection

### Code Example

```jsx
import React, { useState } from "react";
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const InteractiveSelectionDemo = () => {
  const [selectedChips, setSelectedChips] = useState([]);
  const sampleChips = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "Go",
    "Rust",
    "Swift",
  ];

  const handleChipSelect = (chipValue) => {
    setSelectedChips((prev) =>
      prev.includes(chipValue)
        ? prev.filter((v) => v !== chipValue)
        : [...prev, chipValue]
    );
  };

  return (
    <div>
      <div className="chip-grid">
        {sampleChips.map((chip, index) => (
          <BasicChip
            key={index}
            chip={chip}
            variant={selectedChips.includes(chip) ? "success" : "default"}
            variantType={selectedChips.includes(chip) ? "solid" : "outlined"}
            style={{
              transform: selectedChips.includes(chip)
                ? "scale(1.05)"
                : "scale(1)",
              transition: "all 0.2s ease",
            }}
            onClick={() => handleChipSelect(chip)}
          />
        ))}
      </div>
      <div className="selection-display">
        <strong>Currently Selected:</strong>
        <div className="selected-chips">
          {selectedChips.length > 0 ? (
            selectedChips.map((chip) => (
              <BasicChip
                key={chip}
                chip={chip}
                variant="success"
                variantType="filled"
                closable
                onDeleteChip={(value) => handleChipSelect(value)}
              />
            ))
          ) : (
            <em>No chips selected</em>
          )}
        </div>
      </div>
    </div>
  );
};
```

### Interactive Demo

<InteractiveSelectionDemo />

## Demo 11: Mixed Content Types

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const MixedContentTypesDemo = () => {
  return (
    <div className="chip-grid">
      <BasicChip chip="String Chip" variantType="solid" />
      <BasicChip
        chip={{ text: "Object Chip", value: "obj" }}
        variantType="outlined"
      />
      <BasicChip
        chip="Custom Render"
        children={({ chip: chipData }) => (
          <span style={{ fontStyle: "italic" }}>{chipData}</span>
        )}
        variantType="filled"
      />
      <BasicChip
        chip={{ text: "Complex Object", value: "complex" }}
        children={({ chip }) => (
          <span style={{ fontWeight: "bold" }}>{chip.text}</span>
        )}
        variant="primary"
        variantType="outlined"
      />
    </div>
  );
};
```

### Interactive Demo

<MixedContentTypesDemo />

## Demo 12: Responsive Grid

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const ResponsiveGridDemo = () => {
  return (
    <div className="responsive-grid">
      {[
        "Grid Item 1",
        "Grid Item 2",
        "Grid Item 3",
        "Grid Item 4",
        "Grid Item 5",
        "Grid Item 6",
      ].map((item, index) => (
        <BasicChip
          key={index}
          chip={item}
          variant={index % 2 === 0 ? "info" : "warning"}
          variantType={
            index % 3 === 0 ? "solid" : index % 3 === 1 ? "outlined" : "filled"
          }
          style={{ width: "100%", justifyContent: "center" }}
        />
      ))}
    </div>
  );
};
```

### Interactive Demo

<ResponsiveGridDemo />

## Demo 13: Animation Examples

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const AnimationExamplesDemo = () => {
  return (
    <div className="chip-grid">
      <BasicChip
        chip="Hover Me"
        variant="primary"
        variantType="outlined"
        style={{
          transition: "all 0.3s ease",
          transform: "translateY(0)",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
        }}
      />
      <BasicChip
        chip="Click Me"
        variant="success"
        variantType="filled"
        style={{
          transition: "all 0.2s ease",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.target.style.transform = "scale(0.95)";
          setTimeout(() => {
            e.target.style.transform = "scale(1)";
          }, 150);
        }}
      />
    </div>
  );
};
```

### Interactive Demo

<AnimationExamplesDemo />

## Demo 14: Accessibility Features

### Code Example

```jsx
import BasicChip from "@/src/components/sharedComponents/BasicChip";

const AccessibilityFeaturesDemo = () => {
  return (
    <div className="chip-grid">
      <BasicChip
        chip="Keyboard Accessible"
        variant="info"
        variantType="outlined"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            console.log("Chip activated via keyboard");
          }
        }}
      />
      <BasicChip
        chip="Screen Reader Friendly"
        variant="warning"
        variantType="filled"
        closable
        onDeleteChip={(value) =>
          console.log("Deleted via accessibility features:", value)
        }
      />
    </div>
  );
};
```

### Interactive Demo

<AccessibilityFeaturesDemo />
