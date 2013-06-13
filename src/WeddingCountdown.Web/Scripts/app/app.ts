import model = module('countdownTimer');

export class App {

    public run() {

        var element = document.getElementById('content'),
            countdownTimer = new model.CountdownTimer('Fri Aug 09 2013 21:00:00 GMT+0300', element);

        countdownTimer.start();
    }
}