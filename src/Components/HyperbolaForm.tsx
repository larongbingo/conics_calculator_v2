import React, { Dispatch, useState } from "react";
import { Button } from "../StyledComponents/Button";
import { Fieldset } from "../StyledComponents/FieldSet";
import { Input } from "../StyledComponents/Input";
import { Label } from "../StyledComponents/Label";
import { Switch, Thumb } from "../StyledComponents/Switch";
import { Hyperbola } from "../Math/Hyperbola";

interface HyperbolaFormProps {
    expressionsSetter: Dispatch<React.SetStateAction<string>>
}
export function HyperbolaForm({expressionsSetter}: HyperbolaFormProps) {
    const [h, setH] = useState(1);
    const [k, setK] = useState(1);
    const [a, setA] = useState(2);
    const [b, setB] = useState(3);
    const [axisLine, setAxisLine] = useState(false);

    const [center, setCenter] = useState("");
    const [vertices, setVertices] = useState("");
    const [foci, setFoci] = useState("");
    const [principalAxis, setPrincipalAxis] = useState("");
    const [endPointsConjugateAxis, setEndPointsConjugateAxis] = useState("");
    const [transverseAxis, setTransverseAxis] = useState("");
    const [conjugateAxis, setConjugateAxis] = useState("");
    const [eccentricity, setEccentricity] = useState("");
    const [directrices, setDirectrices] = useState("");

    const compute = () => {
        let hyperbola = new Hyperbola(h,k,a,b);
        hyperbola.isAxisVerticalLine = axisLine;

        let axis: string = axisLine ? "y = " : "x = ";

        setCenter(hyperbola.Center().ToString());
        setVertices(`${hyperbola.Vertices()[0].ToString()}, ${hyperbola.Vertices()[1].ToString()}`);
        setFoci(`${hyperbola.Foci()[0].ToString()}, ${hyperbola.Foci()[1].ToString()}, ${hyperbola.Foci()[2].ToString()}, ${hyperbola.Foci()[3].ToString()}`);
        setPrincipalAxis(`${hyperbola.PrincipalAxis()[1].Expr}`);
        setEndPointsConjugateAxis(`${hyperbola.EndpointsOfConjugateAxis()[0].ToString()}, ${hyperbola.EndpointsOfConjugateAxis()[0].ToString()}`);
        setTransverseAxis(String(hyperbola.LengthOfTransverseAxis()));
        setConjugateAxis(String(hyperbola.LengthOfConjugateAxis()));
        setEccentricity(`${String(hyperbola.Eccentricity())}`);
        setDirectrices(`${axis}${String(hyperbola.EquationForDirectrices()[0])}, ${axis}${String(hyperbola.EquationForDirectrices()[1])}`);
        expressionsSetter(hyperbola.ToExpression().Expr)
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
            <Label css={{fontSize:20, fontWeight:"bold"}}>Foci</Label>
            <Label css={{fontSize:20}}>{foci}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Principal Axis</Label>
            <Label css={{fontSize:20}}>{principalAxis}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Endpoints of Conjugate Axis</Label>
            <Label css={{fontSize:20}}>{endPointsConjugateAxis}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Length of Transverse Axis</Label>
            <Label css={{fontSize:20}}>{transverseAxis}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Length of Conjugate Axis</Label>
            <Label css={{fontSize:20}}>{conjugateAxis}</Label>
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
