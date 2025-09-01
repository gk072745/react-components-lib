# Code

## Dependencies

- React 18+
- SCSS for styling
- PropTypes for prop validation

## Files

### Component File

- **Path**: `src/components/sharedComponents/BasicRadio.jsx`
- **Description**: Main radio component implementation

```jsx
import React, { useMemo, useCallback, memo } from "react";
import PropTypes from "prop-types";

const BasicRadio = memo(
  ({
    size = "sm",
    disabled = false,
    readonly = false,
    toggle = false,
    label = "",
    value,
    multiple = false,
    modelValue,
    selected,
    valueComparator,
    color = "green",
    labelColor = "#000",
    className = "",
    style = {},
    onChange,
    onUpdateModelValue,
    children,
    ...props
  }) => {
    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const internalValue = useMemo(() => {
      let val = modelValue || selected;
      if (multiple) {
        val = modelValue?.length ? modelValue : selected;
      }
      return multiple ? (Array.isArray(val) ? val : []) : val || "";
    }, [modelValue, selected, multiple]);

    const isChecked = useMemo(() => {
      if (internalValue === "" && value === "") return false;
      return valueComparator
        ? valueComparator(internalValue, value, multiple)
        : multiple
        ? Array.isArray(internalValue) && internalValue.includes(value)
        : internalValue === value;
    }, [internalValue, value, multiple, valueComparator]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = useCallback(
      (event) => {
        // Skip if disabled or readonly
        if (disabled || readonly) return;

        // Prevent default behavior and stop propagation to avoid double triggering
        event.preventDefault();
        event.stopPropagation();

        // Handle multiple selection mode
        if (multiple) {
          const isSelected = isChecked;
          const currentValues = Array.isArray(internalValue)
            ? internalValue
            : [];

          let newValue;
          if (isSelected) {
            // Only allow removing all options if toggle is true
            if (toggle || currentValues.length > 1) {
              newValue = currentValues.filter((v) => v !== value);
            } else {
              // Keep the current value if it's the only one and toggle is false
              newValue = currentValues;
            }
          } else {
            newValue = [...currentValues, value];
          }

          if (onUpdateModelValue) onUpdateModelValue(newValue);
          if (onChange) onChange(newValue, value, event);
        }
        // Handle single selection mode
        else {
          const isSelected = isChecked;
          const newValue = toggle && isSelected ? "" : value;
          if (onUpdateModelValue) onUpdateModelValue(newValue);
          if (onChange) onChange(newValue, value, event);
        }
      },
      [
        disabled,
        readonly,
        multiple,
        isChecked,
        internalValue,
        toggle,
        value,
        onUpdateModelValue,
        onChange,
      ]
    );

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ["radio-container", size];
      if (disabled) classes.push("disabled");
      if (readonly) classes.push("readonly");
      if (className) classes.push(className);
      return classes.join(" ");
    }, [size, disabled, readonly, className]);

    const containerStyle = useMemo(
      () => ({
        color: labelColor,
        ...style,
      }),
      [labelColor, style]
    );

    const radioStyle = useMemo(
      () => ({
        borderColor: color,
      }),
      [color]
    );

    const innerCircleStyle = useMemo(
      () => ({
        backgroundColor: color,
      }),
      [color]
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderIcon = useMemo(() => {
      if (children && typeof children === "function") {
        return children({ isChecked, disabled, readonly });
      }
      if (children) {
        return children;
      }

      return (
        <div className="radio" style={radioStyle}>
          <div className="inner-circle" style={innerCircleStyle}></div>
        </div>
      );
    }, [children, isChecked, disabled, readonly, radioStyle, innerCircleStyle]);

    const renderLabel = useMemo(() => {
      if (label) {
        return <span className="radio-label">{label}</span>;
      }
      return null;
    }, [label]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <label
        className={containerClass}
        style={containerStyle}
        onClick={handleClick}
        role="button"
        tabIndex={disabled || readonly ? -1 : 0}
        aria-disabled={disabled || readonly}
        {...props}
      >
        <input
          type="radio"
          value={value}
          checked={isChecked}
          disabled={disabled}
          readOnly={readonly}
          style={{ display: "none" }}
          onChange={(e) => {
            // Prevent the native radio input from triggering additional events
            e.preventDefault();
            e.stopPropagation();
          }}
        />
        {renderIcon}
        {renderLabel}
      </label>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicRadio.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  toggle: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  multiple: PropTypes.bool,
  modelValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
  valueComparator: PropTypes.func,
  color: PropTypes.string,
  labelColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onUpdateModelValue: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

BasicRadio.displayName = "BasicRadio";

export default BasicRadio;
```

### Styles

- **Path**: `src/assets/scss/components/_basic-radio.scss`
- **Description**: Radio component styles

```scss
// =============================================================================
// BASIC RADIO COMPONENT STYLES
// =============================================================================
@use "../abstracts" as *;

.radio-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  color: #000;
  position: relative;
  transition: all 0.2s ease;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // Generate all sizes, colors, and states using mixins
  @include generate-radio-sizes;
  @include generate-radio-colors;
  @include generate-radio-states;

  // Focus styles for accessibility
  &:focus-visible {
    outline: 0.125rem solid #2196f3;
    outline-offset: 0.125rem;
  }

  // Hidden input
  input {
    display: none;

    &:checked + .radio .inner-circle {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  // Radio button
  .radio {
    position: relative;
    display: inline-block;
    border: 0.0625rem solid;
    border-radius: 50%;
    background-color: $white;
    transition: all 0.2s ease-in-out;

    .inner-circle {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      height: 60%;
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.2s ease-in-out;
    }
  }

  &:not(.disabled):not(.readonly) {
    .radio {
      // Hover effects only when not disabled or readonly
      &:hover:not(.disabled):not(.readonly) .inner-circle {
        transform: translate(-50%, -50%) scale(0.8);
      }

      // Active effects only when not disabled or readonly
      &:active:not(.disabled):not(.readonly) {
        opacity: 0.7;
      }
    }
  }

  // Label
  .radio-label {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // Default color (when no color class is applied)
  &:not([class*="color-"]) {
    @include radio-color("default");
  }
}
```

### SCSS Abstracts

- **Path**: `src/assets/scss/abstracts/index.scss`
- **Description**: Global SCSS variables, mixins, and functions
  > **Note:**  
  > This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables (like radio variables) are available when importing abstracts.

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward "variables";
@forward "variables/radio-variables";

// functions
@forward "functions";

// mixins
@forward "mixins";
@forward "mixins/radio-mixins";

// breakpoints
@forward "breakpoints";
```

### Radio SCSS Variables

- **Path**: `src/assets/scss/abstracts/variables/_radio-variables.scss`
- **Description**: Radio component variables

> **Note:**  
> All base color, spacing, and typography variables should be defined in `variables.scss` for consistency and theme support.  
> In this file, import those variables and use them to define radio-specific variables. This ensures that the radio component inherits the global theme and can be easily updated by changing the main variables file.

```scss
// =============================================================================
// RADIO VARIABLES - COMPLETE SYSTEM
// =============================================================================
@use "../variables" as *;
@use "sass:color";

// Radio size variables
$radio-sizes: (
  "xs": (
    "font-size": 0.625rem,
    "radio-width": 0.75rem,
    "radio-height": 0.75rem,
    "gap": 0.375rem,
  ),
  "sm": (
    "font-size": 0.75rem,
    "radio-width": 0.875rem,
    "radio-height": 0.875rem,
    "gap": 0.5rem,
  ),
  "md": (
    "font-size": 0.875rem,
    "radio-width": 1rem,
    "radio-height": 1rem,
    "gap": 0.5rem,
  ),
  "lg": (
    "font-size": 1rem,
    "radio-width": 1.125rem,
    "radio-height": 1.125rem,
    "gap": 0.625rem,
  ),
  "xl": (
    "font-size": 1.125rem,
    "radio-width": 1.25rem,
    "radio-height": 1.25rem,
    "gap": 0.75rem,
  ),
);

// Radio color variables
$radio-colors: (
  "default": (
    "border": $gray-400,
    "background": $white,
    "inner-circle": $primary-color,
    "hover-border": $gray-500,
    "hover-inner": $primary-color,
    "disabled-border": $gray-300,
    "disabled-inner": $gray-400,
  ),
  "primary": (
    "border": $primary-color,
    "background": $white,
    "inner-circle": $primary-color,
    "hover-border": color.scale($primary-color, $lightness: -10%),
    "hover-inner": color.scale($primary-color, $lightness: -10%),
    "disabled-border": color.scale($primary-color, $lightness: 30%),
    "disabled-inner": color.scale($primary-color, $lightness: 20%),
  ),
  "success": (
    "border": $success-color,
    "background": $white,
    "inner-circle": $success-color,
    "hover-border": color.scale($success-color, $lightness: -10%),
    "hover-inner": color.scale($success-color, $lightness: -10%),
    "disabled-border": color.scale($success-color, $lightness: 30%),
    "disabled-inner": color.scale($success-color, $lightness: 20%),
  ),
  "warning": (
    "border": $warning-color,
    "background": $white,
    "inner-circle": $warning-color,
    "hover-border": color.scale($warning-color, $lightness: -10%),
    "hover-inner": color.scale($warning-color, $lightness: -10%),
    "disabled-border": color.scale($warning-color, $lightness: 30%),
    "disabled-inner": color.scale($warning-color, $lightness: 20%),
  ),
  "danger": (
    "border": $danger-color,
    "background": $white,
    "inner-circle": $danger-color,
    "hover-border": color.scale($danger-color, $lightness: -10%),
    "hover-inner": color.scale($danger-color, $lightness: -10%),
    "disabled-border": color.scale($danger-color, $lightness: 30%),
    "disabled-inner": color.scale($danger-color, $lightness: 20%),
  ),
  "info": (
    "border": $info-color,
    "background": $white,
    "inner-circle": $info-color,
    "hover-border": color.scale($info-color, $lightness: -10%),
    "hover-inner": color.scale($info-color, $lightness: -10%),
    "disabled-border": color.scale($info-color, $lightness: 30%),
    "disabled-inner": color.scale($info-color, $lightness: 20%),
  ),
);

// Radio state variables
$radio-states: (
  "enabled": (
    "opacity": 1,
    "cursor": pointer,
    "pointer-events": auto,
  ),
  "disabled": (
    "opacity": 0.5,
    "cursor": default,
    "pointer-events": none,
  ),
  "readonly": (
    "opacity": 1,
    "cursor": default,
    "pointer-events": none,
  ),
);
```

### Radio SCSS Mixins

- **Path**: `src/assets/scss/abstracts/mixins/_radio-mixins.scss`
- **Description**: Radio component mixins

> **Note:**  
> All base mixins should be defined in `mixins.scss` for consistency and theme support.  
> In this file, import those mixins and use them to define radio-specific mixins. This ensures that the radio component inherits the global theme and can be easily updated by changing the main mixins file.

```scss
// =============================================================================
// RADIO MIXINS
// =============================================================================
@use "../variables" as *;
@use "../functions" as *;
@use "../mixins" as *;

@use "../variables/radio-variables" as *;
@use "sass:map";

@mixin radio-size($size) {
  $size-config: map.get($radio-sizes, $size);

  @if $size-config {
    font-size: map.get($size-config, "font-size");
    gap: map.get($size-config, "gap");

    .radio {
      width: map.get($size-config, "radio-width");
      height: map.get($size-config, "radio-height");
    }
  }
}

@mixin radio-color($color) {
  $color-config: map.get($radio-colors, $color);

  @if $color-config {
    .radio {
      border-color: map.get($color-config, "border");
      background-color: map.get($color-config, "background");

      .inner-circle {
        background-color: map.get($color-config, "inner-circle");
      }

      // Hover effects only when not disabled or readonly
      &:hover:not(.disabled):not(.readonly) {
        border-color: map.get($color-config, "hover-border");

        .inner-circle {
          background-color: map.get($color-config, "hover-inner");
        }
      }
    }

    &.disabled .radio {
      border-color: map.get($color-config, "disabled-border");

      .inner-circle {
        background-color: map.get($color-config, "disabled-inner");
      }
    }
  }
}

@mixin radio-state($state) {
  $state-config: map.get($radio-states, $state);

  @if $state-config {
    opacity: map.get($state-config, "opacity");
    cursor: map.get($state-config, "cursor");
    pointer-events: map.get($state-config, "pointer-events");
  }
}

@mixin generate-radio-sizes {
  @each $size, $config in $radio-sizes {
    &.#{$size} {
      @include radio-size($size);
    }
  }
}

@mixin generate-radio-colors {
  @each $color, $config in $radio-colors {
    &.color-#{$color} {
      @include radio-color($color);
    }
  }
}

@mixin generate-radio-states {
  // Default enabled state (applies when no disabled or readonly classes are present)
  &:not(.disabled):not(.readonly) {
    @include radio-state("enabled");
  }

  &.disabled {
    @include radio-state("disabled");
  }

  &.readonly {
    @include radio-state("readonly");
  }
}
```
