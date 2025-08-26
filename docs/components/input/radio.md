---
sidebar_position: 2
sidebar_label: 'Radio'
title: 'Radio Component'
description: 'Custom radio button component with multiple sizes and colors'
---

# Radio Component

A customizable radio button component built with React and CSS.

## Basic Usage

```jsx
import { BasicRadio } from '@your-org/react-ui-components';

function MyForm() {
  return (
    <BasicRadio 
      name="gender" 
      value="male" 
      label="Male" 
      onChange={(value) => console.log(value)} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Name attribute for the radio group |
| `value` | `string` | - | Value of the radio button |
| `label` | `string` | - | Label text for the radio button |
| `checked` | `boolean` | `false` | Whether the radio is checked |
| `onChange` | `function` | - | Callback when radio state changes |
| `disabled` | `boolean` | `false` | Whether the radio is disabled |
| `readonly` | `boolean` | `false` | Whether the radio is readonly |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the radio button |
| `color` | `'default' \| 'primary' \| 'success' \| 'danger'` | `'default'` | Color variant |

## Examples

### Different Sizes

```jsx
<BasicRadio size="xs" name="size" value="xs" label="Extra Small" />
<BasicRadio size="sm" name="size" value="sm" label="Small" />
<BasicRadio size="md" name="size" value="md" label="Medium" />
<BasicRadio size="lg" name="size" value="lg" label="Large" />
<BasicRadio size="xl" name="size" value="xl" label="Extra Large" />
```

### Color Variants

```jsx
<BasicRadio color="default" name="color" value="default" label="Default" />
<BasicRadio color="primary" name="color" value="primary" label="Primary" />
<BasicRadio color="success" name="color" value="success" label="Success" />
<BasicRadio color="danger" name="color" value="danger" label="Danger" />
```

### States

```jsx
<BasicRadio name="state" value="normal" label="Normal" />
<BasicRadio name="state" value="disabled" label="Disabled" disabled />
<BasicRadio name="state" value="readonly" label="Readonly" readonly />
```

## Radio Groups

```jsx
function RadioGroup() {
  const [selected, setSelected] = useState('option1');
  
  return (
    <div>
      <BasicRadio 
        name="options" 
        value="option1" 
        label="Option 1" 
        checked={selected === 'option1'}
        onChange={() => setSelected('option1')} 
      />
      <BasicRadio 
        name="options" 
        value="option2" 
        label="Option 2" 
        checked={selected === 'option2'}
        onChange={() => setSelected('option2')} 
      />
    </div>
  );
}
```
