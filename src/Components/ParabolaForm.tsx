import React, { Dispatch, useState } from "react";
import { Parabola } from "../Math/Parabola";
import { Button } from "../StyledComponents/Button";
import { Fieldset } from "../StyledComponents/FieldSet";
import { Input } from "../StyledComponents/Input";
import { Label } from "../StyledComponents/Label";
import { Switch, Thumb } from "../StyledComponents/Switch";

interface ParabolaFormProps {
    expressionsSetter: Dispatch<React.SetStateAction<string>>
}
export function ParabolaForm({expressionsSetter}: ParabolaFormProps) {
    const [h, setH] = useState(1);
    const [k, setK] = useState(1);
    const [p, setP] = useState(1);
    const [leftOrRight, setLeftOrRight] = useState(false);

    const [vertex, setVertex] = useState("");
    const [focus, setFocus] = useState("");
    const [directrix, setDirectrix] = useState("");
    const [principalAxis, setPrincipalAxis] = useState("");
    const [latusRecta, setLatusRecta] = useState("");


    const compute = () => {
        let parabola = new Parabola(h,k,p);
        parabola.isLeftOrRight = leftOrRight;
        let axis = leftOrRight ? "y = " : "x = ";
        setVertex(parabola.Vertex().ToString());
        setFocus(parabola.Focus().ToString());
        setDirectrix(parabola.Directrix()[1].Expr);
        setPrincipalAxis(parabola.PrincipalAxis().Expr);
        setLatusRecta(`${parabola.EndpointsOfLatusRecta()[0].ToString()}, ${parabola.EndpointsOfLatusRecta()[1].ToString()}`);
        expressionsSetter(parabola.ToExpression().Expr)
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
                <Label>P</Label>
                <Input type="text" defaultValue='1' onChange={(e) => setP(Number(e.target.value))} />
            </Fieldset>
            <Fieldset>
                <Label>Is Axis a Vertical Line?</Label>
                <Switch onClick={(e) => setLeftOrRight(leftOrRight ? false : true)}>
                    <Thumb />
                </Switch>
            </Fieldset>
            <Button onClick={compute}>Compute</Button>

            <br />
            <br />
            <br />

            <Label css={{fontSize:20, fontWeight:"bold"}}>Vertex</Label>
            <Label css={{fontSize:20}}>{vertex}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Focus</Label>
            <Label css={{fontSize:20}}>{focus}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Directrix</Label>
            <Label css={{fontSize:20}}>{directrix}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Principal Axis</Label>
            <Label css={{fontSize:20}}>{principalAxis}</Label>
            <br />
            <Label css={{fontSize:20, fontWeight:"bold"}}>Endpoints of Latus Recta</Label>
            <Label css={{fontSize:20}}>{latusRecta}</Label>
            <br />
        </>
    );
}
