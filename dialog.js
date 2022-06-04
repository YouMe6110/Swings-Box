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
        this.target = new Point();
        this.prevPos = new Point();
        this.downpos = new Point();
        this.speedpos = new Point();
        this.startpos = new Point();
        this.mousepos = new Point();
        this.centerpos = new Point();
        this.origin = new Point();
        this.rotation = 0;
        this.sideValue = 0;
        this.isDown = false;
    }

    resizeBy(stageWidth, stageHeight) {
        this.pos.x = Math.random() * (stageWidth - WIDTH);
        this.pos.y = Math.random() * (stageHeight - HEIGHT);
        this.target = this.pos.clone();
        this.prevPos = this.pos.clone();
    }
    
    animate(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#f4e55a';
        ctx.fillRect(this.pos.x, this.pos.y, WIDTH, HEIGHT);
    }

    down(point) {
        if (point.collide(this.pos, WIDTH, HEIGHT)) {
            return this;
        } else {
            return null;
        }
    }

    move(point) {
        
    }
}