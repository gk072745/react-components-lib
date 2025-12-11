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
        └── BasicSwitch.jsx
```

- **Path**: `src/components/sharedComponents/BasicSwitch.jsx`
- **Description**: Main switch component implementation

```jsx
import React, { useMemo, useCallback, memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BasicSwitch = memo(
  ({
    value,
    variant = 'default',
    disabled = false,
    readonly = false,
    size = 'xl',
    label = '',
    labelPosition = 'right',
    inset = false,
    dotLabels = null,
    className = '',
    style = {},
    onChange,
    ...props
  }) => {
    // =============================================================================
    // STATE
    // =============================================================================
    const [internalValue, setInternalValue] = useState(() => value ?? false);

    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================

    const currentDotLabel = useMemo(() => {
      return dotLabels?.[internalValue] || '';
    }, [dotLabels, internalValue]);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSwitchChange = useCallback(() => {
      if (readonly || disabled) return;

      const newValue = !internalValue;
      setInternalValue(newValue);

      onChange?.(newValue);
    }, [readonly, disabled, internalValue, onChange]);

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ['switch-container', size, variant];

      if (disabled) classes.push('disabled');
      if (readonly) classes.push('readonly');
      if (internalValue) classes.push('checked');
      if (inset) classes.push('inset');
      if (className) classes.push(className);

      return classes.join(' ');
    }, [size, variant, disabled, readonly, internalValue, inset, className]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderLabel = useCallback(
      (position) => {
        if (!label || labelPosition !== position) return null;

        return <span className={`${position}-label`}>{label}</span>;
      },
      [label, labelPosition]
    );

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <label className={containerClass} {...props}>
        {renderLabel('left')}

        <input
          type="checkbox"
          checked={internalValue}
          hidden
          readOnly={readonly}
          disabled={disabled}
          onChange={handleSwitchChange}
        />

        <span className="switch-slider" style={style}>
          {currentDotLabel}
          <span className="switch-slider-dot" />
        </span>

        {renderLabel('right')}
      </label>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicSwitch.propTypes = {
  value: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  inset: PropTypes.bool,
  dotLabels: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

BasicSwitch.displayName = 'BasicSwitch';

export default BasicSwitch;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-switch.scss
```

- **Path**: `src/assets/scss/components/_basic-switch.scss`
- **Description**: Switch component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// BASIC SWITCH COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

.switch-container {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  *,
  ::before *,
  ::after * {
    box-sizing: border-box;
  }

  // Focus styles for accessibility
  &:focus-visible {
    outline: 0.125rem solid #2196f3;
    outline-offset: 0.125rem;
  }

  // =============================================================================
  // INPUT
  // =============================================================================

  input {
    display: none;

    &:checked + .switch-slider {
      justify-content: flex-start;

      .switch-slider-dot {
        transform: translateX(-100%);
        margin: 0;
      }
    }
  }

  // =============================================================================
  // SWITCH SLIDER
  // =============================================================================

  .switch-slider {
    position: relative;
    border-radius: 1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: flex-end;

    .switch-slider-dot {
      position: absolute;
      left: 0;
      border-radius: 50%;
      transition: all 0.3s ease;
      transform: translateX(0);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.5rem;
      overflow: hidden;
    }
  }

  // =============================================================================
  // INSET VARIANT
  // =============================================================================

  &.inset {
    input + .switch-slider .switch-slider-dot {
      transform: translateX(-50%);
      left: 0;
      margin: 0;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }

    input:checked + .switch-slider .switch-slider-dot {
      left: calc(100%);
      margin: 0;
    }
  }

  // =============================================================================
  // LABELS
  // =============================================================================

  .left-label,
  .right-label {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // =============================================================================
  // DISABLED AND READONLY STATES
  // =============================================================================

  &.disabled {
    opacity: 0.6;
    cursor: default;
    pointer-events: none;
  }

  &.readonly {
    cursor: default;
    pointer-events: none;
  }

  // =============================================================================
  // SIZE VARIANTS
  // =============================================================================

  &.xs {
    font-size: 0.75rem;

    .switch-slider {
      min-width: 2.5rem;
      height: 1.25rem;
      font-size: 0.375rem;
      padding-inline: 0.25rem;

      .switch-slider-dot {
        width: 1rem;
        height: 1rem;
        margin: 0 0.1875rem;
      }
    }

    input:checked + .switch-slider .switch-slider-dot {
      left: calc(100% - 0.1875rem);
    }

    &.inset {
      .switch-slider {
        min-width: 1.75rem;
        height: 0.75rem;
        margin-right: 0.5rem;

        .switch-slider-dot {
          width: 1rem;
          height: 1rem;
          margin: 0 0.1875rem;
        }
      }
    }
  }

  &.sm {
    font-size: 0.875rem;

    .switch-slider {
      min-width: 3rem;
      height: 1.5rem;
      font-size: 0.4375rem;
      padding-inline: 0.3125rem;

      .switch-slider-dot {
        width: 1.25rem;
        height: 1.25rem;
        margin: 0 0.1875rem;
      }
    }

    input:checked + .switch-slider .switch-slider-dot {
      left: calc(100% - 0.1875rem);
    }

    &.inset {
      .switch-slider {
        min-width: 2.125rem;
        height: 0.875rem;
        margin-right: 0.5rem;

        .switch-slider-dot {
          width: 1.125rem;
          height: 1.125rem;
          margin: 0 0.1875rem;
        }
      }
    }
  }

  &.md {
    font-size: 1rem;

    .switch-slider {
      min-width: 4rem;
      height: 2rem;
      font-size: 0.5625rem;
      padding-inline: 0.375rem;

      .switch-slider-dot {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 0.25rem;
      }
    }

    input:checked + .switch-slider .switch-slider-dot {
      left: calc(100% - 0.25rem);
    }

    &.inset {
      .switch-slider {
        min-width: 2.5rem;
        height: 1rem;
        margin-right: 0.625rem;
        padding-inline: 0.25rem;

        .switch-slider-dot {
          width: 1.25rem;
          height: 1.25rem;
          margin: 0 0.25rem;
        }
      }
    }
  }

  &.lg {
    font-size: 1.125rem;

    .switch-slider {
      min-width: 5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
      font-size: 0.6875rem;
      padding-inline: 0.5rem;

      .switch-slider-dot {
        width: 2rem;
        height: 2rem;
        margin: 0 0.375rem;
      }
    }

    input:checked + .switch-slider .switch-slider-dot {
      left: calc(100% - 0.375rem);
    }

    &.inset {
      .switch-slider {
        min-width: 3.125rem;
        height: 1rem;
        margin-right: 0.625rem;
        padding-inline: 0.375rem;

        .switch-slider-dot {
          width: 1.5rem;
          height: 1.5rem;
          margin: 0 0.375rem;
        }
      }
    }
  }

  &.xl {
    font-size: 1.25rem;

    .switch-slider {
      min-width: 6rem;
      height: 3rem;
      border-radius: 1.5rem;
      font-size: 0.875rem;
      padding-inline: 0.5rem;

      .switch-slider-dot {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0 0.375rem;
      }
    }

    input:checked + .switch-slider .switch-slider-dot {
      left: calc(100% - 0.375rem);
    }

    &.inset {
      .switch-slider {
        min-width: 3.5rem;
        height: 1.25rem;
        margin-right: 0.625rem;
        font-size: 0.75rem;

        .switch-slider-dot {
          width: 1.75rem;
          height: 1.75rem;
          margin: 0 0.375rem;
        }
      }
    }
  }

  // =============================================================================
  // VARIANT STYLES
  // =============================================================================

  // Default Variant
  &.default {
    .switch-slider {
      background-color: #ced4da;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }

    input:checked + .switch-slider {
      background-color: #007bff;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }
  }

  // Primary Variant
  &.primary {
    .switch-slider {
      background-color: #ced4da;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }

    input:checked + .switch-slider {
      background-color: #007bff;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }
  }

  // Success Variant
  &.success {
    .switch-slider {
      background-color: #ced4da;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }

    input:checked + .switch-slider {
      background-color: #28a745;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }
  }

  // Warning Variant
  &.warning {
    .switch-slider {
      background-color: #ced4da;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }

    input:checked + .switch-slider {
      background-color: #ffc107;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }
  }

  // Danger Variant
  &.danger {
    .switch-slider {
      background-color: #ced4da;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }

    input:checked + .switch-slider {
      background-color: #dc3545;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }
  }

  // Info Variant
  &.info {
    .switch-slider {
      background-color: #ced4da;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }

    input:checked + .switch-slider {
      background-color: #17a2b8;

      .switch-slider-dot {
        background-color: #ffffff;
      }
    }
  }

  // Inset Variant - Slider Colors
  &.inset {
    .switch-slider {
      .switch-slider-dot {
        background-color: #e0e0e0;
      }
    }

    input:checked + .switch-slider {
      .switch-slider-dot {
        background-color: #e0e0e0;
      }
    }
  }
}
```
