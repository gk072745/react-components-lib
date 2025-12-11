import {
  BasicUsageDemo,
  TopArrowsDemo,
  CenterArrowsDemo,
  CenterOutsideArrowsDemo,
  NonSelectableCardsDemo,
  LargeCardsDemo,
  CustomCardContentDemo,
  AllFeaturesDemo,
} from "@site/src/demoPages/SliderGroupDemo.jsx";

# Demo

This page demonstrates the Slider Group component with various configurations and examples.

## Demo 1: Basic Usage

### Code Example

```jsx
import React, { useMemo, useState } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";

const BasicUsageExample = () => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const simpleItems = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  return (
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
  );
};
```

### Interactive Demo

<BasicUsageDemo />

## Demo 2: Top Arrows Position

### Code Example

```jsx
import React, { useMemo } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";

const TopArrowsExample = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Card 1", description: "First item" },
      { id: 2, title: "Card 2", description: "Second item" },
      { id: 3, title: "Card 3", description: "Third item" },
    ],
    []
  );

  return (
    <SliderGroup
      items={sampleItems}
      arrowsPosition="top"
      showArrowsAlways={true}
      showDots={true}
      canSelectCard={true}
      cardWidth={18}
    >
      {({ item, index }) => (
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span>{index + 1}</span>
        </div>
      )}
    </SliderGroup>
  );
};
```

### Interactive Demo

<TopArrowsDemo />

## Demo 3: Center Arrows Position

### Code Example

```jsx
import React, { useMemo } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";

const CenterArrowsExample = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Card 1", description: "First item" },
      { id: 2, title: "Card 2", description: "Second item" },
    ],
    []
  );

  return (
    <SliderGroup
      items={sampleItems}
      arrowsPosition="center"
      showArrowsAlways={false}
      showDots={false}
      canSelectCard={true}
      cardWidth={16}
    >
      {({ item }) => (
        <div>
          <div>📱</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      )}
    </SliderGroup>
  );
};
```

### Interactive Demo

<CenterArrowsDemo />

## Demo 4: Center Outside Arrows

### Code Example

```jsx
import React, { useMemo } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";

const CenterOutsideArrowsExample = () => {
  const simpleItems = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  return (
    <SliderGroup
      items={simpleItems}
      arrowsPosition="center-outside"
      showArrowsAlways={true}
      showDots={false}
      canSelectCard={true}
      cardWidth={12}
    >
      {({ item }) => (
        <div>
          <div>{item}</div>
          <div>Item {item}</div>
        </div>
      )}
    </SliderGroup>
  );
};
```

### Interactive Demo

<CenterOutsideArrowsDemo />

## Demo 5: Non-Selectable Cards

### Code Example

```jsx
import React, { useMemo } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";

const NonSelectableCardsExample = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Card 1", description: "First item" },
      { id: 2, title: "Card 2", description: "Second item" },
    ],
    []
  );

  return (
    <SliderGroup
      items={sampleItems}
      arrowsPosition="bottom"
      showArrowsAlways={true}
      showDots={true}
      canSelectCard={false}
      cardWidth={14}
    >
      {({ item }) => (
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div>Read Only</div>
        </div>
      )}
    </SliderGroup>
  );
};
```

### Interactive Demo

<NonSelectableCardsDemo />

## Demo 6: Large Cards

### Code Example

```jsx
import React, { useMemo } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";

const LargeCardsExample = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Card 1", description: "First item" },
      { id: 2, title: "Card 2", description: "Second item" },
    ],
    []
  );

  return (
    <SliderGroup
      items={sampleItems}
      arrowsPosition="bottom"
      showArrowsAlways={true}
      showDots={true}
      canSelectCard={true}
      cardWidth={25}
    >
      {({ item, index }) => (
        <div>
          <div>
            <h2>{item.title}</h2>
            <span>#{item.id}</span>
          </div>
          <div>
            <p>{item.description}</p>
            <div>
              <span>Feature A</span>
              <span>Feature B</span>
              <span>Feature C</span>
            </div>
          </div>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      )}
    </SliderGroup>
  );
};
```

### Interactive Demo

<LargeCardsDemo />

## Demo 7: Custom Card Content

### Code Example

```jsx
import React, { useMemo } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";

const CustomCardContentExample = () => {
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Product 1", price: "$99", image: "🖼️" },
      { id: 2, title: "Product 2", price: "$149", image: "🖼️" },
    ],
    []
  );

  return (
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
        <div>
          <div>{item.image}</div>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          {isSelected && <div>Selected</div>}
        </div>
      )}
    </SliderGroup>
  );
};
```

### Interactive Demo

<CustomCardContentDemo />

## Demo 8: All Features Combined

### Code Example

```jsx
import React, { useMemo, useState } from "react";
import SliderGroup from "../components/sharedComponents/SliderGroup";

const AllFeaturesExample = () => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const sampleItems = useMemo(
    () => [
      { id: 1, title: "Feature 1", description: "Description 1" },
      { id: 2, title: "Feature 2", description: "Description 2" },
    ],
    []
  );

  return (
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
        <div>
          <div>{index + 1}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {isSelected && <div>✓</div>}
        </div>
      )}
    </SliderGroup>
  );
};
```

### Interactive Demo

<AllFeaturesDemo />

