# Code

## Dependencies

This component requires:

- React 18+
- PropTypes for prop validation
- use-deep-compare hook for effect optimization
- SCSS for styling

## Component Files

### React Component

```
src/
├── components/
    └── sharedComponents/
        └── BasicRange.jsx
```

- **Path**: `src/components/sharedComponents/BasicRange.jsx`
- **Description**: Main range component implementation

```jsx
import React, { useMemo, useCallback, memo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDeepCompareEffect } from 'use-deep-compare';

const BasicRange = memo(
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
    value = [0, 0],
    className = '',
    style = {},
    onChange,
    ...props
  }) => {
    // =============================================================================
    // REFS AND STATE
    // =============================================================================
    const trackRef = useRef(null);
    const [currentValues, setCurrentValues] = useState(() => value);
    const [isDragging, setIsDragging] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [activeThumb, setActiveThumb] = useState(null); // 'min' or 'max'

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
      const minPercent = ((currentValues[0] - min) / (max - min)) * 100;
      const maxPercent = ((currentValues[1] - min) / (max - min)) * 100;
      return {
        min: Math.min(100, Math.max(0, minPercent)),
        max: Math.min(100, Math.max(0, maxPercent)),
      };
    }, [currentValues, min, max]);

    const displayValues = useMemo(() => {
      const stepStr = step.toString();
      const decimalPlaces = stepStr.includes('.') ? stepStr.split('.')[1].length : 0;
      return currentValues.map((value) => value.toFixed(decimalPlaces));
    }, [currentValues, step]);

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
      setActiveThumb(null);
    }, []);

    // Memoized drag handlers to prevent recreation on every render
    const handleMouseMove = useCallback(
      (e) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        let percent = (e.clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));
        let rawValue = min + percent * (max - min);
        const steppedValue = roundToStep(Math.round(rawValue / step) * step, step);

        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];

          if (activeThumb === 'min') {
            if (steppedValue > prevValues[1]) return prevValues;
            if (steppedValue === prevValues[0]) return prevValues;
            newValues[0] = steppedValue;
          } else {
            if (steppedValue < prevValues[0]) return prevValues;
            if (steppedValue === prevValues[1]) return prevValues;
            newValues[1] = steppedValue;
          }

          return newValues;
        });
      },
      [min, max, step, roundToStep, activeThumb]
    );

    const handleTouchMove = useCallback(
      (e) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        let percent = (e.touches[0].clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));
        let rawValue = min + percent * (max - min);
        const steppedValue = roundToStep(Math.round(rawValue / step) * step, step);

        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];

          if (activeThumb === 'min') {
            if (steppedValue > prevValues[1]) return prevValues;
            if (steppedValue === prevValues[0]) return prevValues;
            newValues[0] = steppedValue;
          } else {
            if (steppedValue < prevValues[0]) return prevValues;
            if (steppedValue === prevValues[1]) return prevValues;
            newValues[1] = steppedValue;
          }

          return newValues;
        });
      },
      [min, max, step, roundToStep, activeThumb]
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
      (e, thumb) => {
        if (disabled || readonly) return;
        e.preventDefault();
        e.stopPropagation();

        // Update position immediately on start first
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        let percent = (clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));
        let rawValue = min + percent * (max - min);
        const steppedValue = roundToStep(Math.round(rawValue / step) * step, step);

        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];

          if (thumb === 'min') {
            if (steppedValue > prevValues[1]) return prevValues;
            if (steppedValue === prevValues[0]) return prevValues;
            newValues[0] = steppedValue;
          } else {
            if (steppedValue < prevValues[0]) return prevValues;
            if (steppedValue === prevValues[1]) return prevValues;
            newValues[1] = steppedValue;
          }

          return newValues;
        });

        // Set dragging state after position update
        setIsDragging(true);
        setActiveThumb(thumb);
      },
      [disabled, readonly, min, max, step, roundToStep]
    );

    const handleTrackClick = useCallback(
      (e) => {
        if (disabled || readonly) return;

        const rect = trackRef.current.getBoundingClientRect();
        const clickX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        const percent = (clickX - rect.left) / rect.width;
        const clickedValue = min + percent * (max - min);
        const steppedValue = roundToStep(Math.round(clickedValue / step) * step, step);

        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];
          const midpoint = (prevValues[0] + prevValues[1]) / 2;

          if (steppedValue <= midpoint) {
            if (steppedValue !== prevValues[0]) {
              newValues[0] = steppedValue;
            }
          } else {
            if (steppedValue !== prevValues[1]) {
              newValues[1] = steppedValue;
            }
          }

          return newValues;
        });
      },
      [disabled, readonly, min, max, step, roundToStep]
    );

    const onKeydown = useCallback(
      (e) => {
        if (disabled || readonly) return;

        const isMinThumb = document.activeElement === trackRef.current;
        const isMaxThumb = document.activeElement === trackRef.current;

        if (!isMinThumb && !isMaxThumb) return;

        const thumb = isMinThumb ? 'min' : 'max';
        const index = thumb === 'min' ? 0 : 1;

        setCurrentValues((prevValues) => {
          let newValue = prevValues[index];

          if (e.key === 'ArrowRight') {
            newValue = Math.min(max, prevValues[index] + step);
          } else if (e.key === 'ArrowLeft') {
            newValue = Math.max(min, prevValues[index] - step);
          } else {
            return prevValues;
          }

          if (thumb === 'min' && newValue > prevValues[1]) return prevValues;
          if (thumb === 'max' && newValue < prevValues[0]) return prevValues;

          const steppedValue = roundToStep(newValue, step);
          if (steppedValue !== prevValues[index]) {
            const newValues = [...prevValues];
            newValues[index] = steppedValue;
            return newValues;
          }

          return prevValues;
        });

        e.preventDefault();
      },
      [disabled, readonly, min, max, step, roundToStep]
    );

    // =============================================================================
    // EFFECTS FOR EMITTING CHANGES
    // =============================================================================

    useDeepCompareEffect(() => {
      onChange?.(currentValues);
    }, [currentValues]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleTouchStart = useCallback(
      (e) => {
        e.preventDefault();
        handleTrackClick(e);
      },
      [handleTrackClick]
    );

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ['basic-range-input-wrapper', size, variant];
      if (disabled) classes.push('disabled');
      if (readonly) classes.push('readonly');
      if (label) classes.push('has-label');
      if (className) classes.push(className);
      return classes.join(' ');
    }, [size, variant, disabled, readonly, label, className]);

    const filledStyle = useMemo(
      () => ({
        left: fillPercent.min + '%',
        width: fillPercent.max - fillPercent.min + '%',
      }),
      [fillPercent]
    );

    const minThumbStyle = useMemo(
      () => ({
        left: fillPercent.min + '%',
      }),
      [fillPercent.min]
    );

    const maxThumbStyle = useMemo(
      () => ({
        left: fillPercent.max + '%',
      }),
      [fillPercent.max]
    );

    const minLabelStyle = useMemo(
      () => ({
        left: fillPercent.min + '%',
      }),
      [fillPercent.min]
    );

    const maxLabelStyle = useMemo(
      () => ({
        left: fillPercent.max + '%',
      }),
      [fillPercent.max]
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

    const renderThumbLabels = useMemo(() => {
      if (!showThumbLabel) return null;

      return (
        <>
          <div className={`thumb-label min-label ${thumbLabelClasses.join(' ')}`} style={minLabelStyle}>
            {displayValues[0]}
          </div>
          <div className={`thumb-label max-label ${thumbLabelClasses.join(' ')}`} style={maxLabelStyle}>
            {displayValues[1]}
          </div>
        </>
      );
    }, [showThumbLabel, thumbLabelClasses, minLabelStyle, maxLabelStyle, displayValues]);

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
          onTouchStart={handleTouchStart}
          onKeyDown={onKeydown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValues[0]}
          aria-disabled={disabled}
          aria-readonly={readonly}
        >
          <div className="slider-filled" style={filledStyle} />
          <div
            className={`slider-thumb min-thumb ${isDragging ? 'dragging' : ''}`}
            style={minThumbStyle}
            onMouseDown={(e) => startDrag(e, 'min')}
            onTouchStart={(e) => startDrag(e, 'min')}
          />
          <div
            className={`slider-thumb max-thumb ${isDragging ? 'dragging' : ''}`}
            style={maxThumbStyle}
            onMouseDown={(e) => startDrag(e, 'max')}
            onTouchStart={(e) => startDrag(e, 'max')}
          />
          {renderThumbLabels}
        </div>
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicRange.propTypes = {
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
  value: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

BasicRange.displayName = 'BasicRange';

export default BasicRange;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-range.scss
```

- **Path**: `src/assets/scss/components/_basic-range.scss`
- **Description**: Range component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// BASIC RANGE COMPONENT
// =============================================================================
@use '../abstracts' as *;

.basic-range-input-wrapper {
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

  // =============================================================================
  // STATES
  // =============================================================================

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.readonly {
    pointer-events: none;
  }

  // =============================================================================
  // LABEL
  // =============================================================================

  .slider-label {
    font-size: 1rem;
    color: #333333;
    font-weight: 500;
  }

  // =============================================================================
  // TRACK
  // =============================================================================

  .slider-track {
    position: relative;
    border-radius: 0.25rem;
    cursor: pointer;
    user-select: none;
    outline: none;

    &:focus-visible {
      box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
    }

    // =============================================================================
    // FILLED AREA
    // =============================================================================

    .slider-filled {
      position: absolute;
      height: 100%;
      border-radius: 0.25rem;
    }

    // =============================================================================
    // THUMBS
    // =============================================================================

    .slider-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      cursor: grab;
      z-index: 2;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);

      &:active {
        cursor: grabbing;
        transform: translate(-50%, -50%) scale(1.1);
      }

      &.min-thumb {
        z-index: 3;
      }

      &.max-thumb {
        z-index: 3;
      }
    }

    // =============================================================================
    // THUMB LABELS
    // =============================================================================

    .thumb-label {
      position: absolute;
      transform: translateX(-50%);
      background: #333333;
      color: #ffffff;
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
        background: #333333;
        transform: rotate(45deg) translate(-50%, -50%);
      }

      &.min-label {
        z-index: 5;
      }

      &.max-label {
        z-index: 5;
      }
    }
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
      background-color: #e9ecef;

      .slider-filled {
        background-color: #007bff;
      }

      .slider-thumb {
        background-color: #007bff;
      }
    }
  }

  // Primary Variant
  &.primary {
    .slider-track {
      background-color: #e9ecef;

      .slider-filled {
        background-color: #007bff;
      }

      .slider-thumb {
        background-color: #007bff;
      }
    }
  }

  // Success Variant
  &.success {
    .slider-track {
      background-color: #e9ecef;

      .slider-filled {
        background-color: #28a745;
      }

      .slider-thumb {
        background-color: #28a745;
      }
    }
  }

  // Warning Variant
  &.warning {
    .slider-track {
      background-color: #e9ecef;

      .slider-filled {
        background-color: #ffc107;
      }

      .slider-thumb {
        background-color: #ffc107;
      }
    }
  }

  // Danger Variant
  &.danger {
    .slider-track {
      background-color: #e9ecef;

      .slider-filled {
        background-color: #dc3545;
      }

      .slider-thumb {
        background-color: #dc3545;
      }
    }
  }

  // Info Variant
  &.info {
    .slider-track {
      background-color: #e9ecef;

      .slider-filled {
        background-color: #17a2b8;
      }

      .slider-thumb {
        background-color: #17a2b8;
      }
    }
  }
}
```
