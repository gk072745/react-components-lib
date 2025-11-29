# API

## BasicBreadCrumb Component

The main breadcrumb component that provides hierarchical navigation with customizable separators and spacing.

### Props

| Prop          | Type                                                    | Default    | Required | Description                               |
| ------------- | ------------------------------------------------------- | ---------- | -------- | ----------------------------------------- |
| `items`       | `array`                                                 | `[]`       | Yes      | Array of breadcrumb items                 |
| `separator`   | `string \| element \| function \| { render: function }` | `"/"`      | No       | Separator between breadcrumb items        |
| `gap`         | `string`                                                | `"0.5rem"` | No       | Gap between breadcrumb items              |
| `className`   | `string`                                                | `""`       | No       | Additional CSS classes                    |
| `style`       | `object`                                                | `{}`       | No       | Additional inline styles                  |
| `onItemClick` | `function`                                              | -          | No       | Custom click handler for breadcrumb items |

### Item Structure

Each item in the `items` array should have the following properties:

```js
{
  label: string,        // Required: Display text for the breadcrumb
  to: string | object,  // Optional: Navigation target (route or location)
  disabled: boolean     // Optional: Whether the item is clickable
}
```

### Event Handlers

#### onItemClick

Callback function that is called when a breadcrumb item is clicked.

**Signature:**

```js
onItemClick: (item, event) => void
```

**Parameters:**

- `item` (`object`): The breadcrumb item that was clicked (contains `label`, `to`, `disabled`)
- `event` (`object`): The click event object (React MouseEvent)

**Example:**

```jsx
<BasicBreadCrumb
  items={items}
  onItemClick={(item, event) => {
    console.log('Clicked:', item.label);
    // Custom navigation logic
  }}
/>
```

### Separator Types

The `separator` prop supports multiple types:

#### String Separator

```jsx
<BasicBreadCrumb items={items} separator="/" />
<BasicBreadCrumb items={items} separator="›" />
<BasicBreadCrumb items={items} separator="→" />
```

#### React Element Separator

```jsx
<BasicBreadCrumb items={items} separator={<span style={{ color: '#666' }}>→</span>} />
```

#### Function Separator

```jsx
<BasicBreadCrumb items={items} separator={() => <span style={{ color: '#999' }}>•</span>} />
```

#### Object with Render Method

```jsx
<BasicBreadCrumb
  items={items}
  separator={{
    render: () => <span style={{ color: '#ccc' }}>|</span>,
  }}
/>
```

### Accessibility Attributes

The component automatically applies the following accessibility attributes:

- `aria-label="Breadcrumb navigation"`: Identifies the navigation landmark
- Semantic `<nav>` element: Proper navigation structure
- Link components: Proper link semantics for clickable items

## Example Usage

### Basic Usage

```jsx
import BasicBreadCrumb from '@/src/components/sharedComponents/BasicBreadCrumb';

function MyComponent() {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Electronics', to: '/products/electronics' },
    { label: 'Smartphones', to: null, disabled: true },
  ];

  return <BasicBreadCrumb items={breadcrumbItems} separator="/" />;
}
```

### Custom Separator

```jsx
import BasicBreadCrumb from '@/src/components/sharedComponents/BasicBreadCrumb';

function CustomSeparatorExample() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: null, disabled: true },
  ];

  return (
    <div>
      <BasicBreadCrumb items={items} separator=" > " />
      <BasicBreadCrumb items={items} separator="›" gap="0.75rem" />
      <BasicBreadCrumb items={items} separator="→" gap="1rem" />
    </div>
  );
}
```

### SVG Separator

```jsx
import BasicBreadCrumb from '@/src/components/sharedComponents/BasicBreadCrumb';

function SVGSeparatorExample() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Current', to: null, disabled: true },
  ];

  return (
    <BasicBreadCrumb
      items={items}
      separator={
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      }
      gap="0.5rem"
    />
  );
}
```

### Function Separator

```jsx
import BasicBreadCrumb from '@/src/components/sharedComponents/BasicBreadCrumb';

function FunctionSeparatorExample() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Current', to: null, disabled: true },
  ];

  return (
    <BasicBreadCrumb
      items={items}
      separator={() => <span style={{ color: '#007bff', fontSize: '1.2rem' }}>→</span>}
      gap="0.5rem"
    />
  );
}
```

### Custom Click Handler

```jsx
import BasicBreadCrumb from '@/src/components/sharedComponents/BasicBreadCrumb';

function CustomClickExample() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Electronics', to: '/products/electronics' },
  ];

  const handleItemClick = (item, event) => {
    console.log('Navigating to:', item.to);
    // Custom navigation logic can be added here
  };

  return <BasicBreadCrumb items={items} onItemClick={handleItemClick} separator=" > " />;
}
```

### Disabled Items

```jsx
import BasicBreadCrumb from '@/src/components/sharedComponents/BasicBreadCrumb';

function DisabledItemsExample() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Electronics', to: '/products/electronics', disabled: true },
    { label: 'Smartphones', to: '/products/electronics/smartphones' },
  ];

  return <BasicBreadCrumb items={items} separator=" > " gap="1rem" />;
}
```

### Custom Styling

```jsx
import BasicBreadCrumb from '@/src/components/sharedComponents/BasicBreadCrumb';

function CustomStylingExample() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Electronics', to: '/products/electronics' },
  ];

  const customStyle = {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
  };

  return <BasicBreadCrumb items={items} separator=" > " style={customStyle} className="custom-breadcrumb" />;
}
```

### Custom Gap

```jsx
import BasicBreadCrumb from '@/src/components/sharedComponents/BasicBreadCrumb';

function CustomGapExample() {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'Current', to: null, disabled: true },
  ];

  return <BasicBreadCrumb items={items} separator="›" gap="1rem" />;
}
```
