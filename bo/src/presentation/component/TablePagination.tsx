import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Button } from './Button';
import { ChevronLeft } from './icons/ChevronLeft';
import { ChevronRight } from './icons/ChevronRight';

export const TablePagination = (props) => {
  const {
    pageSize,
    setPageSize,
    previousPage,
    nextPage,
    pageCount,
    pageIndex,
    // gotoPage,
    canNextPage,
    canPreviousPage,
    className,
  } = props;

  const nb = Math.ceil(pageCount / pageSize);

  return (
    <div className={`flex items-center text-xs my-4 ${className}`}>
      <div className="flex items-center w-auto">
        <select
          className="rounded-input custom-input text-[] focus:ring-2 focus:border-transparent p-1 px-2"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <p className="ml-3 mr-8 text-white">éléments par page</p>
      </div>

      <div className="flex items-center">
        <Button variant="icon" onClick={previousPage} disabled={pageIndex === 0}>
          <ChevronLeft
            className={`w-6 ${pageIndex === 0 ? 'text-white cursor-not-allowed' : 'text-white'}`}
          />
        </Button>
        <p className="text-white">
          {`${pageIndex + 1} `}
          sur
          {` ${nb || 1}`}
        </p>
        <Button variant="icon" onClick={nextPage} disabled={nb === pageIndex + 1}>
          <ChevronRight
            className={`w-6 ${nb === pageIndex + 1 ? 'text-white cursor-not-allowed' : 'text-white'}`}
          />
        </Button>
      </div>
    </div>
  );
};

TablePagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  className: PropTypes.string,
  // gotoPage: PropTypes.func.isRequired,
};

TablePagination.defaultProps = {
  className: '',
};
