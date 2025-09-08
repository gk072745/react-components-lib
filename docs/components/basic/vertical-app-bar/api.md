# API

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | string | `20rem` | App bar width |
| `height` | string | `100%` | App bar height |
| `elevation` | bool | `true` | Shadow/elevation effect |
| `floating` | bool | `true` | Rounded container styling |
| `sticky` | bool | `true` | Sticky position |
| `logo` | string | `''` | URL or inline SVG string |
| `roundedLogo` | bool | `false` | Circular logo wrapper |
| `title` | string | `''` | Title text |
| `showCloseButton` | bool | `true` | Show close button |
| `prependHeight` | string | `4rem` | Header area height |
| `navigationLogoSize` | string | `2.5rem` | Size for item icons area |
| `logoSize` | string | `2.5rem` | Logo display size |
| `titleColor` | string | `#111` | Title text color |
| `backgroundColor` | string | `#f2f2f2` | Background color |
| `modelValue` | bool | `false` | Visibility (controlled) |
| `persistIconsOnHide` | bool | `true` | Keep icons visible when collapsed |
| `expandOnHover` | bool | `false` | Expand on hover (when collapsed) |
| `expandOnClick` | bool | `true` | Expand on click on container |
| `overlay` | bool | `true` | Show overlay backdrop when open |
| `position` | one of 'left' or 'right' | `left` | Left or right position |
| `transitionDuration` | string | `0.3s` | CSS transition duration |
| `items` | array of Item | `[]` | Navigation items (supports nesting) |
| `activeItem` | string | `''` | Currently active item value |
| `showChevron` | bool | `true` | Show chevron for expandable items |
| `multiExpand` | bool | `true` | Allow multiple expanded branches |
| `prepend` | function | - | Render prop for header area |
| `content` | function | - | Render prop for content list |
| `append` | function | - | Render prop for footer area |
| `onLogoClick` | function | - | Called when logo clicked |
| `onCloseClick` | function | - | Called when close clicked |
| `onTitleClick` | function | - | Called when title clicked |
| `onModelValueChange` | function | - | `(visible: boolean)` visibility change |
| `onActiveItemChange` | function | - | `(value: string)` active item change |
| `className` | string | `''` | Extra classes |
| `style` | object | `{}` | Inline styles |

### Item shape

```ts
interface Item {
  label: string;
  value?: string;
  icon?: string; // URL or inline SVG string
  children?: Item[];
}
```

## Notes

- Items can be nested to any depth. When `multiExpand` is false, only one branch per level expands at a time.
- If `overlay` is true, clicking the backdrop closes the app bar.
- Inline SVG strings are supported for `logo` and item `icon`.

## Usage Examples

```jsx
<VerticalAppBar modelValue={open} onModelValueChange={setOpen} title="Navigation" />
```

```jsx
<VerticalAppBar position="right" width="22rem" backgroundColor="#fce4ec" titleColor="#c2185b" />
```
