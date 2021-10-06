import { ECDirection } from "./ecdirection";

export class RoadBlock {

    from: ECDirection;
    to: ECDirection;

    constructor (from: ECDirection, to: ECDirection) {
        this.from = from;
        this.to = to;
    }

    hasDirections(direction_one: ECDirection, direction_two: ECDirection) {
        return (
            (this.from == direction_one || this.from == direction_two)
            &&
            (this.to == direction_one || this.to == direction_two)
        );
    } 
}