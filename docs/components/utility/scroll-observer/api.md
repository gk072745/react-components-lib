# API

## Props

| Prop              | Type       | Default | Description                                    |
| ----------------- | ---------- | ------- | ---------------------------------------------- |
| `onScrolledToEnd` | `function` | `() => {}` | Callback fired when the observer enters viewport |
| `threshold`       | `number`   | `0.1`   | Intersection threshold (0.0 to 1.0)           |
| `rootMargin`      | `string`   | `'0px'` | Root margin for intersection calculation       |

## Events

| Event             | Parameters | Description                                    |
| ----------------- | ---------- | ---------------------------------------------- |
| `onScrolledToEnd` | -          | Fired when the observer element becomes visible |

## Usage Examples

### Basic Usage

```jsx
import React from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";

const BasicScrollExample = () => {
  const handleScrollEnd = () => {
    console.log("User scrolled to end!");
  };

  return (
    <div>
      <div style={{ height: "2000px" }}>
        <p>Scroll down to see the observer in action...</p>
      </div>
      <ScrollObserver onScrolledToEnd={handleScrollEnd} />
    </div>
  );
};
```

### With Custom Threshold

```jsx
import React from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";

const CustomThresholdExample = () => {
  const handleScrollEnd = () => {
    console.log("50% of observer is visible!");
  };

  return (
    <div>
      <div style={{ height: "1500px" }}>Content...</div>
      <ScrollObserver 
        onScrolledToEnd={handleScrollEnd} 
        threshold={0.5}
      />
    </div>
  );
};
```

### Infinite Scroll Implementation

```jsx
import React, { useState } from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";

const InfiniteScrollExample = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i));
  const [loading, setLoading] = useState(false);

  const loadMoreItems = async () => {
    if (loading) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setItems(prev => [
      ...prev,
      ...Array.from({ length: 10 }, (_, i) => prev.length + i)
    ]);
    setLoading(false);
  };

  return (
    <div>
      {items.map(item => (
        <div key={item} style={{ padding: "1rem", border: "1px solid #ccc" }}>
          Item {item}
        </div>
      ))}
      
      {loading && <div>Loading more items...</div>}
      
      <ScrollObserver 
        onScrolledToEnd={loadMoreItems}
        rootMargin="100px"
      />
    </div>
  );
};
```
