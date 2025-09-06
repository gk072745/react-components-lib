import React, { useState, useMemo } from 'react';
import BasicTabs from '../components/sharedComponents/BasicTabs';
import './tabsDemo.scss';

const makeItems = () => ([
  { value: 'home', name: 'Home' },
  { value: 'profile', name: 'Profile' },
  { value: 'settings', name: 'Settings' },
  { value: 'help', name: 'Help' },
]);

export const BasicSingleExample = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState('home');
  return (
    <div className="tabs-demo">
      <section className="demo-section">
        <h2>Basic Single Selection</h2>
        <div className="demo-group">
          <BasicTabs
            tabItems={tabItems}
            selected={selected}
            onItemClicked={(item) => setSelected(item.value)}
          />
        </div>
        <p>Selected: {selected}</p>
      </section>
    </div>
  );
};

export const MultipleSelectionExample = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState(['home']);
  return (
    <div className="tabs-demo">
      <section className="demo-section">
        <h2>Multiple Selection</h2>
        <div className="demo-group">
          <BasicTabs
            tabItems={tabItems}
            multiple={true}
            selected={selected}
            onItemClicked={(item) => {
              setSelected((prev) => {
                const isSelected = prev.includes(item.value);
                return isSelected ? prev.filter((v) => v !== item.value) : [...prev, item.value];
              });
            }}
          />
        </div>
        <p>Selected: {selected.join(', ')}</p>
      </section>
    </div>
  );
};

export const BottomLineStyleExample = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState('profile');
  return (
    <div className="tabs-demo">
      <section className="demo-section">
        <h2>Bottom Line Style</h2>
        <div className="demo-group">
          <BasicTabs
            tabItems={tabItems}
            selected={selected}
            bottomLineStyle={true}
            onItemClicked={(item) => setSelected(item.value)}
          />
        </div>
      </section>
    </div>
  );
};

export const SinglePackedVariantExample = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState('settings');
  return (
    <div className="tabs-demo">
      <section className="demo-section">
        <h2>Single Packed Variant</h2>
        <div className="demo-group">
          <BasicTabs
            tabItems={tabItems}
            selected={selected}
            singlePacked={true}
            onItemClicked={(item) => setSelected(item.value)}
          />
        </div>
      </section>
    </div>
  );
};

export const DarkGoldBottomLineExample = () => {
  const tabItems = useMemo(makeItems, []);
  const [selected, setSelected] = useState('home');
  return (
    <div className="tabs-demo">
      <section className="demo-section">
        <h2>Bottom Line Dark-Gold Variant</h2>
        <div className="demo-group">
          <BasicTabs
            tabItems={tabItems}
            selected={selected}
            bottomLineStyle={true}
            tabClasses={[ 'dark-gold-tab' ]}
            onItemClicked={(item) => setSelected(item.value)}
          />
        </div>
      </section>
    </div>
  );
};

export const IconSlotsExample = () => {
  const tabItems = useMemo(() => ([
    {
      value: 'grid',
      name: 'Grid',
      iconNode: (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1" y="1" width="6" height="6" fill="#666" />
          <rect x="9" y="1" width="6" height="6" fill="#888" />
          <rect x="1" y="9" width="6" height="6" fill="#888" />
          <rect x="9" y="9" width="6" height="6" fill="#666" />
        </svg>
      ),
    },
    {
      value: 'list',
      name: 'List',
      iconNode: (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="3" cy="4" r="1.5" fill="#666" />
          <rect x="6" y="3" width="8" height="2" fill="#888" />
          <circle cx="3" cy="8" r="1.5" fill="#666" />
          <rect x="6" y="7" width="8" height="2" fill="#888" />
          <circle cx="3" cy="12" r="1.5" fill="#666" />
          <rect x="6" y="11" width="8" height="2" fill="#888" />
        </svg>
      ),
    },
    {
      value: 'table',
      name: 'Table',
      iconNode: (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1" y="3" width="14" height="10" stroke="#666" fill="none" />
          <line x1="1" y1="7" x2="15" y2="7" stroke="#888" />
          <line x1="6" y1="3" x2="6" y2="13" stroke="#888" />
          <line x1="11" y1="3" x2="11" y2="13" stroke="#888" />
        </svg>
      ),
    },
  ]), []);
  const [selected, setSelected] = useState('grid');
  return (
    <div className="tabs-demo">
      <section className="demo-section">
        <h2>Icons & Slots</h2>
        <div className="demo-group">
          <BasicTabs
            tabItems={tabItems}
            selected={selected}
            onItemClicked={(item) => setSelected(item.value)}
          >
            {({ name, item }) => {
              if (name === 'prepend' && item.value === 'list') {
                return <span className="chip">NEW</span>;
              }
              if (name === 'tab-icon') {
                return (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
                    {item.iconNode && <span className="icon">{item.iconNode}</span>}
                    <span className="label">{item.name}</span>
                  </span>
                );
              }
              return null;
            }}
          </BasicTabs>
        </div>
      </section>
    </div>
  );
};

const TabsDemo = () => {
  return (
    <div className="tabs-demo">
      <h1>Basic Tabs Component Demo</h1>
      <BasicSingleExample />
      <MultipleSelectionExample />
      <BottomLineStyleExample />
      <SinglePackedVariantExample />
      <DarkGoldBottomLineExample />
      <IconSlotsExample />
    </div>
  );
};

export default TabsDemo;


