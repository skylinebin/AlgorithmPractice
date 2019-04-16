/**
 * @author SkylineBin
 * @Time 2019-4-10
 * @function Create a Heap Structure
 */

module.exports = class Heap {
    constructor() {
        // using a Array items to store Heap Datas
        this.items = [];
    }

    poll () {
        return this.items[this.items.length - 1];
    }

}