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
        └── LinearProgress.jsx
```

- Path: `src/components/sharedComponents/LinearProgress.jsx`
- Description: Linear progress bar with determinate/indeterminate modes

```jsx
import React, { useMemo, memo } from "react";
import PropTypes from "prop-types";

const LinearProgress = memo(
  ({
    absolute = false,
    bgColor = "#e0e0e0",
    color = "#000",
    height = 4,
    indeterminate = false,
    modelValue = 0,
    max = 100,
    rounded = false,
    className = "",
    style = {},
    ...props
  }) => {
    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const percentage = useMemo(() => {
      return Math.min(100, Math.max(0, (modelValue / max) * 100));
    }, [modelValue, max]);

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerStyle = useMemo(
      () => ({
        height: `${height}px`,
        backgroundColor: bgColor,
        ...style,
      }),
      [height, bgColor, style]
    );

    const progressBarStyle = useMemo(
      () => ({
        width: indeterminate ? "40%" : `${percentage}%`,
        backgroundColor: color,
      }),
      [indeterminate, percentage, color]
    );

    const containerClass = useMemo(() => {
      const classes = ["linear-progress-container"];
      if (absolute) classes.push("absolute");
      if (rounded) classes.push("rounded");
      if (indeterminate) classes.push("indeterminate");
      if (className) classes.push(className);
      return classes.join(" ");
    }, [absolute, rounded, indeterminate, className]);

    const progressBarClass = useMemo(() => {
      const classes = ["linear-progress-bar"];
      if (indeterminate) classes.push("indeterminate-bar");
      return classes.join(" ");
    }, [indeterminate]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <div className={containerClass} style={containerStyle} {...props}>
        <div className={progressBarClass} style={progressBarStyle} />
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
LinearProgress.propTypes = {
  absolute: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  indeterminate: PropTypes.bool,
  modelValue: PropTypes.number,
  max: PropTypes.number,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

LinearProgress.defaultProps = {
  absolute: false,
  bgColor: "#e0e0e0",
  color: "#000",
  height: 4,
  indeterminate: false,
  modelValue: 0,
  max: 100,
  rounded: false,
  className: "",
  style: {},
};

LinearProgress.displayName = "LinearProgress";

export default LinearProgress;
```

### Styles

```
src/
├── assets/
    └── scss/
        └── components/
            └── _linear-progress.scss
```

- Path: `src/assets/scss/components/_linear-progress.scss`
- Description: Linear progress styles and indeterminate animation

```scss
// =============================================================================
// LINEAR PROGRESS COMPONENT STYLES
// =============================================================================
@use "../abstracts" as *;

.linear-progress-container {
  width: 100%;
  position: relative;
  overflow: hidden;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // Focus styles for accessibility
  &:focus-visible {
    outline: 0.125rem solid #2196f3;
    outline-offset: 0.125rem;
  }

  // Absolute positioning variant
  &.absolute {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  // Rounded variant
  &.rounded {
    border-radius: 6.25rem;

    .linear-progress-bar {
      border-radius: 6.25rem;
    }
  }

  // Indeterminate state
  &.indeterminate {
    .linear-progress-bar {
      transition: none;
    }
  }
}

// =============================================================================
// PROGRESS BAR STYLES
// =============================================================================

.linear-progress-bar {
  height: 100%;
  transition: width 0.3s ease;
  position: relative;

  // Indeterminate animation
  &.indeterminate-bar {
    position: absolute;
    left: -40%;
    animation: linear-indeterminate 1.2s infinite ease-in-out;
  }
}

// =============================================================================
// ANIMATIONS
// =============================================================================

@keyframes linear-indeterminate {
  0% {
    left: -40%;
    width: 40%;
  }

  50% {
    left: 20%;
    width: 60%;
  }

  100% {
    left: 100%;
    width: 80%;
  }
}

// =============================================================================
// RESPONSIVE DESIGN
// =============================================================================

@media (max-width: 768px) {
  .linear-progress-container {
    .linear-progress-bar {
      transition: width 0.2s ease;
    }
  }
}

@media (max-width: 480px) {
  .linear-progress-container {
    .linear-progress-bar {
      transition: width 0.15s ease;
    }
  }
}
```

#abstracts

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
  > This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables (like linear progress variables) are available when importing abstracts.

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
