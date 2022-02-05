import { Button } from '@mui/material';

type Props = {
  disabled?: boolean;
  onClick: Function;
};

const BtnRegister: React.FC<Props> = ({ disabled, onClick }) => {
  return (
    <Button disabled={disabled} variant="contained" onClick={() => onClick()}>
      登録
    </Button>
  );
};

export default BtnRegister;
