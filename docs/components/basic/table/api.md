# API

## BasicTable Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headers` | `Array<Header>` | `[]` | **Required.** Array of column header configurations |
| `tableData` | `Array<Object>` | `[]` | **Required.** Array of data objects to display in table |
| `className` | `string` | `''` | Additional CSS class for the table wrapper |

### Header Configuration

Each header object supports:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `string` | - | **Required.** Display text for the column header |
| `key` | `string` | - | **Required.** Data key to access in tableData |
| `sortable` | `boolean` | `false` | Whether the column can be sorted |
| `width` | `string` | `"1fr"` | Column width (CSS grid value) |
| `classes` | `string` | `''` | CSS classes for data cells |
| `headerClasses` | `string` | `''` | CSS classes for header cells |
| `enableCopy` | `boolean` | `false` | Enable copy functionality for cells |
| `domFunc` | `function` | - | Custom rendering function for cell content |

### Visual Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enableHover` | `boolean` | `true` | Enable row hover effects |
| `isAlternateRowColored` | `boolean` | `false` | Apply alternating row colors |
| `isAlternateColumnColored` | `boolean` | `false` | Apply alternating column colors |
| `defaultCellWidth` | `string` | `"1fr"` | Default width for columns without specified width |

### Pagination Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enablePagination` | `boolean` | `false` | Enable built-in pagination |
| `itemsPerPage` | `number` | `10` | Number of items per page |
| `currentPage` | `number` | `1` | Current active page |
| `totalItems` | `number` | `0` | Total number of items for pagination |

### Advanced Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enableInfiniteScroll` | `boolean` | `true` | Enable infinite scroll functionality |
| `async` | `boolean` | `false` | Enable async data handling |
| `onCellClicked` | `function` | - | Callback when a cell is clicked |
| `onScrolledToEndInTable` | `function` | - | Callback when scrolled to end |
| `onTableCellKeyDown` | `function` | - | Callback for cell keydown events |
| `onTableCellBlur` | `function` | - | Callback for cell blur events |
| `onSort` | `function` | - | Callback when column is sorted |
| `onPageChange` | `function` | - | Callback when page changes |

## Event Handlers

### onCellClicked

Called when a cell is clicked.

```jsx
onCellClicked={(rowData, cell) => {
  console.log('Cell clicked:', rowData, cell);
}}
```

**Parameters:**
- `rowData` (Object): The complete row data object
- `cell` (Object): The cell configuration object

### onSort

Called when a column header is clicked for sorting.

```jsx
onSort={(sortData) => {
  console.log('Sort:', sortData);
}}
```

**Parameters:**
- `sortData` (Object): Contains `key` and `direction` properties
  - `key` (string): The column key being sorted
  - `direction` (string): Sort direction ('asc' or 'desc')

### onPageChange

Called when pagination page changes.

```jsx
onPageChange={(page) => {
  console.log('Page changed to:', page);
}}
```

**Parameters:**
- `page` (number): The new page number

### onScrolledToEndInTable

Called when user scrolls to the end of the table (for infinite scroll).

```jsx
onScrolledToEndInTable={() => {
  console.log('Scrolled to end');
}}
```

### onTableCellKeyDown

Called when a key is pressed on a table cell.

```jsx
onTableCellKeyDown={(event, rowData, cell) => {
  console.log('Key pressed:', event.key);
}}
```

**Parameters:**
- `event` (KeyboardEvent): The keyboard event
- `rowData` (Object): The row data
- `cell` (Object): The cell configuration

### onTableCellBlur

Called when a table cell loses focus.

```jsx
onTableCellBlur={(rowData, cell) => {
  console.log('Cell blurred');
}}
```

**Parameters:**
- `rowData` (Object): The row data
- `cell` (Object): The cell configuration

## Usage Examples

### Basic Table

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

### Sortable Table

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

### Paginated Table

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

### Table with Copy Functionality

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

### Custom Cell Rendering

```jsx
<BasicTable
  headers={[
    { text: 'Name', key: 'name' },
    { text: 'Status', key: 'status', domFunc: (value) => (
      <span className={`status ${value.toLowerCase()}`}>
        {value}
      </span>
    )}
  ]}
  tableData={data}
/>
```
