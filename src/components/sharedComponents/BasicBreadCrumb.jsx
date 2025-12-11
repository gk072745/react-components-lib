import React, { useMemo, useCallback, memo } from 'react';
import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';
import '@site/src/assets/scss/components/_basic-breadcrumb.scss';

const BasicBreadCrumb = memo(
  ({ items = [], separator = '/', gap = '0.5rem', className = '', style = {}, onItemClick, ...props }) => {
    // Remove useHistory hook - we'll use Link components instead

    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const containerStyle = useMemo(
      () => ({
        gap: gap,
        ...style,
      }),
      [gap, style]
    );

    const itemStyle = useMemo(
      () => ({
        gap: gap,
      }),
      [gap]
    );

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = useCallback(
      (item, event) => {
        if (!item.disabled && item.to) {
          // Call custom click handler if provided
          if (onItemClick) {
            onItemClick(item, event);
          }
          // Remove programmatic navigation - use Link component instead
        }
      },
      [onItemClick]
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSeparator = useMemo(() => {
      // If separator is a function, call it with context
      if (typeof separator === 'function') {
        return separator();
      }

      // If separator is a React element or component
      if (React.isValidElement(separator)) {
        return separator;
      }

      // If separator is an object with render method
      if (separator && typeof separator === 'object' && separator.render) {
        return separator.render();
      }

      // Default: render as string
      return <span className="breadcrumb-separator">{separator}</span>;
    }, [separator]);

    const renderBreadcrumbItem = useCallback(
      (item, index) => {
        const isLast = index === items.length - 1;
        const isClickable = !item.disabled && item.to;

        return (
          <div key={index} className="breadcrumb-item" style={itemStyle}>
            {isClickable ? (
              <Link to={item.to} className={`label ${item.disabled ? 'disabled' : ''}`}>
                {item.label}
              </Link>
            ) : (
              <span className={`label ${item.disabled ? 'disabled' : ''}`}>{item.label}</span>
            )}
            {!isLast && renderSeparator}
          </div>
        );
      },
      [items.length, itemStyle, handleClick, renderSeparator]
    );

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ['breadcrumb-container'];
      if (className) classes.push(className);
      return classes.join(' ');
    }, [className]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <nav className={containerClass} style={containerStyle} aria-label="Breadcrumb navigation" {...props}>
        {items.map(renderBreadcrumbItem)}
      </nav>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicBreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      disabled: PropTypes.bool,
    })
  ).isRequired,
  separator: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
    PropTypes.shape({
      render: PropTypes.func,
    }),
  ]),
  gap: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onItemClick: PropTypes.func,
};

BasicBreadCrumb.defaultProps = {
  items: [],
  separator: '/',
  gap: '0.5rem',
  className: '',
  style: {},
};

BasicBreadCrumb.displayName = 'BasicBreadCrumb';

export default BasicBreadCrumb;
