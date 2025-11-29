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
        └── BasicChip.jsx
```

- **Path**: `src/components/sharedComponents/BasicChip.jsx`
- **Description**: Main chip component implementation

```jsx
import React, { useMemo, useCallback, memo } from 'react';
import PropTypes from 'prop-types';

const BasicChip = memo(
  ({
    chip,
    textKey = 'text',
    valueKey = 'value',
    closable = false,
    onDeleteChip,
    children,
    prepend,
    append,
    close,
    variant = 'default',
    variantType = 'solid',
    disabled = false,
    className = '',
    style = {},
    onClick,
  }) => {
    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const displayText = useMemo(() => {
      if (typeof chip === 'string') {
        return chip;
      }
      return chip[textKey] || '';
    }, [chip, textKey]);

    const chipValue = useMemo(() => {
      if (typeof chip === 'string') {
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
      const classes = ['basic-chip'];

      // Handle variant type and variant combination
      if (variantType === 'outlined') {
        classes.push(`outlined-${variant}`);
      } else if (variantType === 'filled') {
        classes.push(`filled-${variant}`);
      } else {
        classes.push(variant);
      }

      if (disabled) classes.push('disabled');
      if (className) classes.push(className);
      return classes.join(' ');
    }, [variant, variantType, disabled, className]);

    const chipStyle = useMemo(
      () => ({
        ...style,
        cursor: disabled ? 'not-allowed' : 'pointer',
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
          {typeof prepend === 'function' ? prepend({ chip, isDisabled: disabled }) : prepend}
        </div>
      );
    }, [prepend, chip, disabled]);

    const renderContent = useMemo(() => {
      return (
        <div className="chip-content">
          {children
            ? typeof children === 'function'
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
          {typeof append === 'function' ? append({ chip, isDisabled: disabled }) : append}
        </div>
      );
    }, [append, chip, disabled]);

    const renderClose = useMemo(() => {
      if (close) {
        return typeof close === 'function'
          ? close({ chip, chipValue, isDisabled: disabled, onDelete: handleDelete })
          : close;
      }

      if (closable) {
        return (
          <button
            className="chip-close"
            onClick={handleDelete}
            aria-label="Remove chip"
            type="button"
            disabled={disabled}
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
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  variantType: PropTypes.oneOf(['solid', 'outlined', 'filled']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

BasicChip.displayName = 'BasicChip';

export default BasicChip;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-chip.scss
```

- **Path**: `src/assets/scss/components/_basic-chip.scss`
- **Description**: Chip component styles

**Note:** This component uses SCSS variables from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// BASIC CHIP COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

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

  // Disabled state
  &.disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  // =============================================================================
  // VARIANT STYLES - SOLID
  // =============================================================================

  // Default Solid
  &.default {
    background-color: #e9ecef;
    color: #343a40;
    border-color: #e9ecef;

    &:hover:not(.disabled) {
      background-color: #dee2e6;
      border-color: #dee2e6;
    }

    &:active:not(.disabled) {
      background-color: #ced4da;
      border-color: #ced4da;
    }
  }

  // Primary Solid
  &.primary {
    background-color: #007bff;
    color: #ffffff;
    border-color: #007bff;

    &:hover:not(.disabled) {
      background-color: #0069d9;
      border-color: #0069d9;
    }

    &:active:not(.disabled) {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }

  // Success Solid
  &.success {
    background-color: #28a745;
    color: #ffffff;
    border-color: #28a745;

    &:hover:not(.disabled) {
      background-color: #218838;
      border-color: #218838;
    }

    &:active:not(.disabled) {
      background-color: #1e7e34;
      border-color: #1e7e34;
    }
  }

  // Warning Solid
  &.warning {
    background-color: #ffc107;
    color: #343a40;
    border-color: #ffc107;

    &:hover:not(.disabled) {
      background-color: #e0a800;
      border-color: #e0a800;
    }

    &:active:not(.disabled) {
      background-color: #d39e00;
      border-color: #d39e00;
    }
  }

  // Danger Solid
  &.danger {
    background-color: #dc3545;
    color: #ffffff;
    border-color: #dc3545;

    &:hover:not(.disabled) {
      background-color: #c82333;
      border-color: #c82333;
    }

    &:active:not(.disabled) {
      background-color: #bd2130;
      border-color: #bd2130;
    }
  }

  // Info Solid
  &.info {
    background-color: #17a2b8;
    color: #ffffff;
    border-color: #17a2b8;

    &:hover:not(.disabled) {
      background-color: #138496;
      border-color: #138496;
    }

    &:active:not(.disabled) {
      background-color: #117a8b;
      border-color: #117a8b;
    }
  }

  // =============================================================================
  // VARIANT STYLES - OUTLINED
  // =============================================================================

  // Default Outlined
  &.outlined-default {
    background-color: transparent;
    color: #495057;
    border-color: #e9ecef;

    &:hover:not(.disabled) {
      background-color: rgba(233, 236, 239, 0.1);
      border-color: #dee2e6;
    }

    &:active:not(.disabled) {
      background-color: rgba(233, 236, 239, 0.2);
      border-color: #ced4da;
    }
  }

  // Primary Outlined
  &.outlined-primary {
    background-color: transparent;
    color: #007bff;
    border-color: #007bff;

    &:hover:not(.disabled) {
      background-color: rgba(0, 123, 255, 0.1);
      border-color: #0069d9;
    }

    &:active:not(.disabled) {
      background-color: rgba(0, 123, 255, 0.2);
      border-color: #0056b3;
    }
  }

  // Success Outlined
  &.outlined-success {
    background-color: transparent;
    color: #28a745;
    border-color: #28a745;

    &:hover:not(.disabled) {
      background-color: rgba(40, 167, 69, 0.1);
      border-color: #218838;
    }

    &:active:not(.disabled) {
      background-color: rgba(40, 167, 69, 0.2);
      border-color: #1e7e34;
    }
  }

  // Warning Outlined
  &.outlined-warning {
    background-color: transparent;
    color: #ffc107;
    border-color: #ffc107;

    &:hover:not(.disabled) {
      background-color: rgba(255, 193, 7, 0.1);
      border-color: #e0a800;
    }

    &:active:not(.disabled) {
      background-color: rgba(255, 193, 7, 0.2);
      border-color: #d39e00;
    }
  }

  // Danger Outlined
  &.outlined-danger {
    background-color: transparent;
    color: #dc3545;
    border-color: #dc3545;

    &:hover:not(.disabled) {
      background-color: rgba(220, 53, 69, 0.1);
      border-color: #c82333;
    }

    &:active:not(.disabled) {
      background-color: rgba(220, 53, 69, 0.2);
      border-color: #bd2130;
    }
  }

  // Info Outlined
  &.outlined-info {
    background-color: transparent;
    color: #17a2b8;
    border-color: #17a2b8;

    &:hover:not(.disabled) {
      background-color: rgba(23, 162, 184, 0.1);
      border-color: #138496;
    }

    &:active:not(.disabled) {
      background-color: rgba(23, 162, 184, 0.2);
      border-color: #117a8b;
    }
  }

  // =============================================================================
  // VARIANT STYLES - FILLED
  // =============================================================================

  // Default Filled
  &.filled-default {
    background-color: #f8f9fa;
    color: #212529;
    border-color: #e9ecef;

    &:hover:not(.disabled) {
      background-color: #e9ecef;
      border-color: #dee2e6;
    }

    &:active:not(.disabled) {
      background-color: #dee2e6;
      border-color: #ced4da;
    }
  }

  // Primary Filled
  &.filled-primary {
    background-color: #cfe2ff;
    color: #084298;
    border-color: #b6d4fe;

    &:hover:not(.disabled) {
      background-color: #b6d4fe;
      border-color: #9ec5fe;
    }

    &:active:not(.disabled) {
      background-color: #9ec5fe;
      border-color: #86b7fe;
    }
  }

  // Success Filled
  &.filled-success {
    background-color: #d1e7dd;
    color: #0f5132;
    border-color: #badbcc;

    &:hover:not(.disabled) {
      background-color: #badbcc;
      border-color: #a3cfbb;
    }

    &:active:not(.disabled) {
      background-color: #a3cfbb;
      border-color: #8bcaaa;
    }
  }

  // Warning Filled
  &.filled-warning {
    background-color: #fff3cd;
    color: #664d03;
    border-color: #ffecb5;

    &:hover:not(.disabled) {
      background-color: #ffecb5;
      border-color: #ffe69c;
    }

    &:active:not(.disabled) {
      background-color: #ffe69c;
      border-color: #ffe082;
    }
  }

  // Danger Filled
  &.filled-danger {
    background-color: #f8d7da;
    color: #842029;
    border-color: #f5c2c7;

    &:hover:not(.disabled) {
      background-color: #f5c2c7;
      border-color: #f1aeb5;
    }

    &:active:not(.disabled) {
      background-color: #f1aeb5;
      border-color: #ee9ca4;
    }
  }

  // Info Filled
  &.filled-info {
    background-color: #cff4fc;
    color: #055160;
    border-color: #b6effb;

    &:hover:not(.disabled) {
      background-color: #b6effb;
      border-color: #9eeaf9;
    }

    &:active:not(.disabled) {
      background-color: #9eeaf9;
      border-color: #86e5f6;
    }
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

**Note:** The chip component uses variables from the abstracts directory. These are imported via the abstracts index file.

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

**Note:** The chip component uses variables, functions, mixins, and breakpoints from the abstracts directory. These are imported via the abstracts index file.
