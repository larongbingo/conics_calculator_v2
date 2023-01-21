import { Expression } from "./Expression";
import { Point } from "./Point";

export class Parabola {
    public constructor(h: number, k: number, p: number, x: number = 1, y: number = 1, isLeftOrRight: boolean = false) {
        this.h = h;
        this.k = k;
        this.p = p;
        this.x = x;
        this.y = y;
        this.isLeftOrRight = isLeftOrRight;
    }

    private h: number;
    private k: number;
    private p: number;
    private x: number;
    private y: number;
    public isLeftOrRight: boolean;

    private _StringFormat(num: number): string {
        if (num === 0) return "";
        if (num >= 1) return `- ${num}`;
        return `+ ${Math.abs(num)}`;
    }

    public Vertex(): Point {
        return new Point(this.h, this.k);
    }

    public Focus(): Point {
        if (this.isLeftOrRight) return new Point(this.h + this.p, this.k);
        return new Point(this.h, this.k + this.p);
    }

    public Directrix(): [number, Expression] {
        var constant: number;
        var expr: Expression;

        if (this.isLeftOrRight) {
            constant = this.h - this.p;
            expr = new Expression(`x = ${this.h - this.p}`);
        }
        constant = this.k - this.p;
        expr = new Expression(`y = ${this.k - this.p}`);

        return [constant, expr];
    }

    public PrincipalAxis(): Expression {
        if (this.isLeftOrRight) return new Expression(`y = ${this.k}`);
        return new Expression(`x = ${this.h}`);
    }

    public EndpointsOfLatusRecta(): [Point, Point] {
        var kp = this.k+this.p;
        var hp = this.h+this.p;
        if (this.isLeftOrRight) return [new Point(hp, this.k+(2*this.p)), new Point(hp, this.k-(2*this.p))];
        return [new Point(this.h+(2*this.p), kp), new Point(this.h-(2*this.p), kp)];
    }

    public ToExpression(): Expression {
        var yCoefficient: string = this.y === 1 ? "" : String(this.y);
        var xCoefficient: string = this.x === 1 ? "" : String(this.x);
        var pValue: string = String(4 * this.p);
        var negativeH: string = this._StringFormat(this.h);
        var negativeK: string = this._StringFormat(this.k);
        if (this.isLeftOrRight) 
            return new Expression(`(${yCoefficient}y ${negativeK})^2 = ${pValue}(${xCoefficient}x ${negativeH})`);
        return new Expression(`(${xCoefficient}x ${negativeH})^2 = ${pValue}(${yCoefficient}y ${negativeK})`);
    }

    public ToLatexString(): string {
        var yCoefficient: string = this.y === 1 ? "" : String(this.y);
        var xCoefficient: string = this.x === 1 ? "" : String(this.x);
        var pValue: string = String(4 * this.p);
        var negativeH: string = this._StringFormat(this.h);
        var negativeK: string = this._StringFormat(this.k);
        if (this.isLeftOrRight)
            return `(${yCoefficient}y ${negativeK})^2 = ${pValue}(${xCoefficient}x ${negativeH})`;
        return `(${xCoefficient}x ${negativeH})^2 = ${pValue}(${yCoefficient} ${negativeK})`;
    }
}