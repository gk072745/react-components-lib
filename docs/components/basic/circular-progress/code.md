# Code

## Dependencies

This component requires:

- React 18+
- SCSS for styling
- AppProvider context for image assets
- useAppContext custom hook

## Component Files

### React Component

```
src/
├── components/
    └── sharedComponents/
        └── CircularProgressBar.jsx
```

- **Path**: `src/components/sharedComponents/CircularProgressBar.jsx`
- **Description**: Full-screen loading overlay component

```jsx
import React from 'react';
import { useAppContext } from '../../customHooks/useAppContext.js';
import '../../assets/scss/components/_circular-progress-bar.scss';

const CircularProgressBar = () => {
  const { appImages } = useAppContext();

  const handleMouseUp = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="loading-animation initial-loader translucent-background" onMouseUp={handleMouseUp}>
      <img src={appImages['loader.gif']} alt="Loading..." />
    </div>
  );
};

export default CircularProgressBar;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _circular-progress-bar.scss
```

- **Path**: `src/assets/scss/components/_circular-progress-bar.scss`
- **Description**: Circular progress bar component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
@use '../abstracts' as *;

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
