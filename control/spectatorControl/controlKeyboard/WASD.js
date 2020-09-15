import Spectator from "../../../observer/spectator";
const spectator = new Spectator;
function WASD(event) {

    switch (event.code) {
        case "KeyW":
            spectator.upwardMovement(1);
            ;
        case "KeyA":
            spectator.movementLeft(1);
            ;
        case "KeyS":
            spectator.downwardMovement(1);
            ;
        case "KeyD":
            spectator.movementRight(1);
            ;

    }
}
export default WASD;