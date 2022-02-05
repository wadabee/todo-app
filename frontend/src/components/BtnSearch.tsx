import { Button } from '@mui/material';

type Props = {
  disabled?: boolean;
  onClick: Function;
};

const BtnSearch: React.FC<Props> = ({ disabled, onClick }) => {
  return (
    <Button disabled={disabled} variant="contained" color="success" onClick={() => onClick()}>
      検索
    </Button>
  );
};

export default BtnSearch;
