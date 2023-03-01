import { Alert, AlertTitle } from "@mui/material";


function SuccessComponent({message}) {

    return (
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
           {message}
        </Alert>
    );
}

export default SuccessComponent