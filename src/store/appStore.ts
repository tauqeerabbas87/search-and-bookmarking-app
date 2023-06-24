import {SET_LOADING, SET_SEARCH_TEXT, SET_TABLE_DATA, StateType} from "../types/appTypes";

export const initialState:StateType = {
    loading:false,
    searchText:'',
    tableData:[]
}

export function appReducer(state:StateType, action:any) {
    if (action.type === SET_SEARCH_TEXT) {
        return {
            ...state,
            searchText: action.payload
        };
    } else if(action.type === SET_TABLE_DATA) {
        return {
            ...state,
            tableData: action.payload
        };
    } else if(action.type === SET_LOADING) {
        return {
            ...state,
            loading: action.payload
        };
    }
}
