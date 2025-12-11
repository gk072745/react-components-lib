import React, { useState, useMemo } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";
import "./sliderGroupDemo.scss";

// Demo 1: Basic Usage
export const BasicUsageDemo = () => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const simpleItems = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  return (
    <div className="slider-group-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Usage</h3>
        <div className="demo-content">
          <div className="demo-container">
            <SliderGroup
              items={simpleItems}
              arrowsPosition="bottom"
              showArrowsAlways={true}
              showDots={true}
              canSelectCard={true}
              selectedCard={selectedCard}
              cardWidth={15}
              onCardClick={() => {}}
            />
          </div>
          <p>Basic slider with bottom arrows and dots navigation</p>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Top Arrows Position
export const TopArrowsDemo = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Card 1", description: "First item" },
      { id: 2, title: "Card 2", description: "Second item" },
      { id: 3, title: "Card 3", description: "Third item" },
      { id: 4, title: "Card 4", description: "Fourth item" },
      { id: 5, title: "Card 5", description: "Fifth item" },
      { id: 6, title: "Card 6", description: "Sixth item" },
      { id: 7, title: "Card 7", description: "Seventh item" },
      { id: 8, title: "Card 8", description: "Eighth item" },
      { id: 9, title: "Card 9", description: "Ninth item" },
      { id: 10, title: "Card 10", description: "Tenth item" },
    ],
    []
  );

  return (
    <div className="slider-group-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Top Arrows Position</h3>
        <div className="demo-content">
          <div className="demo-container">
            <SliderGroup
              items={sampleItems}
              arrowsPosition="top"
              showArrowsAlways={true}
              showDots={true}
              canSelectCard={true}
              cardWidth={18}
              onCardClick={() => {}}
            >
              {({ item, index }) => (
                <div className="custom-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="card-number">{index + 1}</span>
                </div>
              )}
            </SliderGroup>
          </div>
          <p>Slider with arrows positioned at the top</p>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Center Arrows Position
export const CenterArrowsDemo = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Card 1", description: "First item" },
      { id: 2, title: "Card 2", description: "Second item" },
      { id: 3, title: "Card 3", description: "Third item" },
      { id: 4, title: "Card 4", description: "Fourth item" },
      { id: 5, title: "Card 5", description: "Fifth item" },
      { id: 6, title: "Card 6", description: "Sixth item" },
    ],
    []
  );

  return (
    <div className="slider-group-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Center Arrows Position</h3>
        <div className="demo-content">
          <div className="demo-container">
            <SliderGroup
              items={sampleItems}
              arrowsPosition="center"
              showArrowsAlways={false}
              showDots={false}
              canSelectCard={true}
              cardWidth={16}
              onCardClick={() => {}}
            >
              {({ item }) => (
                <div className="custom-card-content">
                  <div className="card-icon">📱</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )}
            </SliderGroup>
          </div>
          <p>Slider with center arrows (hover to show) and no dots</p>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Center Outside Arrows
export const CenterOutsideArrowsDemo = () => {
  const simpleItems = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  return (
    <div className="slider-group-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Center Outside Arrows</h3>
        <div className="demo-content">
          <div className="demo-container">
            <SliderGroup
              items={simpleItems}
              arrowsPosition="center-outside"
              showArrowsAlways={true}
              showDots={false}
              canSelectCard={true}
              cardWidth={12}
              onCardClick={() => {}}
            >
              {({ item }) => (
                <div className="simple-card">
                  <div className="card-number">{item}</div>
                  <div className="card-label">Item {item}</div>
                </div>
              )}
            </SliderGroup>
          </div>
          <p>Slider with arrows positioned outside the cards area</p>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Non-Selectable Cards
export const NonSelectableCardsDemo = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Card 1", description: "First item" },
      { id: 2, title: "Card 2", description: "Second item" },
      { id: 3, title: "Card 3", description: "Third item" },
      { id: 4, title: "Card 4", description: "Fourth item" },
      { id: 5, title: "Card 5", description: "Fifth item" },
      { id: 6, title: "Card 6", description: "Sixth item" },
    ],
    []
  );

  return (
    <div className="slider-group-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Non-Selectable Cards</h3>
        <div className="demo-content">
          <div className="demo-container">
            <SliderGroup
              items={sampleItems}
              arrowsPosition="bottom"
              showArrowsAlways={true}
              showDots={true}
              canSelectCard={false}
              cardWidth={14}
              onCardClick={() => {}}
            >
              {({ item }) => (
                <div className="readonly-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="card-badge">Read Only</div>
                </div>
              )}
            </SliderGroup>
          </div>
          <p>Slider with non-selectable cards (read-only mode)</p>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Large Cards
export const LargeCardsDemo = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Card 1", description: "First item" },
      { id: 2, title: "Card 2", description: "Second item" },
      { id: 3, title: "Card 3", description: "Third item" },
      { id: 4, title: "Card 4", description: "Fourth item" },
      { id: 5, title: "Card 5", description: "Fifth item" },
      { id: 6, title: "Card 6", description: "Sixth item" },
    ],
    []
  );

  return (
    <div className="slider-group-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Large Cards</h3>
        <div className="demo-content">
          <div className="demo-container">
            <SliderGroup
              items={sampleItems}
              arrowsPosition="bottom"
              showArrowsAlways={true}
              showDots={true}
              canSelectCard={true}
              cardWidth={25}
              onCardClick={() => {}}
            >
              {({ item, index }) => (
                <div className="large-card">
                  <div className="card-header">
                    <h2>{item.title}</h2>
                    <span className="card-id">#{item.id}</span>
                  </div>
                  <div className="card-body">
                    <p>{item.description}</p>
                    <div className="card-features">
                      <span className="feature">Feature A</span>
                      <span className="feature">Feature B</span>
                      <span className="feature">Feature C</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="card-button">Learn More</button>
                  </div>
                </div>
              )}
            </SliderGroup>
          </div>
          <p>Slider with larger cards and custom content</p>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Custom Card Content
export const CustomCardContentDemo = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Product 1", price: "$99", image: "🖼️" },
      { id: 2, title: "Product 2", price: "$149", image: "🖼️" },
      { id: 3, title: "Product 3", price: "$199", image: "🖼️" },
      { id: 4, title: "Product 4", price: "$249", image: "🖼️" },
      { id: 5, title: "Product 5", price: "$299", image: "🖼️" },
    ],
    []
  );

  return (
    <div className="slider-group-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Card Content</h3>
        <div className="demo-content">
          <div className="demo-container">
            <SliderGroup
              items={sampleItems}
              arrowsPosition="bottom"
              showArrowsAlways={true}
              showDots={true}
              canSelectCard={true}
              cardWidth={18}
              onCardClick={(item) => console.log("Clicked:", item)}
            >
              {({ item, isSelected }) => (
                <div className="product-card">
                  <div className="product-image">{item.image}</div>
                  <h3>{item.title}</h3>
                  <p className="product-price">{item.price}</p>
                  {isSelected && <div className="selected-badge">Selected</div>}
                </div>
              )}
            </SliderGroup>
          </div>
          <p>Slider with custom product card content and selection state</p>
        </div>
      </div>
    </div>
  );
};

// Demo 8: All Features Combined
export const AllFeaturesDemo = () => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Feature 1", description: "Description 1" },
      { id: 2, title: "Feature 2", description: "Description 2" },
      { id: 3, title: "Feature 3", description: "Description 3" },
      { id: 4, title: "Feature 4", description: "Description 4" },
      { id: 5, title: "Feature 5", description: "Description 5" },
      { id: 6, title: "Feature 6", description: "Description 6" },
      { id: 7, title: "Feature 7", description: "Description 7" },
      { id: 8, title: "Feature 8", description: "Description 8" },
    ],
    []
  );

  return (
    <div className="slider-group-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">All Features Combined</h3>
        <div className="demo-content">
          <div className="demo-container">
            <SliderGroup
              items={sampleItems}
              arrowsPosition="bottom"
              showArrowsAlways={true}
              showDots={true}
              canSelectCard={true}
              selectedCard={selectedCard}
              cardWidth={20}
              onCardClick={(item) => {
                console.log("Card clicked:", item);
              }}
            >
              {({ item, index, isSelected }) => (
                <div className="feature-card">
                  <div className="feature-number">{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {isSelected && <div className="selected-indicator">✓</div>}
                </div>
              )}
            </SliderGroup>
          </div>
          <p>Slider with all features: arrows, dots, selection, and custom content</p>
        </div>
      </div>
    </div>
  );
};

// Main Demo Component
export default function SliderGroupDemo() {
  return (
    <div className="slider-group-demo-container">
      <BasicUsageDemo />
      <TopArrowsDemo />
      <CenterArrowsDemo />
      <CenterOutsideArrowsDemo />
      <NonSelectableCardsDemo />
      <LargeCardsDemo />
      <CustomCardContentDemo />
      <AllFeaturesDemo />
    </div>
  );
}
