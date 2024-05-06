import * as React from 'react';
import * as PropTypes from 'prop-types';

import deleteIcon from '../../assets/img/icon_BO/trash-blue.png';
import { Button } from './Button';
import editIcon from '../../assets/img/icon_BO/edit.png';

export const ActionBtn = (props) => {
  const { handleCreateUpdate, original, handleDeleteConfirmation } = props;
  return (
    <>
      <span className="flex">
        <Button
          variant="icon"
          className="my-0  btn-action "
          onClick={handleCreateUpdate(original)}
          tooltip="Modifier"
        >
          <img src={editIcon} alt="Suppression" />
          {/* <EditIcon /> */}
        </Button>
      </span>
      <span className="flex ml-2">
        <Button
          variant="icon"
          className="my-0 btn-action delete"
          onClick={handleDeleteConfirmation(original)}
          tooltip="Supprimer"
        >
          <img src={deleteIcon} alt="Suppression" />
        </Button>
      </span>
    </>
  );
};

ActionBtn.propTypes = {
  original: PropTypes.shape({}),
  handleCreateUpdate: PropTypes.func,
  handleDeleteConfirmation: PropTypes.func,
};

ActionBtn.defaultProps = {
  original: {},
  handleCreateUpdate: () => null,
  handleDeleteConfirmation: () => null,
};
