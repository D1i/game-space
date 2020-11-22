const desiredFPS = 30;
let timerStated = false;
let timerID = null;

export function initTimer() {
    if (timerStated) {
        return "the timer has already started";
    }
    timerID = setTimeout( renderRequestQueue => {startingRender(renderRequestQueue)}, Math.round(1000 / desiredFPS))
}