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
│       └── BasicSwitch.jsx
```

- Path: `src/components/sharedComponents/BasicSwitch.jsx`
- Description: Toggle switch with sizes, colors, inset, labels

```jsx
import React, { useMemo, useCallback, memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BasicSwitch = memo(
  ({
    value,
    disabled = false,
    readonly = false,
    bgColor = 'grey',
    activeBgColor = 'grey',
    sliderColor,
    activeSliderColor,
    size = 'xl',
    label = '',
    labelPosition = 'right',
    inset = false,
    dotLabels = null,
    dotLabelColors = { true: '#000', false: '#000' },
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
    const computedSliderColor = useMemo(() => {
      if (sliderColor) return sliderColor;
      return inset ? 'grey' : 'white';
    }, [sliderColor, inset]);

    const computedActiveSliderColor = useMemo(() => {
      if (activeSliderColor) return activeSliderColor;
      return inset ? 'grey' : 'white';
    }, [activeSliderColor, inset]);

    const currentDotLabelColor = useMemo(() => {
      return dotLabelColors?.[internalValue] || '#000';
    }, [dotLabelColors, internalValue]);

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
      const classes = ['switch-container', size];
      
      if (disabled) classes.push('disabled');
      if (readonly) classes.push('readonly');
      if (internalValue) classes.push('checked');
      if (inset) classes.push('inset');
      if (className) classes.push(className);
      
      return classes.join(' ');
    }, [size, disabled, readonly, internalValue, inset, className]);

    const sliderStyle = useMemo(() => ({
      '--bg-color': bgColor,
      '--active-bg-color': activeBgColor,
      color: currentDotLabelColor,
      ...style,
    }), [bgColor, activeBgColor, currentDotLabelColor, style]);

    const dotStyle = useMemo(() => ({
      '--slider-color': computedSliderColor,
      '--active-slider-color': computedActiveSliderColor,
    }), [computedSliderColor, computedActiveSliderColor]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderLabel = useCallback((position) => {
      if (!label || labelPosition !== position) return null;
      
      return (
        <span className={`${position}-label`}>
          {label}
        </span>
      );
    }, [label, labelPosition]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <label
        className={containerClass}
        {...props}
      >
        {renderLabel('left')}
        
        <input
          type="checkbox"
          checked={internalValue}
          hidden
          readOnly={readonly}
          disabled={disabled}
          onChange={handleSwitchChange}
        />
        
        <span className="switch-slider" style={sliderStyle}>
          {currentDotLabel}
          <span className="switch-slider-dot" style={dotStyle} />
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
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  bgColor: PropTypes.string,
  activeBgColor: PropTypes.string,
  sliderColor: PropTypes.string,
  activeSliderColor: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  inset: PropTypes.bool,
  dotLabels: PropTypes.object,
  dotLabelColors: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

BasicSwitch.displayName = 'BasicSwitch';

export default BasicSwitch;
```

### Styles

```
src/
├── assets/
│   └── scss/
│       └── components/
│           └── _basic-switch.scss
```

- Path: `src/assets/scss/components/_basic-switch.scss`
- Description: Switch slider, dot, label, sizes and state styles

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

    // Generate all sizes, colors, and states using mixins
    @include generate-switch-sizes;
    @include generate-switch-colors;
    @include generate-switch-states;

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
            background-color: var(--active-bg-color);
            justify-content: flex-start;

            .switch-slider-dot {
                background-color: var(--active-slider-color);
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
        background-color: var(--bg-color);
        border-radius: $switch-slider-border-radius;
        transition: all $switch-transition-duration $switch-transition-timing;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: flex-end;

        .switch-slider-dot {
            position: absolute;
            left: 0;
            border-radius: $switch-dot-border-radius;
            transition: all $switch-transition-duration $switch-transition-timing;
            background-color: var(--slider-color);
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

    // Default color (when no color class is applied)
    &:not([class*='color-']) {
        @include switch-color('default');
    }
}
```

### SCSS Abstracts

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── index.scss
```

- **Path**: `src/assets/scss/abstracts/index.scss`
- **Description**: Forwards variables (including `switch-variables`) and mixins (`switch-mixins`)

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================
- Path: `src/assets/scss/abstracts/index.scss`
- Description: Forwards variables (including `switch-variables`) and mixins (`switch-mixins`)

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward 'variables';
@forward 'variables/switch-variables';

// functions
@forward 'functions';

// mixins
@forward 'mixins';
@forward 'mixins/switch-mixins';

// breakpoints
@forward 'breakpoints';
```

### Switch Variables

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── variables/
│               └── switch-variables.scss
```

- Path: `src/assets/scss/abstracts/variables/_switch-variables.scss`
- Description: Sizes, colors, states, transitions, border radii

```scss
// =============================================================================
// SWITCH COMPONENT VARIABLES - COMPLETE SYSTEM
// =============================================================================
@use '../variables' as *;

// Switch size variables
$switch-sizes: (
    'xs': ('container-font-size': 0.75rem,
        'slider-min-width': 2.5rem,
        'slider-height': 1.25rem,
        'slider-font-size': 0.375rem,
        'slider-padding-inline': 0.25rem,
        'dot-width': 1rem,
        'dot-height': 1rem,
        'dot-margin': 0 0.1875rem,
        'dot-checked-left': calc(100% - 0.1875rem),
        'inset-slider-min-width': 1.75rem,
        'inset-slider-height': 0.75rem,
        'inset-slider-margin-right': 0.5rem,
        'inset-dot-width': 1rem,
        'inset-dot-height': 1rem,
        'inset-dot-margin': 0 0.1875rem),
    'sm': ('container-font-size': 0.875rem,
        'slider-min-width': 3rem,
        'slider-height': 1.5rem,
        'slider-font-size': 0.4375rem,
        'slider-padding-inline': 0.3125rem,
        'dot-width': 1.25rem,
        'dot-height': 1.25rem,
        'dot-margin': 0 0.1875rem,
        'dot-checked-left': calc(100% - 0.1875rem),
        'inset-slider-min-width': 2.125rem,
        'inset-slider-height': 0.875rem,
        'inset-slider-margin-right': 0.5rem,
        'inset-dot-width': 1.125rem,
        'inset-dot-height': 1.125rem,
        'inset-dot-margin': 0 0.1875rem),
    'md': ('container-font-size': 1rem,
        'slider-min-width': 4rem,
        'slider-height': 2rem,
        'slider-font-size': 0.5625rem,
        'slider-padding-inline': 0.375rem,
        'dot-width': 1.5rem,
        'dot-height': 1.5rem,
        'dot-margin': 0 0.25rem,
        'dot-checked-left': calc(100% - 0.25rem),
        'inset-slider-min-width': 2.5rem,
        'inset-slider-height': 1rem,
        'inset-slider-margin-right': 0.625rem,
        'inset-slider-padding-inline': 0.25rem,
        'inset-dot-width': 1.25rem,
        'inset-dot-height': 1.25rem,
        'inset-dot-margin': 0 0.25rem),
    'lg': ('container-font-size': 1.125rem,
        'slider-min-width': 5rem,
        'slider-height': 2.5rem,
        'slider-border-radius': 1.25rem,
        'slider-font-size': 0.6875rem,
        'slider-padding-inline': 0.5rem,
        'dot-width': 2rem,
        'dot-height': 2rem,
        'dot-margin': 0 0.375rem,
        'dot-checked-left': calc(100% - 0.375rem),
        'inset-slider-min-width': 3.125rem,
        'inset-slider-height': 1rem,
        'inset-slider-margin-right': 0.625rem,
        'inset-slider-padding-inline': 0.375rem,
        'inset-dot-width': 1.5rem,
        'inset-dot-height': 1.5rem,
        'inset-dot-margin': 0 0.375rem),
    'xl': ('container-font-size': 1.25rem,
        'slider-min-width': 6rem,
        'slider-height': 3rem,
        'slider-border-radius': 1.5rem,
        'slider-font-size': 0.875rem,
        'slider-padding-inline': 0.5rem,
        'dot-width': 2.5rem,
        'dot-height': 2.5rem,
        'dot-margin': 0 0.375rem,
        'dot-checked-left': calc(100% - 0.375rem),
        'inset-slider-min-width': 3.5rem,
        'inset-slider-height': 1.25rem,
        'inset-slider-margin-right': 0.625rem,
        'inset-slider-font-size': 0.75rem,
        'inset-dot-width': 1.75rem,
        'inset-dot-height': 1.75rem,
        'inset-dot-margin': 0 0.375rem)
);

// Switch color variables
$switch-colors: (
    'default': ('bg': $gray-400,
        'active-bg': $primary-color,
        'slider': $white,
        'active-slider': $white),
    'primary': ('bg': $gray-400,
        'active-bg': $primary-color,
        'slider': $white,
        'active-slider': $white),
    'success': ('bg': $gray-400,
        'active-bg': $success-color,
        'slider': $white,
        'active-slider': $white),
    'warning': ('bg': $gray-400,
        'active-bg': $warning-color,
        'slider': $white,
        'active-slider': $white),
    'danger': ('bg': $gray-400,
        'active-bg': $danger-color,
        'slider': $white,
        'active-slider': $white),
    'info': ('bg': $gray-400,
        'active-bg': $info-color,
        'slider': $white,
        'active-slider': $white)
);

// Switch state variables
$switch-states: (
    'enabled': ('opacity': 1,
        'cursor': pointer,
        'pointer-events': auto
    ),
    'disabled': ('opacity': 0.6,
        'cursor': default,
        'pointer-events': none
    ),
    'readonly': ('opacity': 1,
        'cursor': default,
        'pointer-events': none
    )
);

// Switch transition variables
$switch-transition-duration: 0.3s !default;
$switch-transition-timing: ease !default;

// Switch shadow variables
$switch-dot-shadow: (
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12)
) !default;

// Switch border radius
$switch-slider-border-radius: 1rem !default;
$switch-dot-border-radius: 50% !default;
```

### Switch Mixins

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── mixins/
│               └── switch-mixins.scss
```

- Path: `src/assets/scss/abstracts/mixins/_switch-mixins.scss`
- Description: Size, color, and state mixins + generators

```scss
// =============================================================================
// SWITCH COMPONENT MIXINS
// =============================================================================
@use '../variables' as *;
@use '../functions' as *;
@use '../mixins' as *;

@use '../variables/switch-variables' as *;
@use "sass:map";

// =============================================================================
// SIZE MIXINS
// =============================================================================

@mixin switch-size($size) {
    $size-config: map.get($switch-sizes, $size);

    @if $size-config {
        font-size: map.get($size-config, 'container-font-size');

        .switch-slider {
            min-width: map.get($size-config, 'slider-min-width');
            height: map.get($size-config, 'slider-height');
            font-size: map.get($size-config, 'slider-font-size');
            padding-inline: map.get($size-config, 'slider-padding-inline');

            @if map.has-key($size-config, 'slider-border-radius') {
                border-radius: map.get($size-config, 'slider-border-radius');
            }

            .switch-slider-dot {
                width: map.get($size-config, 'dot-width');
                height: map.get($size-config, 'dot-height');
                margin: map.get($size-config, 'dot-margin');
            }
        }

        input:checked + .switch-slider .switch-slider-dot {
            left: map.get($size-config, 'dot-checked-left');
        }

        // Inset variant
        &.inset {
            .switch-slider {
                min-width: map.get($size-config, 'inset-slider-min-width');
                height: map.get($size-config, 'inset-slider-height');
                margin-right: map.get($size-config, 'inset-slider-margin-right');

                @if map.has-key($size-config, 'inset-slider-padding-inline') {
                    padding-inline: map.get($size-config, 'inset-slider-padding-inline');
                }

                @if map.has-key($size-config, 'inset-slider-font-size') {
                    font-size: map.get($size-config, 'inset-slider-font-size');
                }

                .switch-slider-dot {
                    width: map.get($size-config, 'inset-dot-width');
                    height: map.get($size-config, 'inset-dot-height');
                    margin: map.get($size-config, 'inset-dot-margin');
                    box-shadow: $switch-dot-shadow;
                }
            }
        }
    }
}

// =============================================================================
// COLOR MIXINS
// =============================================================================

@mixin switch-color($color) {
    $color-config: map.get($switch-colors, $color);

    @if $color-config {
        .switch-slider {
            background-color: map.get($color-config, 'bg');

            .switch-slider-dot {
                background-color: map.get($color-config, 'slider');
            }
        }

        input:checked + .switch-slider {
            background-color: map.get($color-config, 'active-bg');

            .switch-slider-dot {
                background-color: map.get($color-config, 'active-slider');
            }
        }
    }
}

// =============================================================================
// STATE MIXINS
// =============================================================================

@mixin switch-state($state) {
    $state-config: map.get($switch-states, $state);

    @if $state-config {
        opacity: map.get($state-config, 'opacity');
        cursor: map.get($state-config, 'cursor');
        pointer-events: map.get($state-config, 'pointer-events');
    }
}

// =============================================================================
// GENERATOR MIXINS
// =============================================================================

@mixin generate-switch-sizes {
    @each $size, $config in $switch-sizes {
        &.#{$size} {
            @include switch-size($size);
        }
    }
}

@mixin generate-switch-colors {
    @each $color, $config in $switch-colors {
        &.color-#{$color} {
            @include switch-color($color);
        }
    }
}

@mixin generate-switch-states {
    // Default enabled state (applies when no disabled or readonly classes are present)
    &:not(.disabled):not(.readonly) {
        @include switch-state('enabled');
    }

    &.disabled {
        @include switch-state('disabled');
    }

    &.readonly {
        @include switch-state('readonly');
    }
}
```
