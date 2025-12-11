import React, { useState } from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";
import "./switchDemo.scss";

// Demo 1: Basic Switch
export const BasicSwitchDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="switch-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Switch</h3>
        <div className="demo-content">
          <div className="switch-grid">
            <BasicSwitch value={checked} onChange={setChecked} label="Notifications" />
          </div>
          <div className="demo-state">
            <strong>Current State:</strong> {checked ? "On" : "Off"}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Variant Colors
export const VariantColorsDemo = () => {
  const [defaultChecked, setDefaultChecked] = useState(true);
  const [primaryChecked, setPrimaryChecked] = useState(true);
  const [successChecked, setSuccessChecked] = useState(true);
  const [warningChecked, setWarningChecked] = useState(true);
  const [dangerChecked, setDangerChecked] = useState(true);
  const [infoChecked, setInfoChecked] = useState(true);

  return (
    <div className="switch-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Variant Colors</h3>
        <div className="demo-content">
          <div className="variant-colors-grid">
            <BasicSwitch
              value={defaultChecked}
              onChange={setDefaultChecked}
              label="Default"
              variant="default"
            />
            <BasicSwitch
              value={primaryChecked}
              onChange={setPrimaryChecked}
              label="Primary"
              variant="primary"
            />
            <BasicSwitch
              value={successChecked}
              onChange={setSuccessChecked}
              label="Success"
              variant="success"
            />
            <BasicSwitch
              value={warningChecked}
              onChange={setWarningChecked}
              label="Warning"
              variant="warning"
            />
            <BasicSwitch
              value={dangerChecked}
              onChange={setDangerChecked}
              label="Danger"
              variant="danger"
            />
            <BasicSwitch
              value={infoChecked}
              onChange={setInfoChecked}
              label="Info"
              variant="info"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Sizes
export const SizesDemo = () => {
  const [xsChecked, setXsChecked] = useState(false);
  const [smChecked, setSmChecked] = useState(true);
  const [mdChecked, setMdChecked] = useState(false);
  const [lgChecked, setLgChecked] = useState(true);
  const [xlChecked, setXlChecked] = useState(false);

  return (
    <div className="switch-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Size Variants</h3>
        <div className="demo-content">
          <div className="size-variants-grid">
            <BasicSwitch
              value={xsChecked}
              onChange={setXsChecked}
              label="Extra Small (xs)"
              size="xs"
              variant="info"
            />
            <BasicSwitch
              value={smChecked}
              onChange={setSmChecked}
              label="Small (sm)"
              size="sm"
              variant="warning"
            />
            <BasicSwitch
              value={mdChecked}
              onChange={setMdChecked}
              label="Medium (md)"
              size="md"
              variant="success"
            />
            <BasicSwitch
              value={lgChecked}
              onChange={setLgChecked}
              label="Large (lg)"
              size="lg"
              variant="danger"
            />
            <BasicSwitch
              value={xlChecked}
              onChange={setXlChecked}
              label="Extra Large (xl)"
              size="xl"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Label Positions
export const LabelPositionsDemo = () => {
  const [leftChecked, setLeftChecked] = useState(true);
  const [rightChecked, setRightChecked] = useState(false);

  return (
    <div className="switch-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Label Positions</h3>
        <div className="demo-content">
          <div className="switch-grid">
            <BasicSwitch
              value={leftChecked}
              onChange={setLeftChecked}
              label="Left Label"
              labelPosition="left"
              variant="primary"
            />
            <BasicSwitch
              value={rightChecked}
              onChange={setRightChecked}
              label="Right Label"
              labelPosition="right"
              variant="success"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: States
export const StatesDemo = () => {
  return (
    <div className="switch-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">States</h3>
        <div className="demo-content">
          <div className="states-grid">
            <BasicSwitch value={true} label="Disabled" disabled variant="primary" />
            <BasicSwitch value={false} label="Readonly" readonly variant="success" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Inset Variant
export const InsetDemo = () => {
  const [insetChecked, setInsetChecked] = useState(true);

  return (
    <div className="switch-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Inset Variant</h3>
        <div className="demo-content">
          <div className="switch-grid">
            <BasicSwitch
              value={insetChecked}
              onChange={setInsetChecked}
              label="Inset Switch"
              inset={true}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Dot Labels
export const DotLabelsDemo = () => {
  const [dotLabelChecked, setDotLabelChecked] = useState(true);

  return (
    <div className="switch-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Dot Labels</h3>
        <div className="demo-content">
          <div className="switch-grid">
            <BasicSwitch
              value={dotLabelChecked}
              onChange={setDotLabelChecked}
              label="With Dot Labels"
              dotLabels={{ true: "ON", false: "OFF" }}
              variant="success"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: Inset with Dot Labels
export const InsetWithDotLabelsDemo = () => {
  const [insetDotChecked, setInsetDotChecked] = useState(true);

  return (
    <div className="switch-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Inset with Dot Labels</h3>
        <div className="demo-content">
          <div className="switch-grid">
            <BasicSwitch
              value={insetDotChecked}
              onChange={setInsetDotChecked}
              label="Inset with Labels"
              inset={true}
              dotLabels={{ true: "ON", false: "OFF" }}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SwitchDemo = () => {
  return (
    <div className="switch-demo-container">
      <BasicSwitchDemo />
      <VariantColorsDemo />
      <SizesDemo />
      <LabelPositionsDemo />
      <StatesDemo />
      <InsetDemo />
      <DotLabelsDemo />
      <InsetWithDotLabelsDemo />
    </div>
  );
};

export default SwitchDemo;
