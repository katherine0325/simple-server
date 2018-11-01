const exampleM = require('../schema/example');

class Example {
    constructor() {

    }

    async getList(ctx) {
        return await exampleM.find({}).exec();
    }

}

module.exports = new Example;
