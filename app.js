let startTime, elapsedTime = 0, interval;
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateTime() {
    const currentTime = Date.now() - startTime + elapsedTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}

startButton.addEventListener('click', () => {
    startTime = Date.now();
    interval = setInterval(updateTime, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    elapsedTime += Date.now() - startTime;
    startButton.disabled = false;
    stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startButton.disabled = false;
    stopButton.disabled = true;
});
