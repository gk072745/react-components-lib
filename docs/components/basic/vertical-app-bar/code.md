# Code

## Dependencies

- React 18+
- SCSS for styling (component styles in `_vertical-app-bar.scss`)
- PropTypes for prop validation

## Files

### Component File

```
src/
├── components/
│   └── sharedComponents/
│       └── VerticalAppBar.jsx
```

- Path: `src/components/sharedComponents/VerticalAppBar.jsx`
- Description: Vertical side app bar with logo/title, items, nesting, and behaviors

```jsx
import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import '@site/src/assets/scss/components/_vertical-app-bar.scss';

const VerticalAppBar = ({
  width = '20rem',
  height = '100%',
  elevation = true,
  floating = true,
  sticky = true,
  logo = '',
  roundedLogo = false,
  title = '',
  showCloseButton = true,
  prependHeight = '4rem',
  navigationLogoSize = '2.5rem',
  logoSize = '2.5rem',
  titleColor = '#111',
  backgroundColor = '#f2f2f2',
  modelValue = false,
  persistIconsOnHide = true,
  expandOnHover = false,
  expandOnClick = true,
  overlay = true,
  position = 'left',
  transitionDuration = '0.3s',
  items = [],
  activeItem = '',
  showChevron = true,
  multiExpand = true,
  // Render props (optional). If not provided, sensible defaults are rendered
  prepend,
  content,
  append,
  // Event callbacks
  onLogoClick,
  onCloseClick,
  onTitleClick,
  onModelValueChange,
  onActiveItemChange,
  className = '',
  style = {},
  ...rest
}) => {
  // =============================================================================
  // STATE
  // =============================================================================
  const [expandedItems, setExpandedItems] = useState([]);

  // =============================================================================
  // HANDLERS
  // =============================================================================
  const handleLogoClick = useCallback(() => {
    onLogoClick?.();
  }, [onLogoClick]);

  const handleCloseClick = useCallback(() => {
    onModelValueChange?.(false);
    onCloseClick?.();
  }, [onModelValueChange, onCloseClick]);

  const handleTitleClick = useCallback(() => {
    onTitleClick?.();
  }, [onTitleClick]);

  const handleExpandClick = useCallback(() => {
    if (expandOnClick && !modelValue) onModelValueChange?.(true);
  }, [expandOnClick, modelValue, onModelValueChange]);

  const findParent = useCallback((list, targetValue) => {
    for (const item of list) {
      if (item?.children?.some(child => child?.value === targetValue)) {
        return item;
      }
      if (item?.children?.length > 0) {
        const found = findParent(item.children, targetValue);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const checkExpandIncluded = useCallback((item) => {
    if (expandedItems.includes(item?.value)) return true;
    if (item?.children?.length > 0) {
      return item.children.some(child => checkExpandIncluded(child));
    }
    return false;
  }, [expandedItems]);

  const iterateItems = useMemo(() => {
    const flat = [];

    const iterateFunction = (item, level, parentExpanded) => {
      const isRoot = level === 0;
      const isVisible = isRoot || parentExpanded;

      if (isVisible) {
        flat.push({ ...item, level });

        const isExpanded = checkExpandIncluded(item);
        if (item?.children?.length > 0) {
          item.children.forEach(child => iterateFunction(child, level + 1, isExpanded));
        }
      }
    };

    items.forEach(item => iterateFunction(item, 0, true));
    return flat;
  }, [items, checkExpandIncluded]);

  const checkItemActive = useCallback((item) => {
    if (item?.value === activeItem) return true;
    if (item?.children?.length > 0) {
      return item.children.some(child => checkItemActive(child));
    }
    return false;
  }, [activeItem]);

  const handleItemClick = useCallback((item) => {
    if (item?.children?.length > 0) {
      const index = expandedItems.indexOf(item.value);
      const isExpanded = index !== -1;

      if (multiExpand) {
        if (isExpanded) {
          const next = expandedItems.slice();
          next.splice(index, 1);
          setExpandedItems(next);
        } else {
          setExpandedItems(prev => [...prev, item.value]);
        }
      } else {
        if (item?.level > 1) {
          const parentItem = findParent(items, item.value);
          if (parentItem) {
            setExpandedItems(isExpanded ? [] : [parentItem.value]);
          }
        } else {
          setExpandedItems(isExpanded ? [] : [item.value]);
        }
      }
    } else {
      onActiveItemChange?.(item.value);
    }
  }, [expandedItems, multiExpand, findParent, items, onActiveItemChange]);

  // =============================================================================
  // COMPUTED STYLES/CLASSES
  // =============================================================================
  const positionStyles = useMemo(() => ({
    '--logo-size': logoSize,
    '--width': width,
    '--transition-duration': transitionDuration,
    '--navigation-logo-size': navigationLogoSize,
  }), [logoSize, width, transitionDuration, navigationLogoSize]);

  const containerClasses = useMemo(() => {
    const classes = ['vertical-app-bar'];
    if (elevation) classes.push('elevation');
    if (floating) classes.push('floating');
    if (!modelValue) classes.push('hidePanel');
    if (persistIconsOnHide) classes.push('persistIconsOnHide');
    if (expandOnHover) classes.push('expandOnHover');
    if (position === 'left') classes.push('position-left');
    if (position === 'right') classes.push('position-right');
    if (sticky) classes.push('sticky');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [elevation, floating, modelValue, persistIconsOnHide, expandOnHover, position, sticky, className]);

  // =============================================================================
  // RENDER HELPERS
  // =============================================================================
  const renderLogo = useCallback(() => {
    if (!logo) return null;

    const wrapperStyle = { width: logoSize, height: logoSize };
    const wrapperClass = `logo-wrapper ${roundedLogo ? 'rounded' : ''}`;

    const isInlineSvg = typeof logo === 'string' && logo.trim().startsWith('<svg');

    return (
      <div className={wrapperClass} onClick={handleLogoClick} style={wrapperStyle}>
        {isInlineSvg ? (
          <div className="logo-svg" dangerouslySetInnerHTML={{ __html: logo }} />
        ) : (
          <img src={logo} alt="logo" className="logo-image" />
        )}
      </div>
    );
  }, [logo, logoSize, roundedLogo, handleLogoClick]);

  const renderTitle = useCallback(() => {
    if (!title) return null;
    return (
      <div className="title" style={{ color: titleColor }} onClick={handleTitleClick}>
        {title}
      </div>
    );
  }, [title, titleColor, handleTitleClick]);

  const renderCloseBtn = useCallback(() => {
    if (!showCloseButton) return null;
    return (
      <div className="close-btn" onClick={e => { e.stopPropagation(); handleCloseClick(); }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="close-icon">
          <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
        </svg>
      </div>
    );
  }, [showCloseButton, handleCloseClick]);

  const renderDefaultPrepend = useCallback(() => {
    return (
      <div className="prepend" style={{ height: prependHeight }}>
        {renderLogo()}
        {renderTitle()}
        {renderCloseBtn()}
      </div>
    );
  }, [prependHeight, renderLogo, renderTitle, renderCloseBtn]);

  const renderItemIcon = useCallback((icon) => {
    if (!icon) return null;
    const isInlineSvg = typeof icon === 'string' && icon.trim().startsWith('<svg');
    return (
      <div className="item-icon-wrapper">
        {isInlineSvg ? (
          <div className="item-icon" dangerouslySetInnerHTML={{ __html: icon }} />
        ) : (
          <img src={icon} alt="icon" className="item-icon" />
        )}
      </div>
    );
  }, []);

  const renderDefaultContent = useCallback(() => {
    return (
      <div className="content">
        {iterateItems.map(item => (
          <div
            key={item?.value ?? item?.label}
            className={`item ${checkItemActive(item) ? 'active' : ''} ${checkExpandIncluded(item) ? 'expanded' : ''} item-${item.level}`}
            style={{ marginLeft: item.level * 1.5 + 'rem' }}
            onClick={e => { e.stopPropagation(); handleItemClick(item); }}
          >
            {renderItemIcon(item.icon)}
            <div className="item-label">{item.label}</div>
            {showChevron && item?.children?.length > 0 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="chevron-icon">
                <path fill="currentColor" d="M12 15.41L16.59 10L18 11.41L12 17.41L6 11.41L7.41 10z" />
              </svg>
            )}
          </div>
        ))}
      </div>
    );
  }, [iterateItems, checkItemActive, checkExpandIncluded, handleItemClick, showChevron, renderItemIcon]);

  // =============================================================================
  // RENDER
  // =============================================================================
  return (
    <>
      {overlay && modelValue && (
        <div className="vertical-app-bar-overlay" onClick={handleCloseClick} />
      )}

      <div
        className={containerClasses}
        style={{
          height,
          backgroundColor,
          ...positionStyles,
          ...style,
        }}
        onClick={handleExpandClick}
        {...rest}
      >
        {prepend
          ? prepend({ handleLogoClick, handleTitleClick, handleCloseClick })
          : renderDefaultPrepend()}

        {content ? content({ iterateItems, handleItemClick }) : renderDefaultContent()}

        {append ? append() : null}
      </div>
    </>
  );
};

VerticalAppBar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  elevation: PropTypes.bool,
  floating: PropTypes.bool,
  sticky: PropTypes.bool,
  logo: PropTypes.string,
  roundedLogo: PropTypes.bool,
  title: PropTypes.string,
  showCloseButton: PropTypes.bool,
  prependHeight: PropTypes.string,
  navigationLogoSize: PropTypes.string,
  logoSize: PropTypes.string,
  titleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  modelValue: PropTypes.bool,
  persistIconsOnHide: PropTypes.bool,
  expandOnHover: PropTypes.bool,
  expandOnClick: PropTypes.bool,
  overlay: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
  transitionDuration: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.array,
  })),
  activeItem: PropTypes.string,
  showChevron: PropTypes.bool,
  multiExpand: PropTypes.bool,
  prepend: PropTypes.func,
  content: PropTypes.func,
  append: PropTypes.func,
  onLogoClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onTitleClick: PropTypes.func,
  onModelValueChange: PropTypes.func,
  onActiveItemChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default VerticalAppBar;
```

### Styles

```
src/
├── assets/
│   └── scss/
│       └── components/
│           └── _vertical-app-bar.scss
```

- Path: `src/assets/scss/components/_vertical-app-bar.scss`
- Description: App bar container, overlay, items, active/expanded states, positions

```scss
@use '../abstracts' as *;

.vertical-app-bar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: z('modal-backdrop');
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.vertical-app-bar {
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    transition: all var(--transition-duration) ease;
    opacity: 1;
    position: relative;
    z-index: z('modal');
    width: var(--width);

    &.elevation {
        box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.1);
    }

    &.floating {
        position: absolute;
        top: 0;
        bottom: 0;
    }

    &.position-left {
        left: 0;
        right: auto;
    }

    &.position-right {
        left: auto;
        right: 0;
    }

    &.hidePanel {
        &:not(.persistIconsOnHide) {
            opacity: 0;
            width: 0 !important;
            overflow: hidden;
            visibility: hidden;
        }
        &.persistIconsOnHide {
            width: calc(max(var(--logo-size), var(--navigation-logo-size)) + 2rem) !important;
            overflow: hidden;
            place-content: center;

            .prepend {
                grid-template-columns: 1fr;
                gap: 0;

                .logo-wrapper {
                    margin: auto;
                }

                .title {
                    display: none;
                }

                .close-btn {
                    display: none;
                }
            }
            .item {
                gap: 0;
                grid-template-columns: 1fr;
                width: max-content;

                &:not(.item-0) {
                    display: none;
                }
                .item-label {
                    display: none;
                }

                .chevron-icon {
                    display: none;
                }
            }
        }
    }

    &.expandOnHover {
        &:hover {
            width: var(--width) !important;
            place-content: initial;

            .prepend {
                grid-template-columns: 1fr max-content;
                gap: 0.625rem;

                &:has(.logo-wrapper) {
                    grid-template-columns: max-content 1fr max-content;
                }

                .logo-wrapper {
                    margin: initial;
                }

                .title {
                    display: initial;
                }

                .close-btn {
                    display: initial;
                }
            }
            .item {
                grid-template-columns: max-content 1fr max-content;
                gap: 0.5rem;
                width: initial;

                &:not(.item-0) {
                    display: initial;
                }
                .item-label {
                    display: initial;
                }

                .chevron-icon {
                    display: initial;
                }
            }
        }
    }

    &.sticky {
        position: fixed;
        top: 0;
    }

    .prepend {
        display: grid;
        grid-template-columns: 1fr max-content;
        align-items: center;
        justify-content: space-between;
        gap: 0.625rem;
        padding: 0.5rem;
        border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.1);
        background-color: inherit;

        &:has(.logo-wrapper) {
            grid-template-columns: max-content 1fr max-content;
        }

        .logo-wrapper {
            cursor: pointer;
            overflow: hidden;
            transition: transform 0.2s ease;
            border-radius: 0.25rem;

            &:hover {
                transform: scale(1.05);
            }

            &.rounded {
                border-radius: 50%;
            }

            .logo-image {
                height: 100%;
                width: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }

            .logo-svg {
                height: 100%;
                width: 100%;
                transition: transform 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    transform: scale(1.05);
                }

                svg {
                    height: 100%;
                    width: 100%;
                }
            }
        }

        .title {
            font-size: 1.25rem;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
            transition: opacity 0.2s ease;
            padding: 0 0.5rem;

            &:hover {
                opacity: 0.8;
            }
        }

        .close-btn {
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s ease;

            &:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }

            .close-icon {
                transition: transform 0.2s ease;
            }

            &:hover .close-icon {
                transform: rotate(90deg);
            }
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;

        .item {
            display: grid;
            grid-template-columns: max-content 1fr max-content;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 0.25rem;
            background-color: #f2f2f2;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                background-color: #e0e0e0c5;
            }

            &:active {
                background-color: #d0d0d0;
                transform: scale(0.98);
            }

            &.active {
                background-color: #00000010;
            }

            .item-icon-wrapper {
                height: var(--navigation-logo-size);
                width: var(--navigation-logo-size);
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    height: 100%;
                    width: 100%;
                    flex-shrink: 0;
                }

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    flex-shrink: 0;
                }
            }

            .item-label {
                font-size: 1rem;
                font-weight: 500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .chevron-icon {
                height: 1.5rem;
                width: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s ease;
            }

            &.expanded {
                .chevron-icon {
                    transform: rotate(180deg);
                }
            }
        }
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

- Path: `src/assets/scss/abstracts/index.scss`
- Description: Global SCSS variables, mixins, and functions
  > **Note:**  
  > This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables (like vertical app bar variables) are available when importing abstracts.


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
