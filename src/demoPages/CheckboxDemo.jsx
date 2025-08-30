import React, { useState } from "react";
import BasicCheckbox from "../components/sharedComponents/BasicCheckbox.jsx";
import "./checkboxDemo.scss";

// Demo 1: Basic Checkbox
export const BasicCheckboxDemo = () => {
  const [singleState, setSingleState] = useState(["option1"]);

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Checkbox</h3>
        <div className="demo-content">
          <BasicCheckbox
            label="Interactive Option 1"
            value="option1"
            selected={singleState}
            onChange={(updatedValue, checkboxValue) => {
              setSingleState(updatedValue);
            }}
          />
          <div className="demo-state">
            <strong>Current State:</strong> {JSON.stringify(singleState)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Size Variants
export const SizeVariantsDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Size Variants</h3>
        <div className="demo-content">
          <div className="size-variants-grid">
            <BasicCheckbox
              size="xs"
              label="Extra Small (xs)"
              value="xs"
              selected={selectedOptions}
              onChange={handleSelect}
            />
            <BasicCheckbox
              size="sm"
              label="Small (sm)"
              value="sm"
              selected={selectedOptions}
              onChange={handleSelect}
            />
            <BasicCheckbox
              size="md"
              label="Medium (md) - Default"
              value="md"
              selected={selectedOptions}
              onChange={handleSelect}
            />
            <BasicCheckbox
              size="lg"
              label="Large (lg)"
              value="lg"
              selected={selectedOptions}
              onChange={handleSelect}
            />
            <BasicCheckbox
              size="xl"
              label="Extra Large (xl)"
              value="xl"
              selected={selectedOptions}
              onChange={handleSelect}
            />
          </div>
          <div className="demo-state">
            <strong>Current State:</strong> {JSON.stringify(selectedOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Disabled and Readonly States
export const StatesDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState(["readonly"]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Disabled and Readonly States</h3>
        <div className="demo-content">
          <div className="states-grid">
            <BasicCheckbox
              label="Normal Checkbox"
              value="normal"
              selected={selectedOptions}
              onChange={handleSelect}
            />
            <BasicCheckbox
              disabled={true}
              label="Disabled Checkbox"
              value="disabled"
              selected={selectedOptions}
              onChange={handleSelect}
            />
            <BasicCheckbox
              readonly={true}
              label="Readonly Checkbox"
              value="readonly"
              selected={selectedOptions}
              onChange={handleSelect}
            />
          </div>
          <div className="demo-state">
            <strong>Current State:</strong> {JSON.stringify(selectedOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Custom Colors
export const CustomColorsDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customColors, setCustomColors] = useState({
    backgroundColor: "#2196F3",
    innerTickColor: "#ffffff",
    labelColor: "#333333",
  });

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Colors</h3>
        <div className="demo-content">
          <div className="color-controls">
            <div className="color-control">
              <label>Background Color:</label>
              <input
                type="color"
                value={customColors.backgroundColor}
                onChange={(e) =>
                  setCustomColors((prev) => ({
                    ...prev,
                    backgroundColor: e.target.value,
                  }))
                }
              />
            </div>
            <div className="color-control">
              <label>Tick Color:</label>
              <input
                type="color"
                value={customColors.innerTickColor}
                onChange={(e) =>
                  setCustomColors((prev) => ({
                    ...prev,
                    innerTickColor: e.target.value,
                  }))
                }
              />
            </div>
            <div className="color-control">
              <label>Label Color:</label>
              <input
                type="color"
                value={customColors.labelColor}
                onChange={(e) =>
                  setCustomColors((prev) => ({
                    ...prev,
                    labelColor: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <BasicCheckbox
            label="Custom Colored Checkbox"
            value="custom"
            selected={selectedOptions}
            onChange={handleSelect}
            backgroundColor={customColors.backgroundColor}
            innerTickColor={customColors.innerTickColor}
            labelColor={customColors.labelColor}
          />
          <div className="demo-state">
            <strong>Current State:</strong> {JSON.stringify(selectedOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Select All Functionality
export const SelectAllDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  const sampleItems = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Vegetable" },
    { id: 4, name: "Tomato", category: "Vegetable" },
    { id: 5, name: "Orange", category: "Fruit" },
  ];

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Select All Functionality</h3>
        <div className="demo-content">
          <div className="select-all-container">
            <BasicCheckbox
              label="Select All Items"
              value="selectAll"
              selected={selectedOptions}
              onChange={handleSelect}
              allItems={sampleItems}
              valueKey="id"
            />
            <div className="items-list">
              {sampleItems.map((item) => (
                <BasicCheckbox
                  key={item.id}
                  label={item.name}
                  value={item.id}
                  selected={selectedOptions}
                  onChange={handleSelect}
                />
              ))}
            </div>
          </div>
          <div className="demo-state">
            <strong>Current State:</strong> {JSON.stringify(selectedOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Custom Icon and Label
export const CustomIconDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  const CustomIcon = ({ isChecked }) => (
    <div className="custom-icon">{isChecked ? "■" : ""}</div>
  );

  const CustomLabel = ({ isChecked }) => (
    <span className={`custom-label ${isChecked ? "selected" : ""}`}>
      Custom Label {isChecked ? "(Selected)" : "(Not Selected)"}
    </span>
  );

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Icon and Label</h3>
        <div className="demo-content">
          <BasicCheckbox
            label="Custom Icon and Label"
            value="custom"
            selected={selectedOptions}
            onChange={handleSelect}
            icon={CustomIcon}
            labelSlot={CustomLabel}
          />
          <div className="demo-state">
            <strong>Current State:</strong> {JSON.stringify(selectedOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Multiple Checkboxes
export const MultipleCheckboxesDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Multiple Checkboxes</h3>
        <div className="demo-content">
          <div className="multiple-checkboxes-grid">
            {["Option A", "Option B", "Option C", "Option D"].map(
              (option, index) => (
                <BasicCheckbox
                  key={index}
                  label={option}
                  value={`option-${index}`}
                  selected={selectedOptions}
                  onChange={handleSelect}
                />
              )
            )}
          </div>
          <div className="demo-state">
            <strong>Current State:</strong> {JSON.stringify(selectedOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: Current Selection Display
export const SelectionDisplayDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Current Selection Display</h3>
        <div className="demo-content">
          <div className="multiple-checkboxes-grid">
            {["Option A", "Option B", "Option C", "Option D"].map(
              (option, index) => (
                <BasicCheckbox
                  key={index}
                  label={option}
                  value={`option-${index}`}
                  selected={selectedOptions}
                  onChange={handleSelect}
                />
              )
            )}
          </div>
          <div className="selection-display">
            <strong>Currently Selected:</strong>
            <div className="selection-list">
              {selectedOptions.length > 0 ? (
                <ul>
                  {selectedOptions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <em>No items selected</em>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 9: Different Value Types
export const ValueTypesDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div className="checkbox-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Different Value Types</h3>
        <div className="demo-content">
          <div className="value-types-grid">
            <BasicCheckbox
              label="String Value"
              value="string-value"
              selected={selectedOptions}
              onChange={handleSelect}
            />
            <BasicCheckbox
              label="Number Value"
              value={42}
              selected={selectedOptions}
              onChange={handleSelect}
            />
            <BasicCheckbox
              label="Boolean Value"
              value={true}
              selected={selectedOptions}
              onChange={handleSelect}
            />
          </div>
          <div className="demo-state">
            <strong>Current State:</strong> {JSON.stringify(selectedOptions)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export for backward compatibility
const CheckboxDemo = () => {
  return (
    <div className="checkbox-demo-container">
      <BasicCheckboxDemo />
      <SizeVariantsDemo />
      <StatesDemo />
      <CustomColorsDemo />
      <SelectAllDemo />
      <CustomIconDemo />
      <MultipleCheckboxesDemo />
      <SelectionDisplayDemo />
      <ValueTypesDemo />
    </div>
  );
};

export default CheckboxDemo;
