import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ToggleButton } from '@mui/lab';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <OpenInNewIcon/>
    </ToggleButton>
  );
}