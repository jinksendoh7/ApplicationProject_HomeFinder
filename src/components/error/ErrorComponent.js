import { Alert, AlertTitle } from "@mui/material";


function ErrorComponent({message}) {

    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
           {message}
        </Alert>
    );
}

export default ErrorComponent