
export type tableDataType = {
    id?: number,
    name?: string,
    owner?: string,
    description?: string,
    stargazers_count?: string
}[];

export type StateType = {
    searchText:string
    tableData:tableDataType,
    loading: boolean
}

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SET_TABLE_DATA = 'SET_TABLE_DATA'
export const SET_LOADING = 'SET_LOADING'