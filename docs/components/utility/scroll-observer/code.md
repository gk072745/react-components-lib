# Code

## Dependencies

- React 18+
- Modern browser with IntersectionObserver support

## Files

### Component File

```
src/
├── components/
│   └── sharedComponents/
│       └── ScrollObserver.jsx
```

- **Path**: `src/components/sharedComponents/ScrollObserver.jsx`
- **Description**: Intersection Observer-based scroll detection component

```jsx
import { useEffect, useRef, useCallback, useMemo } from 'react';

const ScrollObserver = ({ onScrolledToEnd = () => {}, threshold = 0.1, rootMargin = '0px' }) => {
  const observerRef = useRef(null);
  const rootRef = useRef(null);

  // Memoize the callback to prevent unnecessary re-renders
  const memoizedCallback = useCallback(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        onScrolledToEnd();
      }
    },
    [onScrolledToEnd]
  );

  // Memoize observer options for better performance
  const observerOptions = useMemo(
    () => ({
      threshold,
      rootMargin,
      root: null, // Use viewport as root
    }),
    [threshold, rootMargin]
  );

  useEffect(() => {
    // Create observer with memoized callback and options
    observerRef.current = new IntersectionObserver(memoizedCallback, observerOptions);

    const currentRoot = rootRef.current;
    if (currentRoot) {
      observerRef.current.observe(currentRoot);
    }

    // Cleanup function to disconnect observer
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [memoizedCallback, observerOptions]);

  return (
    <div
      ref={rootRef}
      className="scroll-observer"
      style={{
        height: '1px',
        width: '100%',
        pointerEvents: 'none', // Prevents interference with user interactions
      }}
      aria-hidden="true" // Accessibility: screen readers should ignore this element
    />
  );
};

export default ScrollObserver;
```

## Implementation Details

### IntersectionObserver API

The component uses the modern IntersectionObserver API which is more efficient than traditional scroll event listeners:

- **Performance**: No need to calculate element positions on every scroll
- **Battery Efficient**: Browser optimizes intersection calculations
- **Smooth**: Doesn't block the main thread

### Performance Optimizations

1. **Memoized Callback**: Uses `useCallback` to prevent observer recreation
2. **Memoized Options**: Uses `useMemo` for observer configuration
3. **Proper Cleanup**: Disconnects observer on component unmount
4. **Minimal DOM**: Renders only a 1px invisible element

### Browser Support

- Modern browsers with IntersectionObserver support
- Polyfill available for older browsers if needed

### Usage Patterns

#### Infinite Scrolling

```jsx
const InfiniteList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    
    // Fetch more data
    const newItems = await fetchMoreItems();
    setItems(prev => [...prev, ...newItems]);
    setLoading(false);
  }, [loading]);

  return (
    <div>
      {items.map(item => <ItemComponent key={item.id} item={item} />)}
      {loading && <LoadingSpinner />}
      <ScrollObserver onScrolledToEnd={loadMore} />
    </div>
  );
};
```

#### Lazy Loading

```jsx
const LazyContent = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  return (
    <div>
      <div style={{ height: '1000px' }}>Initial content...</div>
      
      {shouldLoad ? (
        <HeavyComponent />
      ) : (
        <ScrollObserver onScrolledToEnd={() => setShouldLoad(true)} />
      )}
    </div>
  );
};
```

### Configuration Options

#### Threshold

Controls how much of the element must be visible:
- `0.0`: Trigger as soon as any part is visible
- `0.5`: Trigger when 50% is visible
- `1.0`: Trigger only when completely visible

#### Root Margin

Extends the intersection area:
- `"0px"`: Default, exact viewport boundaries
- `"100px"`: Trigger 100px before element enters viewport
- `"-50px"`: Trigger only when element is 50px inside viewport

### Accessibility

The component includes proper accessibility attributes:
- `aria-hidden="true"`: Hidden from screen readers
- `pointerEvents: 'none'`: Doesn't interfere with user interactions
- Minimal visual footprint (1px height)
