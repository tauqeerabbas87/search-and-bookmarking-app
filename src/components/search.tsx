import React, {ChangeEvent, useEffect, useState} from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PaperCustom from "./paperCustom";
import {setLoading, setSearchText, setTableData} from "../actions";
import useApi from "../hooks/useApi";
import githubApi from "../services/services";
import {prepareTableData} from "../utils";

type SearchFieldType = {
    searchText:string,
    dispatch:(searchText: { payload: any; type: string })=>void
}

const SearchField = ({
    searchText,
    dispatch
}:SearchFieldType) => {
    const [submitForm, setSubmitForm] = useState<boolean>(false);
    const getRepoByNameApi = useApi(githubApi.getRepoByNameService);

    const onSearchFieldChange = (e: ChangeEvent<HTMLInputElement>):any => {
        const target = e.target as HTMLInputElement;
        const value:string = target.value.trim();
        dispatch(setSearchText(value));
    }

    const onSearchSubmit = async (e:any) => {
        e.preventDefault();
        if(searchText)
            setSubmitForm(true);
    }

    useEffect(()=>{
        if(submitForm){
            const encodedValue = encodeURIComponent(`${searchText}  in:name`);
            dispatch(setLoading(true));
            getRepoByNameApi.request(encodedValue);
            setSubmitForm(false);
        }
    },[getRepoByNameApi, searchText, submitForm]);

    useEffect(()=>{
        if(getRepoByNameApi.data){
            const records = prepareTableData(getRepoByNameApi.data);
            dispatch(setTableData(records));
            dispatch(setLoading(false));
        }

    },[getRepoByNameApi.data, dispatch]);


    return (
        <PaperCustom
            variant="outlined"
            onSubmit={onSearchSubmit}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Github Repository"
                inputProps={{ 'aria-label': 'search github repository' }}
                onChange={onSearchFieldChange}
                value={searchText}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </PaperCustom>
    );
}

export default SearchField;