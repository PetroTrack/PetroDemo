import { useMemo, useState } from "react";

import {
    AgGridReact,
} from "ag-grid-react";

import type {
    ColDef,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./grid.theme.css";

import GridToolbar from "./GridToolbar";

interface Props<T> {

    rows: T[];

    columns: ColDef<T>[];

    toolbar?: React.ReactNode;

}

export default function AppGrid<T>({
    rows,
    columns,
    toolbar,
}: Props<T>) {

    const [search, setSearch] = useState("");

    const defaultColDef = useMemo<ColDef>(() => ({

        sortable: true,

        filter: true,

        resizable: true,

        floatingFilter: false,

    }), []);

    return (

        <div>

            <GridToolbar

                value={search}

                onChange={setSearch}

            >

                {toolbar}

            </GridToolbar>

            <div
                className="ag-theme-quartz"
                style={{
                    height: 650,
                    width: "100%",
                }}
            >

                <AgGridReact

                    quickFilterText={search}

                    rowData={rows}

                    columnDefs={columns}

                    defaultColDef={defaultColDef}

                    pagination

                    paginationPageSize={15}

                    animateRows

                />

            </div>

        </div>

    );

}