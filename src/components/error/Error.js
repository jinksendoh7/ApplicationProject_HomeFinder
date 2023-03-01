import { Alert, AlertTitle } from "@mui/material"

export default function Error(err) {

    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {err}
    </Alert>

}