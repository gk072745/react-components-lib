import React, { useState } from 'react';
import BasicSwitch from '../components/sharedComponents/BasicSwitch';
import './switchDemo.scss';

export const BasicControlledExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="switch-demo">
      <section className="demo-section">
        <h2>Basic Controlled</h2>
        <div className="demo-group">
          <BasicSwitch value={checked} onChange={setChecked} label="Notifications" />
        </div>
        <p>Current: {checked ? 'On' : 'Off'}</p>
      </section>
    </div>
  );
};

export const SizesExample = () => {
  return (
    <div className="switch-demo">
      <section className="demo-section">
        <h2>Sizes</h2>
        <div className="demo-group">
          <BasicSwitch value={false} label="XS" size="xs" />
          <BasicSwitch value={true} label="SM" size="sm" />
          <BasicSwitch value={false} label="MD" size="md" />
          <BasicSwitch value={true} label="LG" size="lg" />
          <BasicSwitch value={false} label="XL" size="xl" />
        </div>
      </section>
    </div>
  );
};

export const ColorsExample = () => {
  return (
    <div className="switch-demo">
      <section className="demo-section">
        <h2>Colors</h2>
        <div className="demo-group">
          <BasicSwitch value={true} label="Default" className="color-default" />
          <BasicSwitch value={true} label="Primary" className="color-primary" />
          <BasicSwitch value={true} label="Success" className="color-success" />
          <BasicSwitch value={true} label="Warning" className="color-warning" />
          <BasicSwitch value={true} label="Danger" className="color-danger" />
          <BasicSwitch value={true} label="Info" className="color-info" />
        </div>
      </section>
    </div>
  );
};

export const LabelPositionsExample = () => {
  return (
    <div className="switch-demo">
      <section className="demo-section">
        <h2>Label Positions</h2>
        <div className="demo-group">
          <BasicSwitch value={true} label="Left" labelPosition="left" />
          <BasicSwitch value={false} label="Right" labelPosition="right" />
        </div>
      </section>
    </div>
  );
};

export const DisabledReadonlyExample = () => {
  return (
    <div className="switch-demo">
      <section className="demo-section">
        <h2>Disabled & Readonly</h2>
        <div className="demo-group">
          <BasicSwitch value={true} label="Disabled" disabled />
          <BasicSwitch value={false} label="Readonly" readonly />
        </div>
      </section>
    </div>
  );
};

export const InsetAndDotLabelsExample = () => {
  return (
    <div className="switch-demo">
      <section className="demo-section">
        <h2>Inset & Dot Labels</h2>
        <div className="demo-group">
          <BasicSwitch value={true} label="Inset" inset dotLabels={{ true: 'ON', false: 'OFF' }} />
          <BasicSwitch value={false} label="Dot Labels" dotLabels={{ true: 'Y', false: 'N' }} dotLabelColors={{ true: '#0d6efd', false: '#dc3545' }} />
        </div>
      </section>
    </div>
  );
};

const SwitchDemo = () => {
  return (
    <div className="switch-demo">
      <h1>Basic Switch Component Demo</h1>
      <BasicControlledExample />
      <SizesExample />
      <ColorsExample />
      <LabelPositionsExample />
      <DisabledReadonlyExample />
      <InsetAndDotLabelsExample />
    </div>
  );
};

export default SwitchDemo;


