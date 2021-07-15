
import React from "react";
import ApplicantStats from "./ApplicantStatscomponent";
import GrievancesStats from "./grievancestat.component";


const home =()=>{
    return(
        <React.StrictMode>
        <ApplicantStats/>
        <GrievancesStats/>
        </React.StrictMode>

    );
}

export default home;