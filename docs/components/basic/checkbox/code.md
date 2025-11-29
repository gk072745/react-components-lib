# Code

## Dependencies

This component requires:

- React 18+
- PropTypes for prop validation
- SCSS for styling

## Component Files

### React Component

```
src/
├── components/
    └── sharedComponents/
        └── BasicCheckbox.jsx
```

- **Path**: `src/components/sharedComponents/BasicCheckbox.jsx`
- **Description**: Main checkbox component implementation

```jsx
import React, { useMemo, useCallback, memo } from 'react';
import PropTypes from 'prop-types';

const BasicCheckbox = memo(
  ({
    size = 'md',
    variant = 'default',
    disabled = false,
    readonly = false,
    label = '',
    value = '',
    selected = [],
    valueComparator = (a, b) => Array.isArray(a) && a.includes(b),
    allItems = [],
    valueKey = '',
    onChange,
    children,
    icon: IconSlot,
    labelSlot: LabelSlot,
  }) => {
    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const internalValue = useMemo(() => {
      return Array.isArray(selected) ? selected : [];
    }, [selected]);

    const isChecked = useMemo(() => {
      if (!internalValue?.length) return false;

      if (value === 'selectAll') {
        // Check if all items from allItems are present in internalValue
        if (internalValue?.length !== allItems?.length) return false;
        return allItems.every((item) => {
          const itemValue = valueKey ? item[valueKey] : item;
          return internalValue.includes(itemValue);
        });
      }

      return valueComparator(internalValue, value);
    }, [internalValue, value, allItems, valueKey, valueComparator]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = useCallback(
      (event) => {
        // Skip if disabled or readonly
        if (disabled || readonly) return;

        const isSelected = isChecked;
        const currentValues = Array.isArray(internalValue) ? internalValue : [];

        let newValue;
        if (value === 'selectAll') {
          // If selectAll is clicked and not all items are selected, select all
          // Otherwise, empty the array
          if (currentValues.length < allItems.length) {
            if (valueKey) {
              newValue = allItems.map((item) => item[valueKey]);
            } else {
              newValue = [...allItems];
            }
          } else {
            newValue = [];
          }
        } else {
          // Normal checkbox behavior
          if (isSelected) {
            newValue = currentValues.filter((v) => v !== value);
          } else {
            newValue = [...currentValues, value];
          }
        }

        // Emit events (React equivalent of Vue emits)
        onChange?.(newValue, value, event);
      },
      [disabled, readonly, isChecked, internalValue, value, allItems, valueKey, onChange]
    );

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ['checkbox-container', size, variant];
      if (disabled) classes.push('disabled');
      if (readonly) classes.push('readonly');
      return classes.join(' ');
    }, [size, variant, disabled, readonly]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderIcon = useMemo(() => {
      if (IconSlot) {
        return <IconSlot isChecked={isChecked} />;
      }

      return (
        <div className="checkbox">
          <div className="inner-tick"></div>
        </div>
      );
    }, [IconSlot, isChecked]);

    const renderLabel = useMemo(() => {
      if (LabelSlot) {
        return <LabelSlot isChecked={isChecked} />;
      }

      return label;
    }, [LabelSlot, isChecked, label]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <label className={containerClass}>
        <input
          type="checkbox"
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={handleClick}
          style={{ display: 'none' }}
        />
        {renderIcon}
        {renderLabel}
        {children}
      </label>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicCheckbox.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['default', 'info']),
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  selected: PropTypes.array,
  valueComparator: PropTypes.func,
  allItems: PropTypes.array,
  valueKey: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.elementType,
  labelSlot: PropTypes.elementType,
};

BasicCheckbox.displayName = 'BasicCheckbox';

export default BasicCheckbox;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-checkbox.scss
```

- **Path**: `src/assets/scss/components/_basic-checkbox.scss`
- **Description**: Checkbox component styles

**Note:** This component uses SCSS variables from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// BASIC CHECKBOX COMPONENT
// =============================================================================
// This file contains all styles for the BasicCheckbox component.
// The checkbox supports multiple sizes, disabled/readonly states, and custom styling.
@use '../abstracts' as *;

.checkbox-container {
  // =============================================================================
  // BASIC CONTAINER PROPERTIES
  // =============================================================================
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  & {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    user-select: none;
    color: #000000;
    position: relative;
  }

  // =============================================================================
  // HIDDEN INPUT STYLES
  // =============================================================================
  // Hide the actual checkbox input but keep it accessible
  input {
    display: none;

    // =============================================================================
    // CHECKED STATE STYLES
    // =============================================================================
    // When checkbox is checked, style the custom checkbox
    &:checked + .checkbox {
      .inner-tick {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  // =============================================================================
  // DISABLED STATE STYLES
  // =============================================================================
  // When checkbox is disabled, reduce opacity and prevent interactions
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  // =============================================================================
  // READONLY STATE STYLES
  // =============================================================================
  // When checkbox is readonly, prevent interactions but maintain visibility
  &.readonly {
    pointer-events: none;
  }

  // =============================================================================
  // CUSTOM CHECKBOX STYLES
  // =============================================================================
  // The visual checkbox element that replaces the default input
  .checkbox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.0625rem solid;
    border-radius: 0.125rem;
    background-color: transparent;
    transition: all $transition-base;

    // =============================================================================
    // INNER TICK STYLES
    // =============================================================================
    // The checkmark/tick that appears when checkbox is selected
    .inner-tick {
      border-bottom-right-radius: 0.0625rem;
      width: 33%;
      height: 80%;
      border-bottom: 0.125rem solid;
      border-right: 0.125rem solid;
      transform: rotate(45deg) translate(-10%, -10%);
      visibility: hidden;
      opacity: 0;
      transition: all $transition-base;
    }

    // =============================================================================
    // ACTIVE STATE
    // =============================================================================
    // Visual feedback when clicking
    &:active {
      opacity: 0.7;
    }
  }

  // =============================================================================
  // SIZE VARIANTS
  // =============================================================================
  // Different sizes for different use cases

  // Extra Small Size
  &.xs {
    font-size: 0.625rem;

    .checkbox {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  // Small Size
  &.sm {
    font-size: 0.75rem;

    .checkbox {
      width: 0.875rem;
      height: 0.875rem;
    }
  }

  // Medium Size (Default)
  &.md {
    font-size: 0.875rem;

    .checkbox {
      width: 1rem;
      height: 1rem;
    }
  }

  // Large Size
  &.lg {
    font-size: 1rem;

    .checkbox {
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  // Extra Large Size
  &.xl {
    font-size: 1.125rem;

    .checkbox {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  // =============================================================================
  // VARIANT STYLES
  // =============================================================================
  // Different color variants for different use cases

  // Default Variant
  &.default {
    color: #000000;

    .checkbox {
      border-color: #000000;

      &:hover {
        background-color: #000000;
      }
    }

    input:checked + .checkbox {
      background-color: #000000;
      border-color: #000000;

      .inner-tick {
        border-color: #ffffff;
      }
    }
  }

  // Info Variant
  &.info {
    color: #0c63e4;

    .checkbox {
      border-color: #2196f3;

      &:hover {
        background-color: #2196f3;
      }
    }

    input:checked + .checkbox {
      background-color: #2196f3;
      border-color: #2196f3;

      .inner-tick {
        border-color: #ffffff;
      }
    }
  }
}
```

### SCSS Abstracts

```
src/
├── assets/
    └── scss/
        └── abstracts/
            └── index.scss
```

- **Path**: `src/assets/scss/abstracts/index.scss`
- **Description**: Global SCSS variables, mixins, and functions

**Note:** The checkbox component uses variables from the abstracts directory. Specifically, it uses the `$transition-base` variable for transitions. These are imported via the abstracts index file.

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward 'variables';

// functions
@forward 'functions';

// mixins
@forward 'mixins';

// breakpoints
@forward 'breakpoints';
```

**Note:** The checkbox component uses variables, functions, mixins, and breakpoints from the abstracts directory. These are imported via the abstracts index file.
