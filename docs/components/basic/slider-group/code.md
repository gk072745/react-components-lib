# Code

## Dependencies

This component requires:

- React 18+
- SCSS for styling
- PropTypes for prop validation

## Component Files

### React Component

```
src/
├── components/
    └── sharedComponents/
        └── SliderGroup.jsx
```

- **Path**: `src/components/sharedComponents/SliderGroup.jsx`
- **Description**: Slider group component implementation

```jsx
import React, { useMemo, useCallback, memo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SliderGroup = memo(
  ({
    arrowsPosition = 'bottom',
    showArrowsAlways = true,
    showDots = true,
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    canSelectCard = true,
    selectedCard: initialSelectedCard = -1,
    cardWidth = 20,
    className = '',
    style = {},
    onCardClick,
    children,
    ...props
  }) => {
    // =============================================================================
    // REFS AND STATE
    // =============================================================================
    const sliderContainerRef = useRef(null);
    const [currentDot, setCurrentDot] = useState(1);
    const [selectedCard, setSelectedCard] = useState(initialSelectedCard);
    const [totalDots, setTotalDots] = useState(0);

    // =============================================================================
    // COMPUTED VALUES (using useMemo)
    // =============================================================================
    const disablePrevBtn = useMemo(() => {
      return currentDot === 1;
    }, [currentDot]);

    const disableNextBtn = useMemo(() => {
      return currentDot === totalDots;
    }, [currentDot, totalDots]);

    // =============================================================================
    // FUNCTIONS
    // =============================================================================
    const calculateTotalDots = useCallback(() => {
      if (!sliderContainerRef.current) return 0;

      const containerWidth = sliderContainerRef.current.clientWidth;
      const totalWidth = sliderContainerRef.current.scrollWidth;

      // Calculate how many full container widths we can fit
      const dots = Math.ceil(totalWidth / containerWidth);
      setTotalDots(dots);
      return dots;
    }, []);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDotClick = useCallback((dot) => {
      setCurrentDot(dot);
      if (sliderContainerRef.current) {
        sliderContainerRef.current.scrollLeft = (dot - 1) * sliderContainerRef.current.clientWidth;
      }
    }, []);

    const handlePrevBtnClick = useCallback(() => {
      if (disablePrevBtn) return;
      handleDotClick(currentDot - 1);
    }, [disablePrevBtn, currentDot, handleDotClick]);

    const handleNextBtnClick = useCallback(() => {
      if (disableNextBtn) return;
      handleDotClick(currentDot + 1);
    }, [disableNextBtn, currentDot, handleDotClick]);

    const handleCardClick = useCallback(
      (index) => {
        const itemIndex = index - 1;
        onCardClick?.(items[itemIndex]);

        const totalCards = items.length;

        if (canSelectCard) {
          setSelectedCard(index);
        }

        // Handle edge cases
        if (index === 1) {
          setCurrentDot(1);
          if (sliderContainerRef.current) {
            sliderContainerRef.current.scrollLeft = 0;
          }
        } else if (index === totalCards) {
          setCurrentDot(totalDots);
          if (sliderContainerRef.current) {
            const cardWidth = sliderContainerRef.current.scrollWidth / totalCards;
            const targetScroll =
              (totalCards - 1) * cardWidth - sliderContainerRef.current.clientWidth / 2 + cardWidth / 2;
            sliderContainerRef.current.scrollLeft = Math.max(0, targetScroll);
          }
        } else {
          // Handle middle cases
          const cardsPerDot = Math.ceil(totalCards / totalDots);
          const targetDot = Math.ceil(index / cardsPerDot);
          setCurrentDot(targetDot);
          if (sliderContainerRef.current) {
            const cardWidth = sliderContainerRef.current.scrollWidth / totalCards;
            const targetScroll = (index - 1) * cardWidth - sliderContainerRef.current.clientWidth / 2 + cardWidth / 2;
            sliderContainerRef.current.scrollLeft = Math.max(0, targetScroll);
          }
        }
      },
      [items, onCardClick, canSelectCard, totalDots]
    );

    const handleResize = useCallback(() => {
      if (sliderContainerRef.current) {
        sliderContainerRef.current.scrollLeft = 0;
      }
      setCurrentDot(1);
      calculateTotalDots();
    }, [calculateTotalDots]);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ['slider-group-container', arrowsPosition];

      if (showArrowsAlways) {
        classes.push('show-arrows-always');
      }

      if (className) {
        classes.push(className);
      }

      return classes.join(' ');
    }, [arrowsPosition, showArrowsAlways, className]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderArrowButton = useCallback((direction, onClick, disabled) => {
      const isPrev = direction === 'prev';
      const buttonClass = `${isPrev ? 'prev' : 'next'}-slider-btn`;

      return (
        <svg
          className={`${buttonClass} ${disabled ? 'disabled' : ''}`}
          onClick={onClick}
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d={
                isPrev
                  ? 'M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z'
                  : 'M7.82051 3.26875C8.21103 2.87823 8.84419 2.87823 9.23472 3.26875L15.8792 9.91322C17.0505 11.0845 17.0508 12.9833 15.8801 14.155L9.30966 20.7304C8.91914 21.121 8.28598 21.121 7.89546 20.7304C7.50493 20.3399 7.50493 19.7067 7.89546 19.3162L14.4675 12.7442C14.858 12.3536 14.858 11.7205 14.4675 11.33L7.82051 4.68297C7.43 4.29244 7.43 3.65928 7.82051 3.26875Z'
              }
              fill="#0F0F0F"
            ></path>
          </g>
        </svg>
      );
    }, []);

    const renderDots = useCallback(() => {
      if (!showDots) return null;

      return (
        <div className="slider-group-dots">
          {Array.from({ length: totalDots }, (_, index) => {
            const dot = index + 1;
            return (
              <div
                key={dot}
                className={`slider-group-dot ${currentDot === dot ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDotClick(dot);
                }}
              />
            );
          })}
        </div>
      );
    }, [showDots, totalDots, currentDot, handleDotClick]);

    const renderArrows = useCallback(
      (position) => {
        if (position === 'top') {
          return (
            <div className="slider-group-arrows slider-group-arrows-top">
              {renderArrowButton('prev', handlePrevBtnClick, disablePrevBtn)}
              {renderDots()}
              {renderArrowButton('next', handleNextBtnClick, disableNextBtn)}
            </div>
          );
        }

        if (position === 'center') {
          return (
            <div className="slider-group-arrows slider-group-arrows-center">
              {renderArrowButton('prev', handlePrevBtnClick, disablePrevBtn)}
              {renderArrowButton('next', handleNextBtnClick, disableNextBtn)}
            </div>
          );
        }

        // bottom (default)
        return (
          <div className="slider-group-arrows slider-group-arrows-bottom">
            {renderArrowButton('prev', handlePrevBtnClick, disablePrevBtn)}
            {renderDots()}
            {renderArrowButton('next', handleNextBtnClick, disableNextBtn)}
          </div>
        );
      },
      [renderArrowButton, handlePrevBtnClick, handleNextBtnClick, disablePrevBtn, disableNextBtn, renderDots]
    );

    const renderCards = useCallback(() => {
      return (
        <div className="slider-group-items" ref={sliderContainerRef}>
          {items.map((item, index) => {
            const cardIndex = index + 1;
            const isSelected = selectedCard === cardIndex;

            return (
              <div
                key={index}
                className={`card ${isSelected ? 'selected' : ''} ${canSelectCard ? 'canSelectCard' : ''}`}
                onClick={() => handleCardClick(cardIndex)}
                style={{ width: `${cardWidth}rem` }}
              >
                {children ? children({ item, index, isSelected }) : cardIndex}
              </div>
            );
          })}
        </div>
      );
    }, [items, selectedCard, canSelectCard, cardWidth, children, handleCardClick]);

    // =============================================================================
    // RENDER
    // =============================================================================
    if (arrowsPosition === 'center-outside') {
      return (
        <div className={containerClass} style={style} {...props}>
          {renderArrowButton('prev', handlePrevBtnClick, disablePrevBtn)}
          {renderCards()}
          {renderArrowButton('next', handleNextBtnClick, disableNextBtn)}
        </div>
      );
    }

    return (
      <div className={containerClass} style={style} {...props}>
        {arrowsPosition === 'top' && renderArrows('top')}
        {arrowsPosition === 'center' && renderArrows('center')}

        {renderCards()}

        {arrowsPosition === 'bottom' && renderArrows('bottom')}
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
SliderGroup.propTypes = {
  arrowsPosition: PropTypes.oneOf(['top', 'bottom', 'center', 'center-outside']),
  showArrowsAlways: PropTypes.bool,
  showDots: PropTypes.bool,
  items: PropTypes.array,
  canSelectCard: PropTypes.bool,
  selectedCard: PropTypes.number,
  cardWidth: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  onCardClick: PropTypes.func,
  children: PropTypes.func,
};

SliderGroup.displayName = 'SliderGroup';

export default SliderGroup;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _slider-group.scss
```

- **Path**: `src/assets/scss/components/_slider-group.scss`
- **Description**: Slider group component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// SLIDER GROUP COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

.slider-group-container {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  padding: 0.25rem;
  overflow: hidden;
  position: relative;

  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.show-arrows-always {
    .slider-group-arrows {
      visibility: visible;
      opacity: 1;
    }
  }

  &:has(.slider-group-items:hover) {
    .slider-group-arrows {
      visibility: visible;
      opacity: 1;
    }
  }

  &:has(.prev-slider-btn:hover) {
    .slider-group-arrows {
      visibility: visible;
      opacity: 1;
    }
  }

  &:has(.next-slider-btn:hover) {
    .slider-group-arrows {
      visibility: visible;
      opacity: 1;
    }
  }

  &:has(.slider-group-dots:hover) {
    .slider-group-arrows {
      visibility: visible;
      opacity: 1;
    }
  }

  &.top {
    grid-template-rows: max-content 1fr;
    gap: 0.5rem;
  }

  &.bottom {
    grid-template-rows: 1fr max-content;
    gap: 0.5rem;
  }

  &.center {
    grid-template-rows: 1fr;

    .slider-group-arrows {
      position: absolute;
      left: 1rem;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      justify-content: space-between;
      z-index: 1;

      .prev-slider-btn {
        pointer-events: all;
      }

      .next-slider-btn {
        pointer-events: all;
      }
    }
  }

  &.center-outside {
    grid-template-rows: 1fr;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;

    .prev-slider-btn {
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
    }

    .next-slider-btn {
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
    }

    .slider-group-items {
      height: 100%;
    }
  }

  .slider-group-arrows {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-width: 100%;
    overflow: hidden;
    transition: all 0.3s ease;
    visibility: hidden;
    opacity: 0;

    .prev-slider-btn {
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
    }

    .slider-group-dots {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      max-width: calc(100% - 4rem);
      height: 100%;
      overflow-x: auto;

      .slider-group-dot {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #666;
        transition: all 0.3s ease;
        cursor: pointer;
        flex-shrink: 0;

        &:hover {
          background-color: #0f0f0f;
        }

        &.active {
          background-color: #0f0f0f;
        }
      }
    }

    .next-slider-btn {
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
    }
  }

  .slider-group-items {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }

    .card {
      height: 100%;
      min-height: 20rem;
      aspect-ratio: 3/4;
      border: 0.125rem solid transparent;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      background: #fff;
      box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 500;
      color: #666;
      transform: scale(0.95);
      pointer-events: none;

      &:hover {
        transform: scale(0.97);
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
      }

      &.selected {
        border-color: #0f0f0f;
        background: #f8f8f8;
        color: #0f0f0f;
      }

      &.canSelectCard {
        cursor: pointer;
        pointer-events: all;
      }
    }
  }
}
```
