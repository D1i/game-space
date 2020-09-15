import { screen } from "../../elemsList";
import keyboard_WASD from "./controlKeyboard/WASD";

function spectatorControl(controllerType) {
    if (controllerType === "keyboard_WASD") {
        screen.addEventListener(controlKeyboardWASD);
    } else if (controllerType === "keyboard_arrows") {

    } else {
        throw `Ошибка типа управления | ${controllerType}: такого типа управления не существует`;//Потом заменить своими ошибками
    }
}