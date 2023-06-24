import React, {useReducer} from 'react';
import SearchField from "./components/search";
import Table from "./components/table";
import BookmarksModal from "./components/bookmarksModal";
import {CssBaseline} from "@mui/material";
import {styled} from "@mui/material/styles";
import {appReducer, initialState} from "./store/appStore";

const AppContainer = styled('div')(() => ({
    width:'90%',
    fontSize: 14,
    margin:'0 auto'
}));

const BookmarksContainer = styled('div')(() => ({
    textAlign:'right',
    marginBottom:'10px'
}));

function App() {
    // @ts-ignore
    const[state, dispatch] = useReducer(appReducer, initialState);

  return (
      <>
        <CssBaseline/>
        <AppContainer>
            <SearchField
                searchText={state.searchText}
                dispatch={dispatch}
            />

            <BookmarksContainer>
                <BookmarksModal/>
            </BookmarksContainer>

            <Table
                tableData={state.tableData}
                loading={state.loading}
            />
        </AppContainer>
    </>
  );
}

export default App;
