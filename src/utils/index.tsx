import React from "react";
import IconButton from "@mui/material/IconButton";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import {tableDataType} from "../types/appTypes";

interface Item {
    id: number;
    name: string;
    owner: string;
    description: string;
    stargazers_count: number;
    bookmark: boolean;
}

// Generate columns for table
export const generateColumns = (saveBookMarkRow:any) => {

    return [
        { field: 'id', headerName: 'id', width: 200 },
        { field: 'name', headerName: 'Repository Name', width: 200 },
        { field: 'owner', headerName: 'Owner', width: 300 },
        { field: 'description', headerName: 'Description', flex:1 },
        { field: 'stargazers_count', headerName: 'No. of Stars', width: 150 },
        {
            field: 'bookmark',
            headerName: 'Bookmark',
            width: 150,
            sortable: false,
            renderCell: (record: any) => {
                const localBookmarks = getLocalStorageData();
                if(localBookmarks.length){
                    const result = searchById(localBookmarks, record.id);
                    if(result){
                        return null;
                    }
                }

                return(
                    <IconButton
                        aria-label="bookmark repository"
                        onClick={() => saveBookMarkRow(record.row)}>
                        <BookmarkAddIcon/>
                    </IconButton>
                );

            }
        }
    ]
}

// Prepare tabledata for storing and displaying in table
export const prepareTableData = (data:any):tableDataType => {
    const {items} = data;
    let records = [];
    if(items.length){
        for(let i=0; i<items.length; i++){
            records.push({
                id: items[i].id,
                name: items[i].name,
                owner: items[i].owner.login,
                description: items[i].description,
                stargazers_count: items[i].stargazers_count,
                bookmark: false
            })
        }
    }
    return records;
}


// Get data from LocalStorage
export const getLocalStorageData = (): [] => {
    try {
        const serializedData = localStorage.getItem('bookmarks');
        if (serializedData === null) {
            return [];
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.error('Error retrieving data from LocalStorage:', error);
        return [];
    }
};

// Set data in LocalStorage
export const setLocalStorageData = (data: Item): void => {
    try {
        const getSerializedData = localStorage.getItem('bookmarks');
        if (getSerializedData === null) {
            const serializedData = JSON.stringify([data]);
            localStorage.setItem('bookmarks', serializedData);
        } else {
            const storedBookmarks = JSON.parse(getSerializedData);
            const result = searchById(storedBookmarks, data.id);
            if(!result){
                storedBookmarks.push(data);
                const serializedData = JSON.stringify(storedBookmarks);
                localStorage.setItem('bookmarks', serializedData);
            }
        }
    } catch (error) {
        console.error('Error setting data in LocalStorage:', error);
    }
};

// Search by Id in an object
export const searchById = (items: Item[], id: number): boolean => {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return true; // Found the record with the specified id
        }
    }
    return false; // No record found with the specified id
}
