import React, { Dispatch, useState } from "react";
import { Fieldset } from "../StyledComponents/FieldSet";
import { Input } from "../StyledComponents/Input";
import { Label } from "../StyledComponents/Label";
import { Button } from "../StyledComponents/Button";
import { Ellipse } from "../Math/Ellipse";
import { Switch, Thumb } from "../StyledComponents/Switch";

interface EllipseFormProps {
    expressionsSetter: Dispatch<React.SetStateAction<string>>
}
export function EllipseForm({expressionsSetter}: EllipseFormProps): JSX.Element {
    const [h, setH] = useState(1);
    const [k, setK] = useState(1);
    const [a, setA] = useState(2);
    const [b, setB] = useState(3);
    const [axisLine, setAxisLine] = useState(false);

    const [center, setCenter] = useState("");
    const [vertices, setVertices] = useState("");
    const [endpointsOfMinorAxis, setEndpointsOfMinorAxis] = useState("");
    const [principalAxis, setPrincipalAxis] = useState("");
    const [majorAxis, setMajorAxis] = useState("");
    const [minorAxis, setMinorAxis] = useState("");
    const [foci, setFoci] = useState("");
    const [eccentricity, setEccentricity] = useState("");
    const [directrices, setDirectrices] = useState("");


    const compute = () => {
        console.log(h,k,a,b, axisLine);
        let ellipse = new Ellipse(h,k,a,b);
        ellipse.isAxisVerticalLine = axisLine;

        let axis: string = axisLine ? "y = " : "x = ";

        setCenter(ellipse.Center().ToString());
        setVertices(`${ellipse.Vertices()[0].ToString()}, ${ellipse.Vertices()[1].ToString()}`);
        setEndpointsOfMinorAxis(`${ellipse.EndpointsOfMinorAxis()[0].ToString()}, ${ellipse.EndpointsOfMinorAxis()[1].ToString()}`);
        setPrincipalAxis(`${ellipse.PrincipalAxis()[1].Expr}`);
        setMajorAxis(`${ellipse.LengthOfMajorAxis()}`);
        setMinorAxis(`${ellipse.LengthOfMinorAxis()}`);
        setFoci(`${ellipse.Foci()[0].ToString()}, ${ellipse.Foci()[1].ToString()}`);
        setEccentricity(`${String(ellipse.Eccentricity())}`);
        setDirectrices(`${axis}${String(ellipse.EquationForDirectrices()[0])}, ${axis}${String(ellipse.EquationForDirectrices()[1])}`);
        expressionsSetter(ellipse.ToExpression().Expr);
        console.log("THis is a test")

    };

    return (
        <>
            <Fieldset>
                <Label>H</Label>
                <Input type="text" defaultValue='1' onChange={(e) => setH(Number(e.target.value))} />
            </Fieldset>
            <Fieldset>
                <Label>K</Label>
                <Input type="text" defaultValue='1' onChange={(e) => setK(Number(e.target.value))} />
            </Fieldset>
            <Fieldset>
                <Label>A</Label>
                <Input type="text" defaultValue='2' onChange={(e) => setA(Number(e.target.value))} />
            </Fieldset>
            <Fieldset>
                <Label>B</Label>
                <Input type="text" defaultValue='3' onChange={(e) => setB(Number(e.target.value))} />
            </Fieldset>
            <Fieldset>
                <Label>Is Axis a Vertical Line?</Label>
                <Switch onClick={(e) => setAxisLine(axisLine ? false : true)}>
                    <Thumb />
                </Switch>
            </Fieldset>
            <Button onClick={compute}>Compute</Button>

            <br />
            <br />
            <br />

            <Label css={{fontSize:20, fontWeight:"bold"}}>Center</Label>
            <Label css={{fontSize:20}}>{center}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Vertices</Label>
            <Label css={{fontSize:20}}>{vertices}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Endpoints of Minor Axis</Label>
            <Label css={{fontSize:20}}>{endpointsOfMinorAxis}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Principal Axis</Label>
            <Label css={{fontSize:20}}>{principalAxis}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Length of Major Axis</Label>
            <Label css={{fontSize:20}}>{majorAxis}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Length of Minor Axis</Label>
            <Label css={{fontSize:20}}>{minorAxis}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Foci</Label>
            <Label css={{fontSize:20}}>{foci}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Eccentricity</Label>
            <Label css={{fontSize:20}}>{eccentricity}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Equation for Directrices</Label>
            <Label css={{fontSize:20}}>{directrices}</Label>
            <br />
        </>
    );
}
