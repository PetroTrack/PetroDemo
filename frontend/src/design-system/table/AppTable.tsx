import {
  AgGridReact,
} from "ag-grid-react";

import type {
  ColDef,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface AppTableProps<T> {
  rowData: T[];
  columnDefs: ColDef<T>[];
  loading?: boolean;
}

export default function AppTable<T>({
  rowData,
  columnDefs,
  loading = false,
}: AppTableProps<T>) {
  return (
    <div
      className="ag-theme-alpine h-[650px] w-full overflow-hidden rounded-xl border border-slate-200 bg-white"
    >
      <AgGridReact<T>
        rowData={rowData}
        columnDefs={columnDefs}
        loading={loading}
        pagination
        paginationPageSize={20}
        animateRows
        rowSelection="multiple"
        suppressRowClickSelection
        defaultColDef={{
          sortable: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
          flex: 1,
          minWidth: 140,
        }}
      />
    </div>
  );
}