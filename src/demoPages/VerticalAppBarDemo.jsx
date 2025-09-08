import React, { useMemo, useState } from 'react';
import VerticalAppBar from '../components/sharedComponents/VerticalAppBar';
import './verticalAppBarDemo.scss';

const useSampleData = () => {
  const logoSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14l-5-4.87l6.91-1.01L12 2z"/></svg>';

  const navigationItems = useMemo(() => [
    {
      label: 'Dashboard',
      value: 'dashboard',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3v6h8V3m-8 18h8v-6h-8M3 21h8v-6H3m0-2h8V3H3v10Z"/></svg>',
    },
    {
      label: 'Users',
      value: 'users',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7h-2.08c-.8 0-1.54.5-1.85 1.26l-1.92 5.63c-.15.45.15.95.64 1.05c.49.1.99-.2 1.14-.65L16.5 11h1.31l.95 2.85L17 16v6m-8-8.5c1.84 0 5.5.5 5.5 2.5V18H2v-2c0-2 3.66-2.5 5.5-2.5M7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5S4 6.57 4 10s1.57 2 3.5 2"/></svg>',
    },
    {
      label: 'Settings',
      value: 'settings',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/></svg>',
    },
  ], []);

  const nestedItems = useMemo(() => [
    {
      label: 'Content',
      value: 'content',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m4 18H6V4h7v5h5v11Z"/></svg>',
      children: [
        {
          label: 'Posts',
          value: 'posts',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7v2m3-4H7v-2h10v2m0-4H7V7h10v2Z"/></svg>',
        },
        {
          label: 'Pages',
          value: 'pages',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>',
        },
      ],
    },
    {
      label: 'Analytics',
      value: 'analytics',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
    },
  ], []);

  const nestedItemsDeep = useMemo(() => [
    {
      label: 'Management',
      value: 'management',
      children: [
        {
          label: 'Projects',
          value: 'projects',
          children: [
            { label: 'Roadmap', value: 'roadmap' },
            {
              label: 'Backlog',
              value: 'backlog',
              children: [
                { label: 'Bugs', value: 'bugs' },
                { label: 'Features', value: 'features' },
              ],
            },
          ],
        },
        {
          label: 'Teams',
          value: 'teams',
          children: [
            { label: 'Frontend', value: 'frontend' },
            {
              label: 'Backend',
              value: 'backend',
              children: [
                { label: 'API', value: 'api' },
                { label: 'Services', value: 'services' },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Reports',
      value: 'reports',
      children: [
        { label: 'Daily', value: 'daily' },
        { label: 'Monthly', value: 'monthly' },
      ],
    },
  ], []);

  return { logoSvg, navigationItems, nestedItems, nestedItemsDeep };
};

export const BasicExample = () => {
  const { logoSvg } = useSampleData();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar modelValue={open} onModelValueChange={setOpen} title="Navigation" />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? '20rem' : '0' }}>
        <div className="button-group">
          <button className={`demo-button ${mounted ? 'danger' : ''}`} onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'} App Bar</button>
          <button className="demo-button" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'} App Bar</button>
        </div>
        <p>Position: <code>left</code></p>
      </div>
    </div>
  );
};

export const WithLogoExample = () => {
  const { logoSvg } = useSampleData();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar modelValue={open} onModelValueChange={setOpen} title="My App" logo={logoSvg} roundedLogo={true} />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? '20rem' : '0' }}>
        <div className="button-group">
          <button className={`demo-button ${mounted ? 'danger' : ''}`} onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'} App Bar</button>
          <button className="demo-button" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'} App Bar</button>
        </div>
        <p>Logo: <code>SVG</code>, Rounded: <code>true</code></p>
      </div>
    </div>
  );
};

export const CustomStylingExample = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Custom Style"
          backgroundColor="#34495e"
          titleColor="#ecf0f1"
          width="250px"
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? '250px' : '0' }}>
        <div className="button-group">
          <button className={`demo-button ${mounted ? 'danger' : ''}`} onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'} App Bar</button>
          <button className="demo-button" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'} App Bar</button>
        </div>
        <p>Background: <code>#34495e</code>, Title Color: <code>#ecf0f1</code>, Width: <code>250px</code></p>
      </div>
    </div>
  );
};

export const WithNavigationItemsExample = () => {
  const { logoSvg, navigationItems } = useSampleData();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Dashboard"
          logo={logoSvg}
          items={navigationItems}
          activeItem={active}
          onActiveItemChange={setActive}
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? '20rem' : '0' }}>
        <div className="button-group">
          <button className={`demo-button ${mounted ? 'danger' : ''}`} onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'} App Bar</button>
          <button className="demo-button" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'} Navigation</button>
        </div>
        <p>Active Item: <code>{active || 'none'}</code></p>
      </div>
    </div>
  );
};

export const AdvancedFeaturesExample = () => {
  const { logoSvg, nestedItems } = useSampleData();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Advanced"
          logo={logoSvg}
          items={nestedItems}
          persistIconsOnHide={true}
          expandOnHover={true}
          multiExpand={true}
          position="left"
          backgroundColor="#fff3e0"
          titleColor="#f57722"
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? '20rem' : '0' }}>
        <div className="button-group">
          <button className={`demo-button ${mounted ? 'danger' : ''}`} onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'} App Bar</button>
          <button className="demo-button" onClick={() => setOpen(!open)}>Toggle Advanced App Bar</button>
        </div>
        <p>Persist Icons: <code>true</code>, Expand on Hover: <code>true</code>, Multi Expand: <code>true</code></p>
      </div>
    </div>
  );
};

export const NestedItemsExample = () => {
  const { logoSvg, nestedItemsDeep } = useSampleData();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Nested Navigation"
          logo={logoSvg}
          items={nestedItemsDeep}
          activeItem={active}
          onActiveItemChange={setActive}
          showChevron={true}
          multiExpand={false}
        />
      )}
      <div className="content" style={{ marginLeft: mounted && open ? '20rem' : '0' }}>
        <div className="button-group">
          <button className={`demo-button ${mounted ? 'danger' : ''}`} onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'} App Bar</button>
          <button className="demo-button" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'} Nested</button>
        </div>
        <p>Active Item: <code>{active || 'none'}</code></p>
      </div>
    </div>
  );
};

export const LeftRightPositioningExample = () => {
  const { logoSvg, navigationItems } = useSampleData();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLeft, setActiveLeft] = useState('');
  const [activeRight, setActiveRight] = useState('');
  return (
    <div className="app-bar-container two-bars">
      {mounted && (
        <>
          <VerticalAppBar
            modelValue={open}
            onModelValueChange={setOpen}
            title="Left Bar"
            logo={logoSvg}
            items={navigationItems}
            activeItem={activeLeft}
            onActiveItemChange={setActiveLeft}
            position="left"
            width="18rem"
            backgroundColor="#e3f2fd"
            titleColor="#1976d2"
          />
          <VerticalAppBar
            modelValue={open}
            onModelValueChange={setOpen}
            title="Right Bar"
            logo={logoSvg}
            items={navigationItems.slice(0, 2)}
            activeItem={activeRight}
            onActiveItemChange={setActiveRight}
            position="right"
            width="16rem"
            backgroundColor="#f3e5f5"
            titleColor="#7b1fa2"
            overlay={false}
          />
        </>
      )}
      <div className="content" style={{ marginLeft: mounted && open ? '18rem' : '0', marginRight: mounted && open ? '16rem' : '0' }}>
        <div className="button-group">
          <button className={`demo-button ${mounted ? 'danger' : ''}`} onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'} App Bars</button>
          <button className="demo-button" onClick={() => setOpen(!open)}>Toggle Both App Bars</button>
        </div>
        <p>Left Active: <code>{activeLeft || 'none'}</code> | Right Active: <code>{activeRight || 'none'}</code></p>
      </div>
    </div>
  );
};

export const RightOnlyExample = () => {
  const { logoSvg, navigationItems } = useSampleData();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="app-bar-container">
      {mounted && (
        <VerticalAppBar
          modelValue={open}
          onModelValueChange={setOpen}
          title="Right Navigation"
          logo={logoSvg}
          items={navigationItems}
          position="right"
          width="22rem"
          backgroundColor="#fce4ec"
          titleColor="#c2185b"
          persistIconsOnHide={true}
          expandOnHover={true}
        />
      )}
      <div className="content" style={{ marginRight: mounted && open ? '22rem' : '0' }}>
        <div className="button-group">
          <button className={`demo-button ${mounted ? 'danger' : ''}`} onClick={() => setMounted(!mounted)}>{mounted ? 'Unmount' : 'Mount'} App Bar</button>
          <button className="demo-button" onClick={() => setOpen(!open)}>Toggle Right App Bar</button>
        </div>
        <p>Position: <code>right</code>, Width: <code>22rem</code></p>
      </div>
    </div>
  );
};

const VerticalAppBarDemo = () => {
  return (
    <div className="vertical-app-bar-demo">
      <h1>VerticalAppBar Demo</h1>
      <h3>Nested Items Demo</h3>
      <NestedItemsExample />
      <h3>Basic Vertical App Bar</h3>
      <BasicExample />
      <h3>App Bar with Logo</h3>
      <WithLogoExample />
      <h3>Custom Styling</h3>
      <CustomStylingExample />
      <h3>With Navigation Items</h3>
      <WithNavigationItemsExample />
      <h3>Advanced Features</h3>
      <AdvancedFeaturesExample />
      <h3>Left & Right Positioning</h3>
      <LeftRightPositioningExample />
      <h3>Right Position Only</h3>
      <RightOnlyExample />
    </div>
  );
};

export default VerticalAppBarDemo;


