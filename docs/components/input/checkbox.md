---
sidebar_position: 1
sidebar_label: 'Checkbox'
title: 'Checkbox Component'
description: 'Custom checkbox component with multiple sizes and states'
---

# Checkbox Component

A customizable checkbox component built with React and CSS.

## Basic Usage

```jsx
import { BasicCheckbox } from '@your-org/react-ui-components';

function MyForm() {
  return (
    <BasicCheckbox 
      label="I agree to terms" 
      onChange={(checked) => console.log(checked)} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the checkbox |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `onChange` | `function` | - | Callback when checkbox state changes |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `readonly` | `boolean` | `false` | Whether the checkbox is readonly |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the checkbox |

## SCSS Files & Styling

### Variables (`scss/abstracts/variables/_variables.scss`)

```scss
// Color Palette
$primary-color: #007bff;
$secondary-color: #6c757d;
$success-color: #28a745;
$danger-color: #dc3545;
$warning-color: #ffc107;
$info-color: #17a2b8;
$light-color: #f8f9fa;
$dark-color: #343a40;

// Neutral Colors
$white: #ffffff;
$black: #000000;
$gray-50: #f9fafb;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;

// Typography
$font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

// Transitions
$transition-base: 250ms ease-in-out;
```

### Mixins (`scss/abstracts/_mixins.scss`)

```scss
// Responsive Breakpoints
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'xs' {
    @media (max-width: 575.98px) {
      @content;
    }
  }
  @else if $breakpoint == 'sm' {
    @media (min-width: 576px) {
      @content;
    }
  }
  @else if $breakpoint == 'md' {
    @media (min-width: 768px) {
      @content;
    }
  }
  @else if $breakpoint == 'lg' {
    @media (min-width: 992px) {
      @content;
    }
  }
  @else if $breakpoint == 'xl' {
    @media (min-width: 1200px) {
      @content;
    }
  }
  @else if $breakpoint == 'xxl' {
    @media (min-width: 1400px) {
      @content;
    }
  }
  @else {
    @warn "Unknown breakpoint: #{$breakpoint}";
  }
}

// Flexbox Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Component Styles (`scss/components/_basic-checkbox.scss`)

```scss
.checkbox-container {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  color: #000000;
  position: relative;

  // Hidden input styles
  input {
    display: none;

    &:checked + .checkbox {
      background-color: var(--background-checked-color, #000000) !important;

      .inner-tick {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  // Disabled state
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  // Readonly state
  &.readonly {
    pointer-events: none;
  }

  // Custom checkbox
  .checkbox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.0625rem solid;
    border-radius: 0.125rem;
    background-color: transparent;
    transition: all $transition-base;

    .inner-tick {
      border-bottom-right-radius: 0.0625rem;
      width: 33%;
      height: 80%;
      border-bottom: 0.125rem solid;
      border-right: 0.125rem solid;
      transform: rotate(45deg);
      visibility: hidden;
      opacity: 0;
      transition: all $transition-base;
    }

    &:hover {
      background-color: var(--background-checked-color, #000000) !important;
    }

    &:active {
      opacity: 0.7;
    }
  }

  // Size variants
  &.xs {
    font-size: 0.625rem;
    .checkbox {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  &.sm {
    font-size: 0.75rem;
    .checkbox {
      width: 0.875rem;
      height: 0.875rem;
    }
  }

  &.md {
    font-size: 0.875rem;
    .checkbox {
      width: 1rem;
      height: 1rem;
    }
  }

  &.lg {
    font-size: 1rem;
    .checkbox {
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  &.xl {
    font-size: 1.125rem;
    .checkbox {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}
```

## Component Code

### React Component (`src/components/BasicCheckbox.jsx`)

```jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BasicCheckbox.scss';

const BasicCheckbox = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  readonly = false,
  size = 'md',
  className = '',
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    if (disabled || readonly) return;
    
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const containerClasses = [
    'checkbox-container',
    size,
    disabled ? 'disabled' : '',
    readonly ? 'readonly' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={containerClasses} {...props}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        readOnly={readonly}
      />
      <div className="checkbox">
        <div className="inner-tick"></div>
      </div>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

BasicCheckbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string
};

export default BasicCheckbox;
```

### TypeScript Version (`src/components/BasicCheckbox.tsx`)

```tsx
import React, { useState } from 'react';
import './BasicCheckbox.scss';

interface BasicCheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  readonly?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const BasicCheckbox: React.FC<BasicCheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  readonly = false,
  size = 'md',
  className = '',
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readonly) return;
    
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const containerClasses = [
    'checkbox-container',
    size,
    disabled ? 'disabled' : '',
    readonly ? 'readonly' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={containerClasses} {...props}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        readOnly={readonly}
      />
      <div className="checkbox">
        <div className="inner-tick"></div>
      </div>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default BasicCheckbox;
```

## Interactive Demos

### Basic Checkbox Demo

<div className="demo-section">
  <h3>Basic Checkbox</h3>
  <div className="demo-container">
    <label className="checkbox-container md">
      <input type="checkbox" />
      <div className="checkbox">
        <div className="inner-tick"></div>
      </div>
      <span className="checkbox-label">I agree to terms and conditions</span>
    </label>
  </div>
</div>

### Size Variants Demo

<div className="demo-section">
  <h3>Size Variants</h3>
  <div className="demo-container">
    <div className="demo-row">
      <label className="checkbox-container xs">
        <input type="checkbox" />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Extra Small</span>
      </label>
    </div>
    <div className="demo-row">
      <label className="checkbox-container sm">
        <input type="checkbox" />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Small</span>
      </label>
    </div>
    <div className="demo-row">
      <label className="checkbox-container md">
        <input type="checkbox" />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Medium (Default)</span>
      </label>
    </div>
    <div className="demo-row">
      <label className="checkbox-container lg">
        <input type="checkbox" />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Large</span>
      </label>
    </div>
    <div className="demo-row">
      <label className="checkbox-container xl">
        <input type="checkbox" />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Extra Large</span>
      </label>
    </div>
  </div>
</div>

### States Demo

<div className="demo-section">
  <h3>States</h3>
  <div className="demo-container">
    <div className="demo-row">
      <label className="checkbox-container md">
        <input type="checkbox" />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Normal State</span>
      </label>
    </div>
    <div className="demo-row">
      <label className="checkbox-container md disabled">
        <input type="checkbox" disabled />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Disabled State</span>
      </label>
    </div>
    <div className="demo-row">
      <label className="checkbox-container md readonly">
        <input type="checkbox" readOnly />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Readonly State</span>
      </label>
    </div>
  </div>
</div>

### Interactive Demo

<div className="demo-section">
  <h3>Interactive Demo</h3>
  <div className="demo-container">
    <div className="demo-controls">
      <label>
        <input type="checkbox" id="demo-size-xs" name="demo-size" value="xs" />
        Extra Small
      </label>
      <label>
        <input type="checkbox" id="demo-size-sm" name="demo-size" value="sm" />
        Small
      </label>
      <label>
        <input type="checkbox" id="demo-size-md" name="demo-size" value="md" checked />
        Medium
      </label>
      <label>
        <input type="checkbox" id="demo-size-lg" name="demo-size" value="lg" />
        Large
      </label>
      <label>
        <input type="checkbox" id="demo-size-xl" name="demo-size" value="xl" />
        Extra Large
      </label>
    </div>
    <div className="demo-preview">
      <label className="checkbox-container md" id="demo-checkbox">
        <input type="checkbox" />
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
        <span className="checkbox-label">Interactive Checkbox</span>
      </label>
    </div>
  </div>
</div>

## Examples

### Different Sizes

```jsx
<BasicCheckbox size="xs" label="Extra Small" />
<BasicCheckbox size="sm" label="Small" />
<BasicCheckbox size="md" label="Medium" />
<BasicCheckbox size="lg" label="Large" />
<BasicCheckbox size="xl" label="Extra Large" />
```

### States

```jsx
<BasicCheckbox label="Normal" />
<BasicCheckbox label="Disabled" disabled />
<BasicCheckbox label="Readonly" readonly />
```

## Styling

The checkbox uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #007bff;
  --transition-base: 250ms ease-in-out;
}
```

## Accessibility

The checkbox component includes:

- **Proper labeling**: Uses semantic `<label>` element
- **Keyboard navigation**: Tab and Space key support
- **Screen reader support**: Proper ARIA attributes
- **Focus management**: Visible focus indicators
- **State announcements**: Screen readers announce checked/unchecked states
