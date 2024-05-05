import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Button } from './Button';
import { Close } from './icons/Close';
import { mergeClassNames } from '../../common/utils/ClassNameMerge';

export const Modal = (props) => {
  const { children, title, onClose, actions, open, className, isContentText, style } = props;

  return open ? (
    <div
      className="w-screen h-screen bg-gray-50 absolute right-0 top-0 z-50 flex items-center justify-center transition duration-500 ease-out ease-in"
      style={{ backgroundColor: '#000000c9' }}
    >
      <div
        className={mergeClassNames('rounded-lg shadow-sm pk-modal ', className)}
        style={{ minWidth: '35%', maxWidth: '40%', ...style }}
      >
        {/* Header */}
        <div className="px-3 py-2 flex justify-center rounded-t-lg">
          <p className="text-left flex-1 modal-title">{title}</p>
          <Button variant="icon" onClick={onClose} className="mr-2">
            <Close className="w-4 text-white" />
          </Button>
        </div>

        {/* Séparator */}
        <div className="border-b separator  mr-2 ml-2" />

        <div className="modal-body">
          {/* Content */}
          <div
            className={`py-4 overflow-y-auto ${isContentText ? 'flex justify-center' : ''}`}
            style={{ maxHeight: '85vh' }}
          >
            {children}
          </div>



          {/* Action Button */}
          <div className='action-container'>{actions}</div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType, PropTypes.element])
    .isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  actions: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  className: PropTypes.string,
  isContentText: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

Modal.defaultProps = {
  open: false,
  actions: null,
  className: '',
  isContentText: false,
  style: {},
};
