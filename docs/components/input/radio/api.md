# API

## Props

| Prop              | Type                                   | Default      | Description                           |
| ----------------- | -------------------------------------- | ------------ | ------------------------------------- |
| `size`            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'`       | Size of the radio button              |
| `disabled`        | `boolean`                              | `false`      | Whether the radio is disabled         |
| `readonly`        | `boolean`                              | `false`      | Whether the radio is readonly         |
| `toggle`          | `boolean`                              | `false`      | Whether the radio can be toggled off  |
| `label`           | `string`                               | `''`         | Label text for the radio              |
| `value`           | `string \| number \| boolean`          | **Required** | Value of the radio option             |
| `multiple`        | `boolean`                              | `false`      | Whether multiple selection is allowed |
| `modelValue`      | `string \| number \| boolean \| array` | -            | Current selected value(s)             |
| `selected`        | `string \| number \| boolean \| array` | -            | Alternative to modelValue             |
| `valueComparator` | `function`                             | -            | Custom function to compare values     |
| `color`           | `string`                               | `'green'`    | Color of the radio button             |
| `labelColor`      | `string`                               | `'#000'`     | Color of the label text               |
| `className`       | `string`                               | `''`         | Additional CSS classes                |
| `style`           | `object`                               | `{}`         | Additional inline styles              |
| `children`        | `node \| function`                     | -            | Custom radio icon or render function  |

## Events

| Event                | Parameters                         | Description                         |
| -------------------- | ---------------------------------- | ----------------------------------- |
| `onChange`           | `(newValue, selectedValue, event)` | Called when radio selection changes |
| `onUpdateModelValue` | `(newValue)`                       | Called to update the model value    |

## Usage Examples

### Basic Usage

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  label="Option 1"
/>
```

### Multiple Selection

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValues}
  onUpdateModelValue={setSelectedValues}
  multiple={true}
  label="Option 1"
/>
```

### Custom Styling

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  label="Custom Radio"
  color="#007bff"
  size="lg"
  labelColor="#333"
/>
```

### Toggle Mode

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  label="Toggle Option"
  toggle={true}
/>
```

### Custom Icon

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  label="Custom Icon"
>
  {({ isChecked }) => (
    <div className={`custom-radio ${isChecked ? "checked" : ""}`}>
      {isChecked && <span>✓</span>}
    </div>
  )}
</BasicRadio>
```

### Disabled State

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  label="Disabled Option"
  disabled={true}
/>
```

### Readonly State

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  label="Readonly Option"
  readonly={true}
/>
```
