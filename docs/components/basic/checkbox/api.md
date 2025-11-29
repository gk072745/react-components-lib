# API

## BasicCheckbox Component

The main checkbox component that provides customizable checkbox functionality with support for multiple selection and select all.

### Props

| Prop              | Type                                                      | Default                                    | Required | Description                                                                 |
| ----------------- | --------------------------------------------------------- | ------------------------------------------ | -------- | --------------------------------------------------------------------------- |
| `size`            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                   | `'md'`                                     | No       | Size of the checkbox                                                        |
| `variant`         | `'default' \| 'info'`                                     | `'default'`                                | No       | Color variant of the checkbox                                              |
| `disabled`        | `boolean`                                                 | `false`                                    | No       | Whether the checkbox is disabled (prevents interaction)                     |
| `readonly`        | `boolean`                                                 | `false`                                    | No       | Whether the checkbox is readonly (prevents interaction but maintains state) |
| `label`           | `string`                                                  | `''`                                       | No       | Text label for the checkbox                                                |
| `value`           | `string \| number \| boolean`                            | `''`                                       | No       | Value of the checkbox (used for selection state)                           |
| `selected`        | `array`                                                   | `[]`                                       | No       | Array of selected values (for multiple selection)                         |
| `valueComparator` | `function`                                                 | `(a, b) => Array.isArray(a) && a.includes(b)` | No       | Custom function to compare values for selection state                      |
| `allItems`        | `array`                                                   | `[]`                                       | No       | Array of all items (required for selectAll functionality)                |
| `valueKey`        | `string`                                                  | `''`                                       | No       | Key to extract value from object items (for selectAll)                     |
| `onChange`        | `function`                                                 | -                                          | No       | Callback function fired when checkbox state changes                        |
| `children`        | `ReactNode`                                               | -                                          | No       | Additional content to render after the label                              |
| `icon`            | `elementType`                                             | -                                          | No       | Custom icon component (replaces default checkbox visual)                   |
| `labelSlot`       | `elementType`                                             | -                                          | No       | Custom label component (replaces default label text)                      |

### Event Handlers

#### onChange

Callback function that is called whenever the checkbox state changes.

**Signature:**

```js
onChange: (newValue, checkboxValue, event) => void
```

**Parameters:**

- `newValue` (`array`): The updated array of selected values
- `checkboxValue` (`string | number | boolean`): The value of the checkbox that was clicked
- `event` (`SyntheticEvent`): The React synthetic event object

**Example:**

```jsx
<BasicCheckbox
  label="Option 1"
  value="option1"
  selected={selectedValues}
  onChange={(newValue, checkboxValue, event) => {
    console.log('New selection:', newValue);
    console.log('Clicked value:', checkboxValue);
    setSelectedValues(newValue);
  }}
/>
```

### Slot Functions

#### icon

Component that renders a custom checkbox icon, replacing the default checkbox visual.

**Signature:**

```js
icon: ({ isChecked }) => ReactNode
```

**Parameters:**

- `isChecked` (`boolean`): Whether the checkbox is currently checked

**Example:**

```jsx
const CustomIcon = ({ isChecked }) => (
  <div style={{ 
    width: '20px', 
    height: '20px', 
    border: '2px solid #007bff',
    backgroundColor: isChecked ? '#007bff' : 'transparent',
    borderRadius: '4px'
  }}>
    {isChecked && <span>✓</span>}
  </div>
);

<BasicCheckbox
  label="Custom Icon"
  value="custom"
  selected={selectedValues}
  onChange={handleChange}
  icon={CustomIcon}
/>
```

#### labelSlot

Component that renders a custom label, replacing the default label text.

**Signature:**

```js
labelSlot: ({ isChecked }) => ReactNode
```

**Parameters:**

- `isChecked` (`boolean`): Whether the checkbox is currently checked

**Example:**

```jsx
const CustomLabel = ({ isChecked }) => (
  <span style={{ 
    color: isChecked ? '#007bff' : '#666',
    fontWeight: isChecked ? 'bold' : 'normal'
  }}>
    {isChecked ? 'Selected' : 'Not Selected'}
  </span>
);

<BasicCheckbox
  value="custom"
  selected={selectedValues}
  onChange={handleChange}
  labelSlot={CustomLabel}
/>
```

### Size Variants

The checkbox supports five size variants:

- `xs`: Extra small (0.75rem checkbox, 0.625rem font)
- `sm`: Small (0.875rem checkbox, 0.75rem font)
- `md`: Medium - Default (1rem checkbox, 0.875rem font)
- `lg`: Large (1.125rem checkbox, 1rem font)
- `xl`: Extra large (1.25rem checkbox, 1.125rem font)

### Color Variants

The checkbox supports two color variants:

- `default`: Black checkbox with black border and white tick
- `info`: Blue checkbox (#2196f3) with blue border and white tick

### Select All Functionality

When `value="selectAll"` is used along with `allItems` and optionally `valueKey`, the checkbox will:

- Check if all items are selected when determining its checked state
- Select all items when clicked (if not all are selected)
- Deselect all items when clicked (if all are selected)

**Example:**

```jsx
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

<BasicCheckbox
  label="Select All"
  value="selectAll"
  selected={selectedValues}
  onChange={handleChange}
  allItems={items}
  valueKey="id"
/>
{items.map(item => (
  <BasicCheckbox
    key={item.id}
    label={item.name}
    value={item.id}
    selected={selectedValues}
    onChange={handleChange}
  />
))}
```

### Accessibility

The component uses a native `<input type="checkbox">` element (hidden visually) for proper form semantics and accessibility. The component maintains:

- Proper label association via the `<label>` wrapper
- Keyboard navigation support (native checkbox behavior)
- Screen reader compatibility
- Disabled state handling

## Example Usage

### Basic Usage

```jsx
import BasicCheckbox from '@/src/components/sharedComponents/BasicCheckbox';
import { useState } from 'react';

function MyComponent() {
  const [selected, setSelected] = useState([]);

  return (
    <BasicCheckbox
      label="Option 1"
      value="option1"
      selected={selected}
      onChange={(newValue) => setSelected(newValue)}
    />
  );
}
```

### Multiple Selection

```jsx
import { useState } from 'react';
import BasicCheckbox from '@/src/components/sharedComponents/BasicCheckbox';

function MultipleSelection() {
  const [selected, setSelected] = useState(['option1']);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      {options.map((option, index) => (
        <BasicCheckbox
          key={index}
          label={option}
          value={`option${index + 1}`}
          selected={selected}
          onChange={(newValue) => setSelected(newValue)}
        />
      ))}
      <p>Selected: {JSON.stringify(selected)}</p>
    </div>
  );
}
```

### Size Variants

```jsx
<BasicCheckbox size="xs" label="Extra Small" value="xs" selected={[]} onChange={handleChange} />
<BasicCheckbox size="sm" label="Small" value="sm" selected={[]} onChange={handleChange} />
<BasicCheckbox size="md" label="Medium (Default)" value="md" selected={[]} onChange={handleChange} />
<BasicCheckbox size="lg" label="Large" value="lg" selected={[]} onChange={handleChange} />
<BasicCheckbox size="xl" label="Extra Large" value="xl" selected={[]} onChange={handleChange} />
```

### Variant Colors

```jsx
<BasicCheckbox variant="default" label="Default Variant" value="default" selected={[]} onChange={handleChange} />
<BasicCheckbox variant="info" label="Info Variant" value="info" selected={[]} onChange={handleChange} />
```

### Disabled and Readonly States

```jsx
<BasicCheckbox label="Normal" value="normal" selected={[]} onChange={handleChange} />
<BasicCheckbox disabled={true} label="Disabled" value="disabled" selected={[]} onChange={handleChange} />
<BasicCheckbox readonly={true} label="Readonly" value="readonly" selected={['readonly']} onChange={handleChange} />
```

### Select All

```jsx
import { useState } from 'react';
import BasicCheckbox from '@/src/components/sharedComponents/BasicCheckbox';

function SelectAllExample() {
  const [selected, setSelected] = useState([]);
  
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ];

  return (
    <div>
      <BasicCheckbox
        label="Select All"
        value="selectAll"
        selected={selected}
        onChange={(newValue) => setSelected(newValue)}
        allItems={items}
        valueKey="id"
      />
      {items.map(item => (
        <BasicCheckbox
          key={item.id}
          label={item.name}
          value={item.id}
          selected={selected}
          onChange={(newValue) => setSelected(newValue)}
        />
      ))}
    </div>
  );
}
```

### Custom Icon

```jsx
const CustomIcon = ({ isChecked }) => (
  <div style={{
    width: '20px',
    height: '20px',
    border: '2px solid #007bff',
    borderRadius: '50%',
    backgroundColor: isChecked ? '#007bff' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px'
  }}>
    {isChecked && '✓'}
  </div>
);

<BasicCheckbox
  label="Custom Icon Checkbox"
  value="custom"
  selected={selected}
  onChange={handleChange}
  icon={CustomIcon}
/>
```

### Custom Label

```jsx
const CustomLabel = ({ isChecked }) => (
  <span style={{
    color: isChecked ? '#007bff' : '#666',
    fontWeight: isChecked ? 'bold' : 'normal',
    textDecoration: isChecked ? 'underline' : 'none'
  }}>
    {isChecked ? '✓ Selected' : '○ Not Selected'}
  </span>
);

<BasicCheckbox
  value="custom"
  selected={selected}
  onChange={handleChange}
  labelSlot={CustomLabel}
/>
```

### With Children

```jsx
<BasicCheckbox
  label="Terms and Conditions"
  value="terms"
  selected={selected}
  onChange={handleChange}
>
  <a href="/terms">Read more</a>
</BasicCheckbox>
```

