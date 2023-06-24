import {styled} from "@mui/material/styles";
import Paper, {PaperProps} from "@mui/material/Paper";
import * as React from "react";

const PaperStyled = styled(Paper)(() => ({
    margin:'10px auto',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
}));

const PaperCustom = React.forwardRef<PaperProps, any>((props, ref) => {

    return(
        <PaperStyled component="form"  {...props} ref={ref} />
    )
});

export default PaperCustom;