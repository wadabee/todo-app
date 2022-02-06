import { User } from '@backend/types/User';
import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Box } from '@mui/material';
import { ICellRendererParams } from 'ag-grid-community';
import { formatDatetime } from 'src/utils/dateUtils';

type Props = {
  users: User[];
};

const CreatedAt: React.FC<ICellRendererParams> = (props) => {
  return <div>{formatDatetime(props.value)}</div>;
};

const TableUserList: React.FC<Props> = ({ users }) => {
  return (
    <Box className="ag-theme-alpine" sx={{ height: 400 }}>
      <AgGridReact rowData={users}>
        <AgGridColumn headerName="ユーザID" field="id" sortable={true} />
        <AgGridColumn
          headerName="名前"
          field="name"
          sortable={true}
          filter={true}
          resizable={true}
        />
        <AgGridColumn
          headerName="登録日時"
          field="createdAt"
          sortable={true}
          filter={true}
          resizable={true}
          cellRendererFramework={CreatedAt}
        />
      </AgGridReact>
    </Box>
  );
};

export default TableUserList;
