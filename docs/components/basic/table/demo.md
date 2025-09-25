import {
  BasicTableDemo,
  AlternateRowTableDemo,
  CustomCellsTableDemo,
  SortableTableDemo,
  PaginatedTableDemo,
  CustomPageSizeTableDemo,
  SortablePaginatedTableDemo
} from "@site/src/demoPages/TableDemo.jsx";

# Demo

Interactive demonstrations of the BasicTable component with various configurations and features.

## Basic Table

A simple table with basic functionality and hover effects.

**Code Example:**
```jsx
<BasicTable
  headers={basicHeaders}
  tableData={basicData}
  enableHover={true}
  enableInfiniteScroll={false}
  isAlternateColumnColored={true}
  defaultCellWidth="10rem"
  onCellClicked={handleCellClick}
/>
```

**Interactive Demo:**
<BasicTableDemo />

## Basic Table with Alternate Row Colored

Table with alternating row colors for better readability.

**Code Example:**
```jsx
<BasicTable
  headers={basicHeaders}
  tableData={basicData}
  enableHover={true}
  enableInfiniteScroll={false}
  isAlternateRowColored={true}
  defaultCellWidth="10rem"
  onCellClicked={handleCellClick}
/>
```

**Interactive Demo:**
<AlternateRowTableDemo />

## Table with Custom Cells

Table with custom cell rendering and status indicators.

**Code Example:**
```jsx
<BasicTable
  headers={customHeaders}
  tableData={userData}
  enableHover={true}
  onCellClicked={handleCellClick}
/>
```

**Interactive Demo:**
<CustomCellsTableDemo />

## Sortable Table

Table with sortable columns - click headers to sort data.

**Code Example:**
```jsx
<BasicTable
  headers={sortableHeaders}
  tableData={sortableData}
  onSort={handleSort}
  onCellClicked={handleCellClick}
/>
```

**Interactive Demo:**
<SortableTableDemo />

## Paginated Table - Basic

Table with external pagination controls.

**Code Example:**
```jsx
<BasicTable
  headers={paginatedHeaders}
  tableData={currentPageData}
  enableHover={true}
  onCellClicked={handleCellClick}
/>

<BasicPagination
  currentPage={currentPage}
  totalPages={totalPages}
  showFirstLast={true}
  showPrevNext={true}
  onPageChange={handlePageChange}
  onFirst={handleFirst}
  onPrev={handlePrev}
  onNext={handleNext}
  onLast={handleLast}
/>
```

**Interactive Demo:**
<PaginatedTableDemo />

## Paginated Table - Custom Page Size

Table with customizable page size and pagination controls.

**Code Example:**
```jsx
<div className="page-size-controls">
  <label>Items per page:</label>
  <select value={itemsPerPage2} onChange={handlePageSizeChange}>
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={15}>15</option>
    <option value={20}>20</option>
  </select>
</div>

<BasicTable
  headers={paginatedHeaders2}
  tableData={currentPageData2}
  enableHover={true}
  onCellClicked={handleCellClick}
/>

<BasicPagination
  currentPage={currentPage2}
  totalPages={totalPages2}
  totalVisible={5}
  onPageChange={handlePageChange2}
/>
```

**Interactive Demo:**
<CustomPageSizeTableDemo />

## Sortable & Paginated Table

Table combining both sorting and pagination functionality.

**Code Example:**
```jsx
<BasicTable
  headers={sortablePaginatedHeaders}
  tableData={currentSortedPageData}
  enableHover={true}
  onSort={handleSortPaginated}
  onCellClicked={handleCellClick}
/>

<BasicPagination
  currentPage={currentPage3}
  totalPages={totalPages3}
  size="large"
  onPageChange={handlePageChange3}
/>
```

**Interactive Demo:**
<SortablePaginatedTableDemo />

## Table Features

The BasicTable component includes:

- ✅ **Sorting**: Click column headers to sort data
- ✅ **Pagination**: Built-in and external pagination controls
- ✅ **Hover Effects**: Row hover highlighting
- ✅ **Alternate Colors**: Row and column color variations
- ✅ **Copy Functionality**: Copy cell values to clipboard
- ✅ **Custom Rendering**: Custom cell content with domFunc
- ✅ **Responsive**: Adapts to different screen sizes
- ✅ **Accessibility**: Keyboard navigation and ARIA support
- ✅ **Event Handling**: Cell clicks, sorting, pagination events
- ✅ **Flexible Layout**: Customizable column widths
