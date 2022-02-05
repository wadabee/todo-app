import { Button } from '@mui/material';

type Props = {
  onClick: Function;
};

const BtnRegister: React.FC<Props> = ({ onClick }) => {
  return (
    <Button variant="contained" onClick={() => onClick()}>
      登録
    </Button>
  );
};

export default BtnRegister;
