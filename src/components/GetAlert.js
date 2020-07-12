import React, {useState} from "react";
import Alert from "./Alert";

const GetAlert = () => {

    const [openAlert, setOpenAlert] = useState(false)
    function getAlert(){
        // alert("Got Alert")
        setOpenAlert(true);
    }
    return(
        <div>
            <button type="button" onClick={getAlert}>Get Alert</button>
            {openAlert ? 
            <Alert 
            open={openAlert}
            setOpen={setOpenAlert} 
            />
        : null}
        </div>
    )
}

export default GetAlert;
