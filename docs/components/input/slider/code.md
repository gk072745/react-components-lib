# Code

## Dependencies

- React 18+
- SCSS for styling
- PropTypes for prop validation

## Files

### Component File

```
src/
├── components/
│   └── sharedComponents/
│       └── BasicSlider.jsx
```

- Path: `src/components/sharedComponents/BasicSlider.jsx`
- Description: Single-value slider with drag, touch, and keyboard support

```jsx
import React, { useMemo, useCallback, memo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BasicSlider = memo(
  ({
    size = 'md',
    disabled = false,
    readonly = false,
    step = 0.1,
    color = 'default',
    thumbColor = 'black',
    trackColor = 'grey',
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

    const updateValueFromPosition = useCallback((clientX) => {
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
    }, [min, max, step, roundToStep, currentValue, onChange]);

    const handleMouseMove = useCallback(
      e => updateValueFromPosition(e.clientX),
      [updateValueFromPosition]
    );

    const handleTouchMove = useCallback(
      e => updateValueFromPosition(e.touches[0].clientX),
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
      e => {
        if (disabled || readonly) return;
        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        updateValueFromPosition(clientX);
      },
      [disabled, readonly, updateValueFromPosition]
    );

    const onKeydown = useCallback(
      e => {
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
      const classes = ['basic-slider-input-wrapper', size];
      
      // Add color class for new system
      if (color && color !== 'default') {
        classes.push(`color-${color}`);
      }
      
      if (disabled) classes.push('disabled');
      if (readonly) classes.push('readonly');
      if (label) classes.push('has-label');
      if (className) classes.push(className);
      return classes.join(' ');
    }, [size, color, disabled, readonly, label, className]);

    // Legacy style support for backward compatibility
    const trackStyle = useMemo(
      () => {
        const style = {};
        // Only apply legacy styles if using old color system
        if (color === 'black' || color === 'default') {
          style['--track-color'] = trackColor;
        }
        return style;
      },
      [trackColor, color]
    );

    const filledStyle = useMemo(
      () => {
        const style = {
          width: fillPercent + '%',
        };
        // Only apply legacy styles if using old color system
        if (color === 'black' || color === 'default') {
          style.backgroundColor = color === 'black' ? color : thumbColor;
        }
        return style;
      },
      [fillPercent, color, thumbColor]
    );

    const thumbStyle = useMemo(
      () => {
        const style = {
          left: fillPercent + '%',
        };
        // Only apply legacy styles if using old color system
        if (color === 'black' || color === 'default') {
          style.backgroundColor = thumbColor;
        }
        return style;
      },
      [fillPercent, thumbColor, color]
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
          style={trackStyle}
        >
          <div className="slider-filled" style={filledStyle} />
          <div
            className={`slider-thumb ${isDragging ? 'dragging' : ''}`}
            style={thumbStyle}
            onMouseDown={e => startDrag(e)}
            onTouchStart={e => startDrag(e)}
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
  color: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  thumbColor: PropTypes.string,
  trackColor: PropTypes.string,
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

### Styles

```
src/
├── assets/
│   └── scss/
│       └── components/
│           └── _basic-slider.scss
```

- Path: `src/assets/scss/components/_basic-slider.scss`
- Description: Slider track, thumb, sizes, and color variants

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
    transition: all 0.2s ease;

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    &.has-label {
        gap: 1rem;
    }

    // Generate all sizes, colors, and states using mixins
    @include generate-slider-sizes;
    @include generate-slider-colors;
    @include generate-slider-states;

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
    }

    // =============================================================================
    // TRACK
    // =============================================================================

    .slider-track {
        position: relative;
        border-radius: $slider-track-border-radius;
        user-select: none;
        outline: none;

        // =============================================================================
        // FILLED AREA
        // =============================================================================

        .slider-filled {
            position: absolute;
            height: 100%;
            border-radius: $slider-track-border-radius 0 0 $slider-track-border-radius;
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
            transition: all 0.2s ease-in-out;

            &:active {
                transform: translate(-50%, -50%) scale($slider-thumb-scale-active);
            }
        }

        // =============================================================================
        // THUMB LABEL
        // =============================================================================

        .thumb-label {
            position: absolute;
            transform: translateX(-50%);
            font-size: 0.75rem;
            padding: $slider-thumb-label-padding;
            border-radius: $slider-thumb-label-border-radius;
            white-space: nowrap;
            bottom: 0;
            margin-bottom: $slider-thumb-label-margin-bottom;
            z-index: 4;
            pointer-events: none;

            &::before {
                content: "";
                position: absolute;
                left: calc(50% - #{$slider-thumb-label-arrow-size / 2});
                top: 100%;
                width: $slider-thumb-label-arrow-size;
                height: $slider-thumb-label-arrow-size;
                transform: rotate(45deg) translate(-50%, -50%);
            }
        }
    }

    // Default color (when no color class is applied)
    &:not([class*='color-']) {
        @include slider-color('default');
    }
}
```

### Abstracts

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── index.scss
```

- **Path**: `src/assets/scss/abstracts/index.scss`
- **Description**: Global SCSS variables, mixins, and functions
  > **Note:**  This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables (like slider variables and mixins) are available when importing abstracts.

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward 'variables';
@forward 'variables/slider-variables';

// functions
@forward 'functions';

// mixins
@forward 'mixins';
@forward 'mixins/slider-mixins';

// breakpoints
@forward 'breakpoints';
```

### variables
```
src/
├── assets/
│   └── scss/
│       └── variables/
│           └── slider-variables.scss
```

- **Path**: `src/assets/scss/variables/slider-variables.scss`
- **Description**: Slider variables

```scss
// =============================================================================
// SLIDER COMPONENT VARIABLES - COMPLETE SYSTEM
// =============================================================================
@use '../variables' as *;

// Slider size variables
$slider-sizes: (
    'xs': ('track-height': 0.25rem,
        'thumb-size': 0.75rem,
        'label-font-size': 0.875rem),
    'sm': ('track-height': 0.3125rem,
        'thumb-size': 0.875rem,
        'label-font-size': 0.9375rem),
    'md': ('track-height': 0.375rem,
        'thumb-size': 1rem,
        'label-font-size': 1rem),
    'lg': ('track-height': 0.5rem,
        'thumb-size': 1.25rem,
        'label-font-size': 1.125rem),
    'xl': ('track-height': 0.625rem,
        'thumb-size': 1.5rem,
        'label-font-size': 1.25rem)
);

// Slider color variables
$slider-colors: (
    'default': ('track': $gray-400,
        'thumb': $primary-color,
        'filled': $primary-color,
        'label': $gray-700,
        'thumb-label-bg': $gray-800,
        'thumb-label-color': $white,
        'focus-shadow': rgba($primary-color, 0.25),
        'thumb-shadow': rgba(0, 0, 0, 0.2),
        'hover-track': $gray-500,
        'hover-thumb': darken($primary-color, 10%),
        'hover-filled': darken($primary-color, 10%),
        'disabled-track': $gray-300,
        'disabled-thumb': $gray-400,
        'disabled-filled': $gray-400,
        'disabled-label': $gray-500),
    'primary': ('track': $gray-400,
        'thumb': $primary-color,
        'filled': $primary-color,
        'label': $gray-700,
        'thumb-label-bg': $primary-color,
        'thumb-label-color': $white,
        'focus-shadow': rgba($primary-color, 0.25),
        'thumb-shadow': rgba($primary-color, 0.3),
        'hover-track': $gray-500,
        'hover-thumb': darken($primary-color, 10%),
        'hover-filled': darken($primary-color, 10%),
        'disabled-track': lighten($primary-color, 40%),
        'disabled-thumb': lighten($primary-color, 30%),
        'disabled-filled': lighten($primary-color, 30%),
        'disabled-label': lighten($primary-color, 20%)),
    'success': ('track': $gray-400,
        'thumb': $success-color,
        'filled': $success-color,
        'label': $gray-700,
        'thumb-label-bg': $success-color,
        'thumb-label-color': $white,
        'focus-shadow': rgba($success-color, 0.25),
        'thumb-shadow': rgba($success-color, 0.3),
        'hover-track': $gray-500,
        'hover-thumb': darken($success-color, 10%),
        'hover-filled': darken($success-color, 10%),
        'disabled-track': lighten($success-color, 40%),
        'disabled-thumb': lighten($success-color, 30%),
        'disabled-filled': lighten($success-color, 30%),
        'disabled-label': lighten($success-color, 20%)),
    'warning': ('track': $gray-400,
        'thumb': $warning-color,
        'filled': $warning-color,
        'label': $gray-700,
        'thumb-label-bg': $warning-color,
        'thumb-label-color': $white,
        'focus-shadow': rgba($warning-color, 0.25),
        'thumb-shadow': rgba($warning-color, 0.3),
        'hover-track': $gray-500,
        'hover-thumb': darken($warning-color, 10%),
        'hover-filled': darken($warning-color, 10%),
        'disabled-track': lighten($warning-color, 40%),
        'disabled-thumb': lighten($warning-color, 30%),
        'disabled-filled': lighten($warning-color, 30%),
        'disabled-label': lighten($warning-color, 20%)),
    'danger': ('track': $gray-400,
        'thumb': $danger-color,
        'filled': $danger-color,
        'label': $gray-700,
        'thumb-label-bg': $danger-color,
        'thumb-label-color': $white,
        'focus-shadow': rgba($danger-color, 0.25),
        'thumb-shadow': rgba($danger-color, 0.3),
        'hover-track': $gray-500,
        'hover-thumb': darken($danger-color, 10%),
        'hover-filled': darken($danger-color, 10%),
        'disabled-track': lighten($danger-color, 40%),
        'disabled-thumb': lighten($danger-color, 30%),
        'disabled-filled': lighten($danger-color, 30%),
        'disabled-label': lighten($danger-color, 20%)),
    'info': ('track': $gray-400,
        'thumb': $info-color,
        'filled': $info-color,
        'label': $gray-700,
        'thumb-label-bg': $info-color,
        'thumb-label-color': $white,
        'focus-shadow': rgba($info-color, 0.25),
        'thumb-shadow': rgba($info-color, 0.3),
        'hover-track': $gray-500,
        'hover-thumb': darken($info-color, 10%),
        'hover-filled': darken($info-color, 10%),
        'disabled-track': lighten($info-color, 40%),
        'disabled-thumb': lighten($info-color, 30%),
        'disabled-filled': lighten($info-color, 30%),
        'disabled-label': lighten($info-color, 20%))
);

// Slider state variables
$slider-states: (
    'enabled': ('opacity': 1,
        'cursor': pointer,
        'pointer-events': auto
    ),
    'disabled': ('opacity': 0.5,
        'cursor': default,
        'pointer-events': none
    ),
    'readonly': ('opacity': 1,
        'cursor': default,
        'pointer-events': none
    )
);

// Spacing
$slider-thumb-label-margin-bottom: 1rem !default;
$slider-thumb-label-padding: 0.25rem 0.5rem !default;
$slider-thumb-label-arrow-size: 0.5rem !default;

// Border radius
$slider-track-border-radius: 0.25rem !default;
$slider-thumb-label-border-radius: 0.25rem !default;

// Focus
$slider-focus-outline-width: 0.25rem !default;

// Thumb interactions
$slider-thumb-scale-active: 1.1 !default;
```

### mixins
```
src/
├── assets/
│   └── scss/
│       └── mixins/
│           └── slider-mixins.scss
```

- **Path**: `src/assets/scss/mixins/slider-mixins.scss`
- **Description**: Slider mixins

```scss
// =============================================================================
// SLIDER COMPONENT MIXINS
// =============================================================================
@use '../variables' as *;
@use '../functions' as *;
@use '../mixins' as *;

@use '../variables/slider-variables' as *;
@use "sass:map";

// =============================================================================
// SIZE MIXINS
// =============================================================================

@mixin slider-size($size) {
    $size-config: map.get($slider-sizes, $size);

    @if $size-config {
        .slider-track {
            height: map.get($size-config, 'track-height');

            .slider-thumb {
                width: map.get($size-config, 'thumb-size');
                height: map.get($size-config, 'thumb-size');
            }
        }

        .slider-label {
            font-size: map.get($size-config, 'label-font-size');
        }
    }
}

// =============================================================================
// COLOR MIXINS
// =============================================================================

@mixin slider-color($color) {
    $color-config: map.get($slider-colors, $color);

    @if $color-config {
        .slider-track {
            background-color: map.get($color-config, 'track');

            .slider-filled {
                background-color: map.get($color-config, 'filled');
            }

            .slider-thumb {
                background-color: map.get($color-config, 'thumb');
                box-shadow: 0 .125rem .25rem map.get($color-config, 'thumb-shadow');
            }

            .thumb-label {
                background: map.get($color-config, 'thumb-label-bg');
                color: map.get($color-config, 'thumb-label-color');

                &::before {
                    background: map.get($color-config, 'thumb-label-bg');
                }
            }

            // Hover effects only when not disabled or readonly
            &:hover:not(.disabled):not(.readonly) {
                background-color: map.get($color-config, 'hover-track');

                .slider-filled {
                    background-color: map.get($color-config, 'hover-filled');
                }

                .slider-thumb {
                    background-color: map.get($color-config, 'hover-thumb');
                }
            }

            &:focus-visible {
                box-shadow: 0 0 0 $slider-focus-outline-width map.get($color-config, 'focus-shadow');
            }
        }

        .slider-label {
            color: map.get($color-config, 'label');
        }

        &.disabled {
            .slider-track {
                background-color: map.get($color-config, 'disabled-track');

                .slider-filled {
                    background-color: map.get($color-config, 'disabled-filled');
                }

                .slider-thumb {
                    background-color: map.get($color-config, 'disabled-thumb');
                }
            }

            .slider-label {
                color: map.get($color-config, 'disabled-label');
            }
        }
    }
}

// =============================================================================
// STATE MIXINS
// =============================================================================

@mixin slider-state($state) {
    $state-config: map.get($slider-states, $state);

    @if $state-config {
        opacity: map.get($state-config, 'opacity');
        cursor: map.get($state-config, 'cursor');
        pointer-events: map.get($state-config, 'pointer-events');
    }
}

// =============================================================================
// GENERATOR MIXINS
// =============================================================================

@mixin generate-slider-sizes {
    @each $size, $config in $slider-sizes {
        &.#{$size} {
            @include slider-size($size);
        }
    }
}

@mixin generate-slider-colors {
    @each $color, $config in $slider-colors {
        &.color-#{$color} {
            @include slider-color($color);
        }
    }
}

@mixin generate-slider-states {
    // Default enabled state (applies when no disabled or readonly classes are present)
    &:not(.disabled):not(.readonly) {
        @include slider-state('enabled');
    }

    &.disabled {
        @include slider-state('disabled');
    }

    &.readonly {
        @include slider-state('readonly');
    }
}
```
