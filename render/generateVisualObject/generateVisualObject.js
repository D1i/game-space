import { oId } from "./store/objectStore";


class GeneratorObjects {
    constructor() {}
    C_OId(objectName) {
    	oId.newOId(objectName);
    	return oId.lastOId();
    }

    D_OId(objectOId) {
        oId.markedOfDelete(oId);
    }

    C_div({color, width, height, border, rotate = 0, rounding = 0}) {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.backgroundColor = color;
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.border = border && `1px solid ${color}`;
        div.style.transformOrigin = "center";
        div.style.transform = `rotate(${rotate}deg)`;

        div.style.rounding = rounding;
        return div;
    }

    C_canvasContainer() {
        const div = document.createElement("div");
        div.style.position = "relative";
        div.style.width = "100%";
        div.style.height = "100vh";
        div.oId = C_VOId("canvasContainer");
        return div;
    }

    C_square(x, y, xSize, ySize, rotate, color, border) {
        const div = C_div({ color, border, width: xSize, height: ySize, rotate });
        div.style.bottom = `${y}px`;
        div.style.left = `${x}px`;
        div.oId = C_OId(div);
        return div;
        //    |НУЖНО СДЕЛАТЬ VIRTUAL_DOM И ДОБАВИТЬ ОПТИМИЗАЦИЮ И ОЧЕРЕДЬ|    //
    }

    C_circle(x, y, radius, color, border) {
    	const div = C_div({color, border, xSize: radius, ySize: radius, rounding: "50%"});
    	div.style.bottom = `${y}px`;
    	div.style.left = `${x}px`;
    	div.oId = C_OId(div);
    	return div;
    	//    |НУЖНО СДЕЛАТЬ VIRTUAL_DOM И ДОБАВИТЬ ОПТИМИЗАЦИЮ И ОЧЕРЕДЬ|    //
    }
}

export const generatorObjects = new GeneratorObjects;
