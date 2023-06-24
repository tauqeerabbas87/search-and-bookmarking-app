import React, {FC} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import Table from "./table";
import {getLocalStorageData} from "../utils";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BookmarksModal:FC = () => {

    const [open, setOpen] = React.useState(false);
    const [tableData, setTableData] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
        let bookmarksList: [];
        bookmarksList = getLocalStorageData();
        setTableData(bookmarksList);
    };

    const handleClose = () => {
        setOpen(false);
        setTableData([]);
    };


    return (
        <div>
            <Button variant="contained"
                    aria-label="bookmark repository"
                    onClick={handleClickOpen}
                    startIcon={<BookmarkAddIcon />}>
                Bookmarked List
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>

                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Bookmarked Repositories List
                        </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    </Toolbar>
                </AppBar>
                <div style={{margin:'20px'}}>
                <Table
                    tableData={tableData}
                    loading={false}
                    bookmarksColumn={false}
                />
                </div>
            </Dialog>
        </div>
    );
}

export default BookmarksModal;