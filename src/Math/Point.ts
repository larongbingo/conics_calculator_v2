export class Point {
    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public x: number;
    public y: number;

    public ToString(): string {
        return  `(${this.x}, ${this.y})`;
    }
}