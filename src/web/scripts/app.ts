import model = module('countdownTimer');

var element = document.getElementById('content');
var countdownTimer = new model.CountdownTimer(7200, element);
countdownTimer.start();