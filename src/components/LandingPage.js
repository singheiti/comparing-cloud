import React from 'react';
import {Button} from '@material-ui/core';

const LandingPage = (props) => {
    function publicData() {
        window.location = "http://comparecloud.in/";
    }

    function privateData() {
        // return <PrivateCloud />
        // window.location = "/private-cloud";
        props.history.push("/privatecloud");
    }
    return(
        <div>
            <div className="main-heading">
                Cloud Comparer
            </div>
            <div className="outer-div">
            <div className="public-cloud-div">
                <Button onClick={publicData}>Public Cloud</Button>
            </div>
            <div className="private-cloud-div">
                <Button onClick={privateData}>Private Cloud</Button>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;