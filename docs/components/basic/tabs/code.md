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
        └── BasicTabs.jsx
```

- **Path**: `src/components/sharedComponents/BasicTabs.jsx`
- **Description**: Main tabs component implementation

```jsx
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

const BasicTabs = ({
  tabItems = [],
  selected = null,
  multiple = false,
  isLabeli18String = true,
  singlePacked = false,
  variant = 'default',
  bottomLineStyle = false,
  onItemClicked,
  children,
  ...props
}) => {
  const [internalSelected, setInternalSelected] = useState(selected);
  const tabsContainerRef = useRef(null);
  const bottomLineRef = useRef(null);

  // Sync internal state with prop changes
  useEffect(() => {
    setInternalSelected(selected);
  }, [selected]);

  // Convert pixels to rem utility function
  const convertPixelsToRem = useCallback((pixels) => {
    return pixels / 16; // Assuming 16px = 1rem
  }, []);

  // Handle tab item click
  const handleTabItemClick = useCallback(
    (item) => {
      if (onItemClicked) {
        onItemClicked(item);
      }

      if (bottomLineStyle) {
        // Use setTimeout to ensure DOM is updated
        setTimeout(() => {
          updateBottomLinePosition();
        }, 0);
      }
    },
    [onItemClicked, bottomLineStyle]
  );

  // Update bottom line position
  const updateBottomLinePosition = useCallback(() => {
    if (!bottomLineStyle || !tabsContainerRef.current || !bottomLineRef.current) return;

    const selectedTab = tabsContainerRef.current.querySelector('.tab.selected');
    if (selectedTab) {
      const containerRect = tabsContainerRef.current.getBoundingClientRect();
      const tabRect = selectedTab.getBoundingClientRect();
      const offsetLeft = tabRect.left - containerRect.left;
      const width = tabRect.width;

      bottomLineRef.current.style.transform = `translateX(${convertPixelsToRem(offsetLeft)}rem)`;
      bottomLineRef.current.style.width = `${convertPixelsToRem(width)}rem`;
    }
  }, [bottomLineStyle, convertPixelsToRem]);

  // Update bottom line on mount and when selected changes
  useEffect(() => {
    if (bottomLineStyle) {
      setTimeout(() => {
        updateBottomLinePosition();
      }, 0);
    }
  }, [bottomLineStyle, updateBottomLinePosition, internalSelected]);

  // Check if tab is selected
  const isTabSelected = useCallback(
    (item) => {
      if (multiple) {
        return Array.isArray(internalSelected) && internalSelected.includes(item.value);
      }
      return internalSelected === item.value;
    },
    [multiple, internalSelected]
  );

  // Render prepend slot
  const renderPrepend = useCallback(
    (item) => {
      if (children && typeof children === 'function') {
        const prependSlot = children({ name: 'prepend', item });
        if (prependSlot) return prependSlot;
      }

      if (item && item.prepend) {
        return <div className="prepend-icon" dangerouslySetInnerHTML={{ __html: item.prepend }} />;
      }
      return null;
    },
    [children]
  );

  // Render tab content
  const renderTabContent = useCallback(
    (item) => {
      if (children && typeof children === 'function') {
        const tabIconSlot = children({ name: 'tab-icon', item });
        if (tabIconSlot) return tabIconSlot;
      }

      if (isLabeli18String && item.name) {
        // In a real app, you'd use i18n here: return t(item.name);
        return item.name;
      } else if (item.name) {
        return item.name;
      } else if (item.icon) {
        return <div className="icon" dangerouslySetInnerHTML={{ __html: item.icon }} />;
      }
      return null;
    },
    [children, isLabeli18String]
  );

  // Render append slot
  const renderAppend = useCallback(
    (item) => {
      if (children && typeof children === 'function') {
        const appendSlot = children({ name: 'append', item });
        if (appendSlot) return appendSlot;
      }

      if (item && item.append) {
        return <div className="append-icon" dangerouslySetInnerHTML={{ __html: item.append }} />;
      }
      return null;
    },
    [children]
  );

  // Container classes
  const containerClasses = useMemo(() => {
    const classes = ['overflow-container'];

    if (singlePacked) classes.push('single-packed');
    if (bottomLineStyle) classes.push('bottom-line-style');
    if (variant && variant !== 'default') classes.push(`variant-${variant}`);

    return classes.join(' ');
  }, [singlePacked, bottomLineStyle, variant]);

  return (
    <div className="basic-tabs-wrapper" {...props}>
      <div ref={tabsContainerRef} className={containerClasses}>
        {tabItems.map((item) => (
          <div
            key={item.value}
            className={`tab ${isTabSelected(item) ? 'selected' : ''}`}
            onClick={() => handleTabItemClick(item)}
          >
            {renderPrepend(item)}
            {renderTabContent(item)}
            {renderAppend(item)}
          </div>
        ))}

        {/* Moving bottom line for bottomLineStyle */}
        {bottomLineStyle && (
          <div className="bottom-line-container">
            <div ref={bottomLineRef} className="bottom-line" />
          </div>
        )}
      </div>
    </div>
  );
};

BasicTabs.propTypes = {
  tabItems: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string,
      icon: PropTypes.string,
      prepend: PropTypes.string,
      append: PropTypes.string,
    })
  ),
  selected: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  multiple: PropTypes.bool,
  isLabeli18String: PropTypes.bool,
  singlePacked: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'dark-gold']),
  bottomLineStyle: PropTypes.bool,
  onItemClicked: PropTypes.func,
  children: PropTypes.func, // For slot-like functionality
};

export default BasicTabs;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-tabs.scss
```

- **Path**: `src/assets/scss/components/_basic-tabs.scss`
- **Description**: Tabs component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
@use '../abstracts' as *;

// Basic Tabs Component
// ==========================================

.basic-tabs-wrapper {
  display: flex;
  position: relative;
  overflow-x: hidden;
  width: 100%;

  .overflow-container {
    display: flex;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    overflow-x: auto;
    gap: 0.5rem;

    &:has(.icon) {
      width: max-content;
      border-radius: 0.25rem;
    }

    .tab {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0.75rem;
      border-radius: 0.25rem;
      border: 0.0625rem solid #000000;
      background: #ffffff;
      color: #000000;
      font-size: 0.8125rem;
      font-weight: 500;
      min-width: 3.375rem;
      height: 2rem;
      transition: all 0.3s ease;
      text-transform: capitalize;

      &:hover,
      &.selected {
        color: #ffffff;
        border-color: #000000;
        background: #000000;
      }

      &:has(.icon) {
        padding: 0 0.5rem;

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }

    // Single packed style
    &.single-packed {
      border: 0.0625rem solid #000000;
      border-radius: 0.25rem;
      gap: 0rem;

      .tab {
        border-radius: 0;
        border: none;

        &:not(:last-child) {
          border-right: 0.0625rem solid #000000;
        }
      }
    }

    // Bottom line style
    &.bottom-line-style {
      position: relative;
      gap: 0;

      .tab {
        border: none;
        border-radius: 0;
        background: transparent;
        color: #666666;
        font-weight: 500;
        padding: 0.75rem 1.5rem;
        position: relative;
        transition: color 0.3s ease;
      }

      .bottom-line-container {
        position: absolute;
        width: 100%;
        height: 2px;
        background: #e0e0e0;
        z-index: 0;
        bottom: 0px;

        .bottom-line {
          position: absolute;
          bottom: 0px;
          left: 0;
          height: 2px;
          background: #007bff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }
      }
    }

    // =============================================================================
    // VARIANT STYLES - DEFAULT
    // =============================================================================

    &.variant-default {
      // Default styles are already in .tab above
    }

    // =============================================================================
    // VARIANT STYLES - DARK GOLD
    // =============================================================================

    &.variant-dark-gold {
      .tab {
        background: #f7dd19;
        color: #000000;
        border-color: #f7dd19;

        &:hover {
          background: #000000;
          color: #f7dd19;
          border-color: #f7dd19;
        }

        &.selected {
          background: #000000;
          color: #f7dd19;
          border-color: #f7dd19;
        }
      }

      // Dark gold with single packed style
      &.single-packed {
        border-color: #f7dd19;

        .tab {
          &:not(:last-child) {
            border-right-color: #f7dd19;
          }
        }
      }

      // Dark gold with bottom line style
      &.bottom-line-style {
        .tab {
          background: transparent;
          color: #000000;

          &:hover {
            background: transparent;
            color: #f7dd19;
            border-color: transparent;
          }

          &.selected {
            background: transparent;
            color: #f7dd19;
            border-color: transparent;
          }
        }

        .bottom-line-container {
          background: #e0e0e0;

          .bottom-line {
            background: #f7dd19;
          }
        }
      }
    }
  }
}
```
