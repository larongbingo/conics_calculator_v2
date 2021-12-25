import { Expression } from "./Expression";
import { Point } from "./Point";
import { simplify } from "mathjs";

export class Ellipse {
    public constructor(h: number, k: number, a: number, b: number, x: number = 1, y: number = 1, isAxisVerticalLine: boolean = false) {
        this.h = h;
        this.k = k;
        this.a = a;
        this.b = b;
        this.y = y;
        this.x = x;
        this.c = Math.sqrt(Math.abs((this.a*this.a) - (this.b*this.b)));
        this.isAxisVerticalLine = isAxisVerticalLine;
    }

    private h: number;
    private k: number;
    private a: number;
    private b: number;
    private x: number;
    private y: number;
    private c: number;
    public isAxisVerticalLine: boolean;

    public Center(): Point {
        return new Point(this.h, this.k);
    }

    public Vertices(): [Point, Point] {
        if (this.isAxisVerticalLine) {
            return [
                new Point(this.h, this.k + this.a),
                new Point(this.h, this.k - this.a)
            ];
        }

        return [
            new Point(this.h + this.a, this.k),
            new Point(this.h - this.a, this.k)
        ];
    }

    public EndpointsOfMinorAxis(): [Point, Point] {
        if (this.isAxisVerticalLine) {
            return [
                new Point(this.h + this.b, this.k),
                new Point(this.h - this.b, this.k)
            ];
        }

        return [
            new Point(this.h, this.k + this.b),
            new Point(this.h, this.k - this.b)
        ];
    }

    public PrincipalAxis(): [number, Expression] {
        let number: number = this.isAxisVerticalLine ? this.h : this.k;
        return this.isAxisVerticalLine 
        ? [number, new Expression(`x = ${number}`)] 
        : [number, new Expression(`y = ${number}`)];
    }

    public LengthOfMajorAxis(): number {
        return this.a * 2;
    }

    public LengthOfMinorAxis(): number {
        return this.b * 2;
    }

    public Foci(): [Point, Point] {
        if (this.isAxisVerticalLine) {
            return [
                new Point(this.h, this.k + this.c),
                new Point(this.h, this.k - this.c)
            ];
        }

        return [
            new Point(this.h + this.c, this.k),
            new Point(this.h - this.c, this.k)
        ];
    }

    public Eccentricity(): number {
        return this.c / this.a;
    }

    public EquationForDirectrices(): [number, number] {
        let e: number = this.Eccentricity();
        let x: number = this.isAxisVerticalLine ? this.k : this.h;
        
        return [
            x + (this.a / e),
            x - (this.a / e)
        ];
    }

    public ToExpression(): Expression {
        if (this.isAxisVerticalLine) 
            return new Expression(simplify(`((${this.y}y - ${this.k})^2)/${this.a*this.a} + ((${this.x}y - ${this.h})^2)/${this.b*this.b} = 1`).toString());
        return new Expression(simplify(`((${this.x}x - ${this.h})^2)/${this.a*this.a} + ((${this.y}y - ${this.k})^2)/${this.b*this.b} = 1`).toString());
    }
}