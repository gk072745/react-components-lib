# Code

## Dependencies

This component requires:

- React 18+
- SCSS for styling
- PropTypes for prop validation

## Component Files

### React Component

**File:** `src/components/sharedComponents/BasicTable.jsx`

```jsx
import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

const BasicTable = ({
  headers = [],
  tableData = [],
  enableHover = true,
  enableInfiniteScroll = true,
  enablePagination = false,
  itemsPerPage = 10,
  currentPage = 1,
  totalItems = 0,
  async = false,
  isAlternateRowColored = false,
  defaultCellWidth = '1fr',
  isAlternateColumnColored = false,
  onCellClicked,
  onScrolledToEndInTable,
  onTableCellKeyDown,
  onTableCellBlur,
  onSort,
  onPageChange,
  className = '',
  ...props
}) => {
  // Internal state for sorting
  const [sortState, setSortState] = useState({
    key: null,
    direction: 'asc',
  });

  // Computed properties for sorting and pagination
  const sortedData = useMemo(() => {
    if (!sortState.key || async) {
      return tableData;
    }

    return [...tableData].sort((a, b) => {
      let aValue = a[sortState.key];
      let bValue = b[sortState.key];

      // Handle null/undefined values
      if (aValue === null || aValue === undefined) aValue = '';
      if (bValue === null || bValue === undefined) bValue = '';

      // Check if both values are numbers (including string numbers)
      const aIsNumber = !isNaN(aValue) && aValue !== '';
      const bIsNumber = !isNaN(bValue) && bValue !== '';

      if (aIsNumber && bIsNumber) {
        // Numerical comparison
        return sortState.direction === 'asc' ? Number(aValue) - Number(bValue) : Number(bValue) - Number(aValue);
      } else {
        // String comparison (case-insensitive)
        const comparison = String(aValue).toLowerCase().localeCompare(String(bValue).toLowerCase());
        return sortState.direction === 'asc' ? comparison : -comparison;
      }
    });
  }, [tableData, sortState, async]);

  const paginatedData = useMemo(() => {
    if (!enablePagination || async) {
      return sortedData;
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, enablePagination, async, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => {
    if (!enablePagination) return 1;
    return Math.ceil(totalItems / itemsPerPage);
  }, [enablePagination, totalItems, itemsPerPage]);

  const gridTemplate = useMemo(
    () => headers.map((h) => h.width || defaultCellWidth).join(' '),
    [headers, defaultCellWidth]
  );

  // Methods for handling sorting and pagination
  const handleSort = useCallback(
    (header) => {
      if (!header.sortable) return;

      if (async) {
        let direction = sortState.key === header.key && sortState.direction === 'asc' ? 'desc' : 'asc';
        onSort?.({
          key: header.key,
          direction,
        });
        setSortState({ key: header.key, direction });
        return;
      }

      if (sortState.key === header.key) {
        setSortState((prev) => ({
          ...prev,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        }));
      } else {
        setSortState({
          key: header.key,
          direction: 'asc',
        });
      }
    },
    [sortState, async, onSort]
  );

  const handlePageChange = useCallback(
    (page) => {
      onPageChange?.(page);
    },
    [onPageChange]
  );

  /**
   * Handles cell click events and emits data
   */
  const tableCellClicked = useCallback(
    (data, cell) => {
      onCellClicked?.(data, cell);
    },
    [onCellClicked]
  );

  /**
   * Handles reaching the end of the table for infinite scroll
   */
  const handleLoadMoreData = useCallback(() => {
    onScrolledToEndInTable?.();
  }, [onScrolledToEndInTable]);

  /**
   * Handles keydown events on table cells
   */
  const handleTableCellKeyDown = useCallback(
    (event, rowData, cell) => {
      onTableCellKeyDown?.(event, rowData, cell);
    },
    [onTableCellKeyDown]
  );

  /**
   * Handles blur events on table cells
   */
  const handleTableCellBlur = useCallback(
    (event, rowData, cell) => {
      onTableCellBlur?.(rowData, cell);
    },
    [onTableCellBlur]
  );

  const copyValue = useCallback((rowData, cell) => {
    navigator.clipboard.writeText(rowData[cell.key]);
  }, []);

  // Sort icon component
  const SortIcon = ({ header }) => {
    if (!header.sortable) return null;

    if (sortState.key !== header.key) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 15l5 5 5-5M7 9l5-5 5 5" />
        </svg>
      );
    }

    if (sortState.direction === 'asc') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 15l5 5 5-5" />
        </svg>
      );
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 9l5-5 5 5" />
      </svg>
    );
  };

  return (
    <div className={`table-wrapper ${className}`} {...props}>
      <div className="table-container">
        <div className="table-body">
          {/* Header Row */}
          <div className="table-body-row table-header" style={{ gridTemplateColumns: gridTemplate }}>
            {headers.map((header, index) => (
              <div
                key={index}
                className={`table-header-cell ${header.headerClasses || ''} ${header.sortable ? 'sortable' : ''} ${
                  sortState.key === header.key && sortState.direction === 'asc' ? 'sorted-asc' : ''
                } ${sortState.key === header.key && sortState.direction === 'desc' ? 'sorted-desc' : ''}`}
                onClick={() => header.sortable && handleSort(header)}
              >
                <div className="header-content">
                  {header.text}
                  <span className="sort-icon">
                    <SortIcon header={header} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {paginatedData.map((rowData, rowIndex) => (
            <div
              key={rowIndex}
              className={`table-body-row ${enableHover ? 'hover-enabled' : ''} ${
                isAlternateRowColored ? 'alternate-row-colored' : ''
              } ${isAlternateColumnColored ? 'alternate-column-colored' : ''}`}
              style={{ gridTemplateColumns: gridTemplate }}
            >
              {headers.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`table-body-cell ${cell.classes || ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    tableCellClicked(rowData, cell);
                  }}
                  tabIndex={0}
                  onKeyDown={(e) => handleTableCellKeyDown(e, rowData, cell)}
                  onBlur={(e) => handleTableCellBlur(e, rowData, cell)}
                >
                  <div className={`cell-content ${cell.enableCopy ? 'copy-enabled' : ''}`}>
                    <div className="cell-content-text">
                      {cell.domFunc
                        ? cell.domFunc(rowData[cell.key] !== undefined ? rowData[cell.key] : '-')
                        : rowData[cell.key]}
                    </div>
                    {cell.enableCopy && (
                      <svg
                        onClick={(e) => {
                          e.stopPropagation();
                          copyValue(rowData, cell);
                        }}
                        className="copy-icon"
                        fill="#555"
                        viewBox="0 0 36 36"
                        version="1.1"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M27,3.56A1.56,1.56,0,0,0,25.43,2H5.57A1.56,1.56,0,0,0,4,3.56V28.44A1.56,1.56,0,0,0,5.57,30h.52V4.07H27Z"
                            className="clr-i-solid clr-i-solid-path-1"
                          ></path>
                          <rect
                            x="8"
                            y="6"
                            width="23"
                            height="28"
                            rx="1.5"
                            ry="1.5"
                            className="clr-i-solid clr-i-solid-path-2"
                          ></rect>
                          <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>
                        </g>
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {enablePagination && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="pagination-button"
          >
            Previous
          </button>
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

BasicTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      classes: PropTypes.string,
      headerClasses: PropTypes.string,
      sortable: PropTypes.bool,
      width: PropTypes.string,
      enableCopy: PropTypes.bool,
      domFunc: PropTypes.func,
    })
  ).isRequired,
  tableData: PropTypes.array.isRequired,
  enableHover: PropTypes.bool,
  enableInfiniteScroll: PropTypes.bool,
  enablePagination: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  async: PropTypes.bool,
  isAlternateRowColored: PropTypes.bool,
  defaultCellWidth: PropTypes.string,
  isAlternateColumnColored: PropTypes.bool,
  onCellClicked: PropTypes.func,
  onScrolledToEndInTable: PropTypes.func,
  onTableCellKeyDown: PropTypes.func,
  onTableCellBlur: PropTypes.func,
  onSort: PropTypes.func,
  onPageChange: PropTypes.func,
  className: PropTypes.string,
};

export default BasicTable;
```

### SCSS Component

**File:** `src/assets/scss/components/_basic-table.scss`

```scss
// =============================================================================
// BASIC TABLE COMPONENT STYLES
// =============================================================================

.table-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  background: white;
  overflow-x: auto;
  overflow-y: hidden;

  .table-container {
    height: 100%;
    overflow: none;
    border-radius: 0.25rem;
    background: white;
    
    .table-body {
      display: grid;
      grid-template-rows: max-content 1fr;
      overflow-y: auto;
      overflow-x: none;
      width: 100%;
      height: 100%;
      position: relative;
      
      .table-body-row {
        display: grid;
        align-items: center;
        width: 100%;

        .table-body-cell {
          border: 0.0625rem solid #e5e7eb;
          padding: 0.5rem;
          align-self: stretch;
          place-content: center;

          .cell-content {
            padding: 0;
            margin: 0;
            overflow: hidden;

            .cell-content-text {
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            &.copy-enabled {
              cursor: pointer;
              display: grid;
              width: 100%;
              grid-template-columns: minmax(0, 1fr) max-content;
              align-items: center;
              gap: 0.25rem;

              .cell-content-text {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              svg {
                display: none;
                width: 1rem;
                height: 1rem;
              }

              &:hover {
                svg {
                  display: inline-flex;
                }
              }
            }
          }

          &.left-align {
            .cell-content-text {
              text-align: left;
            }
          }

          &.right-align {
            .cell-content-text {
              text-align: right;
            }
          }

          &.center-align {
            .cell-content-text {
              text-align: center;
            }
          }
        }

        &.table-header {
          position: sticky;
          top: 0;
          left: 0;
          z-index: 1;

          .table-header-cell {
            background: #f8fafc;
            border: 0.0625rem solid #e5e7eb;
            padding: 0.5rem;
            align-self: stretch;
            place-content: center;

            &:first-child {
              border-top-left-radius: 0.5rem;
            }

            &:last-child {
              border-top-right-radius: 0.5rem;
            }

            &.sortable {
              cursor: pointer;
              transition: background-color 0.2s ease;

              &:hover {
                background: #f1f5f9;
              }
            }

            &.sorted-asc,
            &.sorted-desc {
              background: #e0f2fe;
              color: #0369a1;
            }

            &.left-align {
              .header-content {
                text-align: left;
              }
            }

            &.right-align {
              .header-content {
                text-align: right;
              }
            }

            &.center-align {
              .header-content {
                text-align: center;
              }
            }

            .header-content {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-weight: 600;
              color: #374151;

              .sort-icon {
                display: flex;
                align-items: center;
                color: #6b7280;
                transition: color 0.2s ease;
              }
            }
          }
        }

        &.hover-enabled {
          &:hover {
            .table-body-cell {
              background: #f8fafc;
            }
          }
        }

        &.alternate-row-colored {
          &:nth-child(odd) {
            .table-body-cell {
              background: #f0fdf4;
            }
          }
        }

        &.alternate-column-colored {
          .table-body-cell {
            &:nth-child(even) {
              background: #f0fdf4;
            }
          }
        }

        &:last-child {
          .table-body-cell {
            &:first-child {
              border-bottom-left-radius: 0.5rem;
            }

            &:last-child {
              border-bottom-right-radius: 0.5rem;
            }
          }
        }
      }
    }
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 0.25rem;

    &:hover {
      background-color: #94a3b8;
    }
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-top: 0.0625rem solid #e5e7eb;

  .pagination-button {
    border: 0.0625rem solid #3b82f6;
    border-radius: 0.25rem;
    background: white;
    color: #3b82f6;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background: #3b82f6;
      color: white;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      border-color: #d1d5db;
      color: #9ca3af;
    }
  }

  .page-info {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
  }
}
```

Note: This component uses SCSS variables, functions, mixins, and breakpoints from the abstracts directory. Refer to the abstracts for shared styling utilities.
