import React from "react";
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from "@material-ui/core";
// import * as path from "../CloudComparer-master/index.html"
const Alert = (props) => {
    const closePopup = () => {
        props.setOpen(false)
    }

    const getData = () => {
        // window.location.href(path)
    }
    return(
        <div>
            <Dialog open={props.open} onClose={closePopup}>
                <DialogTitle>Cloud Comparer</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Choose the Cloud you wish to see the data for.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={getData}>Private Cloud</Button>
                    <Button color="primary">Public Cloud</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Alert