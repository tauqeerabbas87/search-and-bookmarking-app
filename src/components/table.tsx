import React from "react";
import {DataGrid} from '@mui/x-data-grid';
import {tableDataType} from "../types/appTypes";
import {generateColumns, setLocalStorageData} from "../utils";

type TableType = {
    tableData: tableDataType,
    loading:boolean,
    bookmarksColumn?:boolean
}

const Table = ({tableData, loading, bookmarksColumn=true}:TableType) => {

    const saveBookMarkRow = (record:any) => {
        setLocalStorageData(record);
    };



    const columns = generateColumns(saveBookMarkRow);

    return (
        <div>
            <DataGrid
                rows={tableData}
                columns={columns}
                loading={loading}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10, page: 0 },
                    },
                }}
                columnVisibilityModel={{id:false, bookmark:bookmarksColumn}}
            />
        </div>
    );
}

export default Table;
