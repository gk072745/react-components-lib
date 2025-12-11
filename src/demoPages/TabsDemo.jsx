import React, { useState, useMemo } from "react";
import BasicTabs from "../components/sharedComponents/BasicTabs";
import "./tabsDemo.scss";

const makeItems = () => [
  { value: "home", name: "Home" },
  { value: "profile", name: "Profile" },
  { value: "settings", name: "Settings" },
  { value: "help", name: "Help" },
];

// Demo 1: Basic Single Selection
export const BasicSingleDemo = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState("home");

  return (
    <div className="tabs-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Single Selection</h3>
        <div className="demo-content">
          <div className="tabs-grid">
            <BasicTabs
              tabItems={tabItems}
              selected={selected}
              onItemClicked={(item) => setSelected(item.value)}
            />
          </div>
          <div className="demo-state">
            <strong>Selected:</strong> {selected}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Multiple Selection
export const MultipleSelectionDemo = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState(["home"]);

  return (
    <div className="tabs-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Multiple Selection</h3>
        <div className="demo-content">
          <div className="tabs-grid">
            <BasicTabs
              tabItems={tabItems}
              multiple={true}
              selected={selected}
              onItemClicked={(item) => {
                setSelected((prev) => {
                  const isSelected = prev.includes(item.value);
                  return isSelected
                    ? prev.filter((v) => v !== item.value)
                    : [...prev, item.value];
                });
              }}
            />
          </div>
          <div className="demo-state">
            <strong>Selected:</strong> {selected.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Bottom Line Style
export const BottomLineStyleDemo = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState("profile");

  return (
    <div className="tabs-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Bottom Line Style</h3>
        <div className="demo-content">
          <div className="tabs-grid">
            <BasicTabs
              tabItems={tabItems}
              selected={selected}
              bottomLineStyle={true}
              onItemClicked={(item) => setSelected(item.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Single Packed Variant
export const SinglePackedDemo = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState("settings");

  return (
    <div className="tabs-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Single Packed Variant</h3>
        <div className="demo-content">
          <div className="tabs-grid">
            <BasicTabs
              tabItems={tabItems}
              selected={selected}
              singlePacked={true}
              onItemClicked={(item) => setSelected(item.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Dark Gold Variant
export const DarkGoldVariantDemo = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState("home");

  return (
    <div className="tabs-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Dark Gold Variant</h3>
        <div className="demo-content">
          <div className="tabs-grid">
            <BasicTabs
              tabItems={tabItems}
              selected={selected}
              variant="dark-gold"
              onItemClicked={(item) => setSelected(item.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Dark Gold Bottom Line
export const DarkGoldBottomLineDemo = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState("home");

  return (
    <div className="tabs-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Dark Gold Bottom Line</h3>
        <div className="demo-content">
          <div className="tabs-grid">
            <BasicTabs
              tabItems={tabItems}
              selected={selected}
              bottomLineStyle={true}
              variant="dark-gold"
              onItemClicked={(item) => setSelected(item.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Icons and Slots
export const IconsSlotsDemo = () => {
  const tabItems = useMemo(
    () => [
      {
        value: "grid",
        name: "Grid",
        icon: `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1" y="1" width="6" height="6" fill="#666" />
          <rect x="9" y="1" width="6" height="6" fill="#888" />
          <rect x="1" y="9" width="6" height="6" fill="#888" />
          <rect x="9" y="9" width="6" height="6" fill="#666" />
        </svg>`,
      },
      {
        value: "list",
        name: "List",
        icon: `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="3" cy="4" r="1.5" fill="#666" />
          <rect x="6" y="3" width="8" height="2" fill="#888" />
          <circle cx="3" cy="8" r="1.5" fill="#666" />
          <rect x="6" y="7" width="8" height="2" fill="#888" />
          <circle cx="3" cy="12" r="1.5" fill="#666" />
          <rect x="6" y="11" width="8" height="2" fill="#888" />
        </svg>`,
      },
      {
        value: "table",
        name: "Table",
        icon: `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1" y="3" width="14" height="10" stroke="#666" fill="none" />
          <line x1="1" y1="7" x2="15" y2="7" stroke="#888" />
          <line x1="6" y1="3" x2="6" y2="13" stroke="#888" />
          <line x1="11" y1="3" x2="11" y2="13" stroke="#888" />
        </svg>`,
      },
    ],
    []
  );
  const [selected, setSelected] = useState("grid");

  return (
    <div className="tabs-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Icons and Slots</h3>
        <div className="demo-content">
          <div className="tabs-grid">
            <BasicTabs
              tabItems={tabItems}
              selected={selected}
              onItemClicked={(item) => setSelected(item.value)}
            >
              {({ name, item }) => {
                if (name === "prepend" && item.value === "list") {
                  return <span className="chip">NEW</span>;
                }
                return null;
              }}
            </BasicTabs>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: Single Packed Dark Gold
export const SinglePackedDarkGoldDemo = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState("settings");

  return (
    <div className="tabs-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Single Packed Dark Gold</h3>
        <div className="demo-content">
          <div className="tabs-grid">
            <BasicTabs
              tabItems={tabItems}
              selected={selected}
              singlePacked={true}
              variant="dark-gold"
              onItemClicked={(item) => setSelected(item.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TabsDemo = () => {
  return (
    <div className="tabs-demo-container">
      <BasicSingleDemo />
      <MultipleSelectionDemo />
      <BottomLineStyleDemo />
      <SinglePackedDemo />
      <DarkGoldVariantDemo />
      <DarkGoldBottomLineDemo />
      <IconsSlotsDemo />
      <SinglePackedDarkGoldDemo />
    </div>
  );
};

export default TabsDemo;
