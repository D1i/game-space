import renderRequest from "../../render";

class Spectator {
    constructor() {
        this.X_global_position = 0;
        this.Y_global_position = 0;
        this.Z_global_position = 0;
    }

    upwardMovement(quantityUnits) {
        this.Y_global_position += quantityUnits;
        renderRequest();
    }

    movementLeft(quantityUnits) {
        this.X_global_position -= quantityUnits;
        renderRequest();
    }

    downwardMovement(quantityUnits) {
        this.Y_global_position -= quantityUnits;
        renderRequest();
    }

    movementRight(quantityUnits) {
        this.X_global_position += quantityUnits;
        renderRequest();
    }

    turnClockwise(quantityDeg) {
        this.Z_global_position += quantityDeg;
        renderRequest();
    }

    counterclockwiseRotation(quantityDeg) {
        this.Z_global_position -= quantityDeg;
        renderRequest();
    }
}