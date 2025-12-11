# API

## BasicTable Component

A powerful and flexible table component for displaying structured data with advanced features like sorting, pagination, and interactive functionality.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `headers` | `Array<Header>` | `[]` | Yes | Array of column header configurations |
| `tableData` | `Array<Object>` | `[]` | Yes | Array of data objects to display in table |
| `enableHover` | `boolean` | `true` | No | Enable row hover effects |
| `enableInfiniteScroll` | `boolean` | `true` | No | Enable infinite scroll functionality |
| `enablePagination` | `boolean` | `false` | No | Enable built-in pagination |
| `itemsPerPage` | `number` | `10` | No | Number of items per page |
| `currentPage` | `number` | `1` | No | Current active page |
| `totalItems` | `number` | `0` | No | Total number of items for pagination |
| `async` | `boolean` | `false` | No | Enable async data handling |
| `isAlternateRowColored` | `boolean` | `false` | No | Apply alternating row colors |
| `isAlternateColumnColored` | `boolean` | `false` | No | Apply alternating column colors |
| `defaultCellWidth` | `string` | `"1fr"` | No | Default width for columns without specified width |
| `className` | `string` | `''` | No | Additional CSS classes for the table wrapper |
| `onCellClicked` | `function` | - | No | Callback when a cell is clicked |
| `onScrolledToEndInTable` | `function` | - | No | Callback when scrolled to end |
| `onTableCellKeyDown` | `function` | - | No | Callback for cell keydown events |
| `onTableCellBlur` | `function` | - | No | Callback for cell blur events |
| `onSort` | `function` | - | No | Callback when column is sorted |
| `onPageChange` | `function` | - | No | Callback when page changes |

### Header Configuration

Each header object in the `headers` array supports the following properties:

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `text` | `string` | - | Yes | Display text for the column header |
| `key` | `string` | - | Yes | Data key to access in tableData |
| `sortable` | `boolean` | `false` | No | Whether the column can be sorted |
| `width` | `string` | `"1fr"` | No | Column width (CSS grid value) |
| `classes` | `string` | `''` | No | CSS classes for data cells |
| `headerClasses` | `string` | `''` | No | CSS classes for header cells |
| `enableCopy` | `boolean` | `false` | No | Enable copy functionality for cells |
| `domFunc` | `function` | - | No | Custom rendering function for cell content |

### Event Handlers

#### onCellClicked

Callback function that is called when a table cell is clicked.

**Signature:**

```js
onCellClicked: (rowData, cell) => void
```

**Parameters:**

- `rowData` (Object): The complete row data object
- `cell` (Object): The cell configuration object

**Example:**

```jsx
<BasicTable
  headers={headers}
  tableData={data}
  onCellClicked={(rowData, cell) => {
    console.log('Cell clicked:', rowData, cell);
  }}
/>
```

#### onSort

Callback function that is called when a column header is clicked for sorting.

**Signature:**

```js
onSort: (sortData) => void
```

**Parameters:**

- `sortData` (Object): Contains `key` and `direction` properties
  - `key` (string): The column key being sorted
  - `direction` (string): Sort direction ('asc' or 'desc')

**Example:**

```jsx
<BasicTable
  headers={headers}
  tableData={data}
  onSort={(sortData) => {
    console.log('Sort:', sortData.key, sortData.direction);
  }}
/>
```

#### onPageChange

Callback function that is called when pagination page changes.

**Signature:**

```js
onPageChange: (page) => void
```

**Parameters:**

- `page` (number): The new page number

**Example:**

```jsx
<BasicTable
  headers={headers}
  tableData={data}
  enablePagination={true}
  currentPage={currentPage}
  totalItems={totalItems}
  onPageChange={(page) => {
    setCurrentPage(page);
  }}
/>
```

#### onScrolledToEndInTable

Callback function that is called when user scrolls to the end of the table (for infinite scroll).

**Signature:**

```js
onScrolledToEndInTable: () => void
```

**Example:**

```jsx
<BasicTable
  headers={headers}
  tableData={data}
  enableInfiniteScroll={true}
  onScrolledToEndInTable={() => {
    loadMoreData();
  }}
/>
```

#### onTableCellKeyDown

Callback function that is called when a key is pressed on a table cell.

**Signature:**

```js
onTableCellKeyDown: (event, rowData, cell) => void
```

**Parameters:**

- `event` (KeyboardEvent): The keyboard event
- `rowData` (Object): The row data
- `cell` (Object): The cell configuration

#### onTableCellBlur

Callback function that is called when a table cell loses focus.

**Signature:**

```js
onTableCellBlur: (rowData, cell) => void
```

**Parameters:**

- `rowData` (Object): The row data
- `cell` (Object): The cell configuration

### Custom Cell Rendering

Use the `domFunc` property in header configuration to customize how cell content is rendered:

```jsx
const headers = [
  { text: 'Name', key: 'name' },
  { 
    text: 'Status', 
    key: 'status',
    domFunc: (value) => (
      <span className={`status ${value.toLowerCase()}`}>
        {value}
      </span>
    )
  }
];
```

### Column Alignment

Use the `classes` and `headerClasses` properties to align column content:

```jsx
const headers = [
  { text: 'Name', key: 'name', classes: 'left-align', headerClasses: 'left-align' },
  { text: 'Age', key: 'age', classes: 'right-align', headerClasses: 'right-align' },
  { text: 'Code', key: 'code', classes: 'center-align', headerClasses: 'center-align' }
];
```

### Copy Functionality

Enable copy functionality for specific columns by setting `enableCopy: true`:

```jsx
const headers = [
  { text: 'Email', key: 'email', enableCopy: true },
  { text: 'Phone', key: 'phone', enableCopy: true }
];
```

When enabled, a copy icon appears on hover and clicking it copies the cell value to the clipboard.

### Usage Examples

#### Basic Table

```jsx
<BasicTable
  headers={[
    { text: 'Name', key: 'name' },
    { text: 'Age', key: 'age' },
    { text: 'Email', key: 'email' }
  ]}
  tableData={[
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
  ]}
/>
```

#### Sortable Table

```jsx
<BasicTable
  headers={[
    { text: 'Name', key: 'name', sortable: true },
    { text: 'Age', key: 'age', sortable: true },
    { text: 'Email', key: 'email' }
  ]}
  tableData={data}
  onSort={(sortData) => handleSort(sortData)}
/>
```

#### Paginated Table

```jsx
<BasicTable
  headers={headers}
  tableData={currentPageData}
  enablePagination={true}
  itemsPerPage={10}
  currentPage={currentPage}
  totalItems={totalItems}
  onPageChange={handlePageChange}
/>
```

#### Table with Copy Functionality

```jsx
<BasicTable
  headers={[
    { text: 'Name', key: 'name', enableCopy: true },
    { text: 'Email', key: 'email', enableCopy: true },
    { text: 'Phone', key: 'phone', enableCopy: true }
  ]}
  tableData={data}
  onCellClicked={handleCellClick}
/>
```

#### Custom Cell Rendering

```jsx
<BasicTable
  headers={[
    { text: 'Name', key: 'name' },
    { 
      text: 'Status', 
      key: 'status',
      domFunc: (value) => (
        <span className={`status ${value.toLowerCase()}`}>
          {value}
        </span>
      )
    }
  ]}
  tableData={data}
/>
```
