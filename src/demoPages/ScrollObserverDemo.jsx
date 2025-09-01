import React, { useState, useCallback } from "react";
import ScrollObserver from "../components/sharedComponents/ScrollObserver";
import "./scrollObserverDemo.scss";

export const BasicScrollDemo = () => {
  const [triggerCount, setTriggerCount] = useState(0);

  const handleScrollEnd = useCallback(() => {
    setTriggerCount(prev => prev + 1);
  }, []);

  return (
    <div className="scroll-observer-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Scroll Detection</h3>
        <div className="demo-content">
          <div className="scroll-area">
            <p>Scroll down to trigger the observer...</p>
            <div style={{ height: "500px", background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)" }}>
              <div style={{ padding: "2rem", textAlign: "center", paddingTop: "200px" }}>
                <p>Triggered: <strong>{triggerCount} times</strong></p>
              </div>
            </div>
            <ScrollObserver onScrolledToEnd={handleScrollEnd} />
            <p>Observer placed here ↑</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InfiniteScrollDemo = () => {
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
    <div className="scroll-observer-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Infinite Scroll</h3>
        <div className="demo-content">
          <div className="infinite-list">
            {items.map(item => (
              <div key={item} className="list-item">
                <span>Item {item}</span>
              </div>
            ))}
            
            {loading && (
              <div className="loading-indicator">
                Loading more items...
              </div>
            )}
            
            <ScrollObserver 
              onScrolledToEnd={loadMoreItems}
              rootMargin="50px"
            />
          </div>
          <p className="demo-note">
            Total items loaded: <strong>{items.length}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export const ThresholdDemo = () => {
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
    <div className="scroll-observer-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Different Thresholds</h3>
        <div className="demo-content">
          <div className="threshold-info">
            <p>Last triggered threshold: <strong>{lastThreshold || 'None'}</strong></p>
            <div className="trigger-counts">
              <span>Low (0.1): {triggerCounts.low}</span>
              <span>Medium (0.5): {triggerCounts.medium}</span>
              <span>High (0.9): {triggerCounts.high}</span>
            </div>
          </div>
          
          <div className="scroll-area">
            <div style={{ height: "400px", background: "linear-gradient(to bottom, #fff, #ddd)" }}>
              <div style={{ padding: "2rem", textAlign: "center", paddingTop: "150px" }}>
                <p>Scroll down to see different thresholds trigger</p>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export const LazyLoadDemo = () => {
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
    <div className="scroll-observer-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Lazy Loading</h3>
        <div className="demo-content">
          <div className="initial-content">
            <p>Initial content is loaded immediately.</p>
          </div>
          
          {sections.map(section => (
            <div key={section.id} className="lazy-section">
              {loadedSections.has(section.id) ? (
                <div className="loaded-content">
                  <h4>{section.title}</h4>
                  <p>{section.content}</p>
                  <div className="placeholder-content">
                    {Array.from({ length: 3 }, (_, i) => (
                      <div key={i} className="content-block">
                        Content block {i + 1} for {section.title}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="placeholder">
                    <p>Scroll down to load {section.title}...</p>
                  </div>
                  <ScrollObserver 
                    onScrolledToEnd={loadSection(section.id)}
                    rootMargin="100px"
                  />
                </>
              )}
            </div>
          ))}
          
          <div className="demo-status">
            <p>Loaded sections: {loadedSections.size} / {sections.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollObserverDemo = () => {
  return (
    <div className="scroll-observer-demo-container">
      <BasicScrollDemo />
      <InfiniteScrollDemo />
      <ThresholdDemo />
      <LazyLoadDemo />
    </div>
  );
};

export default ScrollObserverDemo;
