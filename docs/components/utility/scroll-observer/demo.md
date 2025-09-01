import {
  BasicScrollDemo,
  InfiniteScrollDemo,
  ThresholdDemo,
  LazyLoadDemo
} from "@site/src/demoPages/ScrollObserverDemo.jsx";

# Demo

This page demonstrates the ScrollObserver component with various configurations and common use cases.

## Demo 1: Basic Scroll Detection

### Code Example

```jsx
import React, { useState, useCallback } from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";

const BasicScrollDemo = () => {
  const [triggerCount, setTriggerCount] = useState(0);

  const handleScrollEnd = useCallback(() => {
    setTriggerCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <div style={{ height: "500px" }}>
        <p>Scroll down to trigger the observer...</p>
      </div>
      <ScrollObserver onScrolledToEnd={handleScrollEnd} />
      <p>Triggered: {triggerCount} times</p>
    </div>
  );
};
```

### Interactive Demo

<BasicScrollDemo />

## Demo 2: Infinite Scroll

### Code Example

```jsx
import React, { useState, useCallback } from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";

const InfiniteScrollDemo = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => i + 1));
  const [loading, setLoading] = useState(false);

  const loadMoreItems = useCallback(async () => {
    if (loading) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setItems(prev => [
      ...prev,
      ...Array.from({ length: 5 }, (_, i) => prev.length + i + 1)
    ]);
    setLoading(false);
  }, [loading]);

  return (
    <div>
      <div className="infinite-list">
        {items.map(item => (
          <div key={item}>Item {item}</div>
        ))}
        
        {loading && <div>Loading more items...</div>}
        
        <ScrollObserver 
          onScrolledToEnd={loadMoreItems}
          rootMargin="50px"
        />
      </div>
    </div>
  );
};
```

### Interactive Demo

<InfiniteScrollDemo />

## Demo 3: Different Thresholds

### Code Example

```jsx
import React, { useState, useCallback } from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";

const ThresholdDemo = () => {
  const [lastThreshold, setLastThreshold] = useState(null);
  const [triggerCounts, setTriggerCounts] = useState({
    low: 0,
    medium: 0,
    high: 0
  });

  const createHandler = useCallback((threshold, key) => () => {
    setLastThreshold(threshold);
    setTriggerCounts(prev => ({
      ...prev,
      [key]: prev[key] + 1
    }));
  }, []);

  return (
    <div>
      <p>Last triggered threshold: {lastThreshold || 'None'}</p>
      
      <div style={{ height: "400px" }}>
        <p>Scroll down to see different thresholds trigger</p>
      </div>
      
      <ScrollObserver 
        onScrolledToEnd={createHandler(0.1, 'low')}
        threshold={0.1}
      />
      <ScrollObserver 
        onScrolledToEnd={createHandler(0.5, 'medium')}
        threshold={0.5}
      />
      <ScrollObserver 
        onScrolledToEnd={createHandler(0.9, 'high')}
        threshold={0.9}
      />
    </div>
  );
};
```

### Interactive Demo

<ThresholdDemo />

## Demo 4: Lazy Loading

### Code Example

```jsx
import React, { useState, useCallback } from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";

const LazyLoadDemo = () => {
  const [loadedSections, setLoadedSections] = useState(new Set());

  const loadSection = useCallback((sectionId) => () => {
    setLoadedSections(prev => new Set([...prev, sectionId]));
  }, []);

  const sections = [
    { id: 1, title: "Section 1", content: "This is the first lazy-loaded section." },
    { id: 2, title: "Section 2", content: "This is the second lazy-loaded section." },
    { id: 3, title: "Section 3", content: "This is the third lazy-loaded section." }
  ];

  return (
    <div>
      <div>Initial content is loaded immediately.</div>
      
      {sections.map(section => (
        <div key={section.id}>
          {loadedSections.has(section.id) ? (
            <div>
              <h4>{section.title}</h4>
              <p>{section.content}</p>
            </div>
          ) : (
            <>
              <div>Scroll down to load {section.title}...</div>
              <ScrollObserver 
                onScrolledToEnd={loadSection(section.id)}
                rootMargin="100px"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
```

### Interactive Demo

<LazyLoadDemo />
