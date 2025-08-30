# API

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the checkbox |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `readonly` | `boolean` | `false` | Whether the checkbox is readonly |
| `label` | `string` | `''` | Label text for the checkbox |
| `value` | `string \| number \| boolean` | `''` | Value of the checkbox |
| `selected` | `array` | `[]` | Array of selected values |
| `valueComparator` | `function` | `(a, b) => Array.isArray(a) && a.includes(b)` | Custom comparison function |
| `innerTickColor` | `string` | `'#ffffff'` | Color of the inner tick |
| `backgroundColor` | `string` | `'#000000'` | Background color when checked |
| `labelColor` | `string` | `'#000000'` | Color of the label text |
| `allItems` | `array` | `[]` | Items for select-all functionality |
| `valueKey` | `string` | `''` | Key to extract value from allItems objects |
| `onChange` | `function` | - | Callback when checkbox state changes |
| `children` | `ReactNode` | - | Additional content to render |
| `icon` | `Component` | - | Custom icon component |
| `labelSlot` | `Component` | - | Custom label component |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onChange` | `(newValue, currentValue, event)` | Fired when checkbox state changes |

### Event Parameters

- **`newValue`** (`array`): The updated array of selected values
- **`currentValue`** (`string \| number \| boolean`): The value of the current checkbox
- **`event`** (`Event`): The original click event

## Slots (Custom Components)

| Slot | Props | Description |
|------|-------|-------------|
| `icon` | `{ isChecked }` | Custom checkbox icon component |
| `labelSlot` | `{ isChecked }` | Custom label component |

### Slot Props

- **`isChecked`** (`boolean`): Whether the checkbox is currently checked

## Methods

The component doesn't expose any methods via refs.

## Example Usage

### Basic Usage

```jsx
import React, { useState } from 'react';
import { BasicCheckbox } from '@your-org/react-ui-components';

function MyForm() {
  const [selected, setSelected] = useState([]);

  return (
    <BasicCheckbox 
      label="I agree to terms" 
      value="terms"
      selected={selected}
      onChange={setSelected}
    />
  );
}
```

### Checkbox Group

```jsx
import React, { useState } from 'react';
import { BasicCheckbox } from '@your-org/react-ui-components';

function CheckboxGroup() {
  const [selected, setSelected] = useState([]);
  
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <div className="checkbox-group">
      {options.map(option => (
        <BasicCheckbox
          key={option.value}
          label={option.label}
          value={option.value}
          selected={selected}
          onChange={setSelected}
          size="md"
        />
      ))}
      
      <div>Selected: {selected.join(', ')}</div>
    </div>
  );
}
```

### Select All Functionality

```jsx
import React, { useState } from 'react';
import { BasicCheckbox } from '@your-org/react-ui-components';

function SelectAllExample() {
  const [selected, setSelected] = useState([]);
  
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ];

  return (
    <div className="select-all-example">
      <BasicCheckbox
        label="Select All"
        value="selectAll"
        selected={selected}
        onChange={setSelected}
        allItems={items}
        valueKey="id"
      />
      
      <div style={{ marginLeft: '2rem' }}>
        {items.map(item => (
          <BasicCheckbox
            key={item.id}
            label={item.name}
            value={item.id}
            selected={selected}
            onChange={setSelected}
          />
        ))}
      </div>
      
      <div>Selected: {selected.join(', ')}</div>
    </div>
  );
}
```

### Custom Colors

```jsx
<BasicCheckbox 
  label="Custom Colors"
  value="custom"
  selected={selected}
  onChange={setSelected}
  backgroundColor="#2196F3"
  innerTickColor="#ffffff"
  labelColor="#333333"
/>
```

### Custom Icon and Label

```jsx
const CustomIcon = ({ isChecked }) => (
  <div style={{
    width: '20px',
    height: '20px',
    border: '2px solid #ff6b6b',
    borderRadius: '4px',
    backgroundColor: isChecked ? '#ff6b6b' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold'
  }}>
    {isChecked ? '✓' : ''}
  </div>
);

const CustomLabel = ({ isChecked }) => (
  <span style={{
    color: isChecked ? '#ff6b6b' : '#666666',
    fontWeight: isChecked ? 'bold' : 'normal'
  }}>
    Custom Label {isChecked ? '(Selected)' : '(Not Selected)'}
  </span>
);

<BasicCheckbox 
  value="custom"
  selected={selected}
  onChange={setSelected}
  icon={CustomIcon}
  labelSlot={CustomLabel}
/>
```

### Different Sizes

```jsx
<BasicCheckbox size="xs" label="Extra Small" value="xs" selected={selected} onChange={setSelected} />
<BasicCheckbox size="sm" label="Small" value="sm" selected={selected} onChange={setSelected} />
<BasicCheckbox size="md" label="Medium" value="md" selected={selected} onChange={setSelected} />
<BasicCheckbox size="lg" label="Large" value="lg" selected={selected} onChange={setSelected} />
<BasicCheckbox size="xl" label="Extra Large" value="xl" selected={selected} onChange={setSelected} />
```

### States

```jsx
<BasicCheckbox label="Normal" value="normal" selected={selected} onChange={setSelected} />
<BasicCheckbox disabled label="Disabled" value="disabled" selected={selected} onChange={setSelected} />
<BasicCheckbox readonly label="Readonly" value="readonly" selected={selected} onChange={setSelected} />
```

### Different Value Types

```jsx
<BasicCheckbox label="String Value" value="string-value" selected={selected} onChange={setSelected} />
<BasicCheckbox label="Number Value" value={42} selected={selected} onChange={setSelected} />
<BasicCheckbox label="Boolean Value" value={true} selected={selected} onChange={setSelected} />
```
