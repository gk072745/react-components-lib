# API

## BasicTabs Component

A flexible tabs component that allows users to navigate between different sections with extensive customization options.

### Props

| Prop                | Type                                   | Default   | Required | Description                                                                    |
| ------------------- | -------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `tabItems`          | `array`                                | `[]`      | No       | Array of tab item objects with `value`, `name`, `icon`, `prepend`, `append`     |
| `selected`          | `string \| number \| array`             | `null`    | No       | Selected tab value(s) - array for multiple selection                            |
| `multiple`          | `boolean`                              | `false`   | No       | Whether multiple tabs can be selected                                          |
| `isLabeli18String`  | `boolean`                              | `true`    | No       | Whether to treat `name` as i18n key (vs plain text)                             |
| `singlePacked`      | `boolean`                              | `false`   | No       | Whether to use single packed style (grouped appearance)                        |
| `variant`           | `'default' \| 'dark-gold'`             | `'default'` | No     | Color variant of the tabs                                                      |
| `bottomLineStyle`   | `boolean`                              | `false`   | No       | Whether to use bottom line style with animated indicator                        |
| `onItemClicked`     | `function`                             | -         | No       | Callback when a tab is clicked                                                 |
| `children`          | `function`                             | -         | No       | Render function for custom slots (prepend, tab-icon, append)                   |
| `className`         | `string`                               | `''`      | No       | Additional CSS classes for the container                                       |
| `style`             | `object`                               | `{}`      | No       | Additional inline styles for the container                                      |

### Tab Item Object

Each item in the `tabItems` array should have the following structure:

| Property | Type                     | Required | Description                                    |
| -------- | ------------------------ | -------- | ---------------------------------------------- |
| `value`  | `string \| number`        | ✅       | Unique identifier for the tab                  |
| `name`   | `string`                 | ❌       | Display text for the tab (or i18n key)        |
| `icon`   | `string`                 | ❌       | HTML string for icon                           |
| `prepend`| `string`                 | ❌       | HTML string for prepend slot                   |
| `append` | `string`                 | ❌       | HTML string for append slot                    |

### Event Handlers

#### onItemClicked

Callback function that is called when a tab is clicked.

**Signature:**

```js
onItemClicked: (item) => void
```

**Parameters:**

- `item` (object): The clicked tab item object

**Note:** In multiple selection mode, you need to handle the selection logic in this callback.

### Children Render Function

The `children` prop accepts a render function that provides custom slots:

**Signature:**

```js
children: ({ name, item }) => ReactNode
```

**Parameters:**

- `name` (string): Slot name - `'prepend'`, `'tab-icon'`, or `'append'`
- `item` (object): The current tab item object

**Example:**

```jsx
<BasicTabs tabItems={items} selected={selected}>
  {({ name, item }) => {
    if (name === 'prepend' && item.value === 'list') {
      return <span>NEW</span>;
    }
    if (name === 'tab-icon') {
      return <CustomIcon />;
    }
    return null;
  }}
</BasicTabs>
```

### Variants

| Variant    | Description                    |
| ---------- | ------------------------------ |
| `default`  | Default black/white theme      |
| `dark-gold`| Dark gold theme                |

### Selection Modes

#### Single Selection

```jsx
const [selected, setSelected] = useState('home');

<BasicTabs
  tabItems={items}
  selected={selected}
  onItemClicked={(item) => setSelected(item.value)}
/>
```

#### Multiple Selection

```jsx
const [selected, setSelected] = useState(['home']);

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
```

### Visual Styles

#### Default Style

Standard tabs with borders and background colors.

#### Single Packed Style

Tabs are grouped together with shared borders:

```jsx
<BasicTabs singlePacked={true} tabItems={items} selected={selected} />
```

#### Bottom Line Style

Tabs with an animated bottom line indicator:

```jsx
<BasicTabs bottomLineStyle={true} tabItems={items} selected={selected} />
```

### Accessibility

The component provides:

- Keyboard navigation support
- Proper semantic structure
- Screen reader compatibility
- Focus management
