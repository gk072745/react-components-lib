# API

## BasicSwitch Component

A flexible toggle switch component that allows users to switch between on and off states with extensive customization options.

### Props

| Prop                | Type                                   | Default   | Required | Description                                                                    |
| ------------------- | -------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `value`             | `boolean`                              | `false`   | No       | Current on/off state                                                           |
| `variant`           | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | No    | Color variant of the switch                                                   |
| `disabled`          | `boolean`                              | `false`   | No       | Whether the switch is disabled                                                 |
| `readonly`          | `boolean`                              | `false`   | No       | Whether the switch is readonly                                                 |
| `size`              | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'xl'`    | No       | Size variant of the switch                                                     |
| `label`             | `string`                               | `''`      | No       | Label text for the switch                                                      |
| `labelPosition`     | `'left' \| 'right'`                    | `'right'` | No       | Position of the label relative to the switch                                   |
| `inset`             | `boolean`                              | `false`   | No       | Whether to use inset variant (compact styling with dot shadow)                 |
| `dotLabels`         | `object`                               | `null`    | No       | Object with `{ true: string, false: string }` for dot label text               |
| `className`         | `string`                               | `''`      | No       | Additional CSS classes for the container                                        |
| `style`             | `object`                               | `{}`      | No       | Additional inline styles for the container                                      |
| `onChange`          | `function`                             | -         | No       | Callback when the switch value changes                                          |

### Event Handlers

#### onChange

Callback function that is called when the switch value changes.

**Signature:**

```js
onChange: (value) => void
```

**Parameters:**

- `value` (boolean): The new switch state (true for on, false for off)

**Note:** The callback is triggered when the switch is clicked or toggled via keyboard.

### Dot Labels

The `dotLabels` prop allows you to display text inside the switch dot:

```jsx
<BasicSwitch
  dotLabels={{ true: "ON", false: "OFF" }}
  value={isOn}
  onChange={setIsOn}
/>
```

### Size Variants

| Size | Description                    |
| ---- | ------------------------------ |
| `xs` | Extra small                    |
| `sm` | Small                          |
| `md` | Medium                         |
| `lg` | Large                          |
| `xl` | Extra large (default)          |

### Color Variants

| Variant   | Description                    |
| --------- | ------------------------------ |
| `default` | Default blue theme             |
| `primary` | Primary blue theme             |
| `success` | Success green theme            |
| `warning` | Warning yellow theme           |
| `danger`  | Danger red theme               |
| `info`    | Info cyan theme                |

### Inset Variant

The `inset` prop creates a more compact switch with the dot appearing to slide inside the track:

```jsx
<BasicSwitch inset={true} value={isOn} onChange={setIsOn} />
```

### Label Positions

Labels can be positioned on either side of the switch:

- `'left'`: Label appears before the switch
- `'right'`: Label appears after the switch (default)

### Accessibility

The component provides:

- Proper form semantics with hidden checkbox input
- Keyboard navigation support (Space/Enter to toggle)
- Focus-visible styles for keyboard navigation
- Screen reader support via native checkbox semantics
- Disabled and readonly state indicators
