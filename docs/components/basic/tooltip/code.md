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
        └── BasicTooltip.jsx
```

- **Path**: `src/components/sharedComponents/BasicTooltip.jsx`
- **Description**: Main tooltip component implementation

```jsx
import React, { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const POSITION_CLASSES = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];

const TRIGGERS = ['hover', 'click', 'focus'];

const getViewportBounds = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  scrollTop: window.pageYOffset || document.documentElement.scrollTop,
  scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
});

const detectCollisions = (position, tooltipRect) => {
  const viewport = getViewportBounds();
  const buffer = 16; // px

  return {
    top: position.top < viewport.scrollTop + buffer,
    bottom: position.top + tooltipRect.height > viewport.scrollTop + viewport.height - buffer,
    left: position.left < viewport.scrollLeft + buffer,
    right: position.left + tooltipRect.width > viewport.scrollLeft + viewport.width - buffer,
  };
};

const getFlippedPosition = (position, collisions) => {
  if ((position === 'top' || position.includes('top')) && collisions.top && !collisions.bottom) {
    return position.replace('top', 'bottom');
  }
  if ((position === 'bottom' || position.includes('bottom')) && collisions.bottom && !collisions.top) {
    return position.replace('bottom', 'top');
  }

  if (position === 'left' && collisions.left && !collisions.right) {
    return 'right';
  }
  if (position === 'right' && collisions.right && !collisions.left) {
    return 'left';
  }

  return position;
};

const calculateInitialPosition = (triggerRect, tooltipRect, position, viewport, offset) => {
  let top;
  let left;

  switch (position) {
    case 'top':
      top = triggerRect.top + viewport.scrollTop - tooltipRect.height - offset;
      left = triggerRect.left + viewport.scrollLeft + (triggerRect.width - tooltipRect.width) / 2;
      break;
    case 'bottom':
      top = triggerRect.bottom + viewport.scrollTop + offset;
      left = triggerRect.left + viewport.scrollLeft + (triggerRect.width - tooltipRect.width) / 2;
      break;
    case 'left':
      top = triggerRect.top + viewport.scrollTop + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.left + viewport.scrollLeft - tooltipRect.width - offset;
      break;
    case 'right':
      top = triggerRect.top + viewport.scrollTop + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.right + viewport.scrollLeft + offset;
      break;
    case 'top-left':
      top = triggerRect.top + viewport.scrollTop - tooltipRect.height - offset;
      left = triggerRect.left + viewport.scrollLeft;
      break;
    case 'top-right':
      top = triggerRect.top + viewport.scrollTop - tooltipRect.height - offset;
      left = triggerRect.right + viewport.scrollLeft - tooltipRect.width;
      break;
    case 'bottom-left':
      top = triggerRect.bottom + viewport.scrollTop + offset;
      left = triggerRect.left + viewport.scrollLeft;
      break;
    case 'bottom-right':
      top = triggerRect.bottom + viewport.scrollTop + offset;
      left = triggerRect.right + viewport.scrollLeft - tooltipRect.width;
      break;
    default:
      top = triggerRect.bottom + viewport.scrollTop + offset;
      left = triggerRect.left + viewport.scrollLeft + (triggerRect.width - tooltipRect.width) / 2;
  }

  return { top, left };
};

const adjustForViewportBounds = (position, tooltipRect) => {
  const viewport = getViewportBounds();
  const buffer = 16; // px
  let { top, left } = position;

  if (left < viewport.scrollLeft + buffer) {
    left = viewport.scrollLeft + buffer;
  } else if (left + tooltipRect.width > viewport.scrollLeft + viewport.width - buffer) {
    left = viewport.scrollLeft + viewport.width - tooltipRect.width - buffer;
  }

  if (top < viewport.scrollTop + buffer) {
    top = viewport.scrollTop + buffer;
  } else if (top + tooltipRect.height > viewport.scrollTop + viewport.height - buffer) {
    top = viewport.scrollTop + viewport.height - tooltipRect.height - buffer;
  }

  return { top, left };
};

const calculateArrowPosition = (triggerRect, tooltipEl, actualPos) => {
  if (!tooltipEl) return {};
  const tooltipRect = tooltipEl.getBoundingClientRect();
  const arrowOffset = 12; // px from tooltip edge to constrain
  const viewport = getViewportBounds();
  const tooltipLeft = parseFloat(tooltipEl.style.left?.replace('px', '') || '0');
  const tooltipTop = parseFloat(tooltipEl.style.top?.replace('px', '') || '0');

  const triggerCenterX = triggerRect.left + triggerRect.width / 2 + viewport.scrollLeft;
  const triggerCenterY = triggerRect.top + triggerRect.height / 2 + viewport.scrollTop;

  const arrowStyle = {};

  if (actualPos.includes('top') || actualPos.includes('bottom')) {
    const arrowLeft = triggerCenterX - tooltipLeft;
    const maxArrowLeft = tooltipRect.width - arrowOffset;
    const minArrowLeft = arrowOffset;
    arrowStyle.left = `${Math.max(minArrowLeft, Math.min(maxArrowLeft, arrowLeft))}px`;
    arrowStyle.transform = 'translateX(-50%)';
  } else if (actualPos.includes('left') || actualPos.includes('right')) {
    const arrowTop = triggerCenterY - tooltipTop;
    const maxArrowTop = tooltipRect.height - arrowOffset;
    const minArrowTop = arrowOffset;
    arrowStyle.top = `${Math.max(minArrowTop, Math.min(maxArrowTop, arrowTop))}px`;
    arrowStyle.transform = 'translateY(-50%)';
  }

  return arrowStyle;
};

const BasicTooltip = memo(
  forwardRef(function BasicTooltip(
    {
      children,
      content = '',
      tooltip = null,
      position = 'top',
      trigger = 'hover',
      showArrow = true,
      offset = 8,
      delay = 300,
      hideDelay = 100,
      customClass = '',
      disabled = false,
      className = '',
      style = {},
      onShow,
      onHide,
      onToggle,
    },
    ref
  ) {
    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [actualPosition, setActualPosition] = useState(position);
    const [tooltipPos, setTooltipPos] = useState({ top: '0px', left: '0px' });
    const [arrowPos, setArrowPos] = useState({});
    const showTimeoutRef = useRef(null);
    const hideTimeoutRef = useRef(null);

    useEffect(() => {
      setActualPosition(position);
    }, [position]);

    const clearTimers = useCallback(() => {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = null;
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    }, []);

    const calculatePosition = useCallback(() => {
      if (!triggerRef.current || !tooltipRef.current) return { top: '0px', left: '0px' };
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewport = getViewportBounds();

      let initial = calculateInitialPosition(triggerRect, tooltipRect, position, viewport, offset);
      const collisions = detectCollisions(initial, tooltipRect);
      const flipped = getFlippedPosition(position, collisions);
      setActualPosition(flipped);

      if (flipped !== position) {
        initial = calculateInitialPosition(triggerRect, tooltipRect, flipped, viewport, offset);
      }

      const adjusted = adjustForViewportBounds(initial, tooltipRect);

      return {
        top: `${adjusted.top}px`,
        left: `${adjusted.left}px`,
      };
    }, [position, offset]);

    const updatePosition = useCallback(() => {
      if (!isVisible || !triggerRef.current || !tooltipRef.current) return;
      const newPos = calculatePosition();
      setTooltipPos(newPos);

      // delay arrow calculation until DOM style applied
      requestAnimationFrame(() => {
        if (!triggerRef.current || !tooltipRef.current) return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const arrowStyle = calculateArrowPosition(triggerRect, tooltipRef.current, actualPosition);
        setArrowPos(arrowStyle);
      });
    }, [isVisible, calculatePosition, actualPosition]);

    const show = useCallback(() => {
      if (disabled) return;
      clearTimeout(hideTimeoutRef.current);

      const run = () => {
        setIsVisible(true);
        onShow?.();
        // compute after visibility
        setTimeout(updatePosition, 0);
      };

      if (delay > 0) {
        showTimeoutRef.current = setTimeout(run, delay);
      } else {
        run();
      }
    }, [delay, disabled, onShow, updatePosition]);

    const hide = useCallback(() => {
      clearTimeout(showTimeoutRef.current);

      const run = () => {
        setIsVisible(false);
        onHide?.();
      };

      if (hideDelay > 0) {
        hideTimeoutRef.current = setTimeout(run, hideDelay);
      } else {
        run();
      }
    }, [hideDelay, onHide]);

    const toggle = useCallback(() => {
      if (isVisible) {
        hide();
      } else {
        show();
      }
      onToggle?.(!isVisible);
    }, [isVisible, hide, show, onToggle]);

    useImperativeHandle(
      ref,
      () => ({
        show,
        hide,
        toggle,
        get isVisible() {
          return isVisible;
        },
      }),
      [show, hide, toggle, isVisible]
    );

    const handleMouseEnter = useCallback(() => {
      if (trigger === 'hover') show();
    }, [trigger, show]);

    const handleMouseLeave = useCallback(() => {
      if (trigger === 'hover') hide();
    }, [trigger, hide]);

    const handleTriggerClick = useCallback(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (trigger === 'click') toggle();
      },
      [trigger, toggle]
    );

    const handleFocus = useCallback(
      (e) => {
        if (trigger !== 'focus') return;
        const focusable = ['input', 'textarea', 'select', 'button'];
        const target = e.target;
        if (
          focusable.includes(target.tagName?.toLowerCase()) ||
          target.hasAttribute?.('tabindex') ||
          target.contentEditable === 'true'
        ) {
          show();
        }
      },
      [trigger, show]
    );

    const handleBlur = useCallback(() => {
      if (trigger === 'focus') hide();
    }, [trigger, hide]);

    // click outside for click trigger
    useEffect(() => {
      if (trigger !== 'click') return undefined;
      const onDocClick = (event) => {
        if (!isVisible) return;
        const w = wrapperRef.current;
        const t = tooltipRef.current;
        if (!w || !t) return;
        if (w.contains(event.target) || t.contains(event.target)) return;
        hide();
      };
      document.addEventListener('click', onDocClick);
      return () => document.removeEventListener('click', onDocClick);
    }, [trigger, isVisible, hide]);

    // resize/scroll listeners
    useEffect(() => {
      const handleResize = () => {
        if (isVisible) updatePosition();
      };
      const handleScroll = () => {
        if (isVisible) updatePosition();
      };
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }, [isVisible, updatePosition]);

    // cleanup timers on unmount
    useEffect(() => () => clearTimers(), [clearTimers]);

    // update position when visible toggles
    useEffect(() => {
      if (isVisible) {
        updatePosition();
      }
    }, [isVisible, updatePosition]);

    const wrapperClass = useMemo(() => ['tooltip-wrapper', className].filter(Boolean).join(' '), [className]);

    const tooltipClass = useMemo(() => {
      const classes = ['tooltip', `tooltip-${actualPosition}`];
      if (!showArrow) classes.push('tooltip-no-arrow');
      if (customClass) classes.push(customClass);
      return classes.join(' ');
    }, [actualPosition, showArrow, customClass]);

    const tooltipStyle = useMemo(
      () => ({
        position: 'absolute',
        top: tooltipPos.top,
        left: tooltipPos.left,
        zIndex: 1070,
        visibility: isVisible ? 'visible' : 'hidden',
        ...style,
      }),
      [tooltipPos.top, tooltipPos.left, isVisible, style]
    );

    return (
      <div className={wrapperClass} ref={wrapperRef}>
        <div
          ref={triggerRef}
          className={`tooltip-trigger ${trigger === 'click' ? 'is-clickable' : ''}`}
          onClick={handleTriggerClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {children}
        </div>

        {typeof window !== 'undefined'
          ? createPortal(
              <div ref={tooltipRef} className={tooltipClass} style={tooltipStyle} role="tooltip">
                <div className="tooltip-content">{tooltip ?? content}</div>
                {showArrow ? <div className="tooltip-arrow" style={arrowPos} /> : null}
              </div>,
              document.body
            )
          : null}
      </div>
    );
  })
);

BasicTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string,
  tooltip: PropTypes.node,
  position: PropTypes.oneOf(POSITION_CLASSES),
  trigger: PropTypes.oneOf(TRIGGERS),
  showArrow: PropTypes.bool,
  offset: PropTypes.number,
  delay: PropTypes.number,
  hideDelay: PropTypes.number,
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  onToggle: PropTypes.func,
};

BasicTooltip.displayName = 'BasicTooltip';

export default BasicTooltip;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-tooltip.scss
```

- **Path**: `src/assets/scss/components/_basic-tooltip.scss`
- **Description**: Tooltip component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
@use '../abstracts' as *;

.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip-trigger {
  cursor: default;

  &.is-clickable {
    cursor: pointer;
  }
}

.tooltip {
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.4;
  white-space: nowrap;
  box-shadow:
    0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06);
  z-index: 1060;
  pointer-events: none;

  .tooltip-content {
    position: relative;
    z-index: 1;
  }

  .tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
  }
}

// Position-specific arrow styles
.tooltip-top .tooltip-arrow {
  top: 100%;
  border-width: 0.375rem 0.375rem 0 0.375rem;
}

.tooltip-bottom .tooltip-arrow {
  bottom: 100%;
  border-width: 0 0.375rem 0.375rem 0.375rem;
}

.tooltip-left .tooltip-arrow {
  left: 100%;
  border-width: 0.375rem 0 0.375rem 0.375rem;
}

.tooltip-right .tooltip-arrow {
  right: 100%;
  border-width: 0.375rem 0.375rem 0.375rem 0;
}

.tooltip-top-left .tooltip-arrow,
.tooltip-top-right .tooltip-arrow {
  top: 100%;
  border-width: 0.375rem 0.375rem 0 0.375rem;
}

.tooltip-bottom-left .tooltip-arrow,
.tooltip-bottom-right .tooltip-arrow {
  bottom: 100%;
  border-width: 0 0.375rem 0.375rem 0.375rem;
}

.tooltip-no-arrow .tooltip-arrow {
  display: none;
}

// =============================================================================
// VARIANT STYLES
// =============================================================================

// Default Variant
.tooltip-default {
  background: #1f2937;
  color: #ffffff;

  // Arrow colors by position
  &.tooltip-top .tooltip-arrow,
  &.tooltip-top-left .tooltip-arrow,
  &.tooltip-top-right .tooltip-arrow {
    border-top-color: #1f2937;
  }

  &.tooltip-bottom .tooltip-arrow,
  &.tooltip-bottom-left .tooltip-arrow,
  &.tooltip-bottom-right .tooltip-arrow {
    border-bottom-color: #1f2937;
  }

  &.tooltip-left .tooltip-arrow {
    border-left-color: #1f2937;
  }

  &.tooltip-right .tooltip-arrow {
    border-right-color: #1f2937;
  }
}

// Light Variant
.tooltip-light {
  background: #ffffff;
  color: #1f2937;
  border: 0.0625rem solid #e5e7eb;

  // Arrow colors by position
  &.tooltip-top .tooltip-arrow,
  &.tooltip-top-left .tooltip-arrow,
  &.tooltip-top-right .tooltip-arrow {
    border-top-color: #ffffff;
  }

  &.tooltip-bottom .tooltip-arrow,
  &.tooltip-bottom-left .tooltip-arrow,
  &.tooltip-bottom-right .tooltip-arrow {
    border-bottom-color: #ffffff;
  }

  &.tooltip-left .tooltip-arrow {
    border-left-color: #ffffff;
  }

  &.tooltip-right .tooltip-arrow {
    border-right-color: #ffffff;
  }
}

// Success Variant
.tooltip-success {
  background: #28a745;
  color: #ffffff;

  // Arrow colors by position
  &.tooltip-top .tooltip-arrow,
  &.tooltip-top-left .tooltip-arrow,
  &.tooltip-top-right .tooltip-arrow {
    border-top-color: #28a745;
  }

  &.tooltip-bottom .tooltip-arrow,
  &.tooltip-bottom-left .tooltip-arrow,
  &.tooltip-bottom-right .tooltip-arrow {
    border-bottom-color: #28a745;
  }

  &.tooltip-left .tooltip-arrow {
    border-left-color: #28a745;
  }

  &.tooltip-right .tooltip-arrow {
    border-right-color: #28a745;
  }
}

// Error Variant
.tooltip-error {
  background: #dc3545;
  color: #ffffff;

  // Arrow colors by position
  &.tooltip-top .tooltip-arrow,
  &.tooltip-top-left .tooltip-arrow,
  &.tooltip-top-right .tooltip-arrow {
    border-top-color: #dc3545;
  }

  &.tooltip-bottom .tooltip-arrow,
  &.tooltip-bottom-left .tooltip-arrow,
  &.tooltip-bottom-right .tooltip-arrow {
    border-bottom-color: #dc3545;
  }

  &.tooltip-left .tooltip-arrow {
    border-left-color: #dc3545;
  }

  &.tooltip-right .tooltip-arrow {
    border-right-color: #dc3545;
  }
}

// Warning Variant
.tooltip-warning {
  background: #ffc107;
  color: #ffffff;

  // Arrow colors by position
  &.tooltip-top .tooltip-arrow,
  &.tooltip-top-left .tooltip-arrow,
  &.tooltip-top-right .tooltip-arrow {
    border-top-color: #ffc107;
  }

  &.tooltip-bottom .tooltip-arrow,
  &.tooltip-bottom-left .tooltip-arrow,
  &.tooltip-bottom-right .tooltip-arrow {
    border-bottom-color: #ffc107;
  }

  &.tooltip-left .tooltip-arrow {
    border-left-color: #ffc107;
  }

  &.tooltip-right .tooltip-arrow {
    border-right-color: #ffc107;
  }
}
```
