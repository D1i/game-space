import generateObject from "./generatorObjects"

class level {
    constructor({levelName, levelID, levelHeight, levelWidth}) {
        this.name = levelName;
        this.ID = levelID;
        this.height = levelHeight;
        this.width = levelWidth;
        this.objectList = [];
    }

    ADDObject() {
        let newObject = generateObject(this.objectList);
        return this.objectList.push(newObject);
    }

}