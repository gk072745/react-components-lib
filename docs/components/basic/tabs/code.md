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
│       └── BasicTabs.jsx
```

- Path: `src/components/sharedComponents/BasicTabs.jsx`
- Description: Tabs with single/multiple selection, slots, and optional bottom-line style

```jsx
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import '@site/src/assets/scss/components/_basic-tabs.scss';

const BasicTabs = ({
  tabItems = [],
  selected = null,
  multiple = false,
  isLabeli18String = true,
  singlePacked = false,
  tabClasses = [],
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
  const handleTabItemClick = useCallback((item) => {
    if (onItemClicked) {
      onItemClicked(item);
    }
    
    if (bottomLineStyle) {
      // Use setTimeout to ensure DOM is updated
      setTimeout(() => {
        updateBottomLinePosition();
      }, 0);
    }
  }, [onItemClicked, bottomLineStyle]);

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
  const isTabSelected = useCallback((item) => {
    if (multiple) {
      return Array.isArray(internalSelected) && internalSelected.includes(item.value);
    }
    return internalSelected === item.value;
  }, [multiple, internalSelected]);

  // Render prepend slot
  const renderPrepend = useCallback((item) => {
    if (children && typeof children === 'function') {
      const prependSlot = children({ name: 'prepend', item });
      if (prependSlot) return prependSlot;
    }
    
    if (item && item.prepend) {
      return <div className="prepend-icon" dangerouslySetInnerHTML={{ __html: item.prepend }} />;
    }
    return null;
  }, [children]);

  // Render tab content
  const renderTabContent = useCallback((item) => {
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
  }, [children, isLabeli18String]);

  // Render append slot
  const renderAppend = useCallback((item) => {
    if (children && typeof children === 'function') {
      const appendSlot = children({ name: 'append', item });
      if (appendSlot) return appendSlot;
    }
    
    if (item && item.append) {
      return <div className="append-icon" dangerouslySetInnerHTML={{ __html: item.append }} />;
    }
    return null;
  }, [children]);

  // Container classes
  const containerClasses = useMemo(() => {
    const classes = ['overflow-container'];
    
    if (singlePacked) classes.push('single-packed');
    if (bottomLineStyle) classes.push('bottom-line-style');
    
    return [...classes, ...tabClasses].join(' ');
  }, [singlePacked, bottomLineStyle, tabClasses]);

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
  tabItems: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    icon: PropTypes.string,
    prepend: PropTypes.string,
    append: PropTypes.string,
  })),
  selected: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  multiple: PropTypes.bool,
  isLabeli18String: PropTypes.bool,
  singlePacked: PropTypes.bool,
  tabClasses: PropTypes.arrayOf(PropTypes.string),
  bottomLineStyle: PropTypes.bool,
  onItemClicked: PropTypes.func,
  children: PropTypes.func, // For slot-like functionality
};

export default BasicTabs;
```

### Styles

```
src/
├── assets/
│   └── scss/
│       └── components/
│           └── _basic-tabs.scss
```

- Path: `src/assets/scss/components/_basic-tabs.scss`
- Description: Tabs base styles, variants, and bottom-line style

```scss
@use '../abstracts/variables/tabs-variables' as *;
@use '../abstracts/mixins/tabs-mixins' as *;

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
    gap: $tabs-gap;
    
    &:has(.icon) {
      width: max-content;
      border-radius: $tabs-border-radius;
    }
    
    .tab {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: $tabs-padding;
      border-radius: $tabs-border-radius;
      border: $tabs-border-width solid $tabs-default-border;
      background: $tabs-default-bg;
      color: $tabs-default-color;
      font-size: $tabs-font-size;
      font-weight: $tabs-font-weight;
      min-width: $tabs-min-width;
      height: $tabs-height;
      transition: $tabs-transition;
      text-transform: $tabs-text-transform;
      
      &:hover,
      &.selected {
        color: $tabs-selected-color;
        border-color: $tabs-selected-border;
        background: $tabs-selected-bg;
      }
      
      &:has(.icon) {
        padding: $tabs-padding-icon;
        
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: $tabs-icon-size;
          height: $tabs-icon-size;
        }
      }
    }
    
    // Single packed style
    &.single-packed {
      @include tabs-single-packed;
    }
    
    // Dark gold variant
    &.dark-gold-tab {
      @include tabs-variant('dark-gold');
    }
    
    // Bottom line style
    &.bottom-line-style {
      @include tabs-bottom-line-style;
      
      // Dark gold variant for bottom line style
      &.dark-gold-tab {
        @include tabs-bottom-line-variant('dark-gold');
      }
    }
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

- Path: `src/assets/scss/abstracts/index.scss`
- Description: Forwards variables and mixins for tabs

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward 'variables';
@forward 'variables/tabs-variables';

// functions
@forward 'functions';

// mixins
@forward 'mixins';
@forward 'mixins/tabs-mixins';

// breakpoints
@forward 'breakpoints';
```

### Tabs Variables

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── variables/
│               └── _tabs-variables.scss
```

- Path: `src/assets/scss/abstracts/variables/_tabs-variables.scss`
- Description: Color system, variants, states, dimensions

```scss
@use 'sass:map';

// Tabs Variables
// ==========================================

// Base colors
$tabs-default-bg: #ffffff;
$tabs-default-color: #000000;
$tabs-default-border: #000000;
$tabs-selected-bg: #000000;
$tabs-selected-color: #ffffff;
$tabs-selected-border: #000000;

$tabs-hover-bg: #000000;
$tabs-hover-color: #ffffff;
$tabs-hover-border: #000000;

// Dark gold variant
$tabs-dark-gold-bg: #f7dd19;
$tabs-dark-gold-color: #000000;
$tabs-dark-gold-border: #f7dd19;
$tabs-dark-gold-selected-bg: #000000;
$tabs-dark-gold-selected-color: #f7dd19;
$tabs-dark-gold-hover-bg: #000000;
$tabs-dark-gold-hover-color: #f7dd19;

// Bottom line style colors
$tabs-bottom-line-default-color: #666666;
$tabs-bottom-line-hover-color: #333333;
$tabs-bottom-line-selected-color: #007bff;
$tabs-bottom-line-bg: #e0e0e0;
$tabs-bottom-line-active-bg: #007bff;
$tabs-bottom-line-dark-gold-color: #000000;
$tabs-bottom-line-dark-gold-hover-color: #f7dd19;
$tabs-bottom-line-dark-gold-selected-color: #f7dd19;
$tabs-bottom-line-dark-gold-active-bg: #f7dd19;

// Tab variants
$tabs-variants: (
  'default': (
    'bg': $tabs-default-bg,
    'color': $tabs-default-color,
    'border': $tabs-default-border,
    'selected-bg': $tabs-selected-bg,
    'selected-color': $tabs-selected-color,
    'selected-border': $tabs-selected-border,
    'hover-bg': $tabs-hover-bg,
    'hover-color': $tabs-hover-color,
    'hover-border': $tabs-hover-border
  ),
  'dark-gold': (
    'bg': $tabs-dark-gold-bg,
    'color': $tabs-dark-gold-color,
    'border': $tabs-dark-gold-border,
    'selected-bg': $tabs-dark-gold-selected-bg,
    'selected-color': $tabs-dark-gold-selected-color,
    'selected-border': $tabs-dark-gold-border,
    'hover-bg': $tabs-dark-gold-hover-bg,
    'hover-color': $tabs-dark-gold-hover-color,
    'hover-border': $tabs-dark-gold-border
  )
);

// Bottom line style variants
$tabs-bottom-line-variants: (
  'default': (
    'color': $tabs-bottom-line-default-color,
    'hover-color': $tabs-bottom-line-hover-color,
    'selected-color': $tabs-bottom-line-selected-color,
    'line-bg': $tabs-bottom-line-bg,
    'active-line-bg': $tabs-bottom-line-active-bg
  ),
  'dark-gold': (
    'color': $tabs-bottom-line-dark-gold-color,
    'hover-color': $tabs-bottom-line-dark-gold-hover-color,
    'selected-color': $tabs-bottom-line-dark-gold-selected-color,
    'line-bg': $tabs-bottom-line-bg,
    'active-line-bg': $tabs-bottom-line-dark-gold-active-bg
  )
);

// Tab states
$tabs-states: (
  'enabled': (
    'opacity': 1,
    'cursor': pointer,
    'pointer-events': auto
  ),
  'disabled': (
    'opacity': 0.6,
    'cursor': default,
    'pointer-events': none
  )
);

// Tab dimensions
$tabs-padding: 0 0.75rem;
$tabs-padding-icon: 0 0.5rem;
$tabs-padding-bottom-line: 0.75rem 1.5rem;
$tabs-min-width: 3.375rem;
$tabs-height: 2rem;
$tabs-border-radius: 0.25rem;
$tabs-border-width: 0.0625rem;
$tabs-gap: 0.5rem;
$tabs-gap-single-packed: 0rem;

// Icon dimensions
$tabs-icon-size: 1.25rem;

// Bottom line dimensions
$tabs-bottom-line-height: 2px;
$tabs-bottom-line-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

// Typography
$tabs-font-size: 0.8125rem;
$tabs-font-weight: 500;
$tabs-text-transform: capitalize;

// Transitions
$tabs-transition: all 0.3s ease;
```

### Tabs Mixins

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── mixins/
│               └── _tabs-mixins.scss
```

- Path: `src/assets/scss/abstracts/mixins/_tabs-mixins.scss`
- Description: Variant, bottom-line, state, and layout mixins
```scss
@use 'sass:map';
@use '../variables/tabs-variables' as *;

// Tabs Mixins
// ==========================================

// Tab variant mixin
@mixin tabs-variant($variant: 'default') {
  $variant-map: map.get($tabs-variants, $variant);
  
  @if $variant-map {
    .tab {
      background: map.get($variant-map, 'bg');
      color: map.get($variant-map, 'color');
      border-color: map.get($variant-map, 'border');
      
      &:hover {
        background: map.get($variant-map, 'hover-bg');
        color: map.get($variant-map, 'hover-color');
        border-color: map.get($variant-map, 'hover-border');
      }
      
      &.selected {
        background: map.get($variant-map, 'selected-bg');
        color: map.get($variant-map, 'selected-color');
        border-color: map.get($variant-map, 'selected-border');
      }
    }
  }
}

// Bottom line style variant mixin
@mixin tabs-bottom-line-variant($variant: 'default') {
  $variant-map: map.get($tabs-bottom-line-variants, $variant);
  
  @if $variant-map {
    .tab {
      background: transparent;
      color: map.get($variant-map, 'color');
      
      &:hover {
        background: transparent;
        color: map.get($variant-map, 'hover-color');
        border-color: transparent;
      }
      
      &.selected {
        background: transparent;
        color: map.get($variant-map, 'selected-color');
        border-color: transparent;
      }
    }
    
    .bottom-line-container {
      background: map.get($variant-map, 'line-bg');
      
      .bottom-line {
        background: map.get($variant-map, 'active-line-bg');
      }
    }
  }
}

// Tab state mixin
@mixin tabs-state($state: 'enabled') {
  $state-map: map.get($tabs-states, $state);
  
  @if $state-map {
    opacity: map.get($state-map, 'opacity');
    cursor: map.get($state-map, 'cursor');
    pointer-events: map.get($state-map, 'pointer-events');
  }
}

// Single packed style mixin
@mixin tabs-single-packed {
  border: $tabs-border-width solid $tabs-default-border;
  border-radius: $tabs-border-radius;
  gap: $tabs-gap-single-packed;
  
  .tab {
    border-radius: 0;
    border: none;
    
    &:not(:last-child) {
      border-right: $tabs-border-width solid $tabs-default-border;
    }
  }
}

// Bottom line style mixin
@mixin tabs-bottom-line-style {
  position: relative;
  gap: 0;
  
  .tab {
    border: none;
    border-radius: 0;
    background: transparent;
    color: $tabs-bottom-line-default-color;
    font-weight: $tabs-font-weight;
    padding: $tabs-padding-bottom-line;
    position: relative;
    transition: color $tabs-transition;
  }
  
  .bottom-line-container {
    position: absolute;
    width: 100%;
    height: $tabs-bottom-line-height;
    background: $tabs-bottom-line-bg;
    z-index: 0;
    bottom: 0px;
    
    .bottom-line {
      position: absolute;
      bottom: 0px;
      left: 0;
      height: $tabs-bottom-line-height;
      background: $tabs-bottom-line-active-bg;
      transition: $tabs-bottom-line-transition;
      z-index: 1;
    }
  }
}
```

