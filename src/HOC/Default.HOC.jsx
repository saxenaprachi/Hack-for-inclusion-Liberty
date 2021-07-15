import React from "react";
import DefaultLayout from "../layouts/Default.layout";
import {Route} from "react-router-dom";
    const DefaultHOC =({component, ...props})=>{
        const Component = component;
    return (
    <>
    <Route {...props} 
    component={(prop)=>(

        <DefaultLayout>
            <Component {...prop}/>
        </DefaultLayout>
    )} />
    </>
    );
}

export default DefaultHOC;