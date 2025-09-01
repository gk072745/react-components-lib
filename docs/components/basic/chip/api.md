# API

## Props

| Prop           | Type                    | Default     | Description                                                     |
| -------------- | ----------------------- | ----------- | --------------------------------------------------------------- |
| `chip`         | `object \| string`      | -           | Chip data (object or string)                                    |
| `textKey`      | `string`                | `'text'`    | Key to extract text from chip object                            |
| `valueKey`     | `string`                | `'value'`   | Key to extract value from chip object                           |
| `closable`     | `boolean`               | `false`     | Whether the chip can be closed/removed                          |
| `onDeleteChip` | `function`              | -           | Callback when chip is deleted                                   |
| `children`     | `ReactNode \| function` | -           | Custom content or function to render chip content               |
| `prepend`      | `ReactNode \| function` | -           | Content to render before chip text                              |
| `append`       | `ReactNode \| function` | -           | Content to render after chip text                               |
| `close`        | `ReactNode \| function` | -           | Custom close button component                                   |
| `variant`      | `string`                | `'default'` | Chip variant (default, primary, success, warning, danger, info) |
| `variantType`  | `string`                | `'solid'`   | Variant type (solid, outlined, filled)                          |
| `disabled`     | `boolean`               | `false`     | Whether the chip is disabled                                    |
| `className`    | `string`                | `''`        | Additional CSS classes                                          |
| `style`        | `object`                | `{}`        | Additional inline styles                                        |
| `onClick`      | `function`              | -           | Click handler for the chip                                      |

## Events

| Event          | Parameters           | Description                |
| -------------- | -------------------- | -------------------------- |
| `onDeleteChip` | `(chipValue, event)` | Fired when chip is deleted |
| `onClick`      | `(event)`            | Fired when chip is clicked |

### Event Parameters

- **`chipValue`** (`any`): The value of the deleted chip
- **`event`** (`Event`): The original click/delete event

## Slots (Custom Components)

| Slot       | Props                                       | Description                            |
| ---------- | ------------------------------------------- | -------------------------------------- |
| `children` | `{ chip, isDisabled }`                      | Custom content for the chip            |
| `prepend`  | `{ chip, isDisabled }`                      | Content to render before the chip text |
| `append`   | `{ chip, isDisabled }`                      | Content to render after the chip text  |
| `close`    | `{ chip, chipValue, isDisabled, onDelete }` | Custom close button component          |

### Slot Props

- **`chip`** (`object \| string`): The chip data
- **`chipValue`** (`any`): The extracted value from the chip
- **`isDisabled`** (`boolean`): Whether the chip is disabled
- **`onDelete`** (`function`): Function to trigger chip deletion

## Variants

### Available Variants

- **`default`**: Default chip styling
- **`primary`**: Primary color variant
- **`success`**: Success/green variant
- **`warning`**: Warning/orange variant
- **`danger`**: Danger/red variant
- **`info`**: Info/blue variant

### Variant Types

- **`solid`**: Solid background color
- **`outlined`**: Outlined border style
- **`filled`**: Filled background with border

## Methods

The component doesn't expose any methods via refs.

## Example Usage

### Basic Usage

```jsx
import React from "react";
import { BasicChip } from "@your-org/react-ui-components";

function MyComponent() {
  return <BasicChip chip="Simple Chip" />;
}
```

### With Object Data

```jsx
const chipData = { text: "User Chip", value: "user123" };

<BasicChip chip={chipData} textKey="text" valueKey="value" />;
```

### Closable Chip

```jsx
import React, { useState } from "react";
import { BasicChip } from "@your-org/react-ui-components";

function ClosableChipExample() {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleDelete = (chipValue) => {
    setChips(chips.filter((chip) => chip !== chipValue));
  };

  return (
    <div>
      {chips.map((chip, index) => (
        <BasicChip
          key={index}
          chip={chip}
          closable={true}
          onDeleteChip={handleDelete}
        />
      ))}
    </div>
  );
}
```

### Different Variants

```jsx
<BasicChip chip="Default" variant="default" />
<BasicChip chip="Primary" variant="primary" />
<BasicChip chip="Success" variant="success" />
<BasicChip chip="Warning" variant="warning" />
<BasicChip chip="Danger" variant="danger" />
<BasicChip chip="Info" variant="info" />
```

### Variant Types

```jsx
<BasicChip chip="Solid" variant="primary" variantType="solid" />
<BasicChip chip="Outlined" variant="primary" variantType="outlined" />
<BasicChip chip="Filled" variant="primary" variantType="filled" />
```

### With Custom Content

```jsx
const CustomContent = ({ chip, isDisabled }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span>🚀</span>
    <span>{chip}</span>
    <span>✨</span>
  </div>
);

<BasicChip chip="Custom Content" children={CustomContent} />;
```

### With Prepend and Append

```jsx
const PrependIcon = ({ chip, isDisabled }) => (
  <span style={{ color: isDisabled ? "#ccc" : "#007bff" }}>🔗</span>
);

const AppendBadge = ({ chip, isDisabled }) => (
  <span
    style={{
      fontSize: "10px",
      backgroundColor: isDisabled ? "#ccc" : "#28a745",
      color: "white",
      padding: "2px 6px",
      borderRadius: "10px",
    }}
  >
    NEW
  </span>
);

<BasicChip chip="Link Chip" prepend={PrependIcon} append={AppendBadge} />;
```

### Custom Close Button

```jsx
const CustomClose = ({ chip, chipValue, isDisabled, onDelete }) => (
  <button
    onClick={onDelete}
    disabled={isDisabled}
    style={{
      background: "none",
      border: "none",
      color: isDisabled ? "#ccc" : "#dc3545",
      cursor: isDisabled ? "not-allowed" : "pointer",
      fontSize: "16px",
    }}
  >
    ✕
  </button>
);

<BasicChip
  chip="Custom Close"
  closable={true}
  close={CustomClose}
  onDeleteChip={(value) => console.log("Deleted:", value)}
/>;
```

### Disabled State

```jsx
<BasicChip chip="Disabled Chip" disabled={true} />
<BasicChip chip="Disabled Closable" closable={true} disabled={true} />
```

### Click Handler

```jsx
<BasicChip
  chip="Clickable Chip"
  onClick={(event) => {
    console.log("Chip clicked!");
    // Handle click event
  }}
/>
```

### Complex Object Data

```jsx
const complexChip = {
  text: "John Doe",
  value: "user123",
  avatar: "https://example.com/avatar.jpg",
  role: "admin",
};

const ComplexChipContent = ({ chip, isDisabled }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img
      src={chip.avatar}
      alt={chip.text}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        opacity: isDisabled ? 0.5 : 1,
      }}
    />
    <span>{chip.text}</span>
    <span style={{ fontSize: "10px", color: "#666" }}>({chip.role})</span>
  </div>
);

<BasicChip
  chip={complexChip}
  textKey="text"
  valueKey="value"
  children={ComplexChipContent}
  closable={true}
  variant="primary"
/>;
```

### Multiple Chips with State Management

```jsx
import React, { useState } from "react";
import { BasicChip } from "@your-org/react-ui-components";

function ChipManager() {
  const [selectedChips, setSelectedChips] = useState([]);

  const availableChips = [
    { text: "React", value: "react" },
    { text: "Vue", value: "vue" },
    { text: "Angular", value: "angular" },
    { text: "Svelte", value: "svelte" },
  ];

  const handleAddChip = (chip) => {
    if (!selectedChips.find((c) => c.value === chip.value)) {
      setSelectedChips([...selectedChips, chip]);
    }
  };

  const handleRemoveChip = (chipValue) => {
    setSelectedChips(selectedChips.filter((c) => c.value !== chipValue));
  };

  return (
    <div>
      <h4>Available Technologies:</h4>
      <div style={{ marginBottom: "1rem" }}>
        {availableChips.map((chip) => (
          <BasicChip
            key={chip.value}
            chip={chip}
            textKey="text"
            valueKey="value"
            variant="outlined"
            variantType="outlined"
            onClick={() => handleAddChip(chip)}
            style={{ margin: "0.25rem", cursor: "pointer" }}
          />
        ))}
      </div>

      <h4>Selected Technologies:</h4>
      <div>
        {selectedChips.map((chip) => (
          <BasicChip
            key={chip.value}
            chip={chip}
            textKey="text"
            valueKey="value"
            variant="primary"
            closable={true}
            onDeleteChip={handleRemoveChip}
            style={{ margin: "0.25rem" }}
          />
        ))}
      </div>
    </div>
  );
}
```
