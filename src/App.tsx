import React from 'react';
import { EllipseForm } from './Components/EllipseForm';
import { HyperbolaForm } from './Components/HyperbolaForm';
import { ParabolaForm } from './Components/ParabolaForm';
import { GeoGebra } from './Graphing/GeoGebra';
import { Box } from './StyledComponents/Box';
import * as Tabs from "./StyledComponents/Tabs";

function App() {
    return (
        <>
            <Box>
                <Tabs.Root defaultValue='parabola'>
                    <Tabs.List>
                        <Tabs.Trigger value='parabola'>Parabola</Tabs.Trigger>
                        <Tabs.Trigger value='ellipse'>Ellipse</Tabs.Trigger>
                        <Tabs.Trigger value='hyperbola'>Hyperbola</Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value='ellipse'>
                        <h2>Ellipse</h2>
                        <EllipseForm />
                    </Tabs.Content>
                    
                    <Tabs.Content value='parabola'>
                        <h2>Parabola</h2>
                        <ParabolaForm />
                    </Tabs.Content>
                    
                    <Tabs.Content value='hyperbola'>
                        <h2>Hyperbola</h2>
                        <HyperbolaForm />
                    </Tabs.Content>
                </Tabs.Root>
            </Box>
            <GeoGebra />
        </>
    );
}



// let testHyperbola = new Hyperbola(0,0,2,3);
// console.log(testHyperbola.Center());
// console.log(testHyperbola.Vertices());
// console.log(testHyperbola.Foci());
// console.log(testHyperbola.PrincipalAxis());
// console.log(testHyperbola.EndpointsOfConjugateAxis());
// console.log(testHyperbola.LengthOfTransverseAxis());
// console.log(testHyperbola.LengthOfConjugateAxis());
// console.log(testHyperbola.Eccentricity());
// console.log(testHyperbola.EquationForDirectrices());
// console.log(testHyperbola.ToExpression());
// console.log(testHyperbola);

// let testEllipse = new Ellipse(0,0,2,3);
// console.log(testEllipse.Center());
// console.log(testEllipse.Vertices());
// console.log(testEllipse.EndpointsOfMinorAxis());
// console.log(testEllipse.PrincipalAxis())
// console.log(testEllipse.LengthOfMajorAxis())
// console.log(testEllipse.LengthOfMinorAxis())
// console.log(testEllipse.Foci())
// console.log(testEllipse.Eccentricity())
// console.log(testEllipse.EquationForDirectrices())
// console.log(testEllipse.ToExpression());
// console.log(testEllipse);

// console.log(new Parabola(1,1,1).Vertex());
// console.log(new Parabola(1,1,1).Focus());
// console.log(new Parabola(1,1,1).Directrix());
// console.log(new Parabola(1,1,1).PrincipalAxis());
// console.log(new Parabola(1,1,1).EndpointsOfLatusRecta());
// console.log(new Parabola(1,1,1).ToExpression());

export default App;
