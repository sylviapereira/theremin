var context = new AudioContext(),
    oscillator = null;

// oscillator.connect(context.destination);
//
// oscillator.start(context.currentTime);
//
// oscillator.stop(context.currentTime +1);

document.body.addEventListener('mousedown', function (e) {
  // Mouse has been pressed
  console.log(e.clientX);
  oscillator = context.createOscillator();
  oscillator.frequency.setTargetAtTime(calculateFrequency(e.clientX), context.currentTime, 0.01);
  oscillator.connect(context.destination);
  oscillator.start(context.currentTime);
  });

document.body.addEventListener('mouseup', function () {
  // Mouse has been released
  if (oscillator) {
    oscillator.stop(context.currentTime);
    oscillator.disconnect();
  }
});

var calculateFrequency = function (mouseXPosition) {
  var minFrequency = 20,
    maxFrequency = 2000;

  return ((mouseXPosition / window.innerWidth) * maxFrequency) + minFrequency;
};
