import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

interface GeoGebraProps {

}

export function GeoGebra(props: GeoGebraProps) {
                                                                                                                                
    return (
        <>
            <div id="grapher"></div>
            <Helmet>
            <script src="https://www.geogebra.org/apps/deployggb.js"></script>
            
            </Helmet>
                
            
        </>
    );
}
