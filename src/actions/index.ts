import {SET_LOADING, SET_SEARCH_TEXT, SET_TABLE_DATA, tableDataType} from "../types/appTypes";

export const setSearchText = (payload:string) => ({
    type:SET_SEARCH_TEXT,
    payload
});

export const setTableData = (payload:tableDataType) => ({
    type:SET_TABLE_DATA,
    payload
});

export const setLoading = (payload:boolean) => ({
    type:SET_LOADING,
    payload
})