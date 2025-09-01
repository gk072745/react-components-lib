# ScrollObserver

A lightweight utility component that uses the Intersection Observer API to detect when an element becomes visible in the viewport, commonly used for infinite scrolling and lazy loading implementations.

## Features

- **Intersection Observer API**: Uses modern browser API for efficient scroll detection
- **Customizable Threshold**: Configure when the callback should trigger
- **Root Margin Support**: Add margin to the intersection calculation
- **Performance Optimized**: Memoized callbacks and options to prevent unnecessary re-renders
- **Accessibility Friendly**: Hidden from screen readers with proper ARIA attributes
- **Non-intrusive**: Minimal visual footprint with pointer-events disabled

## Use Cases

- **Infinite Scrolling**: Load more content when user reaches the end
- **Lazy Loading**: Trigger content loading when element becomes visible
- **Analytics Tracking**: Track when users reach certain parts of the page
- **Progress Indicators**: Update progress based on scroll position
- **Content Prefetching**: Start loading next page content before user reaches it

## Key Features

- **Zero Visual Impact**: Renders as a 1px invisible element
- **Efficient Performance**: Uses IntersectionObserver instead of scroll listeners
- **Flexible Configuration**: Customizable threshold and root margin
- **Memory Safe**: Properly disconnects observer on unmount
- **React Optimized**: Uses hooks for optimal re-rendering

## Basic Usage

```jsx
import React from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";

const Example = () => {
  const handleEndReached = () => {
    console.log("User reached the end!");
  };

  return (
    <div>
      <div style={{ height: "2000px" }}>
        {/* Your content here */}
      </div>
      <ScrollObserver onScrolledToEnd={handleEndReached} />
    </div>
  );
};
```

## How It Works

1. Renders an invisible 1px div at the bottom of your content
2. Uses IntersectionObserver to watch when this element enters the viewport
3. Triggers the `onScrolledToEnd` callback when the threshold is met
4. Automatically cleans up the observer when the component unmounts

[API Reference →](./api)

[View Code →](./code)
