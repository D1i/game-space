function initControl(controlledTarget, controllerType) {
    switch (controlledTarget) {
        case "spectator":
            initSpectatorController(controllerType);
            ;
    }
}

export default initControl;