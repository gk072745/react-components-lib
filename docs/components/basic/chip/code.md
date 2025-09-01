# Code

## Dependencies

This component requires:

- React 18+
- SCSS for styling
- PropTypes for prop validation

## Component Files

### React Component

**File:** `./sharedComponents/BasicChip.jsx`

```jsx
import React, { useMemo, useCallback, memo } from "react";
import PropTypes from "prop-types";
import "@site/src/assets/scss/components/_basic-chip.scss";

const BasicChip = memo(
  ({
    chip,
    textKey = "text",
    valueKey = "value",
    closable = false,
    onDeleteChip,
    children,
    prepend,
    append,
    close,
    variant = "default",
    variantType = "solid",
    disabled = false,
    className = "",
    style = {},
    onClick,
  }) => {
    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const displayText = useMemo(() => {
      if (typeof chip === "string") {
        return chip;
      }
      return chip[textKey] || "";
    }, [chip, textKey]);

    const chipValue = useMemo(() => {
      if (typeof chip === "string") {
        return chip;
      }
      return chip[valueKey] || chip;
    }, [chip, valueKey]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDelete = useCallback(
      (event) => {
        if (event && event.stopPropagation) {
          event.stopPropagation();
        }
        if (onDeleteChip && !disabled) {
          onDeleteChip(chipValue, event);
        }
      },
      [onDeleteChip, chipValue, disabled]
    );

    const handleClick = useCallback(
      (event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        if (onClick) onClick(event);
      },
      [disabled, onClick]
    );

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ["basic-chip"];

      // Handle variant type and variant combination
      if (variantType === "outlined") {
        classes.push(`outlined-${variant}`);
      } else if (variantType === "filled") {
        classes.push(`filled-${variant}`);
      } else {
        classes.push(variant);
      }

      if (disabled) classes.push("disabled");
      if (className) classes.push(className);
      return classes.join(" ");
    }, [variant, variantType, disabled, className]);

    const chipStyle = useMemo(
      () => ({
        ...style,
        cursor: disabled ? "not-allowed" : "pointer",
      }),
      [style, disabled]
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderPrepend = useMemo(() => {
      if (!prepend) return null;

      return (
        <div className="chip-prepend">
          {typeof prepend === "function"
            ? prepend({ chip, isDisabled: disabled })
            : prepend}
        </div>
      );
    }, [prepend, chip, disabled]);

    const renderContent = useMemo(() => {
      return (
        <div className="chip-content">
          {children
            ? typeof children === "function"
              ? children({ chip, isDisabled: disabled })
              : children
            : displayText}
        </div>
      );
    }, [children, chip, disabled, displayText]);

    const renderAppend = useMemo(() => {
      if (!append) return null;

      return (
        <div className="chip-append">
          {typeof append === "function"
            ? append({ chip, isDisabled: disabled })
            : append}
        </div>
      );
    }, [append, chip, disabled]);

    const renderClose = useMemo(() => {
      if (close) {
        return typeof close === "function"
          ? close({
              chip,
              chipValue,
              isDisabled: disabled,
              onDelete: handleDelete,
            })
          : close;
      }

      if (closable && !disabled) {
        return (
          <button
            className="chip-close"
            onClick={handleDelete}
            aria-label="Remove chip"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        );
      }

      return null;
    }, [close, closable, disabled, chip, chipValue, handleDelete]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <div
        className={containerClass}
        style={chipStyle}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        {renderPrepend}
        {renderContent}
        {renderAppend}
        {renderClose}
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicChip.propTypes = {
  chip: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  textKey: PropTypes.string,
  valueKey: PropTypes.string,
  closable: PropTypes.bool,
  onDeleteChip: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  prepend: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  close: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "danger",
    "info",
  ]),
  variantType: PropTypes.oneOf(["solid", "outlined", "filled"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

BasicChip.displayName = "BasicChip";

export default BasicChip;
```

### SCSS Component

- **Accordion Main SCSS**
  **File:** `./assets/scss/components/_basic-chip.scss`

```scss
// =============================================================================
// BASIC CHIP COMPONENT STYLES
// =============================================================================
@use "../abstracts" as *;

.basic-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.625rem;
  font-size: 0.875rem;
  line-height: 1.125rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  user-select: none;
  border: 0.0625rem solid transparent;
  position: relative;
  outline: none;

  // Focus styles for accessibility
  &:focus-visible {
    outline: 0.125rem solid #2196f3;
    outline-offset: 0.125rem;
  }

  // Generate all variants using mixin
  @include generate-chip-variants;

  // Disabled state
  &.disabled {
    opacity: 0.6;
    pointer-events: none;
  }
}

// =============================================================================
// CHIP CONTENT SECTIONS
// =============================================================================

.chip-prepend {
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chip-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chip-append {
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

// =============================================================================
// CLOSE BUTTON STYLES
// =============================================================================

.chip-close {
  margin-left: 0.5rem;
  padding: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  border-radius: 50%;
  transition: all 0.2s ease;
  flex-shrink: 0;
  opacity: 0.7;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    opacity: 1;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 0.125rem solid currentColor;
    outline-offset: 0.125rem;
  }

  svg {
    width: 1em;
    height: 1em;
    stroke-width: 2;
  }
}
```

- **SCSS Abstracts Index**
  **File:** `./assets/scss/abstracts/index.scss`

> **Note:**  
> This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables (like chip variables) are available when importing abstracts.

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward "variables";
@forward "variables/chip-variables";

// functions
@forward "functions";

// mixins
@forward "mixins";
@forward "mixins/chip-mixins";

// breakpoints
@forward "breakpoints";
```

- **Chip SCSS Variables**
  **File:** `./assets/scss/abstracts/variables/_chip-variables.scss`

> **Note:**  
> All base color, spacing, and typography variables should be defined in `variables.scss` for consistency and theme support.  
> In this file, import those variables and use them to define chip-specific variables. This ensures that the chip component inherits the global theme and can be easily updated by changing the main variables file.

```scss
// =============================================================================
// CHIP VARIABLES - COMPLETE SYSTEM
// =============================================================================
@use "../variables" as *;
@use "sass:color";

// Base chip variables
$chip-variants: (
  "default": (
    "bg": $gray-200,
    "color": $gray-800,
    "border": $gray-200,
    "outlined-color": $gray-700,
    "filled-bg": $gray-100,
    "filled-color": $gray-900,
    "filled-border": $gray-200,
  ),
  "primary": (
    "bg": $primary-color,
    "color": $white,
    "border": $primary-color,
    "outlined-color": $primary-color,
    "filled-bg": color.scale($primary-color, $lightness: 45%),
    "filled-color": color.scale($primary-color, $lightness: -15%),
    "filled-border": color.scale($primary-color, $lightness: 35%),
  ),
  "success": (
    "bg": $success-color,
    "color": $white,
    "border": $success-color,
    "outlined-color": $success-color,
    "filled-bg": color.scale($success-color, $lightness: 45%),
    "filled-color": color.scale($success-color, $lightness: -15%),
    "filled-border": color.scale($success-color, $lightness: 35%),
  ),
  "warning": (
    "bg": $warning-color,
    "color": $gray-800,
    "border": $warning-color,
    "outlined-color": $warning-color,
    "filled-bg": color.scale($warning-color, $lightness: 45%),
    "filled-color": color.scale($warning-color, $lightness: -15%),
    "filled-border": color.scale($warning-color, $lightness: 35%),
  ),
  "danger": (
    "bg": $danger-color,
    "color": $white,
    "border": $danger-color,
    "outlined-color": $danger-color,
    "filled-bg": color.scale($danger-color, $lightness: 45%),
    "filled-color": color.scale($danger-color, $lightness: -15%),
    "filled-border": color.scale($danger-color, $lightness: 35%),
  ),
  "info": (
    "bg": $info-color,
    "color": $white,
    "border": $info-color,
    "outlined-color": $info-color,
    "filled-bg": color.scale($info-color, $lightness: 45%),
    "filled-color": color.scale($info-color, $lightness: -15%),
    "filled-border": color.scale($info-color, $lightness: 35%),
  ),
);

// Chip type variables
$chip-types: (
  "solid": (
    "bg-key": "bg",
    "color-key": "color",
    "border-key": "border",
  ),
  "outlined": (
    "bg-key": "transparent",
    "color-key": "outlined-color",
    "border-key": "border",
  ),
  "filled": (
    "bg-key": "filled-bg",
    "color-key": "filled-color",
    "border-key": "filled-border",
  ),
);
```

- **Chip SCSS Mixins**
  **File:** `./assets/scss/abstracts/mixins/_chip-mixins.scss`

> **Note:**  
> All base mixins should be defined in `mixins.scss` for consistency and theme support.  
> In this file, import those mixins and use them to define chip-specific mixins. This ensures that the chip component inherits the global theme and can be easily updated by changing the main mixins file.

```scss
// =============================================================================
// CHIP MIXINS
// =============================================================================
@use "../variables" as *;
@use "../functions" as *;
@use "../mixins" as *;

@use "../variables/chip-variables" as *;
@use "sass:color";
@use "sass:map";

@mixin chip-variant($variant, $type: "solid") {
  $variant-config: map.get($chip-variants, $variant);
  $type-config: map.get($chip-types, $type);

  @if $variant-config and $type-config {
    $bg-key: map.get($type-config, "bg-key");
    $color-key: map.get($type-config, "color-key");
    $border-key: map.get($type-config, "border-key");

    background-color: if(
      $bg-key == "transparent",
      transparent,
      map.get($variant-config, $bg-key)
    );
    color: map.get($variant-config, $color-key);
    border-color: map.get($variant-config, $border-key);

    &:hover:not(.disabled) {
      @if $type == "outlined" {
        background-color: rgba(map.get($variant-config, $border-key), 0.1);
        border-color: color.scale(
          map.get($variant-config, $border-key),
          $lightness: -10%
        );
      } @else {
        background-color: color.scale(
          map.get($variant-config, $bg-key),
          $lightness: -10%
        );
        border-color: color.scale(
          map.get($variant-config, $border-key),
          $lightness: -10%
        );
      }
    }

    &:active:not(.disabled) {
      @if $type == "outlined" {
        background-color: rgba(map.get($variant-config, $border-key), 0.2);
        border-color: color.scale(
          map.get($variant-config, $border-key),
          $lightness: -15%
        );
      } @else {
        background-color: color.scale(
          map.get($variant-config, $bg-key),
          $lightness: -15%
        );
        border-color: color.scale(
          map.get($variant-config, $border-key),
          $lightness: -15%
        );
      }
    }
  }
}

@mixin generate-chip-variants {
  @each $variant, $config in $chip-variants {
    // Solid variants
    &.#{$variant} {
      @include chip-variant($variant, "solid");
    }

    // Outlined variants
    &.outlined-#{$variant} {
      @include chip-variant($variant, "outlined");
    }

    // Filled variants
    &.filled-#{$variant} {
      @include chip-variant($variant, "filled");
    }
  }
}
```
