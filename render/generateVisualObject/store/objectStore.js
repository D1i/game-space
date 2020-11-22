class OId_STORE {
	// OBJECT ID
	constructor() {
		this.oIdList = [];
		this.deleteTurn = 0;
	}
	newOId(object) {
		this.oIdList.push({ tag: object, changesList: [] });
	}
	getByOId(oId) {
		return this.oIdList[oId];
	}
	getOIdList() {
		return this.oIdList;
	}
	changeOId(oId, array) {
		this.oIdList[oId].changesList = array;
	}
	changedOId(oId) {
		this.oIdList[oId].changesList = [];
	}
	markedOfDelete(oId) {
		this.oIdList[oId] = null;
		this.deleteTurn++;
	}
	deleteOId() {
		if (this.deleteTurn !== 500) return;
		this.oIdList = this.oIdList.filter( (i) => i !== null );
		this.deleteTurn = 0;
	}
	lastOId() {
		return this.oIdList.length - 1;
	}
};

export const oId = new OId_STORE();
