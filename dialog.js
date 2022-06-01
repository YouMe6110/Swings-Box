import { Point } from "./point";

const FOLLOW_SPEED = 0.08;
const ROTATE_SPEED = 0.12;
const SPEED_REDUCE = 0.8;
const MAX_ANGLE = 30;
const FPS = 1000 / 60;
const WIDTH = 260;
const HEIGHT = 260;

export class Dialog {
    constructor() {
        this.pos = new Point();
    }
}