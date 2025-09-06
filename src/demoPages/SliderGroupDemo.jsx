import React, { useState, useMemo } from 'react';
import SliderGroup from '../components/sharedComponents/SliderGroup';
import './sliderGroupDemo.scss';

export const BasicBottomArrowsExample = () => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const simpleItems = useMemo(() => [1,2,3,4,5,6,7,8,9,10], []);
  return (
    <div className="slider-group-demo">
      <div className="demo-section">
        <h2>Basic SliderGroup (Bottom Arrows)</h2>
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
      </div>
    </div>
  );
};

export const TopArrowsCustomCardsExample = () => {
  const sampleItems = useMemo(() => [
    { id: 1, title: 'Card 1', description: 'First item' },
    { id: 2, title: 'Card 2', description: 'Second item' },
    { id: 3, title: 'Card 3', description: 'Third item' },
    { id: 4, title: 'Card 4', description: 'Fourth item' },
    { id: 5, title: 'Card 5', description: 'Fifth item' },
    { id: 6, title: 'Card 6', description: 'Sixth item' },
    { id: 7, title: 'Card 7', description: 'Seventh item' },
    { id: 8, title: 'Card 8', description: 'Eighth item' },
    { id: 9, title: 'Card 9', description: 'Ninth item' },
    { id: 10, title: 'Card 10', description: 'Tenth item' },
  ], []);
  return (
    <div className="slider-group-demo">
      <div className="demo-section">
        <h2>Top Arrows Position</h2>
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
      </div>
    </div>
  );
};

export const CenterArrowsNoDotsExample = () => {
  const sampleItems = useMemo(() => [
    { id: 1, title: 'Card 1', description: 'First item' },
    { id: 2, title: 'Card 2', description: 'Second item' },
    { id: 3, title: 'Card 3', description: 'Third item' },
    { id: 4, title: 'Card 4', description: 'Fourth item' },
    { id: 5, title: 'Card 5', description: 'Fifth item' },
    { id: 6, title: 'Card 6', description: 'Sixth item' },
  ], []);
  return (
    <div className="slider-group-demo">
      <div className="demo-section">
        <h2>Center Arrows Position</h2>
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
      </div>
    </div>
  );
};

export const CenterOutsideArrowsExample = () => {
  const simpleItems = useMemo(() => [1,2,3,4,5,6,7,8,9,10], []);
  return (
    <div className="slider-group-demo">
      <div className="demo-section">
        <h2>Center Outside Arrows</h2>
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
      </div>
    </div>
  );
};

export const NonSelectableCardsExample = () => {
  const sampleItems = useMemo(() => [
    { id: 1, title: 'Card 1', description: 'First item' },
    { id: 2, title: 'Card 2', description: 'Second item' },
    { id: 3, title: 'Card 3', description: 'Third item' },
    { id: 4, title: 'Card 4', description: 'Fourth item' },
    { id: 5, title: 'Card 5', description: 'Fifth item' },
    { id: 6, title: 'Card 6', description: 'Sixth item' },
  ], []);
  return (
    <div className="slider-group-demo">
      <div className="demo-section">
        <h2>Non-Selectable Cards</h2>
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
      </div>
    </div>
  );
};

export const LargeCardsExample = () => {
  const sampleItems = useMemo(() => [
    { id: 1, title: 'Card 1', description: 'First item' },
    { id: 2, title: 'Card 2', description: 'Second item' },
    { id: 3, title: 'Card 3', description: 'Third item' },
    { id: 4, title: 'Card 4', description: 'Fourth item' },
    { id: 5, title: 'Card 5', description: 'Fifth item' },
    { id: 6, title: 'Card 6', description: 'Sixth item' },
  ], []);
  return (
    <div className="slider-group-demo">
      <div className="demo-section">
        <h2>Large Cards</h2>
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
            {({ item }) => (
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
      </div>
    </div>
  );
};

const SliderGroupDemo = () => {
  return (
    <div className="slider-group-demo">
      <div className="demo-header">
        <h1>SliderGroup Component Demo</h1>
        <p>Interactive slider component with navigation arrows and dots</p>
      </div>

      <BasicBottomArrowsExample />
      <TopArrowsCustomCardsExample />
      <CenterArrowsNoDotsExample />
      <CenterOutsideArrowsExample />
      <NonSelectableCardsExample />
      <LargeCardsExample />
    </div>
  );
};

export default SliderGroupDemo;


