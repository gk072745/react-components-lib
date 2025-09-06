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
    └── sharedComponents/
        └── Loader.jsx
```

- Path: `src/components/sharedComponents/Loader.jsx`
- Description: Loader overlay component (SVG spinner or custom image)

```jsx
import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';

const Loader = memo(
  ({
    size = 40,
    width = 4,
    bgColor = 'rgba(255, 255, 255, 0.75)',
    fillColor = '#000000',
    emptyColor = '#e0e0e0',
    isLocalLoader = true,
    src = '',
    className = '',
    style = {},
    children,
    ...props
  }) => {
    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerStyle = useMemo(
      () => ({
        backgroundColor: bgColor,
        '--loader-fill-color': fillColor,
        '--loader-empty-color': emptyColor,
        ...style,
      }),
      [bgColor, fillColor, emptyColor, style]
    );

    const imageStyle = useMemo(
      () => ({
        width: `${size}px`,
        height: `${size}px`,
      }),
      [size]
    );

    const svgStyle = useMemo(
      () => ({
        width: size,
        height: size,
      }),
      [size]
    );

    const containerClass = useMemo(() => {
      const classes = ['loader-wrapper'];
      if (isLocalLoader) classes.push('local-loader');
      if (className) classes.push(className);
      return classes.join(' ');
    }, [isLocalLoader, className]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <div className={containerClass} style={containerStyle} {...props}>
        {children || (
          <>
            {src ? (
              <img
                src={src}
                alt="loader"
                className="custom-loader-img"
                style={imageStyle}
              />
            ) : (
              <svg
                className="indeterminate-loader"
                style={svgStyle}
                viewBox="25 25 50 50"
              >
                <circle
                  className="track"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth={width}
                />
                <circle
                  className="arc"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth={width}
                  strokeLinecap="round"
                />
              </svg>
            )}
          </>
        )}
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
Loader.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
  bgColor: PropTypes.string,
  fillColor: PropTypes.string,
  emptyColor: PropTypes.string,
  isLocalLoader: PropTypes.bool,
  src: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

Loader.defaultProps = {
  size: 40,
  width: 4,
  bgColor: 'rgba(255, 255, 255, 0.75)',
  fillColor: '#000000',
  emptyColor: '#e0e0e0',
  isLocalLoader: true,
  src: '',
  className: '',
  style: {},
  children: null,
};

Loader.displayName = 'Loader';

export default Loader;
```

### Styles

```
src/
├── assets/
    └── scss/
        └── components/
            └── _loader.scss
```

- Path: `src/assets/scss/components/_loader.scss`
- Description: Loader overlay styles and animations

```scss
// =============================================================================
// LOADER COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

*,
*::after,
*::before {
    box-sizing: border-box;
}

.loader-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: all;
    user-select: none;
    cursor: default;
    --loader-fill-color: #000;
    --loader-empty-color: #e0e0e0;

    // Local loader variant (relative positioning)
    &.local-loader {
        position: relative;
        width: 100%;
        height: 100%;
    }

    // Focus styles for accessibility
    &:focus-visible {
        outline: 0.125rem solid #2196f3;
        outline-offset: 0.125rem;
    }

    // SVG Loader styles
    .indeterminate-loader {
        animation: rotate 2s linear infinite;

        .track {
            stroke: var(--loader-empty-color);
        }

        .arc {
            stroke: var(--loader-fill-color);
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
            animation: dash 1.5s ease-in-out infinite;
        }
    }

    // Custom image loader
    .custom-loader-img {
        display: block;
        max-width: 100%;
        height: auto;
    }
}

// =============================================================================
// ANIMATIONS
// =============================================================================

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -2.1875rem;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -7.75rem;
    }
}


// =============================================================================
// THEME VARIANTS
// =============================================================================

// Dark theme support
@media (prefers-color-scheme: dark) {
    .loader-wrapper {
        --loader-fill-color: #ffffff;
        --loader-empty-color: #404040;
    }
}

// High contrast mode
@media (prefers-contrast: high) {
    .loader-wrapper {
        --loader-fill-color: #000000;
        --loader-empty-color: #ffffff;
    }
}

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
    .loader-wrapper {
        .indeterminate-loader {
            animation: none;
            
            .arc {
                animation: none;
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -2.1875rem;
            }
        }
    }
}
```

### Abstracts
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
  > This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables (like loader variables) are available when importing abstracts.

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward "variables";

// functions
@forward "functions";

// mixins
@forward "mixins";

// breakpoints
@forward "breakpoints";
```