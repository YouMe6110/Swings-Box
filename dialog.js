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
        const move = this.target.clone().subtract(this.pos).reduce(FOLLOW_SPEED);
        this.pos.add(move);

        this.centerpos = this.pos.clone().add(this.mousePos);

        this.swingDrag(ctx);

        this.prevPos = this.pos.clone();
    }

    swingDrag(ctx) {
        const dx = this.pos.x - this.prevPos.x;
        const speedX = Math.abs(dx) / FPS;
        const speed = Math.min(Math.max(speedX, 0), 1);

        let rotation = (MAX_ANGLE / 1) * speed;
        rotation = rotation * (dx > 0 ? 1 : -1) - this.sideValue;

        this.rotation += (rotation - this.rotation) * ROTATE_SPEED;
    }
    
    down(point) {
        if (point.collide(this.pos, WIDTH, HEIGHT)) {
            this.isDown = true;
            this.startPos = this.pos.clone();
            this.downPos = point.clone();
            this.mousePos = point.clone().subtract(this.pos);

            const xRatioValue = this.mousePos.x / WIDTH;
            this.origin.x = WIDTH * xRatioValue;
            this.origin.y = HEIGHT * this.mousePos.y / HEIGHT;

            this.sideValue = xRatioValue - 0.5;

            return this;
        } else {
            return null;
        }
    }

    move(point) {
        if (this.isDown) {
            this.target = this.startPos.clone().add(point).subtract(this.downPos);
        }
    }

    up() {
        this.isDown = false;
    }
}