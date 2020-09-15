import generateHitbox from "generateHitboxObject";
import generatePhysical from "generatePhysicalObject";
import generateTexture from "generateTextureObject";

function generateObject(startingPosition, size, phisicParams, formObject, type) {
    //Используется для генерации полного представления объекта
    //Принимает параметры......
    //Возвращает объект с со свойствами: hitbox, phisic, texture, type.
    //hitbox - Модель объекта с коардинатами (X_GLOBAL, Y_GLOBAL, Z_GLOBAL) объкта, его размерами.
    //phisic - Физическая модель объекта с методами расчета его физических свойств, так же хранит постоянные физические свойства.
    //texture - Набор методов для отображения, сокрытия объекта, информация о его внешнем виде и алгортимы построения его отображения.
    //type - Тип объекта (планета, пододъект, снаряд и т.д.).

    return {
        hitbox: generateHitbox(startingPosition, size, formObject, type),
        phisic:  generatePhysical(phisicParams, size),
        texture: generateTexture(formObject, type),
        startingPosition,
        type,
    }

}

export default generateObject;