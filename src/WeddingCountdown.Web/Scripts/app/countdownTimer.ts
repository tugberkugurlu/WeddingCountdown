/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/moment/moment.d.ts" />

export class CountdownTimer {

    private element: HTMLElement;
    private interval: number = 1000;
    private duration: Duration;
    private timerToken: number;

    constructor(eventDate: string, element: HTMLElement) {

        // eventDate: "Fri Aug 09 2013 21:00:00 GMT+0300"

        var eventTime: number = moment(eventDate).unix(),
            currentTime: number = moment().unix(),
            diffTime: number = eventTime - currentTime;

        this.element = element;
        this.duration = moment.duration(diffTime * 1000, 'milliseconds');
    }

    public start() {

        this.timerToken = setInterval(() => {

            this.duration = moment.duration(this.duration.asMilliseconds() - this.interval, 'milliseconds');
            this.element.innerText = this.duration.months() + " " + this.duration.days() + " " + this.duration.hours() + ":" + this.duration.minutes() + ":" + this.duration.seconds();

            if (this.duration.asMilliseconds() <= 0) {

                this.stop();
            }

        }, this.interval);
    }

    private stop() {

        this.element.innerText = "Yay!!!";
        clearTimeout(this.timerToken);
    }
}