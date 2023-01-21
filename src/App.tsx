import { GraphingCalculator, Expression } from "desmos-react";
import { useState } from "react";
import { EllipseForm } from './Components/EllipseForm';
import { HyperbolaForm } from './Components/HyperbolaForm';
import { ParabolaForm } from './Components/ParabolaForm';
import { Box } from './StyledComponents/Box';
import * as Tabs from "./StyledComponents/Tabs";
import "./styles.css";
import "katex/dist/katex.min.css";

function App() {
    const [expressionLatex, setExpressionLatex] = useState("");

    return (
        <div style={{ position: "relative" }}>

            <div style={{ position: "absolute", width: "100%" }}>
                <GraphingCalculator
                    attributes={{ className: "calculator" }}
                    fontSize={18}
                    expressionsTopbar
                    expressionsCollapsed
                    projectorMode
                    expressions>
                        <Expression latex={expressionLatex} />
                </GraphingCalculator>
            </div>
            <div style={{ position: "absolute" }}>
                <Box>
                    <Tabs.Root defaultValue='parabola'>
                        <Tabs.List>
                            <Tabs.Trigger value='parabola'>Parabola</Tabs.Trigger>
                            <Tabs.Trigger value='ellipse'>Ellipse</Tabs.Trigger>
                            <Tabs.Trigger value='hyperbola'>Hyperbola</Tabs.Trigger>
                        </Tabs.List>

                        <Tabs.Content value='ellipse'>
                            <h2>Ellipse</h2>
                            <EllipseForm expressionsSetter={setExpressionLatex} />
                        </Tabs.Content>

                        <Tabs.Content value='parabola'>
                            <h2>Parabola</h2>
                            <ParabolaForm expressionsSetter={setExpressionLatex} />
                        </Tabs.Content>

                        <Tabs.Content value='hyperbola'>
                            <h2>Hyperbola</h2>
                            <HyperbolaForm expressionsSetter={setExpressionLatex} />
                        </Tabs.Content>
                    </Tabs.Root>
                </Box>
            </div>

        </div>
    );
}

export default App;
