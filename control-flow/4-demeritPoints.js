checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    }

    const points = Math.floor((speed - speedLimit) / 5);
    if (points >= 12)
        console.log("License suspended");
    else
        console.log("point:", points);
}