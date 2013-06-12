/// <reference path="typings/moment/moment.d.ts" />

export class CountdownTimer {

    private element: HTMLElement;
    private time: number;
    private interval: number = 1000;
    private timerToken: number;
    private duration: Duration;

    constructor(time: number, element: HTMLElement) {

        this.element = element;
        this.time = time;
        this.duration = moment.duration(time * 1000, 'milliseconds');
    }

    start() {

        this.timerToken = setInterval(() => {

            this.duration = moment.duration(this.duration.asMilliseconds() - this.interval, 'milliseconds');
            this.element.innerText = moment(this.duration.asMilliseconds()).format('h:mm:ss');

        }, this.interval);
    }

    stop() {

        clearTimeout(this.timerToken);
    }
}