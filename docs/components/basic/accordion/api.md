# API

## BasicAccordion Component

The main accordion component that provides expandable/collapsible content sections.

### Props

| Prop            | Type        | Default             | Required | Description                                                        |
| --------------- | ----------- | ------------------- | -------- | ------------------------------------------------------------------ |
| `prepend`       | `function`  | -                   | No       | Function to render content before the title                        |
| `title`         | `string`    | `'Accordion Title'` | No       | Title text for the accordion header                                |
| `append`        | `function`  | -                   | No       | Function to render content after the title (replaces default icon) |
| `children`      | `ReactNode` | -                   | No       | Content to display when accordion is expanded                      |
| `initialIsOpen` | `boolean`   | `false`             | No       | Whether the accordion starts in open state                         |
| `onToggle`      | `function`  | -                   | No       | Callback function fired when accordion state changes               |
| `disabled`      | `boolean`   | `false`             | No       | Whether the accordion is disabled (prevents interaction)           |

### Event Handlers

#### onToggle

Callback function that is called whenever the accordion state changes.

**Signature:**

```typescript
onToggle: (isOpen: boolean) => void
```

**Parameters:**

- `isOpen` (`boolean`): The new open/closed state of the accordion (`true` = open, `false` = closed)

**Example:**

```jsx
<BasicAccordion
  title="My Accordion"
  onToggle={(isOpen) => {
    console.log('Accordion is now:', isOpen ? 'open' : 'closed');
  }}
>
  <p>Content here</p>
</BasicAccordion>
```

### Slot Functions

#### prepend

Function that renders content before the title in the accordion header.

**Signature:**

```typescript
prepend: (props: { isOpen: boolean; handleToggle: () => void; disabled: boolean }) => ReactNode;
```

**Parameters:**

- `isOpen` (`boolean`): Whether the accordion is currently open
- `handleToggle` (`function`): Function to toggle the accordion state
- `disabled` (`boolean`): Whether the accordion is disabled

**Example:**

```jsx
const customPrepend = ({ isOpen, handleToggle, disabled }) => (
  <div style={{ color: isOpen ? 'green' : 'red' }}>{isOpen ? '✓' : '✗'}</div>
);

<BasicAccordion title="Status" prepend={customPrepend}>
  <p>Content</p>
</BasicAccordion>;
```

#### append

Function that renders content after the title (replaces the default chevron icon).

**Signature:**

```typescript
append: (props: { isOpen: boolean; handleToggle: () => void; disabled: boolean }) => ReactNode;
```

**Parameters:**

- `isOpen` (`boolean`): Whether the accordion is currently open
- `handleToggle` (`function`): Function to toggle the accordion state
- `disabled` (`boolean`): Whether the accordion is disabled

**Example:**

```jsx
const customAppend = ({ isOpen }) => (
  <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
    <svg>...</svg>
  </div>
);

<BasicAccordion title="Custom Icon" append={customAppend}>
  <p>Content</p>
</BasicAccordion>;
```

### Accessibility Attributes

The component automatically applies the following accessibility attributes:

- `role="button"`: Indicates the header is a button
- `tabIndex`: `0` when enabled, `-1` when disabled
- `aria-expanded`: `true` when open, `false` when closed
- `aria-disabled`: `true` when disabled, `false` when enabled

### Keyboard Support

- **Enter**: Toggles the accordion
- **Space**: Toggles the accordion
- **Tab**: Navigates to/from the accordion (when enabled)

## Example Usage

### Basic Usage

```jsx
import BasicAccordion from '@/src/components/sharedComponents/BasicAccordion';

function MyComponent() {
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
import { useState } from 'react';
import BasicAccordion from '@/src/components/sharedComponents/BasicAccordion';

function AccordionWithCallback() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newIsOpen) => {
    setIsOpen(newIsOpen);
    console.log('Accordion is now:', newIsOpen ? 'open' : 'closed');
  };

  return (
    <BasicAccordion title="Accordion with Callback" onToggle={handleToggle}>
      <p>Current state: {isOpen ? 'Open' : 'Closed'}</p>
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
      marginRight: '8px',
      color: isOpen ? '#007bff' : '#666',
      fontSize: '14px',
    }}
  >
    {isOpen ? '▼' : '▶'}
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
      color: isOpen ? '#007bff' : '#666',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease',
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

### Both Prepend and Append

```jsx
const StatusPrepend = ({ isOpen }) => <div style={{ color: isOpen ? 'green' : 'red' }}>{isOpen ? '✓' : '✗'}</div>;

const BadgeAppend = ({ isOpen }) => (
  <div
    style={{
      padding: '4px 8px',
      backgroundColor: isOpen ? '#4CAF50' : '#f44336',
      color: 'white',
      borderRadius: '12px',
      fontSize: '10px',
    }}
  >
    {isOpen ? 'OPEN' : 'CLOSED'}
  </div>
);

<BasicAccordion title="Status Accordion" prepend={StatusPrepend} append={BadgeAppend}>
  <p>This accordion has both custom prepend and append content.</p>
</BasicAccordion>;
```

### Complex Content

```jsx
<BasicAccordion title="Complex Content">
  <div>
    <h4>Section Title</h4>
    <p>This is a paragraph with some content.</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <button onClick={() => alert('Button clicked!')}>Click me</button>
  </div>
</BasicAccordion>
```

### Multiple Accordions

```jsx
import { useState } from 'react';
import BasicAccordion from '@/src/components/sharedComponents/BasicAccordion';

function AccordionGroup() {
  const [openStates, setOpenStates] = useState({});

  const handleToggle = (id) => (isOpen) => {
    setOpenStates((prev) => ({
      ...prev,
      [id]: isOpen,
    }));
  };

  const accordionData = [
    { id: 1, title: 'First Section', content: 'Content for first section' },
    { id: 2, title: 'Second Section', content: 'Content for second section' },
    { id: 3, title: 'Third Section', content: 'Content for third section' },
  ];

  return (
    <div>
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
