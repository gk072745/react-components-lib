# Code

## Dependencies

- React 18+
- SCSS for styling

## Files

### Component File

```
src/
├── components/
│   └── sharedComponents/
│       └── CircularProgressBar.jsx
└── assets/
    └── scss/
        └── components/
            └── _circular-progress-bar.scss
```

- **Path**: `src/components/sharedComponents/CircularProgressBar.jsx`
- **Description**: Full-screen loading overlay component

```jsx
import React from "react";
import { useAppContext } from "../../customHooks/useAppContext.js";

const CircularProgressBar = () => {
  const { appImages } = useAppContext();

  const handleMouseUp = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="loading-animation initial-loader translucent-background"
      onMouseUp={handleMouseUp}
    >
      <img src={appImages["loader.gif"]} alt="Loading..." />
    </div>
  );
};

export default CircularProgressBar;
```

### Styles

- **Path**: `src/assets/scss/components/_circular-progress-bar.scss`
- **Description**: Loader overlay styles

```scss
@use "../abstracts" as *;

.loading-animation {
  z-index: 20;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3a393a54;
  pointer-events: all;

  img {
    width: 3rem;
    height: 3rem;
    pointer-events: none;
  }
}
```

### SCSS Abstracts

- **Path**: `src/assets/scss/abstracts/index.scss`
- **Description**: Global SCSS variables, mixins, and functions

> Note: The loader SCSS imports `../abstracts` and relies on the shared abstracts entry. No component-specific variables or mixins are required for this loader.

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
