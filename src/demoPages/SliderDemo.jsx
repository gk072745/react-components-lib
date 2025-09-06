import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";
import "./sliderDemo.scss";

export const ColorVariantsExample = () => {
  return (
    <div className="slider-demo">
      <section className="demo-section">
        <h2>Color Variants</h2>
        <div className="demo-group">
          <BasicSlider value={50} label="Default Color" min={0} max={100} step={1} color="default" size="md" />
          <BasicSlider value={60} label="Primary Color" min={0} max={100} step={1} color="primary" size="md" />
          <BasicSlider value={70} label="Success Color" min={0} max={100} step={1} color="success" size="md" />
          <BasicSlider value={80} label="Warning Color" min={0} max={100} step={1} color="warning" size="md" />
          <BasicSlider value={90} label="Danger Color" min={0} max={100} step={1} color="danger" size="md" />
          <BasicSlider value={40} label="Info Color" min={0} max={100} step={1} color="info" size="md" />
        </div>
      </section>
    </div>
  );
};

export const BasicControlledExample = () => {
  const [sliderValue1, setSliderValue1] = useState(50);
  const handleSliderChange1 = (newValue) => setSliderValue1(newValue);
  return (
    <div className="slider-demo">
      <section className="demo-section">
        <h2>Basic Slider</h2>
        <div className="demo-group">
          <BasicSlider
            value={sliderValue1}
            onChange={handleSliderChange1}
            label="Volume Control"
            min={0}
            max={100}
            step={1}
            color="primary"
            size="md"
          />
        </div>
        <p>Current Value: {sliderValue1}</p>
      </section>
    </div>
  );
};

export const ThumbLabelsExample = () => {
  const [sliderValue2, setSliderValue2] = useState(75);
  const handleSliderChange2 = (newValue) => setSliderValue2(newValue);
  return (
    <div className="slider-demo">
      <section className="demo-section">
        <h2>Slider with Thumb Labels</h2>
        <div className="demo-group">
          <BasicSlider
            value={sliderValue2}
            onChange={handleSliderChange2}
            label="Temperature Control"
            min={-50}
            max={150}
            step={5}
            color="success"
            thumbLabel={true}
            size="lg"
          />
        </div>
        <p>Current Temperature: {sliderValue2}°C</p>
      </section>
    </div>
  );
};

export const AlwaysVisibleLabelsExample = () => {
  const [sliderValue3, setSliderValue3] = useState(25);
  const handleSliderChange3 = (newValue) => setSliderValue3(newValue);
  return (
    <div className="slider-demo">
      <section className="demo-section">
        <h2>Slider with Always Visible Labels</h2>
        <div className="demo-group">
          <BasicSlider
            value={sliderValue3}
            onChange={handleSliderChange3}
            label="Percentage Control"
            min={0}
            max={100}
            step={0.1}
            color="danger"
            thumbLabel="always"
            size="md"
          />
        </div>
        <p>Current Percentage: {sliderValue3.toFixed(1)}%</p>
      </section>
    </div>
  );
};

export const SizesExample = () => {
  return (
    <div className="slider-demo">
      <section className="demo-section">
        <h2>Different Sizes</h2>
        <div className="demo-group">
          <BasicSlider value={25} label="Extra Small" min={0} max={100} step={1} color="info" size="xs" />
          <BasicSlider value={30} label="Small" min={0} max={100} step={1} color="warning" size="sm" />
          <BasicSlider value={35} label="Medium" min={0} max={100} step={1} color="success" size="md" />
          <BasicSlider value={40} label="Large" min={0} max={100} step={1} color="danger" size="lg" />
          <BasicSlider value={45} label="Extra Large" min={0} max={100} step={1} color="primary" size="xl" />
        </div>
      </section>
    </div>
  );
};

export const DisabledReadonlyExample = () => {
  return (
    <div className="slider-demo">
      <section className="demo-section">
        <h2>Disabled and Readonly</h2>
        <div className="demo-group">
          <BasicSlider value={50} label="Disabled Slider" min={0} max={100} step={1} color="primary" disabled={true} size="md" />
          <BasicSlider value={60} label="Readonly Slider" min={0} max={100} step={1} color="success" readonly={true} size="md" />
        </div>
      </section>
    </div>
  );
};

export const CustomStepValuesExample = () => {
  const [sliderValue4, setSliderValue4] = useState(60);
  const handleSliderChange4 = (newValue) => setSliderValue4(newValue);
  return (
    <div className="slider-demo">
      <section className="demo-section">
        <h2>Custom Step Values</h2>
        <div className="demo-group">
          <BasicSlider
            value={sliderValue4}
            onChange={handleSliderChange4}
            label="Decimal Control"
            min={0}
            max={10}
            step={0.25}
            color="info"
            thumbLabel={true}
            size="md"
          />
        </div>
        <p>Current Value: {sliderValue4.toFixed(2)}</p>
      </section>
    </div>
  );
};

export const CustomRangesExample = () => {
  return (
    <div className="slider-demo">
      <section className="demo-section">
        <h2>Custom Ranges</h2>
        <div className="demo-group">
          <BasicSlider value={5} label="Small Range (0-10)" min={0} max={10} step={1} color="primary" size="md" />
          <BasicSlider value={500} label="Large Range (0-1000)" min={0} max={1000} step={10} color="success" size="md" />
          <BasicSlider value={-25} label="Negative Range (-100 to 100)" min={-100} max={100} step={5} color="warning" size="md" />
        </div>
      </section>
    </div>
  );
};

const SliderDemo = () => {
  return (
    <div className="slider-demo">
      <h1>Basic Slider Component Demo</h1>
      <ColorVariantsExample />
      <BasicControlledExample />
      <ThumbLabelsExample />
      <AlwaysVisibleLabelsExample />
      <SizesExample />
      <DisabledReadonlyExample />
      <CustomStepValuesExample />
      <CustomRangesExample />
    </div>
  );
};

export default SliderDemo;


