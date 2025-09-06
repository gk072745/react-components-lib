# API

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tabItems` | array of `{ value, name?, icon?, prepend?, append? }` | `[]` | Tab definitions |
| `selected` | string, number, or array | `null` | Selected value(s) |
| `multiple` | boolean | `false` | Enable multi-select mode |
| `isLabeli18String` | boolean | `true` | Treat `name` as i18n key (vs plain) |
| `singlePacked` | boolean | `false` | Single packed variant style |
| `tabClasses` | array | `[]` | Extra classes for overflow container |
| `bottomLineStyle` | boolean | `false` | Moving bottom line variant |
| `onItemClicked` | function `(item) => void` | - | Fired when a tab is clicked |
| `children` | function `({ name, item }) => ReactNode` | - | Slots: `prepend`, `tab-icon`, `append` |

## Notes

- In multi-select, `selected` should be an array; clicking toggles items.
- `bottomLineStyle` animates an active line below the selected tab.
- Use `tabClasses={[ 'dark-gold-tab' ]}` to enable provided variant.

## Usage Examples

### Single Selection

```jsx
const items = [
  { value: 'home', name: 'Home' },
  { value: 'profile', name: 'Profile' },
];
<BasicTabs tabItems={items} selected={'home'} onItemClicked={(i) => console.log(i)} />
```

### Multiple Selection

```jsx
const [selected, setSelected] = useState(['home']);
<BasicTabs
  tabItems={items}
  multiple
  selected={selected}
  onItemClicked={(item) => setSelected((p) => p.includes(item.value) ? p.filter(v => v !== item.value) : [...p, item.value])}
/>
```
