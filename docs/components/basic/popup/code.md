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
        └── BasicPopup.jsx
```

- **Path**: `src/components/sharedComponents/BasicPopup.jsx`
- **Description**: Main popup component implementation

```jsx
import { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/components/_basic-popup.scss';

const BasicPopup = memo(({ children, height = 27.75, width = 27.75, onPopupOutsideClick }) => {
  const containerStyle = useMemo(
    () => ({
      height: `${height}rem`,
      width: `${width}rem`,
    }),
    [height, width]
  );

  const handleOutsideClick = useCallback(() => {
    onPopupOutsideClick?.();
  }, [onPopupOutsideClick]);

  const handleContainerClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="popup-component-wrapper" onClick={handleOutsideClick}>
      <div className="popup-component-container" style={containerStyle} onClick={handleContainerClick}>
        {children}
      </div>
    </div>
  );
});

BasicPopup.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  width: PropTypes.number,
  onPopupOutsideClick: PropTypes.func,
};

export default BasicPopup;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-popup.scss
```

- **Path**: `src/assets/scss/components/_basic-popup.scss`
- **Description**: Popup component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. Specifically, it uses the `z()` function for z-index management. The component imports abstracts via `@use '../abstracts' as *;`

```scss
@use '../abstracts' as *;

.popup-component-wrapper {
  z-index: z('modal-backdrop');
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  .popup-component-container {
    background-color: #ffffff;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 83px 0px rgba(16, 7, 36, 0.12);
  }
}
```
