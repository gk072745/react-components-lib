# Code

## Dependencies

- React 18+
- PropTypes 15.8+
- Use-deep-compare 1.0+
- SCSS for styling

## Files

### Component File

```
src/
├── components/
    └── sharedComponents/
        └── BasicRange.jsx
```

- **Path**: `src/components/sharedComponents/BasicRange.jsx`
- **Description**: Main range component implementation

```jsx
import React, {
  useMemo,
  useCallback,
  memo,
  useRef,
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import { useDeepCompareEffect } from "use-deep-compare";
import "@site/src/assets/scss/components/_basic-range.scss";

const BasicRange = memo(
  ({
    size = "md",
    disabled = false,
    readonly = false,
    step = 0.1,
    color = "black",
    thumbColor = "black",
    trackColor = "grey",
    label = "",
    min = 0,
    max = 100,
    thumbLabel = false,
    thumbLabelClasses = [],
    labelClasses = [],
    value = [0, 0],
    className = "",
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
      const decimals = stepStr.includes(".") ? stepStr.split(".")[1].length : 0;
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
      const decimalPlaces = stepStr.includes(".")
        ? stepStr.split(".")[1].length
        : 0;
      return currentValues.map((value) => value.toFixed(decimalPlaces));
    }, [currentValues, step]);

    const showThumbLabel = useMemo(() => {
      if (thumbLabel === "always") return true;
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
        const steppedValue = roundToStep(
          Math.round(rawValue / step) * step,
          step
        );

        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];

          if (activeThumb === "min") {
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
        const steppedValue = roundToStep(
          Math.round(rawValue / step) * step,
          step
        );

        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];

          if (activeThumb === "min") {
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

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchend", handleTouchEnd);
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
        const clientX =
          e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
        let percent = (clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));
        let rawValue = min + percent * (max - min);
        const steppedValue = roundToStep(
          Math.round(rawValue / step) * step,
          step
        );

        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];

          if (thumb === "min") {
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
        const clickX =
          e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
        const percent = (clickX - rect.left) / rect.width;
        const clickedValue = min + percent * (max - min);
        const steppedValue = roundToStep(
          Math.round(clickedValue / step) * step,
          step
        );

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

        const thumb = isMinThumb ? "min" : "max";
        const index = thumb === "min" ? 0 : 1;

        setCurrentValues((prevValues) => {
          let newValue = prevValues[index];

          if (e.key === "ArrowRight") {
            newValue = Math.min(max, prevValues[index] + step);
          } else if (e.key === "ArrowLeft") {
            newValue = Math.max(min, prevValues[index] - step);
          } else {
            return prevValues;
          }

          if (thumb === "min" && newValue > prevValues[1]) return prevValues;
          if (thumb === "max" && newValue < prevValues[0]) return prevValues;

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
      const classes = ["basic-slider-input-wrapper", size];
      if (disabled) classes.push("disabled");
      if (readonly) classes.push("readonly");
      if (label) classes.push("has-label");
      if (className) classes.push(className);
      return classes.join(" ");
    }, [size, disabled, readonly, label, className]);

    const trackStyle = useMemo(
      () => ({
        "--track-color": trackColor,
      }),
      [trackColor]
    );

    const filledStyle = useMemo(
      () => ({
        left: fillPercent.min + "%",
        width: fillPercent.max - fillPercent.min + "%",
        backgroundColor: color,
      }),
      [fillPercent, color]
    );

    const minThumbStyle = useMemo(
      () => ({
        left: fillPercent.min + "%",
        backgroundColor: thumbColor,
      }),
      [fillPercent.min, thumbColor]
    );

    const maxThumbStyle = useMemo(
      () => ({
        left: fillPercent.max + "%",
        backgroundColor: thumbColor,
      }),
      [fillPercent.max, thumbColor]
    );

    const minLabelStyle = useMemo(
      () => ({
        left: fillPercent.min + "%",
      }),
      [fillPercent.min]
    );

    const maxLabelStyle = useMemo(
      () => ({
        left: fillPercent.max + "%",
      }),
      [fillPercent.max]
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderLabel = useMemo(() => {
      if (label) {
        return (
          <label className={`slider-label ${labelClasses.join(" ")}`}>
            {label}
          </label>
        );
      }
      return null;
    }, [label, labelClasses]);

    const renderThumbLabels = useMemo(() => {
      if (!showThumbLabel) return null;

      return (
        <>
          <div
            className={`thumb-label min-label ${thumbLabelClasses.join(" ")}`}
            style={minLabelStyle}
          >
            {displayValues[0]}
          </div>
          <div
            className={`thumb-label max-label ${thumbLabelClasses.join(" ")}`}
            style={maxLabelStyle}
          >
            {displayValues[1]}
          </div>
        </>
      );
    }, [
      showThumbLabel,
      thumbLabelClasses,
      minLabelStyle,
      maxLabelStyle,
      displayValues,
    ]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <div className={containerClass} style={style} {...props}>
        {renderLabel}
        <div
          className={`slider-track ${isDragging ? "dragging" : ""}`}
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
          style={trackStyle}
        >
          <div className="slider-filled" style={filledStyle} />
          <div
            className={`slider-thumb min-thumb ${isDragging ? "dragging" : ""}`}
            style={minThumbStyle}
            onMouseDown={(e) => startDrag(e, "min")}
            onTouchStart={(e) => startDrag(e, "min")}
          />
          <div
            className={`slider-thumb max-thumb ${isDragging ? "dragging" : ""}`}
            style={maxThumbStyle}
            onMouseDown={(e) => startDrag(e, "max")}
            onTouchStart={(e) => startDrag(e, "max")}
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
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  step: PropTypes.number,
  color: PropTypes.string,
  thumbColor: PropTypes.string,
  trackColor: PropTypes.string,
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

BasicRange.displayName = "BasicRange";

export default BasicRange;
```

### Styles

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-range.scss
```

- **Path**: `src/assets/scss/components/_basic-range.scss`
- **Description**: Range component styles

```scss
// =============================================================================
// BASIC RANGE COMPONENT
// =============================================================================
@use "../abstracts" as *;
@use "sass:math";

.basic-slider-input-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;

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
    color: $range-label-color;
    font-weight: 500;
  }

  // =============================================================================
  // TRACK
  // =============================================================================

  .slider-track {
    position: relative;
    background-color: var(--track-color, $range-track-color);
    border-radius: $range-track-border-radius;
    cursor: pointer;
    user-select: none;
    outline: none;

    &:focus-visible {
      box-shadow: 0 0 0 $range-focus-outline-width $range-focus-shadow;
    }

    // =============================================================================
    // FILLED AREA
    // =============================================================================

    .slider-filled {
      position: absolute;
      height: 100%;
      border-radius: $range-track-border-radius;
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
      box-shadow: 0 0.125rem 0.25rem $range-thumb-shadow;

      &:active {
        cursor: grabbing;
        transform: translate(-50%, -50%) scale($range-thumb-scale-active);
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
      background: $range-thumb-label-bg;
      color: $range-thumb-label-color;
      font-size: 0.75rem;
      padding: $range-thumb-label-padding;
      border-radius: $range-thumb-label-border-radius;
      white-space: nowrap;
      bottom: 0;
      margin-bottom: $range-thumb-label-margin-bottom;
      z-index: 4;
      pointer-events: none;

      &::before {
        content: "";
        position: absolute;
        left: calc(50% - math.div($range-thumb-label-arrow-size, 2));
        top: 100%;
        width: $range-thumb-label-arrow-size;
        height: $range-thumb-label-arrow-size;
        background: $range-thumb-label-bg;
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
  @include generate-range-sizes;
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
  > **Note:**  
  > This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables (like range variables) are available when importing abstracts.

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward "variables";
@forward "variables/range-variables";

// functions
@forward "functions";

// mixins
@forward "mixins";
@forward "mixins/range-mixins";

// breakpoints
@forward "breakpoints";
```

### Range SCSS Variables

```
src/
├── assets/
    └── scss/
        └── variables/
            └── _range-variables.scss
```

- **Path**: `src/assets/scss/abstracts/variables/_range-variables.scss`
- **Description**: Range component variables

> **Note:**  
> All base color, spacing, and typography variables should be defined in `variables.scss` for consistency and theme support.  
> In this file, import those variables and use them to define range-specific variables. This ensures that the range component inherits the global theme and can be easily updated by changing the main variables file.

```scss
// =============================================================================
// RANGE COMPONENT VARIABLES
// =============================================================================
@use "../variables" as *;

// Colors
$range-track-color: #e9ecef !default;
$range-thumb-color: #007bff !default;
$range-filled-color: #007bff !default;
$range-label-color: #333 !default;
$range-thumb-label-bg: #333 !default;
$range-thumb-label-color: white !default;
$range-focus-shadow: rgba(0, 0, 0, 0.1) !default;
$range-thumb-shadow: rgba(0, 0, 0, 0.2) !default;

// Sizes
$range-sizes: (
  xs: (
    track-height: 0.25rem,
    thumb-size: 0.75rem,
    label-font-size: 0.875rem,
  ),
  sm: (
    track-height: 0.3125rem,
    thumb-size: 0.875rem,
    label-font-size: 0.9375rem,
  ),
  md: (
    track-height: 0.375rem,
    thumb-size: 1rem,
    label-font-size: 1rem,
  ),
  lg: (
    track-height: 0.5rem,
    thumb-size: 1.25rem,
    label-font-size: 1.125rem,
  ),
  xl: (
    track-height: 0.625rem,
    thumb-size: 1.5rem,
    label-font-size: 1.25rem,
  ),
) !default;

// Spacing
$range-thumb-label-margin-bottom: 1rem !default;
$range-thumb-label-padding: 0.25rem 0.5rem !default;
$range-thumb-label-arrow-size: 0.5rem !default;

// Border radius
$range-track-border-radius: 0.25rem !default;
$range-thumb-label-border-radius: 0.25rem !default;

// Focus
$range-focus-outline-width: 0.25rem !default;

// Thumb interactions
$range-thumb-scale-active: 1.1 !default;
```

### Range SCSS Mixins

```
src/
├── assets/
    └── scss/
        └── mixins/
            └── _range-mixins.scss
```

- **Path**: `src/assets/scss/abstracts/mixins/_range-mixins.scss`
- **Description**: Range component mixins

> **Note:**  
> All base mixins should be defined in `mixins.scss` for consistency and theme support.  
> In this file, import those mixins and use them to define range-specific mixins. This ensures that the range component inherits the global theme and can be easily updated by changing the main mixins file.

```scss
// =============================================================================
// RANGE COMPONENT MIXINS
// =============================================================================

// =============================================================================
// SIZE MIXINS
// =============================================================================
@use "../variables" as *;
@use "../functions" as *;
@use "../mixins" as *;

@use "../variables/range-variables" as *;
@use "sass:map";

@mixin range-size($size) {
  $size-config: map.get($range-sizes, $size);

  .slider-track {
    height: map.get($size-config, track-height);

    .slider-thumb {
      width: map.get($size-config, thumb-size);
      height: map.get($size-config, thumb-size);
    }
  }

  .slider-label {
    font-size: map.get($size-config, label-font-size);
  }
}

@mixin generate-range-sizes {
  @each $size, $config in $range-sizes {
    &.#{$size} {
      @include range-size($size);
    }
  }
}
```
