import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ListAltIcon from '@mui/icons-material/ListAlt';
import React, { useState } from 'react';

export type ViewMode = 'grid' | 'list';

type Props = {
  value: ViewMode;
  onChange?: (newVal: ViewMode) => void;
};

const ToggleBtnListView: React.FC<Props> = ({ value, onChange }) => {
  const handleChangeView = (e: React.MouseEvent<HTMLElement>, newVal: ViewMode | null) => {
    if (newVal !== null) {
      onChange ? onChange(newVal) : null;
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      color="primary"
      exclusive
      onChange={handleChangeView}
      aria-label="text alignment"
    >
      <ToggleButton value="grid" aria-label="left aligned">
        <GridViewIcon />
      </ToggleButton>
      <ToggleButton value="list" aria-label="centered">
        <ListAltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleBtnListView;
