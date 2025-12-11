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
        └── BasicSlider.jsx
```

- **Path**: `src/components/sharedComponents/BasicSlider.jsx`
- **Description**: Main slider component implementation

```jsx
import React, { useMemo, useCallback, memo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BasicSlider = memo(
  ({
    size = 'md',
    variant = 'default',
    disabled = false,
    readonly = false,
    step = 0.1,
    label = '',
    min = 0,
    max = 100,
    thumbLabel = false,
    thumbLabelClasses = [],
    labelClasses = [],
    value = 0,
    className = '',
    style = {},
    onChange,
    ...props
  }) => {
    // =============================================================================
    // REFS AND STATE
    // =============================================================================
    const trackRef = useRef(null);
    const [currentValue, setCurrentValue] = useState(() => value);
    const [isDragging, setIsDragging] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const roundToStep = useCallback((value, step) => {
      const stepStr = step.toString();
      const decimals = stepStr.includes('.') ? stepStr.split('.')[1].length : 0;
      const multiplier = Math.pow(10, decimals);
      return Math.round(value * multiplier) / multiplier;
    }, []);

    const fillPercent = useMemo(() => {
      const percent = ((currentValue - min) / (max - min)) * 100;
      return Math.min(100, Math.max(0, percent));
    }, [currentValue, min, max]);

    const displayValue = useMemo(() => {
      const stepStr = step.toString();
      const decimalPlaces = stepStr.includes('.') ? stepStr.split('.')[1].length : 0;
      return currentValue.toFixed(decimalPlaces);
    }, [currentValue, step]);

    const showThumbLabel = useMemo(() => {
      if (thumbLabel === 'always') return true;
      if (thumbLabel === true) return isDragging || isFocused;
      return false;
    }, [thumbLabel, isDragging, isFocused]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const stopDrag = useCallback(() => {
      setIsDragging(false);
    }, []);

    const updateValueFromPosition = useCallback(
      (clientX) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        let percent = (clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));
        let rawValue = min + percent * (max - min);
        const steppedValue = roundToStep(Math.round(rawValue / step) * step, step);

        if (steppedValue !== currentValue) {
          setCurrentValue(steppedValue);
          onChange?.(steppedValue);
        }
      },
      [min, max, step, roundToStep, currentValue, onChange]
    );

    const handleMouseMove = useCallback((e) => updateValueFromPosition(e.clientX), [updateValueFromPosition]);

    const handleTouchMove = useCallback(
      (e) => updateValueFromPosition(e.touches[0].clientX),
      [updateValueFromPosition]
    );

    useEffect(() => {
      if (!isDragging) return;

      const handleMouseUp = () => stopDrag();
      const handleTouchEnd = () => stopDrag();

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }, [isDragging, handleMouseMove, handleTouchMove, stopDrag]);

    const startDrag = useCallback(
      (e) => {
        if (disabled || readonly) return;
        e.preventDefault();
        e.stopPropagation();

        // Update position immediately on start
        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        updateValueFromPosition(clientX);

        // Set dragging state after position update
        setIsDragging(true);
      },
      [disabled, readonly, updateValueFromPosition]
    );

    const handleTrackClick = useCallback(
      (e) => {
        if (disabled || readonly) return;
        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        updateValueFromPosition(clientX);
      },
      [disabled, readonly, updateValueFromPosition]
    );

    const onKeydown = useCallback(
      (e) => {
        if (disabled || readonly) return;

        let newValue = currentValue;

        if (e.key === 'ArrowRight') {
          newValue = Math.min(max, currentValue + step);
        } else if (e.key === 'ArrowLeft') {
          newValue = Math.max(min, currentValue - step);
        } else {
          return;
        }

        const steppedValue = roundToStep(newValue, step);
        if (steppedValue !== currentValue) {
          setCurrentValue(steppedValue);
          onChange?.(steppedValue);
        }

        e.preventDefault();
      },
      [disabled, readonly, min, max, step, roundToStep, currentValue, onChange]
    );

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ['basic-slider-input-wrapper', size, variant];
      if (disabled) classes.push('disabled');
      if (readonly) classes.push('readonly');
      if (label) classes.push('has-label');
      if (className) classes.push(className);
      return classes.join(' ');
    }, [size, variant, disabled, readonly, label, className]);

    const filledStyle = useMemo(
      () => ({
        width: fillPercent + '%',
      }),
      [fillPercent]
    );

    const thumbStyle = useMemo(
      () => ({
        left: fillPercent + '%',
      }),
      [fillPercent]
    );

    const labelStyle = useMemo(
      () => ({
        left: fillPercent + '%',
      }),
      [fillPercent]
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderLabel = useMemo(() => {
      if (label) {
        return <label className={`slider-label ${labelClasses.join(' ')}`}>{label}</label>;
      }
      return null;
    }, [label, labelClasses]);

    const renderThumbLabel = useMemo(() => {
      if (!showThumbLabel) return null;

      return (
        <div className={`thumb-label ${thumbLabelClasses.join(' ')}`} style={labelStyle}>
          {currentValue === 0 || currentValue === 100 ? currentValue : displayValue}
        </div>
      );
    }, [showThumbLabel, thumbLabelClasses, labelStyle, currentValue, displayValue]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <div className={containerClass} style={style} {...props}>
        {renderLabel}
        <div
          className={`slider-track ${isDragging ? 'dragging' : ''}`}
          ref={trackRef}
          tabIndex={disabled || readonly ? -1 : 0}
          onMouseDown={handleTrackClick}
          onTouchStart={handleTrackClick}
          onKeyDown={onKeydown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          aria-disabled={disabled}
          aria-readonly={readonly}
        >
          <div className="slider-filled" style={filledStyle} />
          <div
            className={`slider-thumb ${isDragging ? 'dragging' : ''}`}
            style={thumbStyle}
            onMouseDown={(e) => startDrag(e)}
            onTouchStart={(e) => startDrag(e)}
          />
          {renderThumbLabel}
        </div>
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicSlider.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  step: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  thumbLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  thumbLabelClasses: PropTypes.array,
  labelClasses: PropTypes.array,
  value: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

BasicSlider.displayName = 'BasicSlider';

export default BasicSlider;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-slider.scss
```

- **Path**: `src/assets/scss/components/_basic-slider.scss`
- **Description**: Slider component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// BASIC SLIDER COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

.basic-slider-input-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  &.has-label {
    gap: 1rem;
  }

  // Focus styles for accessibility
  &:focus-visible {
    outline: 0.125rem solid #2196f3;
    outline-offset: 0.125rem;
  }

  // =============================================================================
  // LABEL
  // =============================================================================

  .slider-label {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #495057;
  }

  // =============================================================================
  // TRACK
  // =============================================================================

  .slider-track {
    position: relative;
    border-radius: 0.25rem;
    user-select: none;
    outline: none;
    cursor: pointer;

    &:focus-visible {
      box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
    }

    // =============================================================================
    // FILLED AREA
    // =============================================================================

    .slider-filled {
      position: absolute;
      height: 100%;
      border-radius: 0.25rem 0 0 0.25rem;
    }

    // =============================================================================
    // THUMB
    // =============================================================================

    .slider-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: 2;
      cursor: grab;

      &:active {
        cursor: grabbing;
        transform: translate(-50%, -50%) scale(1.1);
      }
    }

    // =============================================================================
    // THUMB LABEL
    // =============================================================================

    .thumb-label {
      position: absolute;
      transform: translateX(-50%);
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      white-space: nowrap;
      bottom: 0;
      margin-bottom: 1rem;
      z-index: 4;
      pointer-events: none;

      &::before {
        content: '';
        position: absolute;
        left: calc(50% - 0.25rem);
        top: 100%;
        width: 0.5rem;
        height: 0.5rem;
        transform: rotate(45deg) translate(-50%, -50%);
      }
    }
  }

  // =============================================================================
  // DISABLED AND READONLY STATES
  // =============================================================================

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.readonly {
    pointer-events: none;
  }

  // =============================================================================
  // SIZE VARIANTS
  // =============================================================================

  &.xs {
    .slider-track {
      height: 0.25rem;

      .slider-thumb {
        width: 0.75rem;
        height: 0.75rem;
      }
    }

    .slider-label {
      font-size: 0.875rem;
    }
  }

  &.sm {
    .slider-track {
      height: 0.3125rem;

      .slider-thumb {
        width: 0.875rem;
        height: 0.875rem;
      }
    }

    .slider-label {
      font-size: 0.9375rem;
    }
  }

  &.md {
    .slider-track {
      height: 0.375rem;

      .slider-thumb {
        width: 1rem;
        height: 1rem;
      }
    }

    .slider-label {
      font-size: 1rem;
    }
  }

  &.lg {
    .slider-track {
      height: 0.5rem;

      .slider-thumb {
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    .slider-label {
      font-size: 1.125rem;
    }
  }

  &.xl {
    .slider-track {
      height: 0.625rem;

      .slider-thumb {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .slider-label {
      font-size: 1.25rem;
    }
  }

  // =============================================================================
  // VARIANT STYLES
  // =============================================================================

  // Default Variant
  &.default {
    .slider-track {
      background-color: #ced4da;

      .slider-filled {
        background-color: #007bff;
      }

      .slider-thumb {
        background-color: #007bff;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
      }

      .thumb-label {
        background: #343a40;
        color: #ffffff;

        &::before {
          background: #343a40;
        }
      }

      &:hover:not(.disabled):not(.readonly) {
        background-color: #adb5bd;

        .slider-filled {
          background-color: #0069d9;
        }

        .slider-thumb {
          background-color: #0069d9;
        }
      }

      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
      }
    }

    &.disabled {
      .slider-track {
        background-color: #dee2e6;

        .slider-filled {
          background-color: #ced4da;
        }

        .slider-thumb {
          background-color: #ced4da;
        }
      }

      .slider-label {
        color: #adb5bd;
      }
    }
  }

  // Primary Variant
  &.primary {
    .slider-track {
      background-color: #ced4da;

      .slider-filled {
        background-color: #007bff;
      }

      .slider-thumb {
        background-color: #007bff;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 123, 255, 0.3);
      }

      .thumb-label {
        background: #007bff;
        color: #ffffff;

        &::before {
          background: #007bff;
        }
      }

      &:hover:not(.disabled):not(.readonly) {
        background-color: #adb5bd;

        .slider-filled {
          background-color: #0069d9;
        }

        .slider-thumb {
          background-color: #0069d9;
        }
      }

      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
      }
    }

    &.disabled {
      .slider-track {
        background-color: #b3d9ff;

        .slider-filled {
          background-color: #80bdff;
        }

        .slider-thumb {
          background-color: #80bdff;
        }
      }

      .slider-label {
        color: #66b3ff;
      }
    }
  }

  // Success Variant
  &.success {
    .slider-track {
      background-color: #ced4da;

      .slider-filled {
        background-color: #28a745;
      }

      .slider-thumb {
        background-color: #28a745;
        box-shadow: 0 0.125rem 0.25rem rgba(40, 167, 69, 0.3);
      }

      .thumb-label {
        background: #28a745;
        color: #ffffff;

        &::before {
          background: #28a745;
        }
      }

      &:hover:not(.disabled):not(.readonly) {
        background-color: #adb5bd;

        .slider-filled {
          background-color: #218838;
        }

        .slider-thumb {
          background-color: #218838;
        }
      }

      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(40, 167, 69, 0.25);
      }
    }

    &.disabled {
      .slider-track {
        background-color: #b3e0c1;

        .slider-filled {
          background-color: #94d3a2;
        }

        .slider-thumb {
          background-color: #94d3a2;
        }
      }

      .slider-label {
        color: #75ca8f;
      }
    }
  }

  // Warning Variant
  &.warning {
    .slider-track {
      background-color: #ced4da;

      .slider-filled {
        background-color: #ffc107;
      }

      .slider-thumb {
        background-color: #ffc107;
        box-shadow: 0 0.125rem 0.25rem rgba(255, 193, 7, 0.3);
      }

      .thumb-label {
        background: #ffc107;
        color: #ffffff;

        &::before {
          background: #ffc107;
        }
      }

      &:hover:not(.disabled):not(.readonly) {
        background-color: #adb5bd;

        .slider-filled {
          background-color: #e0a800;
        }

        .slider-thumb {
          background-color: #e0a800;
        }
      }

      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);
      }
    }

    &.disabled {
      .slider-track {
        background-color: #ffe69c;

        .slider-filled {
          background-color: #ffe082;
        }

        .slider-thumb {
          background-color: #ffe082;
        }
      }

      .slider-label {
        color: #ffd966;
      }
    }
  }

  // Danger Variant
  &.danger {
    .slider-track {
      background-color: #ced4da;

      .slider-filled {
        background-color: #dc3545;
      }

      .slider-thumb {
        background-color: #dc3545;
        box-shadow: 0 0.125rem 0.25rem rgba(220, 53, 69, 0.3);
      }

      .thumb-label {
        background: #dc3545;
        color: #ffffff;

        &::before {
          background: #dc3545;
        }
      }

      &:hover:not(.disabled):not(.readonly) {
        background-color: #adb5bd;

        .slider-filled {
          background-color: #c82333;
        }

        .slider-thumb {
          background-color: #c82333;
        }
      }

      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
      }
    }

    &.disabled {
      .slider-track {
        background-color: #f1aeb5;

        .slider-filled {
          background-color: #ee9ca4;
        }

        .slider-thumb {
          background-color: #ee9ca4;
        }
      }

      .slider-label {
        color: #eb828d;
      }
    }
  }

  // Info Variant
  &.info {
    .slider-track {
      background-color: #ced4da;

      .slider-filled {
        background-color: #17a2b8;
      }

      .slider-thumb {
        background-color: #17a2b8;
        box-shadow: 0 0.125rem 0.25rem rgba(23, 162, 184, 0.3);
      }

      .thumb-label {
        background: #17a2b8;
        color: #ffffff;

        &::before {
          background: #17a2b8;
        }
      }

      &:hover:not(.disabled):not(.readonly) {
        background-color: #adb5bd;

        .slider-filled {
          background-color: #138496;
        }

        .slider-thumb {
          background-color: #138496;
        }
      }

      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(23, 162, 184, 0.25);
      }
    }

    &.disabled {
      .slider-track {
        background-color: #9eeaf9;

        .slider-filled {
          background-color: #86e5f6;
        }

        .slider-thumb {
          background-color: #86e5f6;
        }
      }

      .slider-label {
        color: #6dd8f0;
      }
    }
  }
}
```
