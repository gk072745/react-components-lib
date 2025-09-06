import {
  BasicBottomArrowsExample,
  TopArrowsCustomCardsExample,
  CenterArrowsNoDotsExample,
  CenterOutsideArrowsExample,
  NonSelectableCardsExample,
  LargeCardsExample
} from "@site/src/demoPages/SliderGroupDemo.jsx";

# Demo

This page alternates code examples with matching interactive demos.

## Basic SliderGroup (Bottom Arrows)

### Code Example

```jsx
import React, { useMemo, useState } from 'react';
import SliderGroup from '../components/sharedComponents/SliderGroup';

export default function BasicBottomArrowsExample() {
  const [selectedCard, setSelectedCard] = useState(-1);
  const simpleItems = useMemo(() => [1,2,3,4,5,6,7,8,9,10], []);
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
}
```

### Interactive Demo

<BasicBottomArrowsExample />

## Top Arrows Position

### Code Example

```jsx
import React, { useMemo } from 'react';
import SliderGroup from '../components/sharedComponents/SliderGroup';

export default function TopArrowsCustomCardsExample() {
  const items = useMemo(() => [
    { id: 1, title: 'Card 1', description: 'First item' },
    { id: 2, title: 'Card 2', description: 'Second item' },
    { id: 3, title: 'Card 3', description: 'Third item' },
    { id: 4, title: 'Card 4', description: 'Fourth item' },
  ], []);
  return (
    <SliderGroup
      items={items}
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
  );
}
```

### Interactive Demo

<TopArrowsCustomCardsExample />

## Center Arrows Position

### Code Example

```jsx
import React, { useMemo } from 'react';
import SliderGroup from '../components/sharedComponents/SliderGroup';

export default function CenterArrowsNoDotsExample() {
  const items = useMemo(() => [
    { id: 1, title: 'Card 1', description: 'First item' },
    { id: 2, title: 'Card 2', description: 'Second item' },
  ], []);
  return (
    <SliderGroup
      items={items}
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
  );
}
```

### Interactive Demo

<CenterArrowsNoDotsExample />

## Center Outside Arrows

### Code Example

```jsx
import React, { useMemo } from 'react';
import SliderGroup from '../components/sharedComponents/SliderGroup';

export default function CenterOutsideArrowsExample() {
  const items = useMemo(() => [1,2,3,4,5,6,7,8,9,10], []);
  return (
    <SliderGroup
      items={items}
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
  );
}
```

### Interactive Demo

<CenterOutsideArrowsExample />

## Non-Selectable Cards

### Code Example

```jsx
import React, { useMemo } from 'react';
import SliderGroup from '../components/sharedComponents/SliderGroup';

export default function NonSelectableCardsExample() {
  const items = useMemo(() => [
    { id: 1, title: 'Card 1', description: 'First item' },
    { id: 2, title: 'Card 2', description: 'Second item' },
    { id: 3, title: 'Card 3', description: 'Third item' },
  ], []);
  return (
    <SliderGroup
      items={items}
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
  );
}
```

### Interactive Demo

<NonSelectableCardsExample />

## Large Cards

### Code Example

```jsx
import React, { useMemo } from 'react';
import SliderGroup from '../components/sharedComponents/SliderGroup';

export default function LargeCardsExample() {
  const items = useMemo(() => [
    { id: 1, title: 'Card 1', description: 'First item' },
    { id: 2, title: 'Card 2', description: 'Second item' },
    { id: 3, title: 'Card 3', description: 'Third item' },
  ], []);
  return (
    <SliderGroup
      items={items}
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
            <span className="card-id">#{index + 1}</span>
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
  );
}
```

### Interactive Demo

<LargeCardsExample />


