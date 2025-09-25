import {
  BasicPaginationDemo,
  SizeVariantsDemo,
  LimitedVisibleDemo,
  ConfigurationDemo,
  DisabledStateDemo,
  RoundedButtonsDemo,
  ColorVariantsDemo,
  DataTableDemo
} from "@site/src/demoPages/PaginationDemo.jsx";

# Demo

This page demonstrates the Pagination component with various configurations and examples.

## Demo 1: Basic Pagination

### Code Example

```jsx
import BasicPagination from "@/src/components/sharedComponents/BasicPagination";

const BasicPaginationDemo = () => {
  const [basicPage, setBasicPage] = useState(7);

  return (
    <div className="demo-group">
      <BasicPagination
        currentPage={basicPage}
        totalPages={15}
        onPageChange={setBasicPage}
      />
    </div>
  );
};
```

### Interactive Demo

<BasicPaginationDemo />

## Demo 2: Size Variants

### Code Example

```jsx
import BasicPagination from "@/src/components/sharedComponents/BasicPagination";

const SizeVariantsDemo = () => {
  const [sizePage, setSizePage] = useState(3);

  return (
    <div className="demo-group">
      <h4>Small</h4>
      <BasicPagination
        currentPage={sizePage}
        totalPages={10}
        size="small"
        onPageChange={setSizePage}
      />
      
      <h4>Default</h4>
      <BasicPagination
        currentPage={sizePage}
        totalPages={10}
        onPageChange={setSizePage}
      />
      
      <h4>Large</h4>
      <BasicPagination
        currentPage={sizePage}
        totalPages={10}
        size="large"
        onPageChange={setSizePage}
      />
    </div>
  );
};
```

### Interactive Demo

<SizeVariantsDemo />

## Demo 3: Limited Visible Pages

### Code Example

```jsx
import BasicPagination from "@/src/components/sharedComponents/BasicPagination";

const LimitedVisibleDemo = () => {
  const [limitedPage, setLimitedPage] = useState(25);

  return (
    <div className="demo-group">
      <h4>5 Visible Pages (Total: 50)</h4>
      <BasicPagination
        currentPage={limitedPage}
        totalPages={50}
        totalVisible={5}
        onPageChange={setLimitedPage}
      />
    </div>
  );
};
```

### Interactive Demo

<LimitedVisibleDemo />

## Demo 4: Configuration Options

### Code Example

```jsx
import BasicPagination from "@/src/components/sharedComponents/BasicPagination";

const ConfigurationDemo = () => {
  const [configPage, setConfigPage] = useState(6);

  return (
    <div className="demo-group">
      <h4>No First/Last Buttons</h4>
      <BasicPagination
        currentPage={configPage}
        totalPages={12}
        showFirstLast={false}
        onPageChange={setConfigPage}
      />
      
      <h4>No Prev/Next Buttons</h4>
      <BasicPagination
        currentPage={configPage}
        totalPages={12}
        showPrevNext={false}
        onPageChange={setConfigPage}
      />
      
      <h4>Only Page Numbers</h4>
      <BasicPagination
        currentPage={configPage}
        totalPages={12}
        showFirstLast={false}
        showPrevNext={false}
        onPageChange={setConfigPage}
      />
    </div>
  );
};
```

### Interactive Demo

<ConfigurationDemo />

## Demo 5: Disabled State

### Code Example

```jsx
import BasicPagination from "@/src/components/sharedComponents/BasicPagination";

const DisabledStateDemo = () => {
  const [disabledPage, setDisabledPage] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="demo-group">
      <BasicPagination
        currentPage={disabledPage}
        totalPages={10}
        disabled={isDisabled}
        onPageChange={setDisabledPage}
      />
      
      <div className="demo-controls">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={isDisabled}
            onChange={(e) => setIsDisabled(e.target.checked)}
          />
          Disabled
        </label>
      </div>
    </div>
  );
};
```

### Interactive Demo

<DisabledStateDemo />

## Demo 6: Rounded Buttons

### Code Example

```jsx
import BasicPagination from "@/src/components/sharedComponents/BasicPagination";

const RoundedButtonsDemo = () => {
  const [roundedPage, setRoundedPage] = useState(5);

  return (
    <div className="demo-group">
      <BasicPagination
        currentPage={roundedPage}
        totalPages={15}
        rounded={true}
        onPageChange={setRoundedPage}
      />
    </div>
  );
};
```

### Interactive Demo

<RoundedButtonsDemo />

## Demo 7: Color Variants

### Code Example

```jsx
import BasicPagination from "@/src/components/sharedComponents/BasicPagination";

const ColorVariantsDemo = () => {
  const [primaryPage, setPrimaryPage] = useState(3);
  const [secondaryPage, setSecondaryPage] = useState(3);

  return (
    <div className="demo-group">
      <h4>Primary Color</h4>
      <BasicPagination
        currentPage={primaryPage}
        totalPages={10}
        color="primary"
        onPageChange={setPrimaryPage}
      />
      
      <h4>Secondary Color</h4>
      <BasicPagination
        currentPage={secondaryPage}
        totalPages={10}
        color="secondary"
        onPageChange={setSecondaryPage}
      />
    </div>
  );
};
```

### Interactive Demo

<ColorVariantsDemo />

## Demo 8: Data Table Example

### Code Example

```jsx
import BasicPagination from "@/src/components/sharedComponents/BasicPagination";

const DataTableDemo = () => {
  const [tablePage, setTablePage] = useState(1);
  const itemsPerPage = 5;
  const totalTablePages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="demo-group">
      <div className="table-container">
        <table className="demo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="table-pagination">
        <BasicPagination
          currentPage={tablePage}
          totalPages={totalTablePages}
          onPageChange={setTablePage}
        />
        <p className="table-info">
          Showing {startItem}-{endItem} of {totalItems} items
        </p>
      </div>
    </div>
  );
};
```

### Interactive Demo

<DataTableDemo />
